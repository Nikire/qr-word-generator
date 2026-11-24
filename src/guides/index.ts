// Guías por caso de uso. Cada guía es un archivo en ./content/<id>.ts.
import { defaultLocale, type Locale } from '../i18n/ui';
import { BASE_PATH } from '../../site.config.mjs';
import type { Guide } from './types';

const modules = import.meta.glob<{ default: Guide }>('./content/*.ts', { eager: true });

/** Orden en que se listan las guías. Las que no figuran aquí van al final. */
const ORDER = [
  'restaurant-menu',
  'business-cards',
  'weddings-events',
  'google-reviews-business',
  'print-size',
  'qr-with-logo',
  'static-vs-dynamic',
  'qr-not-scanning',
];

const rank = (id: string) => (ORDER.includes(id) ? ORDER.indexOf(id) : ORDER.length);

export const guides: Guide[] = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => rank(a.id) - rank(b.id) || a.id.localeCompare(b.id));

/** Carpeta de las guías en cada idioma. */
export const guidesBase: Record<Locale, string> = {
  es: 'guias',
  en: 'guides',
  pt: 'guias',
  fr: 'guides',
  it: 'guide',
};

export const guidesLabel: Record<Locale, string> = {
  es: 'Guías',
  en: 'Guides',
  pt: 'Guias',
  fr: 'Guides',
  it: 'Guide',
};

export const guidesIndexTitle: Record<Locale, string> = {
  es: 'Guías para usar códigos QR',
  en: 'Guides to using QR codes',
  pt: 'Guias para usar códigos QR',
  fr: 'Guides pour utiliser les codes QR',
  it: 'Guide all’uso dei codici QR',
};

export const guidesIndexDescription: Record<Locale, string> = {
  es: 'Guías prácticas para crear, imprimir y usar códigos QR en restaurantes, tarjetas, eventos y negocios, con consejos de tamaño, logo y formato.',
  en: 'Practical guides to creating, printing and using QR codes for restaurants, business cards, events and shops, with advice on size, logo and format.',
  pt: 'Guias práticos para criar, imprimir e usar códigos QR em restaurantes, cartões, eventos e negócios, com dicas de tamanho, logo e formato.',
  fr: 'Des guides pratiques pour créer, imprimer et utiliser des codes QR au restaurant, sur des cartes, lors d’événements et en boutique : taille, logo et format.',
  it: 'Guide pratiche per creare, stampare e usare i codici QR in ristoranti, biglietti, eventi e negozi, con consigli su dimensioni, logo e formato.',
};

export function getGuide(id: string): Guide | undefined {
  return guides.find((guide) => guide.id === id);
}

/** Segmentos de la dirección; sin `id` devuelve los del índice de guías. */
export function guideSegments(locale: Locale, id?: string): string[] {
  const guide = id ? getGuide(id) : undefined;
  return [locale === defaultLocale ? '' : locale, guidesBase[locale], guide?.slug[locale] ?? ''].filter(Boolean);
}

export function guidePath(locale: Locale, id?: string): string {
  return `${BASE_PATH}/${guideSegments(locale, id).join('/')}/`;
}
