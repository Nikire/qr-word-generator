// Registro de plantillas: toma todos los archivos de ./defs/ automáticamente.
import { defaultLocale, type Locale } from '../i18n/ui';
import type { NetworkContent, NetworkDef } from './types';
import { BASE_PATH } from '../../site.config.mjs';

const modules = import.meta.glob<{ default: NetworkDef }>('./defs/*.ts', { eager: true });

/** Plantilla que se muestra en la portada. */
export const DEFAULT_NETWORK = 'url';

export const networks: NetworkDef[] = Object.values(modules).map((module) => module.default);

export function networkName(network: NetworkDef, locale: Locale): string {
  return typeof network.name === 'string' ? network.name : network.name[locale];
}

/** Plantillas en el orden del selector: primero las fijadas con `order`, luego alfabético. */
export function sortedNetworks(locale: Locale): NetworkDef[] {
  const collator = new Intl.Collator(locale, { sensitivity: 'base' });
  return [...networks].sort(
    (a, b) =>
      (a.order ?? Infinity) - (b.order ?? Infinity) ||
      collator.compare(networkName(a, locale), networkName(b, locale)),
  );
}

export function getNetwork(id: string): NetworkDef {
  const network = networks.find((item) => item.id === id);
  if (!network) throw new Error(`Plantilla desconocida: ${id}`);
  return network;
}

/** Ruta de una plantilla en un idioma (incluye la carpeta del sitio). La plantilla por defecto vive en la portada. */
export function networkPath(locale: Locale, id: string): string {
  const parts = [locale === defaultLocale ? '' : locale, id === DEFAULT_NETWORK ? '' : id].filter(Boolean);
  return `${BASE_PATH}${parts.length ? `/${parts.join('/')}/` : '/'}`;
}

const contentModules = import.meta.glob<{ default: NetworkContent }>('./content/*.ts', { eager: true });

/** Texto propio de una plantilla, si lo tiene (archivo ./content/<id>.ts). */
export function getContent(id: string): NetworkContent | undefined {
  return contentModules[`./content/${id}.ts`]?.default;
}
