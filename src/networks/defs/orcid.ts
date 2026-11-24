import { siOrcid } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'orcid',
  name: 'ORCID',
  icon: { path: siOrcid.path, color: `#${siOrcid.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR que abre tu registro de investigador en ORCID.',
    en: 'Create a QR code that opens your ORCID researcher record.',
    pt: 'Crie um QR code que abre seu registro de pesquisador no ORCID.',
    fr: 'Créez un QR code qui ouvre votre dossier de chercheur ORCID.',
    it: 'Crea un codice QR che apre il tuo record di ricercatore ORCID.',
  },
  modes: [
    {
      id: 'record',
      label: {
        es: 'Registro',
        en: 'Record',
        pt: 'Registro',
        fr: 'Dossier',
        it: 'Record',
      },
      template: 'https://orcid.org/{orcidId}',
      fields: [
        {
          id: 'orcidId',
          type: 'text',
          required: true,
          maxLength: 19,
          prefix: 'orcid.org/',
          sanitize: 'handle',
          pattern: '^\\d{4}-\\d{4}-\\d{4}-\\d{3}[\\dX]$',
          label: {
            es: 'ORCID iD',
            en: 'ORCID iD',
            pt: 'ORCID iD',
            fr: 'ORCID iD',
            it: 'ORCID iD',
          },
          placeholder: {
            es: 'Ej.: 0000-0002-1825-0097',
            en: 'e.g. 0000-0002-1825-0097',
            pt: 'Ex.: 0000-0002-1825-0097',
            fr: 'Ex. : 0000-0002-1825-0097',
            it: 'Es.: 0000-0002-1825-0097',
          },
          hint: {
            es: '16 caracteres en grupos de 4 separados por guiones.',
            en: '16 characters in groups of 4 separated by hyphens.',
            pt: '16 caracteres em grupos de 4 separados por hífens.',
            fr: '16 caractères en groupes de 4 séparés par des tirets.',
            it: '16 caratteri in gruppi di 4 separati da trattini.',
          },
        },
      ],
    },
  ],
};

export default template;
