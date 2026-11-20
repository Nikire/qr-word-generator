// Motor genérico: convierte los valores de un formulario en el enlace del QR
// siguiendo la definición de la plantilla. No depende del navegador.
import type { Sanitize } from '../networks/types';

/** Lo mínimo que el motor necesita saber de cada campo (se envía al navegador). */
export interface EngineField {
  id: string;
  type: 'text' | 'textarea' | 'phone';
  required: boolean;
  sanitize: Sanitize;
  pattern?: string;
}

export interface EngineMode {
  id: string;
  template: string;
  query?: { param: string; field: string }[];
  fields: EngineField[];
}

export type BuildResult =
  | { status: 'ok'; url: string; values: Record<string, string> }
  | { status: 'empty' }
  | { status: 'invalid'; field: string };

export function sanitize(kind: Sanitize, raw: string): string {
  const value = raw.trim();
  switch (kind) {
    case 'handle': {
      let handle = value;
      if (/^https?:\/\//i.test(handle) || handle.includes('/')) {
        const segments = handle.split(/[?#]/)[0].split('/').filter(Boolean);
        handle = segments[segments.length - 1] ?? '';
      }
      return handle.replace(/^@+/, '').trim();
    }
    case 'digits':
      return value.replace(/\D/g, '');
    case 'url':
      if (!value) return '';
      return /^https?:\/\//i.test(value) ? value : `https://${value.replace(/^\/+/, '')}`;
    default:
      return value;
  }
}

/**
 * Número internacional completo, solo dígitos. Acepta el número nacional con
 * espacios, guiones o 0 inicial, y también el número completo pegado con + o 00.
 * Devuelve cadena vacía si no hay número y null si la cantidad de dígitos no es válida.
 */
export function phoneDigits(dial: string, raw: string): string | null {
  const text = raw.trim();
  let national = text.replace(/\D/g, '');
  if (/^(\+|00)/.test(text)) {
    national = national.replace(/^00/, '');
    if (national.startsWith(dial)) national = national.slice(dial.length);
  }
  national = national.replace(/^0+/, '');
  if (!national) return '';
  const digits = dial + national;
  return national.length >= 5 && digits.length <= 15 ? digits : null;
}

/** `values` trae lo que escribió el usuario; para campos 'phone', el resultado de phoneDigits. */
export function buildLink(mode: EngineMode, values: Record<string, string | null>): BuildResult {
  const clean: Record<string, string> = {};
  let missing = false;

  for (const field of mode.fields) {
    const raw = values[field.id];
    if (raw === null) return { status: 'invalid', field: field.id };
    const value = field.type === 'phone' ? (raw ?? '') : sanitize(field.sanitize, raw ?? '');
    if (!value) {
      if (field.required) missing = true;
      continue;
    }
    if (field.pattern && !new RegExp(field.pattern).test(value)) {
      return { status: 'invalid', field: field.id };
    }
    clean[field.id] = value;
  }
  if (missing) return { status: 'empty' };

  let url = mode.template.replace(/\{(\w+)(:raw)?\}/g, (_, id: string, raw?: string) =>
    raw ? (clean[id] ?? '') : encodeURIComponent(clean[id] ?? ''),
  );
  for (const { param, field } of mode.query ?? []) {
    if (!clean[field]) continue;
    url += `${url.includes('?') ? '&' : '?'}${param}=${encodeURIComponent(clean[field])}`;
  }
  return { status: 'ok', url, values: clean };
}
