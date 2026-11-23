import { writeFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { ADSENSE_CLIENT, BASE_PATH, SITE_URL } from './site.config.mjs';

/** Genera ads.txt, el archivo con el que AdSense verifica quién vende anuncios en el dominio.
 *  Solo sirve en la raíz del dominio, y solo cuando ya hay ID de editor. */
const adsTxt = {
  name: 'ads-txt',
  hooks: {
    'astro:build:done': ({ dir }) => {
      const publisher = ADSENSE_CLIENT.replace(/^ca-/, '');
      writeFileSync(new URL('ads.txt', dir), `google.com, ${publisher}, DIRECT, f08c47fec0942fa0\n`);
    },
  },
};

export default defineConfig({
  site: SITE_URL || undefined,
  base: BASE_PATH || undefined,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    ...(SITE_URL
      ? [
          sitemap({
            i18n: {
              defaultLocale: 'es',
              locales: { es: 'es', en: 'en', pt: 'pt', fr: 'fr', it: 'it' },
            },
          }),
        ]
      : []),
    ...(ADSENSE_CLIENT && !BASE_PATH ? [adsTxt] : []),
  ],
  vite: {
    build: {
      // Las banderas se sirven como archivos aparte (carga diferida), nunca embebidas.
      assetsInlineLimit: 0,
    },
  },
});
