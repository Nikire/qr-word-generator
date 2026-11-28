<?php
// Contador de uso. Las páginas del sitio avisan aquí cuando se abre un
// generador, se crea un código, se descarga o se copia el enlace.
// El aviso trae solo la plantilla y la acción; ver lib.php.
declare(strict_types=1);

require __DIR__ . '/lib.php';

header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    exit;
}

// Solo se aceptan avisos enviados desde las páginas del propio sitio.
$host = strtolower((string) preg_replace('/:\d+$/', '', (string) ($_SERVER['HTTP_HOST'] ?? '')));
$sameSite = false;
foreach (['HTTP_ORIGIN', 'HTTP_REFERER'] as $header) {
    $from = strtolower((string) parse_url((string) ($_SERVER[$header] ?? ''), PHP_URL_HOST));
    if ($host !== '' && $from === $host) {
        $sameSite = true;
    }
}
if (!$sameSite) {
    http_response_code(403);
    exit;
}

$data = json_decode((string) file_get_contents('php://input', false, null, 0, 600), true);
$text = static function (string $key) use ($data): string {
    return is_array($data) && is_string($data[$key] ?? null) ? $data[$key] : '';
};
$event = $text('e');
$name = $text('n');
$mode = $text('m');
$format = $text('f');
if (
    !in_array($event, QRWG_EVENTS, true)
    || !preg_match('/^[a-z0-9-]{1,40}$/', $name)
    || !preg_match('/^[a-z0-9_-]{0,40}$/', $mode)
    || !in_array($format, ['', 'png', 'svg'], true)
) {
    http_response_code(400);
    exit;
}

$userAgent = (string) ($_SERVER['HTTP_USER_AGENT'] ?? '');
$dryRun = !empty($data['dry']);
if (!$dryRun && qrwg_is_bot($userAgent)) {
    http_response_code(204);
    exit;
}

$locale = $text('l');
try {
    $pdo = qrwg_db();
    $dayStart = intdiv(time(), 86400) * 86400;
    $today = (int) $pdo->query('SELECT COUNT(*) FROM events WHERE ts >= ' . $dayStart)->fetchColumn();
    if ($today < QRWG_DAILY_CAP) {
        $pdo->beginTransaction();
        $insert = $pdo->prepare(
            'INSERT INTO events (ts, ev, net, mode, loc, lang, fmt, logo, dev) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
        );
        $insert->execute([
            time(),
            $event,
            $name,
            $mode,
            in_array($locale, QRWG_LOCALES, true) ? $locale : '',
            qrwg_browser_lang((string) ($_SERVER['HTTP_ACCEPT_LANGUAGE'] ?? '')),
            $format,
            empty($data['g']) ? 0 : 1,
            preg_match('/Mobi|Android|iPhone|iPad|iPod/i', $userAgent) ? 'm' : 'd',
        ]);
        // «dry» sirve para probar que se puede escribir sin dejar nada guardado.
        $dryRun ? $pdo->rollBack() : $pdo->commit();
    }
} catch (Throwable $error) {
    // Un fallo del contador nunca debe afectar a quien usa el sitio.
    if ($dryRun) {
        http_response_code(500);
        header('Content-Type: application/json');
        echo '{"ok":false}';
        exit;
    }
}

if ($dryRun) {
    header('Content-Type: application/json');
    echo '{"ok":true}';
    exit;
}
http_response_code(204);
