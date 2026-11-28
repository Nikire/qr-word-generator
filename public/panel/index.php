<?php
// Panel privado de estadísticas de uso. Se entra con la clave STATS_KEY
// (secreto del repositorio en GitHub; el deploy solo sube su huella).
declare(strict_types=1);

require dirname(__DIR__) . '/api/lib.php';

header('Cache-Control: no-store, private');
header('X-Robots-Tag: noindex, nofollow');
header('Referrer-Policy: same-origin');
header("Content-Security-Policy: default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'");

function h($value): string
{
    return htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

function num($value): string
{
    return number_format((float) $value, 0, ',', '.');
}

// ---------------------------------------------------------------- Acceso

$self = (string) strtok((string) ($_SERVER['REQUEST_URI'] ?? '/panel/'), '?');
$https = ($_SERVER['HTTPS'] ?? '') === 'on' || ($_SERVER['HTTP_X_FORWARDED_PROTO'] ?? '') === 'https';
$keyHash = (string) (qrwg_config()['key_sha256'] ?? '');
$token = $keyHash !== '' ? hash_hmac('sha256', 'panel', $keyHash) : '';
$cookie = ['path' => $self, 'secure' => $https, 'httponly' => true, 'samesite' => 'Lax'];
$loginError = false;

if (isset($_GET['salir'])) {
    setcookie('qrwg_panel', '', ['expires' => 1] + $cookie);
    header('Location: ' . $self, true, 303);
    exit;
}
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'POST') {
    $typed = trim((string) ($_POST['key'] ?? ''));
    if ($keyHash !== '' && hash_equals($keyHash, hash('sha256', $typed))) {
        setcookie('qrwg_panel', $token, ['expires' => time() + 30 * 86400] + $cookie);
        header('Location: ' . $self, true, 303);
        exit;
    }
    usleep(600000);
    $loginError = true;
}
$logged = $token !== '' && hash_equals($token, (string) ($_COOKIE['qrwg_panel'] ?? ''));

// ----------------------------------------------------------------- Datos

$periods = [1 => 'Hoy', 7 => '7 días', 30 => '30 días', 90 => '90 días', 365 => '12 meses'];
$days = (int) ($_GET['d'] ?? 30);
if (!isset($periods[$days])) {
    $days = 30;
}
$dbError = '';
$view = null;

if ($logged) {
    // Los días se cortan según la zona horaria de quien mira el panel.
    $tz = new DateTimeZone('UTC');
    $tzName = (string) ($_COOKIE['qrwg_tz'] ?? '');
    if (preg_match('~^[A-Za-z_]+(?:/[A-Za-z0-9_+-]+){0,2}$~', $tzName)) {
        try {
            $tz = new DateTimeZone($tzName);
        } catch (Throwable $error) {
            // Zona desconocida: se usa UTC.
        }
    }
    $now = new DateTimeImmutable('now', $tz);
    $offset = $now->getOffset();
    $from = $now->setTime(0, 0)->modify('-' . ($days - 1) . ' days');
    $fromTs = $from->getTimestamp();
    $prevTs = $from->modify('-' . $days . ' days')->getTimestamp();

    try {
        $pdo = qrwg_db();

        if (isset($_GET['csv'])) {
            header('Content-Type: text/csv; charset=utf-8');
            header('Content-Disposition: attachment; filename="qrwg-estadisticas-' . $now->format('Ymd') . '.csv"');
            $out = fopen('php://output', 'w');
            fwrite($out, "\xEF\xBB\xBF");
            fputcsv($out, ['fecha_utc', 'evento', 'plantilla', 'modo', 'idioma_sitio', 'idioma_navegador', 'formato', 'logo_propio', 'dispositivo'], ';', '"', '\\');
            foreach ($pdo->query('SELECT ts, ev, net, mode, loc, lang, fmt, logo, dev FROM events ORDER BY id') as $row) {
                fputcsv($out, [gmdate('Y-m-d H:i:s', (int) $row['ts']), $row['ev'], $row['net'], $row['mode'], $row['loc'], $row['lang'], $row['fmt'], $row['logo'], $row['dev'] === 'm' ? 'movil' : 'escritorio'], ';', '"', '\\');
            }
            exit;
        }

        $query = static function (string $sql, array $params = []) use ($pdo): array {
            $statement = $pdo->prepare($sql);
            $statement->execute($params);
            return $statement->fetchAll(PDO::FETCH_ASSOC);
        };
        $pairs = static function (string $sql, array $params = []) use ($query): array {
            $result = [];
            foreach ($query($sql, $params) as $row) {
                $result[(string) $row['k']] = (int) $row['n'];
            }
            return $result;
        };

        // Serie temporal: por hora si el período es «Hoy», por día en el resto.
        $hourly = $days === 1;
        $months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
        $weekdays = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
        $keys = $short = $long = [];
        if ($hourly) {
            for ($hour = 0; $hour <= (int) $now->format('G'); $hour++) {
                $keys[] = sprintf('%02d', $hour);
                $short[] = $hour . ' h';
                $long[] = 'Hoy, de ' . $hour . ' a ' . ($hour + 1) . ' h';
            }
        } else {
            for ($i = 0; $i < $days; $i++) {
                $day = $from->modify('+' . $i . ' days');
                $keys[] = $day->format('Y-m-d');
                $short[] = $day->format('j') . ' ' . $months[(int) $day->format('n') - 1];
                $long[] = $weekdays[(int) $day->format('w')] . ' ' . $day->format('j') . ' ' . $months[(int) $day->format('n') - 1] . ' ' . $day->format('Y');
            }
        }
        $bucket = $hourly ? "strftime('%H', ts + :off, 'unixepoch')" : "date(ts + :off, 'unixepoch')";
        $series = [];
        foreach (QRWG_EVENTS as $event) {
            $series[$event] = array_fill(0, count($keys), 0);
        }
        $position = array_flip($keys);
        foreach ($query("SELECT $bucket AS b, ev, COUNT(*) AS n FROM events WHERE ts >= :from GROUP BY b, ev", [':off' => $offset, ':from' => $fromTs]) as $row) {
            if (isset($position[$row['b']], $series[$row['ev']])) {
                $series[$row['ev']][$position[$row['b']]] = (int) $row['n'];
            }
        }
        $totals = array_map('array_sum', $series);
        $previous = $pairs('SELECT ev AS k, COUNT(*) AS n FROM events WHERE ts >= :a AND ts < :b GROUP BY ev', [':a' => $prevTs, ':b' => $fromTs]);

        $view = [
            'short' => $short,
            'long' => $long,
            'series' => $series,
            'totals' => $totals,
            'previous' => $previous,
            'templates' => $query(
                "SELECT net,
                    SUM(ev = 'view') AS views, SUM(ev = 'create') AS creates,
                    SUM(ev = 'download') AS downloads, SUM(ev = 'copy') AS copies
                 FROM events WHERE ts >= :from AND ev != 'read'
                 GROUP BY net ORDER BY creates DESC, downloads DESC, views DESC, net",
                [':from' => $fromTs]
            ),
            'locales' => $pairs("SELECT loc AS k, COUNT(*) AS n FROM events WHERE ts >= :from AND ev = 'view' GROUP BY loc ORDER BY n DESC", [':from' => $fromTs]),
            'langs' => $pairs("SELECT lang AS k, COUNT(*) AS n FROM events WHERE ts >= :from AND ev = 'view' GROUP BY lang ORDER BY n DESC LIMIT 10", [':from' => $fromTs]),
            'devices' => $pairs("SELECT dev AS k, COUNT(*) AS n FROM events WHERE ts >= :from AND ev = 'view' GROUP BY dev ORDER BY n DESC", [':from' => $fromTs]),
            'formats' => $pairs("SELECT fmt AS k, COUNT(*) AS n FROM events WHERE ts >= :from AND ev = 'download' GROUP BY fmt ORDER BY n DESC", [':from' => $fromTs]),
            'logos' => $pairs("SELECT logo AS k, COUNT(*) AS n FROM events WHERE ts >= :from AND ev = 'download' AND net = 'url' GROUP BY logo ORDER BY logo DESC", [':from' => $fromTs]),
            'guides' => $pairs("SELECT net AS k, COUNT(*) AS n FROM events WHERE ts >= :from AND ev = 'read' GROUP BY net ORDER BY n DESC LIMIT 12", [':from' => $fromTs]),
            'all' => $query('SELECT COUNT(*) AS n, MIN(ts) AS first, MAX(ts) AS last FROM events')[0],
            'tz' => $tz->getName(),
        ];
    } catch (Throwable $error) {
        $dbError = get_class($error) . ': ' . $error->getMessage();
    }
}

// --------------------------------------------------------------- Dibujo

/** Tope y paso del eje vertical: números redondos. */
function qrwg_axis(int $max): array
{
    if ($max <= 4) {
        return [4, 1];
    }
    for ($power = 1; ; $power *= 10) {
        foreach ([1, 2, 5] as $base) {
            $step = $base * $power;
            if ($step * 4 >= $max) {
                return [(int) (ceil($max / $step) * $step), $step];
            }
        }
    }
}

/** Gráfico de líneas en SVG. Devuelve el marcado y los datos para el cursor. */
function qrwg_chart(array $short, array $long, array $lines): array
{
    $count = count($short);
    $width = 760;
    $height = 250;
    $max = 0;
    foreach ($lines as $line) {
        $max = max($max, max($line['values']));
    }
    [$top, $step] = qrwg_axis($max);
    $left = 16 + 7 * strlen(num($top));
    $right = 44;
    $padTop = 14;
    $plotW = $width - $left - $right;
    $plotH = $height - $padTop - 30;
    $gap = $count > 1 ? $plotW / ($count - 1) : 0;
    $xs = [];
    for ($i = 0; $i < $count; $i++) {
        $xs[] = round($count > 1 ? $left + $i * $gap : $left + $plotW / 2, 1);
    }
    $y = static function ($value) use ($top, $padTop, $plotH): float {
        return round($padTop + $plotH - ($value / $top) * $plotH, 1);
    };

    $svg = '<svg viewBox="0 0 ' . $width . ' ' . $height . '" role="img" tabindex="0" aria-label="Actividad del período. Usa las flechas izquierda y derecha para recorrer los valores.">';
    for ($tick = 0; $tick <= $top; $tick += $step) {
        $svg .= '<line class="' . ($tick === 0 ? 'axis' : 'grid') . '" x1="' . $left . '" x2="' . ($width - $right) . '" y1="' . $y($tick) . '" y2="' . $y($tick) . '"/>';
        $svg .= '<text class="tick" x="' . ($left - 8) . '" y="' . ($y($tick) + 4) . '" text-anchor="end">' . num($tick) . '</text>';
    }
    $every = max(1, (int) ceil($count / 8));
    for ($i = 0; $i < $count; $i += $every) {
        $svg .= '<text class="tick" x="' . $xs[$i] . '" y="' . ($height - 8) . '" text-anchor="middle">' . h($short[$i]) . '</text>';
    }
    $svg .= '<line class="cross" x1="0" x2="0" y1="' . $padTop . '" y2="' . ($padTop + $plotH) . '" style="display:none"/>';

    $ends = [];
    foreach ($lines as $line) {
        $points = [];
        foreach ($line['values'] as $i => $value) {
            $points[] = $xs[$i] . ',' . $y($value);
        }
        // El último tramo llega a un período que todavía no terminó: va atenuado.
        if ($count > 2) {
            $svg .= '<polyline class="line" style="stroke:var(' . $line['color'] . ')" points="' . implode(' ', array_slice($points, 0, -1)) . '"/>';
        }
        if ($count > 1) {
            $svg .= '<polyline class="line partial" style="stroke:var(' . $line['color'] . ')" points="' . implode(' ', array_slice($points, -2)) . '"/>';
        }
        $last = $line['values'][$count - 1];
        $svg .= '<circle class="dot" style="fill:var(' . $line['color'] . ')" cx="' . $xs[$count - 1] . '" cy="' . $y($last) . '" r="4"/>';
        $ends[] = ['y' => $y($last), 'value' => $last];
    }
    // El valor del último punto se rotula solo si los rótulos no se pisan.
    $sorted = array_column($ends, 'y');
    sort($sorted);
    $room = true;
    for ($i = 1; $i < count($sorted); $i++) {
        $room = $room && $sorted[$i] - $sorted[$i - 1] >= 14;
    }
    if ($room) {
        foreach ($ends as $end) {
            $svg .= '<text class="end" x="' . ($xs[$count - 1] + 10) . '" y="' . ($end['y'] + 4) . '">' . num($end['value']) . '</text>';
        }
    }
    foreach ($lines as $line) {
        $svg .= '<circle class="dot hover-dot" style="fill:var(' . $line['color'] . ');display:none" r="4"/>';
    }
    $svg .= '</svg>';

    return [$svg, [
        'n' => $count, 'w' => $width, 'left' => $left, 'gap' => $gap, 'top' => $padTop, 'h' => $plotH, 'max' => $top,
        'xs' => $xs, 'labels' => $long,
        'series' => array_map(static function ($line) {
            return ['name' => $line['name'], 'color' => $line['color'], 'values' => $line['values']];
        }, $lines),
    ]];
}

/** Lista de barras: una fila por categoría con su parte del total. */
function qrwg_meters(array $rows, string $color, string $empty = 'Sin datos en este período.'): string
{
    $total = array_sum($rows);
    if ($total === 0) {
        return '<p class="empty">' . h($empty) . '</p>';
    }
    $html = '<ul class="meters">';
    foreach ($rows as $label => $n) {
        $share = $n / $total * 100;
        $html .= '<li><span class="meter-name">' . h($label) . '</span>'
            . '<span class="meter-track" style="background:var(' . $color . '-track)"><span style="width:' . round($share, 1) . '%;background:var(' . $color . ')"></span></span>'
            . '<span class="meter-value"><strong>' . num($n) . '</strong> · ' . round($share) . ' %</span></li>';
    }
    return $html . '</ul>';
}

/** Cambia las claves de una lista por rótulos legibles. */
function qrwg_relabel(array $rows, callable $label): array
{
    $result = [];
    foreach ($rows as $key => $n) {
        $name = (string) $label((string) $key);
        $result[$name] = ($result[$name] ?? 0) + $n;
    }
    return $result;
}

$localeNames = ['es' => 'Español', 'en' => 'English', 'pt' => 'Português', 'fr' => 'Français', 'it' => 'Italiano'];
$langName = static function (string $code): string {
    if ($code === '') {
        return 'Sin dato';
    }
    $name = class_exists('Locale') ? (string) Locale::getDisplayName($code, 'es') : '';
    return $name !== '' && $name !== $code ? mb_strtoupper(mb_substr($name, 0, 1)) . mb_substr($name, 1) . ' · ' . $code : $code;
};

$title = 'Estadísticas · QR Word Generator';
?>
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title><?= h($title) ?></title>
<script>
  // Mismo tema (claro u oscuro) que el resto del sitio.
  (function () {
    var theme;
    try { theme = localStorage.getItem('theme'); } catch (e) {}
    if (theme === 'light' || theme === 'dark') document.documentElement.dataset.theme = theme;
  })();
</script>
<style>
  :root {
    color-scheme: light;
    --bg: #f4f7f5; --surface: #ffffff; --text: #111b21; --muted: #5b6b73; --border: #dbe3df;
    --grid: #e6ecea; --axis: #c2cbc7; --accent: #128c4a; --on-accent: #ffffff;
    --s1: #257de0; --s2: #f47230; --s3: #00b894;
    --s1-track: #cce3fd; --s2-track: #fde3d6; --s3-track: #ccf1ea;
    --good: #006c10; --bad: #b3261e;
  }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme='light']) {
      color-scheme: dark;
      --bg: #0b141a; --surface: #131f26; --text: #e9edef; --muted: #9fb0b8; --border: #2a3a43;
      --grid: #1f2e37; --axis: #3a4b55; --accent: #25d366; --on-accent: #06301a;
      --s1: #338ced; --s2: #e76624; --s3: #00a888;
      --s1-track: #17324f; --s2-track: #4a2a1a; --s3-track: #0f3a34;
      --good: #53c556; --bad: #ff8a7a;
    }
  }
  :root[data-theme='dark'] {
    color-scheme: dark;
    --bg: #0b141a; --surface: #131f26; --text: #e9edef; --muted: #9fb0b8; --border: #2a3a43;
    --grid: #1f2e37; --axis: #3a4b55; --accent: #25d366; --on-accent: #06301a;
    --s1: #338ced; --s2: #e76624; --s3: #00a888;
    --s1-track: #17324f; --s2-track: #4a2a1a; --s3-track: #0f3a34;
    --good: #53c556; --bad: #ff8a7a;
  }
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; background: var(--bg); color: var(--text); font: 15px/1.5 system-ui, -apple-system, 'Segoe UI', sans-serif; }
  a { color: inherit; }
  main { max-width: 1080px; margin: 0 auto; padding: 28px 16px 56px; }
  h1 { margin: 0; font-size: 1.45rem; line-height: 1.2; }
  h2 { margin: 0 0 14px; font-size: 1.05rem; }
  .muted, .empty { color: var(--muted); }
  .empty { margin: 0; }
  .top { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; }
  .top nav { display: flex; gap: 16px; font-size: 0.92rem; }
  .filters { display: flex; flex-wrap: wrap; gap: 8px; margin: 20px 0; }
  .filters a { padding: 7px 14px; background: var(--surface); border: 1px solid var(--border); border-radius: 999px; font-weight: 600; font-size: 0.92rem; text-decoration: none; }
  .filters a[aria-current] { background: var(--accent); border-color: var(--accent); color: var(--on-accent); }
  .card { min-width: 0; padding: 20px; background: var(--surface); border: 1px solid var(--border); border-radius: 16px; }
  .tiles { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 12px; }
  .tile { padding: 16px 18px; }
  .tile-label { color: var(--muted); font-size: 0.88rem; }
  .tile-value { margin-top: 4px; font-size: 1.9rem; font-weight: 650; line-height: 1.15; }
  .tile-delta { margin-top: 4px; color: var(--muted); font-size: 0.82rem; }
  .tile-delta .up { color: var(--good); font-weight: 600; }
  .tile-delta .down { color: var(--bad); font-weight: 600; }
  .stack { display: grid; grid-template-columns: minmax(0, 1fr); gap: 12px; margin-top: 12px; }
  .cols { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 12px; }
  .legend { display: flex; flex-wrap: wrap; gap: 6px 20px; margin: 0 0 8px; padding: 0; list-style: none; color: var(--muted); font-size: 0.9rem; }
  .legend strong { color: var(--text); }
  .key { display: inline-block; width: 14px; height: 2px; margin-right: 6px; border-radius: 2px; vertical-align: middle; }
  .chart-scroll { overflow-x: auto; }
  .chart { position: relative; min-width: 560px; }
  .chart svg { display: block; width: 100%; height: auto; overflow: visible; outline-offset: 4px; }
  .grid { stroke: var(--grid); stroke-width: 1; }
  .axis { stroke: var(--axis); stroke-width: 1; }
  .cross { stroke: var(--axis); stroke-width: 1; }
  .tick { fill: var(--muted); font-size: 11px; font-variant-numeric: tabular-nums; }
  .end { fill: var(--text); font-size: 12px; font-weight: 600; }
  .line { fill: none; stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
  .line.partial { opacity: 0.4; }
  .dot { stroke: var(--surface); stroke-width: 2; }
  .tip { position: absolute; top: 8px; display: none; min-width: 150px; padding: 10px 12px; background: var(--surface); border: 1px solid var(--border); border-radius: 10px; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14); font-size: 0.86rem; pointer-events: none; }
  .tip-title { margin-bottom: 4px; color: var(--muted); }
  .tip-row { display: flex; align-items: center; gap: 2px; }
  .tip-row strong { min-width: 28px; margin-right: 6px; font-variant-numeric: tabular-nums; }
  .tip-row span:last-child { color: var(--muted); }
  details { margin-top: 12px; }
  summary { color: var(--muted); font-size: 0.9rem; cursor: pointer; }
  .scroll { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; font-size: 0.92rem; }
  th, td { padding: 8px 10px; border-bottom: 1px solid var(--grid); text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
  th { color: var(--muted); font-weight: 600; font-size: 0.85rem; }
  th:first-child, td:first-child { padding-left: 0; text-align: left; }
  tr:last-child td { border-bottom: 0; }
  td.bar { width: 34%; min-width: 120px; }
  .bar-track { display: block; height: 8px; border-radius: 0 4px 4px 0; }
  .bar-track span { display: block; height: 100%; border-radius: 0 4px 4px 0; }
  .meters { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }
  .meters li { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 4px 12px; align-items: baseline; }
  .meter-name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .meter-value { color: var(--muted); font-size: 0.88rem; font-variant-numeric: tabular-nums; }
  .meter-value strong { color: var(--text); }
  .meter-track { grid-column: 1 / -1; height: 8px; border-radius: 999px; overflow: hidden; }
  .meter-track span { display: block; height: 100%; border-radius: 999px; }
  .sub { margin: 18px 0 10px; color: var(--muted); font-size: 0.88rem; font-weight: 600; }
  .foot { margin-top: 20px; color: var(--muted); font-size: 0.86rem; }
  .foot p { margin: 0 0 6px; }
  button, .button { padding: 9px 16px; background: var(--accent); border: 0; border-radius: 10px; color: var(--on-accent); font: inherit; font-weight: 600; cursor: pointer; }
  button.link { padding: 0; background: none; color: inherit; font-weight: 400; text-decoration: underline; }
  .login { max-width: 380px; margin: 12vh auto 0; }
  .login label { display: block; margin: 18px 0 6px; font-weight: 600; }
  .login input { width: 100%; padding: 11px 12px; background: var(--bg); border: 1px solid var(--border); border-radius: 10px; color: var(--text); font: inherit; }
  .login button { width: 100%; margin-top: 14px; }
  .error { margin: 12px 0 0; color: var(--bad); }
</style>
</head>
<body>
<main>
<?php if (!$logged) : ?>
  <form class="card login" method="post" action="<?= h($self) ?>">
    <h1>Estadísticas</h1>
    <p class="muted">QR Word Generator</p>
    <?php if ($keyHash === '') : ?>
      <p class="error">El panel todavía no tiene una clave configurada. Hay que definir el secreto STATS_KEY en el repositorio y volver a publicar.</p>
    <?php else : ?>
      <label for="key">Clave del panel</label>
      <input id="key" name="key" type="password" autocomplete="current-password" required autofocus>
      <button type="submit">Entrar</button>
      <?php if ($loginError) : ?><p class="error" role="alert">La clave no es correcta.</p><?php endif; ?>
    <?php endif; ?>
  </form>
<?php else : ?>
  <script>
    // La zona horaria del navegador decide dónde empieza y termina cada día.
    (function () {
      try {
        var zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (zone && document.cookie.indexOf('qrwg_tz=' + encodeURIComponent(zone)) < 0) {
          document.cookie = 'qrwg_tz=' + encodeURIComponent(zone) + '; path=<?= h($self) ?>; max-age=31536000; samesite=lax';
          if (document.cookie.indexOf('qrwg_tz=') >= 0) location.reload();
        }
      } catch (e) {}
    })();
  </script>
  <header class="top">
    <div>
      <h1>Estadísticas de uso</h1>
      <span class="muted">QR Word Generator</span>
    </div>
    <nav>
      <a href="?csv=1">Descargar todo en CSV</a>
      <a href="?salir=1">Salir</a>
    </nav>
  </header>

  <nav class="filters" aria-label="Período">
    <?php foreach ($periods as $value => $label) : ?>
      <a href="?d=<?= $value ?>"<?= $value === $days ? ' aria-current="true"' : '' ?>><?= h($label) ?></a>
    <?php endforeach; ?>
  </nav>

  <?php if ($dbError !== '') : ?>
    <p class="card error">No se pudo abrir la base de datos: <?= h($dbError) ?></p>
  <?php else :
      $totals = $view['totals'];
      $previous = $view['previous'];
      $compare = 'los ' . $days . ' días anteriores';
      $delta = static function (string $event) use ($totals, $previous, $compare, $days): string {
          $before = $previous[$event] ?? 0;
          // Sin comparación para «Hoy» (día incompleto) ni con una base demasiado chica.
          if ($days === 1 || $before < 10) {
              return '';
          }
          $change = (int) round(($totals[$event] - $before) / $before * 100);
          $mark = $change >= 0 ? '<span class="up">▲ ' . num($change) . ' %</span>' : '<span class="down">▼ ' . num(abs($change)) . ' %</span>';
          return '<div class="tile-delta">' . $mark . ' frente a ' . h($compare) . '</div>';
      };
      $rate = $totals['view'] > 0 ? num(round($totals['create'] / $totals['view'] * 100)) : '—';
      $tiles = [
          ['Visitas a generadores', num($totals['view']), $delta('view')],
          ['Códigos creados', num($totals['create']), $delta('create')],
          ['Descargas', num($totals['download']), $delta('download')],
          ['Enlaces copiados', num($totals['copy']), $delta('copy')],
          ['Códigos creados cada 100 visitas', $rate, ''],
      ];
      $lines = [
          ['name' => 'Visitas', 'color' => '--s1', 'values' => $view['series']['view']],
          ['name' => 'Códigos creados', 'color' => '--s2', 'values' => $view['series']['create']],
          ['name' => 'Descargas', 'color' => '--s3', 'values' => $view['series']['download']],
      ];
      [$chartSvg, $chartData] = qrwg_chart($view['short'], $view['long'], $lines);
      $unit = $days === 1 ? 'hora' : 'día';
      $maxCreates = 0;
      foreach ($view['templates'] as $row) {
          $maxCreates = max($maxCreates, (int) $row['creates']);
      }
      $shown = array_slice($view['templates'], 0, 20);
      $logoYes = $view['logos']['1'] ?? 0;
      $logoTotal = array_sum($view['logos']);
  ?>
    <section class="tiles">
      <?php foreach ($tiles as [$label, $value, $extra]) : ?>
        <div class="card tile">
          <div class="tile-label"><?= h($label) ?></div>
          <div class="tile-value"><?= h($value) ?></div>
          <?= $extra ?>
        </div>
      <?php endforeach; ?>
    </section>

    <div class="stack">
      <section class="card">
        <h2>Actividad por <?= $unit ?></h2>
        <ul class="legend">
          <?php foreach ($lines as $line) : ?>
            <li><span class="key" style="background:var(<?= $line['color'] ?>)"></span><?= h($line['name']) ?> <strong><?= num(array_sum($line['values'])) ?></strong></li>
          <?php endforeach; ?>
        </ul>
        <div class="chart-scroll">
          <div class="chart" id="chart">
            <?= $chartSvg ?>
            <div class="tip" role="status"></div>
          </div>
        </div>
        <p class="foot">El último punto es <?= $days === 1 ? 'la hora' : 'el día' ?> en curso, todavía incompleto.</p>
        <script type="application/json" id="chart-data"><?= json_encode($chartData, JSON_HEX_TAG | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE) ?></script>
        <details>
          <summary>Ver los números en una tabla</summary>
          <div class="scroll">
            <table>
              <thead><tr><th><?= ucfirst($unit) ?></th><th>Visitas</th><th>Códigos creados</th><th>Descargas</th><th>Enlaces copiados</th></tr></thead>
              <tbody>
                <?php for ($i = count($view['long']) - 1; $i >= 0; $i--) : ?>
                  <tr>
                    <td><?= h($view['long'][$i]) ?></td>
                    <td><?= num($view['series']['view'][$i]) ?></td>
                    <td><?= num($view['series']['create'][$i]) ?></td>
                    <td><?= num($view['series']['download'][$i]) ?></td>
                    <td><?= num($view['series']['copy'][$i]) ?></td>
                  </tr>
                <?php endfor; ?>
              </tbody>
            </table>
          </div>
        </details>
      </section>

      <section class="card">
        <h2>Plantillas más usadas</h2>
        <?php if (!$shown) : ?>
          <p class="empty">Todavía no hay actividad en este período.</p>
        <?php else : ?>
          <div class="scroll">
            <table>
              <thead><tr><th>Plantilla</th><th>Visitas</th><th>Códigos creados</th><th aria-hidden="true"></th><th>Descargas</th><th>Enlaces copiados</th></tr></thead>
              <tbody>
                <?php foreach ($shown as $row) : ?>
                  <tr>
                    <td><?= h($row['net']) ?></td>
                    <td><?= num($row['views']) ?></td>
                    <td><?= num($row['creates']) ?></td>
                    <td class="bar"><span class="bar-track"><span style="width:<?= $maxCreates > 0 ? round((int) $row['creates'] / $maxCreates * 100, 1) : 0 ?>%;background:var(--s2)"></span></span></td>
                    <td><?= num($row['downloads']) ?></td>
                    <td><?= num($row['copies']) ?></td>
                  </tr>
                <?php endforeach; ?>
              </tbody>
            </table>
          </div>
          <?php if (count($view['templates']) > count($shown)) : ?>
            <p class="foot">Se muestran las 20 primeras de <?= count($view['templates']) ?> plantillas con actividad. El CSV las trae todas.</p>
          <?php endif; ?>
        <?php endif; ?>
      </section>

      <div class="cols">
        <section class="card">
          <h2>Idioma del sitio</h2>
          <?= qrwg_meters(qrwg_relabel($view['locales'], static function ($code) use ($localeNames) { return $localeNames[$code] ?? 'Sin dato'; }), '--s1') ?>
        </section>
        <section class="card">
          <h2>Idioma del navegador</h2>
          <?= qrwg_meters(qrwg_relabel($view['langs'], $langName), '--s1') ?>
          <p class="foot">Es el idioma configurado en el navegador de cada visita; sirve como pista del país, no como ubicación exacta.</p>
        </section>
        <section class="card">
          <h2>Dispositivo</h2>
          <?= qrwg_meters(qrwg_relabel($view['devices'], static function ($code) { return $code === 'm' ? 'Teléfono o tableta' : 'Computadora'; }), '--s1') ?>
        </section>
        <section class="card">
          <h2>Descargas</h2>
          <?= qrwg_meters(qrwg_relabel($view['formats'], static function ($code) { return strtoupper($code ?: 'Sin dato'); }), '--s3', 'Todavía no hay descargas en este período.') ?>
          <?php if ($logoTotal > 0) : ?>
            <p class="sub">Logo propio en la plantilla de URL personalizada</p>
            <?= qrwg_meters(['Con logo propio' => $logoYes, 'Sin logo' => $logoTotal - $logoYes], '--s3') ?>
          <?php endif; ?>
        </section>
        <section class="card">
          <h2>Guías leídas</h2>
          <?= qrwg_meters(qrwg_relabel($view['guides'], static function ($id) { return $id === 'index' ? 'Índice de guías' : $id; }), '--s1', 'Todavía no hay lecturas en este período.') ?>
        </section>
      </div>
    </div>

    <footer class="foot">
      <p>
        <?php if ((int) $view['all']['n'] === 0) : ?>
          Todavía no se registró ningún evento. Los conteos empiezan cuando alguien abre el sitio después de publicada esta función.
        <?php else : ?>
          <?= num($view['all']['n']) ?> eventos guardados desde el <?= h((new DateTimeImmutable('@' . (int) $view['all']['first']))->setTimezone(new DateTimeZone($view['tz']))->format('d/m/Y')) ?>.
          Último: <?= h((new DateTimeImmutable('@' . (int) $view['all']['last']))->setTimezone(new DateTimeZone($view['tz']))->format('d/m/Y H:i')) ?> (<?= h($view['tz']) ?>).
        <?php endif; ?>
        Base de datos <?= qrwg_data_is_outside() ? 'fuera de la carpeta pública' : 'en api/data, sin acceso desde la web' ?>.
      </p>
      <p>Solo se cuentan acciones: nunca se guarda lo que la gente escribe, el contenido de los códigos, los logos ni la dirección IP.</p>
      <p id="owner"></p>
    </footer>

    <script>
      // Las visitas hechas desde el navegador de quien administra no se cuentan.
      (function () {
        var box = document.getElementById('owner');
        function draw() {
          var off;
          try { off = localStorage.getItem('qrwg-owner') === '1'; } catch (e) { return; }
          box.textContent = off
            ? 'Tus propias visitas desde este navegador no se cuentan. '
            : 'Tus visitas desde este navegador se están contando. ';
          var button = document.createElement('button');
          button.type = 'button';
          button.className = 'link';
          button.textContent = off ? 'Contarlas también' : 'Dejar de contarlas';
          button.onclick = function () {
            try { localStorage.setItem('qrwg-owner', off ? '0' : '1'); } catch (e) {}
            draw();
          };
          box.appendChild(button);
        }
        try { if (localStorage.getItem('qrwg-owner') === null) localStorage.setItem('qrwg-owner', '1'); } catch (e) {}
        draw();
      })();

      // Cursor del gráfico: una línea vertical y los valores de ese punto.
      (function () {
        var box = document.getElementById('chart');
        if (!box) return;
        var data = JSON.parse(document.getElementById('chart-data').textContent);
        var svg = box.querySelector('svg');
        var tip = box.querySelector('.tip');
        var cross = svg.querySelector('.cross');
        var dots = svg.querySelectorAll('.hover-dot');
        var index = -1;

        function show(i) {
          index = Math.max(0, Math.min(data.n - 1, i));
          var x = data.xs[index];
          cross.setAttribute('x1', x);
          cross.setAttribute('x2', x);
          cross.style.display = '';
          tip.textContent = '';
          var title = document.createElement('div');
          title.className = 'tip-title';
          title.textContent = data.labels[index];
          tip.appendChild(title);
          data.series.forEach(function (serie, k) {
            var value = serie.values[index];
            dots[k].setAttribute('cx', x);
            dots[k].setAttribute('cy', data.top + data.h - (value / data.max) * data.h);
            dots[k].style.display = '';
            var row = document.createElement('div');
            row.className = 'tip-row';
            var key = document.createElement('span');
            key.className = 'key';
            key.style.background = 'var(' + serie.color + ')';
            var number = document.createElement('strong');
            number.textContent = value.toLocaleString('es');
            var name = document.createElement('span');
            name.textContent = serie.name;
            row.appendChild(key);
            row.appendChild(number);
            row.appendChild(name);
            tip.appendChild(row);
          });
          tip.style.display = 'block';
          var width = svg.getBoundingClientRect().width;
          var px = x * width / data.w;
          tip.style.left = (px + 14 + tip.offsetWidth > width ? px - 14 - tip.offsetWidth : px + 14) + 'px';
        }

        function hide() {
          index = -1;
          cross.style.display = 'none';
          tip.style.display = 'none';
          dots.forEach(function (dot) { dot.style.display = 'none'; });
        }

        svg.addEventListener('pointermove', function (event) {
          var rect = svg.getBoundingClientRect();
          var x = (event.clientX - rect.left) * data.w / rect.width;
          show(data.gap > 0 ? Math.round((x - data.left) / data.gap) : 0);
        });
        svg.addEventListener('pointerleave', hide);
        svg.addEventListener('focus', function () { show(index < 0 ? data.n - 1 : index); });
        svg.addEventListener('blur', hide);
        svg.addEventListener('keydown', function (event) {
          if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
          event.preventDefault();
          show((index < 0 ? data.n - 1 : index) + (event.key === 'ArrowLeft' ? -1 : 1));
        });
      })();
    </script>
  <?php endif; ?>
<?php endif; ?>
</main>
</body>
</html>
