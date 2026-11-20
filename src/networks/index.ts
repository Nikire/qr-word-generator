// Registro de plantillas: toma todos los archivos de ./defs/ automáticamente.
import { defaultLocale, type Locale } from '../i18n/ui';
import type { NetworkDef } from './types';

const modules = import.meta.glob<{ default: NetworkDef }>('./defs/*.ts', { eager: true });

/** Plantilla que se muestra en la portada. */
export const DEFAULT_NETWORK = 'whatsapp';

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

/** Ruta de una plantilla en un idioma. La plantilla por defecto vive en la portada. */
export function networkPath(locale: Locale, id: string): string {
  const parts = [locale === defaultLocale ? '' : locale, id === DEFAULT_NETWORK ? '' : id].filter(Boolean);
  return parts.length ? `/${parts.join('/')}/` : '/';
}
