<?php
// Piezas comunes del contador de uso (c.php) y del panel (/panel/).
// Se guardan solo conteos anónimos: nunca lo que la persona escribe, el
// contenido del código, el logo, la dirección IP ni identificadores.
declare(strict_types=1);

const QRWG_EVENTS = ['view', 'create', 'download', 'copy', 'read'];
const QRWG_LOCALES = ['es', 'en', 'pt', 'fr', 'it'];
/** Tope de eventos por día: evita que un abuso llene el disco. */
const QRWG_DAILY_CAP = 20000;

/**
 * Carpeta de la base de datos. Va un nivel arriba de la carpeta pública si el
 * servidor lo permite; si no, en api/data/, que .htaccess deja inaccesible.
 */
function qrwg_data_dir(): string
{
    $root = rtrim((string) ($_SERVER['DOCUMENT_ROOT'] ?? ''), '/\\');
    $parent = $root !== '' ? dirname($root) : '';
    if ($parent !== '' && $parent !== $root) {
        $outside = $parent . '/qrwg-data';
        if ((@is_dir($outside) || @mkdir($outside, 0700)) && @is_writable($outside)) {
            return $outside;
        }
    }
    $inside = __DIR__ . '/data';
    if (!@is_dir($inside)) {
        @mkdir($inside, 0700);
    }
    if (!@is_file($inside . '/.htaccess')) {
        @file_put_contents($inside . '/.htaccess', "Require all denied\n");
    }
    return $inside;
}

/** ¿La base de datos quedó fuera de la carpeta pública? */
function qrwg_data_is_outside(): bool
{
    return strpos(qrwg_data_dir(), __DIR__) !== 0;
}

function qrwg_db(): PDO
{
    $pdo = new PDO('sqlite:' . qrwg_data_dir() . '/stats.sqlite');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_TIMEOUT, 3);
    $pdo->exec(
        "CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY,
            ts INTEGER NOT NULL,
            ev TEXT NOT NULL,
            net TEXT NOT NULL DEFAULT '',
            mode TEXT NOT NULL DEFAULT '',
            loc TEXT NOT NULL DEFAULT '',
            lang TEXT NOT NULL DEFAULT '',
            fmt TEXT NOT NULL DEFAULT '',
            logo INTEGER NOT NULL DEFAULT 0,
            dev TEXT NOT NULL DEFAULT ''
        )"
    );
    $pdo->exec('CREATE INDEX IF NOT EXISTS events_ts ON events (ts)');
    return $pdo;
}

/** Configuración que escribe el deploy (huella de la clave del panel). */
function qrwg_config(): array
{
    $file = __DIR__ . '/config.php';
    return is_file($file) ? (array) require $file : [];
}

/** Primer idioma de la cabecera Accept-Language, por ejemplo «es-MX». */
function qrwg_browser_lang(string $header): string
{
    if (!preg_match('/^\s*([a-zA-Z]{2,3})(?:-([a-zA-Z0-9]{2,4}))?/', $header, $m)) {
        return '';
    }
    $lang = strtolower($m[1]);
    return isset($m[2]) && $m[2] !== '' ? $lang . '-' . strtoupper($m[2]) : $lang;
}

/** Programas automáticos que no deben contarse como visitas. */
function qrwg_is_bot(string $userAgent): bool
{
    return $userAgent === '' || preg_match(
        '~bot|crawl|spider|slurp|headless|lighthouse|pagespeed|gtmetrix|pingdom|uptime|monitor|mediapartners|googleother|google-inspectiontool|phantom|selenium|puppeteer|playwright|curl|wget|python|scrapy|okhttp|go-http~i',
        $userAgent
    ) === 1;
}
