# QR Word Generator

Generador gratuito de códigos QR. Se elige una **plantilla** (un enlace libre o
una red social), se completa un formulario corto y se descarga el código en PNG
o SVG, con el logo de la red (o uno propio) en el centro.

- Sitio 100 % estático (Astro): no necesita servidor ni base de datos.
- Idiomas: español (por defecto, en `/`), inglés, portugués, francés e italiano.
- Una página por plantilla e idioma: `/instagram/`, `/en/instagram/`…
- Modo día / noche.
- El código se genera en el navegador: los datos nunca salen del dispositivo.

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

## Cómo agregar una plantilla

Cada plantilla es un archivo de datos en `src/networks/defs/`. Alcanza con crear
uno nuevo: se suma solo al selector, a las rutas y a los enlaces del pie.

Una plantilla define su ícono, sus textos en los cinco idiomas y uno o más
"modos" (por ejemplo perfil / empresa). Cada modo lista sus campos y la forma
del enlace, p. ej. `https://wa.me/{phone}` más `?text=` para el mensaje opcional.
Ver `src/networks/types.ts` para el detalle y `defs/whatsapp.ts` como ejemplo.

## Estructura

- `src/networks/defs/` — una plantilla por archivo.
- `src/lib/engine.ts` — arma el enlace a partir del formulario.
- `src/lib/qr.ts` — dibujo del QR (módulos redondeados, borde, logo).
- `src/components/Generator.astro` — formulario genérico y vista previa.
- `src/components/TemplateSelect.astro` / `CountrySelect.astro` — listas desplegables.
- `src/i18n/ui.ts` — textos generales de la interfaz, por idioma.

## Licencia

Copyright (c) 2026 Erik Pastuszek. Todos los derechos reservados.

Software propietario: no se permite su uso, copia, modificación ni
distribución sin autorización previa y por escrito del titular. Ver
[LICENSE](LICENSE).
