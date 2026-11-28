const BRAND = 'QR Word Generator';
const MAX_TITLE = 62; // a partir de ahí Google suele cortar el título en los resultados

/** Título de la página con la marca al final, salvo que con ella quede demasiado largo. */
export function brandTitle(title: string): string {
  if (title.includes(BRAND)) return title;
  const full = `${title} | ${BRAND}`;
  return full.length <= MAX_TITLE ? full : title;
}
