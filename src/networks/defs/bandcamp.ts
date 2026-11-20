import { siBandcamp } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'bandcamp',
  name: 'Bandcamp',
  icon: { path: siBandcamp.path, color: `#${siBandcamp.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu página de Bandcamp.',
    en: 'Create a QR code that opens your Bandcamp page.',
    pt: 'Crie um QR code que abre sua página do Bandcamp.',
    fr: 'Créez un code QR qui ouvre votre page Bandcamp.',
    it: 'Crea un codice QR che apre la tua pagina Bandcamp.',
  },
  modes: [
    {
      id: 'artist',
      label: {
        es: 'Artista o sello',
        en: 'Artist or label',
        pt: 'Artista ou selo',
        fr: 'Artiste ou label',
        it: 'Artista o etichetta',
      },
      template: 'https://{subdomain}.bandcamp.com',
      fields: [
        {
          id: 'subdomain',
          type: 'text',
          required: true,
          maxLength: 63,
          sanitize: 'trim',
          pattern: '^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$',
          label: {
            es: 'Subdominio',
            en: 'Subdomain',
            pt: 'Subdomínio',
            fr: 'Sous-domaine',
            it: 'Sottodominio',
          },
          placeholder: {
            es: 'Ej.: mibanda',
            en: 'e.g. myband',
            pt: 'Ex.: minhabanda',
            fr: 'Ex. : mongroupe',
            it: 'Es.: lamiaband',
          },
          hint: {
            es: 'Es la parte antes de .bandcamp.com en tu dirección.',
            en: 'It\'s the part before .bandcamp.com in your address.',
            pt: 'É a parte antes de .bandcamp.com no seu endereço.',
            fr: 'C\'est la partie avant .bandcamp.com dans votre adresse.',
            it: 'È la parte prima di .bandcamp.com nel tuo indirizzo.',
          },
        },
      ],
    },
  ],
};

export default template;
