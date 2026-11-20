// Lista de países armada en tiempo de compilación (no se envía ninguna librería al navegador).
import { getCountries, getCountryCallingCode } from 'libphonenumber-js/min';

const flagFiles = import.meta.glob<string>('/node_modules/flag-icons/flags/4x3/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

// Territorios cuyo archivo de bandera no coincide con su código ISO.
const flagAlias: Record<string, string> = { AC: 'sh-ac', TA: 'sh-ta' };

export interface Country {
  iso: string;
  dial: string;
  name: string;
  flag: string;
  /** Texto normalizado para la búsqueda (sin acentos, en minúsculas). */
  search: string;
}

export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}

export function getCountryList(locale: string): Country[] {
  const names = new Intl.DisplayNames([locale], { type: 'region' });
  const collator = new Intl.Collator(locale, { sensitivity: 'base' });

  return getCountries()
    .map((iso) => {
      const file = flagAlias[iso] ?? iso.toLowerCase();
      const dial = getCountryCallingCode(iso);
      const name = names.of(iso) ?? iso;
      return {
        iso,
        dial,
        name,
        flag: flagFiles[`/node_modules/flag-icons/flags/4x3/${file}.svg`],
        search: `${normalize(name)} +${dial} ${iso.toLowerCase()}`,
      };
    })
    .filter((country) => country.flag && country.name !== country.iso)
    .sort((a, b) => collator.compare(a.name, b.name));
}
