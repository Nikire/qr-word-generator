// Dibuja un código QR como SVG: módulos redondeados, marco con borde delicado
// y el logo de la red social en el centro. Sirve para cualquier red: solo cambia el logo.
import qrcode from 'qrcode-generator';

export interface QrLogo {
  /** Trazado del ícono en una caja de 24×24 (formato Simple Icons). */
  path: string;
  /** Color oficial de la marca, con numeral. */
  color: string;
}

export interface QrOptions {
  data: string;
  logo?: QrLogo;
  dark?: string;
  light?: string;
  /** Color del borde exterior. Por defecto, el del logo. */
  accent?: string;
}

const MODULE = 10; // tamaño de cada módulo, en unidades del SVG
const QUIET = 4; // zona de silencio, en módulos
const FRAME = 8; // espacio reservado para el borde exterior
const FINDER = 7; // lado de cada patrón de posición, en módulos

const round = (value: number) => Math.round(value * 100) / 100;

/** Devuelve el SVG completo. Lanza un error si los datos no entran en un QR. */
export function buildQrSvg({
  data,
  logo,
  dark = '#111B21',
  light = '#FFFFFF',
  accent,
}: QrOptions): string {
  // Corrección de errores alta (H): compensa los módulos tapados por el logo.
  const qr = qrcode(0, 'H');
  qr.addData(data, 'Byte');
  qr.make();

  const count = qr.getModuleCount();
  const offset = FRAME + QUIET * MODULE;
  const size = count * MODULE + offset * 2;
  const center = size / 2;
  const borderColor = accent ?? logo?.color ?? dark;

  const badgeRadius = count * MODULE * 0.115;
  const clearRadius = logo ? badgeRadius + MODULE * 1.4 : 0;

  const inFinder = (row: number, col: number) =>
    (row < FINDER && col < FINDER) ||
    (row < FINDER && col >= count - FINDER) ||
    (row >= count - FINDER && col < FINDER);

  const isOn = (row: number, col: number): boolean => {
    if (row < 0 || col < 0 || row >= count || col >= count) return false;
    if (inFinder(row, col) || !qr.isDark(row, col)) return false;
    if (!logo) return true;
    const x = offset + (col + 0.5) * MODULE;
    const y = offset + (row + 0.5) * MODULE;
    return Math.hypot(x - center, y - center) > clearRadius;
  };

  // Cada módulo redondea solo las esquinas que no tocan a un vecino,
  // así los módulos contiguos se funden en formas continuas.
  const radius = MODULE / 2;
  const overlap = 0.2; // evita líneas finas entre módulos vecinos
  let modules = '';
  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      if (!isOn(row, col)) continue;
      const up = isOn(row - 1, col);
      const down = isOn(row + 1, col);
      const left = isOn(row, col - 1);
      const right = isOn(row, col + 1);

      const x0 = round(offset + col * MODULE - (left ? overlap : 0));
      const x1 = round(offset + (col + 1) * MODULE + (right ? overlap : 0));
      const y0 = round(offset + row * MODULE - (up ? overlap : 0));
      const y1 = round(offset + (row + 1) * MODULE + (down ? overlap : 0));

      const tl = !up && !left ? radius : 0;
      const tr = !up && !right ? radius : 0;
      const br = !down && !right ? radius : 0;
      const bl = !down && !left ? radius : 0;
      const arc = (r: number, x: number, y: number) => (r ? `A${r} ${r} 0 0 1 ${x} ${y}` : '');

      modules +=
        `M${x0 + tl} ${y0}H${x1 - tr}${arc(tr, x1, y0 + tr)}` +
        `V${y1 - br}${arc(br, x1 - br, y1)}` +
        `H${x0 + bl}${arc(bl, x0, y1 - bl)}` +
        `V${y0 + tl}${arc(tl, x0 + tl, y0)}Z`;
    }
  }

  const roundedRect = (x: number, y: number, side: number, r: number) =>
    `M${x + r} ${y}h${side - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${side - 2 * r}` +
    `a${r} ${r} 0 0 1 ${-r} ${r}h${-(side - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}` +
    `v${-(side - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}Z`;

  let finders = '';
  for (const [row, col] of [
    [0, 0],
    [0, count - FINDER],
    [count - FINDER, 0],
  ]) {
    const x = offset + col * MODULE;
    const y = offset + row * MODULE;
    finders +=
      roundedRect(x, y, 7 * MODULE, 2.2 * MODULE) +
      roundedRect(x + MODULE, y + MODULE, 5 * MODULE, 1.4 * MODULE) +
      roundedRect(x + 2 * MODULE, y + 2 * MODULE, 3 * MODULE, 0.9 * MODULE);
  }

  let badge = '';
  if (logo) {
    const glyph = badgeRadius * 2 * 0.62;
    const scale = round(glyph / 24);
    const shift = round(center - glyph / 2);
    badge =
      `<circle cx="${center}" cy="${center}" r="${round(badgeRadius)}" fill="${logo.color}"/>` +
      `<path transform="translate(${shift} ${shift}) scale(${scale})" fill="#FFFFFF" d="${logo.path}"/>`;
  }

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">` +
    // Borde exterior: halo translúcido + línea fina del color de la marca.
    `<rect x="3" y="3" width="${size - 6}" height="${size - 6}" rx="39" fill="none" stroke="${borderColor}" stroke-opacity="0.22" stroke-width="6"/>` +
    `<rect x="6" y="6" width="${size - 12}" height="${size - 12}" rx="36" fill="${light}" stroke="${borderColor}" stroke-width="2"/>` +
    `<path fill="${dark}" d="${modules}"/>` +
    `<path fill="${dark}" fill-rule="evenodd" d="${finders}"/>` +
    badge +
    `</svg>`
  );
}
