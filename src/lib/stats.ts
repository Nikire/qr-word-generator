// Conteo anónimo de uso: avisa al servidor qué plantilla se usó y qué se hizo
// con ella. Nunca envía lo que la persona escribe, el enlace ni el logo.
// El servidor lo recibe en public/api/c.php y se consulta en /panel/.
import { BASE_PATH } from '../../site.config.mjs';

export type StatEvent = 'view' | 'create' | 'download' | 'copy' | 'read';

interface StatDetails {
  mode?: string;
  format?: 'png' | 'svg';
  /** El código lleva un logo subido por la persona. */
  logo?: boolean;
}

const ENDPOINT = `${BASE_PATH}/api/c.php`;

/** No se cuenta en desarrollo ni en el navegador de quien administra el sitio (lo marca el panel). */
function skip(): boolean {
  if (import.meta.env.DEV) return true;
  try {
    return localStorage.getItem('qrwg-owner') === '1';
  } catch {
    return false;
  }
}

/** `name` es el id de la plantilla o, en las guías, el de la guía. */
export function track(event: StatEvent, name: string, details: StatDetails = {}): void {
  if (skip()) return;
  const body = JSON.stringify({
    e: event,
    n: name,
    m: details.mode ?? '',
    l: document.documentElement.lang,
    f: details.format ?? '',
    g: details.logo ? 1 : 0,
  });
  try {
    if (!navigator.sendBeacon?.(ENDPOINT, body)) {
      void fetch(ENDPOINT, { method: 'POST', body, keepalive: true }).catch(() => {});
    }
  } catch {
    // Sin conexión o bloqueado por una extensión: el generador sigue funcionando igual.
  }
}
