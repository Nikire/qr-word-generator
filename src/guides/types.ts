import type { L10n } from '../networks/types';

export interface GuideSection {
  /** Subtítulo de la sección. */
  h: L10n;
  /** Párrafos de texto plano. */
  p: L10n[];
  /** Lista opcional que se muestra después de los párrafos. */
  list?: L10n[];
}

export interface Guide {
  /** Identificador interno; coincide con el nombre del archivo. */
  id: string;
  /** Última parte de la dirección en cada idioma, en minúsculas y con guiones. */
  slug: L10n;
  /** Título de la página (h1 y <title>). */
  title: L10n;
  /** Descripción para buscadores, de 140 a 160 caracteres. */
  description: L10n;
  /** Párrafo inicial. */
  intro: L10n;
  sections: GuideSection[];
  /** Plantillas relacionadas (ids de src/networks/defs) que se enlazan al final. */
  templates: string[];
  faq: { q: L10n; a: L10n }[];
}
