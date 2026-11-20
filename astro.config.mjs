import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './site.config.mjs';

export default defineConfig({
  site: SITE_URL || undefined,
  output: 'static',
  trailingSlash: 'always',
  integrations: SITE_URL
    ? [
        sitemap({
          i18n: {
            defaultLocale: 'es',
            locales: { es: 'es', en: 'en', pt: 'pt', fr: 'fr', it: 'it' },
          },
        }),
      ]
    : [],
  vite: {
    build: {
      // Las banderas se sirven como archivos aparte (carga diferida), nunca embebidas.
      assetsInlineLimit: 0,
    },
  },
});
