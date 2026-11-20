// Sprite con los íconos de todas las plantillas. Se descarga una sola vez y
// lo reutilizan el selector y la lista de plantillas de cada página.
import type { APIRoute } from 'astro';
import { networks } from '../networks';

export const GET: APIRoute = () => {
  const symbols = networks
    .map(
      ({ id, icon }) =>
        `<symbol id="${id}" viewBox="0 0 40 40">` +
        `<circle cx="20" cy="20" r="20" fill="${icon.color}"/>` +
        `<path transform="translate(9 9) scale(0.9167)" fill="${icon.darkGlyph ? '#111B21' : '#FFFFFF'}" d="${icon.path}"/>` +
        `</symbol>`,
    )
    .join('');
  return new Response(`<svg xmlns="http://www.w3.org/2000/svg">${symbols}</svg>`, {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' },
  });
};
