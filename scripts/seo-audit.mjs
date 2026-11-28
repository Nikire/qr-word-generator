// Revisión de SEO sobre el sitio ya construido (carpeta dist).
// Uso: npm run build && npm run seo
// Recorre todas las páginas y avisa de títulos, descripciones, canónicas, hreflang,
// encabezados, datos estructurados, enlaces internos, mapa del sitio y texto escaso.
// Termina con código 1 si hay errores (los avisos no cortan).
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_URL } from '../site.config.mjs';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const SITE = SITE_URL.replace(/\/$/, '');
const LOCALES = ['es', 'en', 'pt', 'fr', 'it'];
const DEFAULT_LOCALE = 'es';
const LIMITS = { titleMin: 25, titleMax: 65, descMin: 70, descMax: 160, words: 250 };
const VERBOSE = process.argv.includes('--todo');

if (!existsSync(DIST)) {
  console.error('No existe dist/. Ejecuta primero: npm run build');
  process.exit(1);
}

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });

const decode = (text) =>
  text
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&#x27;|&apos;/g, "'")
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ');
const attr = (tag, name) => {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  return m ? decode(m[2] ?? m[3] ?? m[4] ?? '') : null;
};
const tags = (html, name) => html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? [];
const textOf = (html) =>
  decode(
    html
      .replace(/<(script|style|svg|noscript|template|select)\b[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  ).replace(/\s+/g, ' ').trim();

// ---------- lectura de páginas ----------
const pages = new Map(); // ruta ("/whatsapp/") -> datos
for (const file of walk(DIST)) {
  if (!file.endsWith('.html')) continue;
  const rel = relative(DIST, file).split(sep).join('/');
  if (rel === '404.html') continue;
  const path = '/' + rel.replace(/index\.html$/, '');
  const html = readFileSync(file, 'utf8');
  const head = html.slice(0, html.indexOf('</head>'));
  const metas = tags(head, 'meta');
  const meta = (key) => {
    const tag = metas.find((t) => attr(t, 'name') === key || attr(t, 'property') === key);
    return tag ? attr(tag, 'content') : null;
  };
  const links = tags(head, 'link');
  const main = html.match(/<main\b[\s\S]*<\/main>/i)?.[0] ?? html;
  const first = path.split('/')[1];
  pages.set(path, {
    path,
    html,
    locale: LOCALES.includes(first) && first !== DEFAULT_LOCALE ? first : DEFAULT_LOCALE,
    lang: attr(tags(html, 'html')[0] ?? '', 'lang'),
    title: decode(head.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim(),
    description: meta('description'),
    robots: meta('robots') ?? '',
    viewport: meta('viewport'),
    og: { title: meta('og:title'), description: meta('og:description'), image: meta('og:image'), url: meta('og:url') },
    canonical: attr(links.find((t) => attr(t, 'rel') === 'canonical') ?? '', 'href'),
    alternates: links
      .filter((t) => attr(t, 'rel') === 'alternate' && attr(t, 'hreflang'))
      .map((t) => ({ lang: attr(t, 'hreflang'), href: attr(t, 'href') })),
    headings: [...html.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)].map((m) => ({ level: Number(m[1]), text: textOf(m[2]) })),
    images: tags(html, 'img'),
    anchors: tags(html, 'a').map((t) => attr(t, 'href')).filter((href) => href !== null),
    jsonld: [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]),
    words: textOf(main).split(' ').filter(Boolean).length,
    mainText: textOf(main),
    inbound: 0,
  });
}

// ---------- registro ----------
const issues = []; // { level, rule, path, detail }
const add = (level, rule, path, detail = '') => issues.push({ level, rule, path, detail });
const error = (rule, path, detail) => add('error', rule, path, detail);
const warn = (rule, path, detail) => add('aviso', rule, path, detail);

const toPath = (href) => {
  if (href.startsWith(SITE)) href = href.slice(SITE.length) || '/';
  if (!href.startsWith('/') || href.startsWith('//')) return null;
  return href.split('#')[0].split('?')[0];
};
const fileExists = (path) => existsSync(join(DIST, path)) && statSync(join(DIST, path)).isFile();

// ---------- reglas por página ----------
const indexable = [...pages.values()].filter((p) => !/noindex/i.test(p.robots));
for (const page of pages.values()) {
  const { path } = page;
  const noindex = /noindex/i.test(page.robots);

  if (!page.lang) error('html-lang', path, 'falta el atributo lang');
  else if (page.lang.split('-')[0] !== page.locale) error('html-lang', path, `lang="${page.lang}" en una ruta de "${page.locale}"`);
  if (!page.viewport) error('viewport', path, 'falta la etiqueta viewport');

  if (!page.title) error('titulo', path, 'falta el título');
  else if (!noindex) {
    if (page.title.length > LIMITS.titleMax) warn('titulo-largo', path, `${page.title.length} caracteres: ${page.title}`);
    if (page.title.length < LIMITS.titleMin) warn('titulo-corto', path, `${page.title.length} caracteres: ${page.title}`);
  }
  if (!page.description) error('descripcion', path, 'falta la descripción');
  else if (!noindex) {
    if (page.description.length > LIMITS.descMax) warn('descripcion-larga', path, `${page.description.length} caracteres`);
    if (page.description.length < LIMITS.descMin) warn('descripcion-corta', path, `${page.description.length} caracteres: ${page.description}`);
  }

  if (!noindex) {
    if (!page.canonical) error('canonica', path, 'falta la URL canónica');
    else if (page.canonical !== SITE + path) error('canonica', path, `apunta a ${page.canonical}`);

    const langs = page.alternates.map((a) => a.lang);
    if (!page.alternates.length) warn('hreflang', path, 'sin alternativas de idioma');
    else {
      if (!langs.includes('x-default')) warn('hreflang', path, 'falta x-default');
      if (!page.alternates.some((a) => a.lang === page.locale && a.href === SITE + path)) error('hreflang', path, 'no se incluye a sí misma');
      if (new Set(langs).size !== langs.length) error('hreflang', path, 'idiomas repetidos');
      for (const alt of page.alternates) {
        const target = pages.get(toPath(alt.href ?? '') ?? '');
        if (!target) error('hreflang', path, `${alt.lang} apunta a una página que no existe: ${alt.href}`);
        else if (alt.lang !== 'x-default') {
          if (target.locale !== alt.lang) error('hreflang', path, `${alt.lang} apunta a una página en "${target.locale}"`);
          if (!target.alternates.some((back) => back.href === SITE + path)) error('hreflang', path, `${alt.href} no enlaza de vuelta`);
        }
      }
    }

    for (const key of ['title', 'description', 'image', 'url']) if (!page.og[key]) warn('open-graph', path, `falta og:${key}`);
    if (page.og.url && page.canonical && page.og.url !== page.canonical) error('open-graph', path, 'og:url distinta de la canónica');
    if (page.og.image) {
      const image = toPath(page.og.image);
      if (!image) warn('open-graph', path, 'og:image no es una URL absoluta del sitio');
      else if (!fileExists(image)) error('open-graph', path, `og:image no existe: ${image}`);
    }
    if (page.words < LIMITS.words) warn('texto-escaso', path, `${page.words} palabras`);
  }

  const h1 = page.headings.filter((h) => h.level === 1);
  if (h1.length !== 1) error('h1', path, `${h1.length} encabezados h1`);
  else if (!h1[0].text) error('h1', path, 'h1 vacío');
  let previous = 0;
  for (const heading of page.headings) {
    if (heading.level > previous + 1 && previous !== 0) {
      warn('encabezados', path, `salta de h${previous} a h${heading.level}: ${heading.text.slice(0, 50)}`);
      break;
    }
    previous = heading.level;
  }
  if (page.headings.some((h) => !h.text)) warn('encabezados', path, 'hay un encabezado vacío');

  for (const img of page.images) {
    if (attr(img, 'alt') === null) error('img-alt', path, img.slice(0, 90));
    if (attr(img, 'width') === null || attr(img, 'height') === null) warn('img-tamano', path, img.slice(0, 90));
  }

  if (!page.jsonld.length && !noindex) warn('datos-estructurados', path, 'sin JSON-LD');
  for (const block of page.jsonld) {
    try {
      const data = JSON.parse(block);
      for (const item of Array.isArray(data) ? data : [data]) {
        if (!item['@context'] || !item['@type']) error('datos-estructurados', path, 'falta @context o @type');
        if (item['@type'] === 'FAQPage' && !item.mainEntity?.length) error('datos-estructurados', path, 'FAQPage sin preguntas');
        if (item['@type'] === 'BreadcrumbList') {
          for (const crumb of item.itemListElement ?? []) {
            const target = crumb.item && toPath(typeof crumb.item === 'string' ? crumb.item : crumb.item['@id'] ?? '');
            if (target && !pages.has(target)) error('datos-estructurados', path, `la ruta de navegación apunta a ${target}`);
          }
        }
      }
    } catch (cause) {
      error('datos-estructurados', path, `JSON inválido: ${cause.message}`);
    }
  }

  for (const href of new Set(page.anchors)) {
    if (!href.trim()) { warn('enlaces', path, 'enlace con href vacío'); continue; }
    if (/^(https?:)?\/\//.test(href) && !href.startsWith(SITE)) continue;
    if (/^(mailto:|tel:|#|javascript:|data:|blob:)/.test(href)) continue;
    const target = toPath(href);
    if (target === null) { warn('enlaces', path, `enlace relativo: ${href}`); continue; }
    if (pages.has(target)) {
      if (target !== path) pages.get(target).inbound++;
      if (/noindex/i.test(pages.get(target).robots) && !noindex) warn('enlaces', path, `enlaza a una página noindex: ${target}`);
    } else if (pages.has(target + '/')) {
      error('enlaces', path, `falta la barra final (provoca una redirección): ${href}`);
    } else if (!fileExists(target) && !/^\/(api|panel)\//.test(target)) {
      error('enlaces', path, `enlace roto: ${href}`);
    }
  }
}

// ---------- reglas del sitio ----------
const duplicates = (key, rule, label) => {
  const groups = new Map();
  for (const page of indexable) {
    const value = page[key];
    if (value) groups.set(value, [...(groups.get(value) ?? []), page.path]);
  }
  for (const [value, paths] of groups) {
    if (paths.length > 1) error(rule, paths[0], `${label} repetido en ${paths.length} páginas (${paths.slice(1, 4).join(', ')}…): ${value.slice(0, 80)}`);
  }
};
duplicates('title', 'titulo-repetido', 'título');
duplicates('description', 'descripcion-repetida', 'descripción');
duplicates('mainText', 'contenido-repetido', 'texto');

for (const page of indexable) {
  if (page.path !== '/' && page.inbound === 0) warn('huerfana', page.path, 'ninguna página la enlaza');
}

const sitemapUrls = new Set();
for (const name of readdirSync(DIST).filter((n) => /^sitemap.*\.xml$/.test(n))) {
  for (const m of readFileSync(join(DIST, name), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)) {
    if (!m[1].endsWith('.xml')) sitemapUrls.add(decode(m[1]));
  }
}
if (!sitemapUrls.size) error('sitemap', '/', 'no se encontró el mapa del sitio');
else {
  for (const page of indexable) if (!sitemapUrls.has(SITE + page.path)) error('sitemap', page.path, 'no está en el mapa del sitio');
  for (const url of sitemapUrls) {
    const page = pages.get(toPath(url) ?? '');
    if (!page) error('sitemap', url, 'el mapa del sitio lista una página que no existe');
    else if (/noindex/i.test(page.robots)) error('sitemap', page.path, 'página noindex dentro del mapa del sitio');
  }
}

const robots = existsSync(join(DIST, 'robots.txt')) ? readFileSync(join(DIST, 'robots.txt'), 'utf8') : '';
if (!robots) error('robots', '/robots.txt', 'falta robots.txt');
else if (!/^sitemap:\s*https?:\/\//im.test(robots)) warn('robots', '/robots.txt', 'no declara el mapa del sitio');

// ---------- informe ----------
const byRule = new Map();
for (const issue of issues) byRule.set(issue.rule, [...(byRule.get(issue.rule) ?? []), issue]);
const errors = issues.filter((i) => i.level === 'error').length;
console.log(`\nSEO: ${pages.size} páginas (${indexable.length} indexables), ${sitemapUrls.size} en el mapa del sitio`);
console.log(`${errors} errores, ${issues.length - errors} avisos\n`);
for (const [rule, list] of [...byRule].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`[${list[0].level}] ${rule}: ${list.length}`);
  for (const issue of VERBOSE ? list : list.slice(0, 6)) console.log(`   ${issue.path}  ${issue.detail}`);
  if (!VERBOSE && list.length > 6) console.log(`   … y ${list.length - 6} más (usa --todo para verlos)`);
}
if (!issues.length) console.log('Sin observaciones.');
process.exit(errors ? 1 : 0);
