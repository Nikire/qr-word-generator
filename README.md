# QR Word Generator

Generador gratuito de códigos QR para redes sociales. Primera red: **WhatsApp**
(número con código de país + mensaje personalizado opcional), con el logo en el
centro y descarga en PNG y SVG.

- Sitio 100 % estático (Astro): no necesita servidor ni base de datos.
- Idiomas: español (por defecto, en `/`), inglés, portugués, francés e italiano.
- Modo día / noche.
- El código se genera en el navegador: el número nunca sale del dispositivo.

## Desarrollo

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev      # servidor local
npm run build    # genera el sitio en dist/
npm run preview  # sirve dist/ para revisarlo
```

## Configuración

Todo lo que cambia al publicar está en `site.config.mjs`:

| Valor            | Para qué sirve                                              |
| ---------------- | ----------------------------------------------------------- |
| `SITE_URL`       | Dominio definitivo: activa sitemap, URLs canónicas, hreflang |
| `ADSENSE_CLIENT` | ID de editor de AdSense (`ca-pub-…`): carga los anuncios     |
| `ADSENSE_SLOTS`  | IDs de los bloques de anuncios (arriba y abajo)              |

Mientras estén vacíos, el sitio funciona igual y no muestra anuncios.

## Publicación en Hostinger

1. `npm run build`
2. Subir el **contenido** de `dist/` a `public_html` del dominio (Administrador
   de archivos o FTP).

## Estructura

- `src/lib/qr.ts` — dibujo del QR (sirve para cualquier red: solo cambia el logo).
- `src/components/WhatsAppGenerator.astro` — formulario y vista previa de WhatsApp.
- `src/components/CountrySelect.astro` — lista de países con bandera.
- `src/i18n/ui.ts` — todos los textos, por idioma.

## Licencia

Copyright (c) 2026 Erik Pastuszek. Todos los derechos reservados.

Software propietario: no se permite su uso, copia, modificación ni
distribución sin autorización previa y por escrito del titular. Ver
[LICENSE](LICENSE).
