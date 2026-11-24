import { siApplepodcasts } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'apple-podcasts',
  name: 'Apple Podcasts',
  icon: { path: siApplepodcasts.path, color: `#${siApplepodcasts.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu podcast en Apple Podcasts.',
    en: 'Create a QR code that opens your podcast on Apple Podcasts.',
    pt: 'Crie um QR code que abre seu podcast no Apple Podcasts.',
    fr: 'Créez un code QR qui ouvre votre podcast sur Apple Podcasts.',
    it: 'Crea un codice QR che apre il tuo podcast su Apple Podcasts.',
  },
  modes: [
    {
      id: 'show',
      label: {
        es: 'Podcast',
        en: 'Podcast',
        pt: 'Podcast',
        fr: 'Podcast',
        it: 'Podcast',
      },
      template: 'https://podcasts.apple.com/podcast/{showId}',
      fields: [
        {
          id: 'showId',
          type: 'text',
          required: true,
          maxLength: 300,
          sanitize: 'handle',
          pattern: '^id[0-9]+$',
          label: {
            es: 'Enlace del podcast',
            en: 'Podcast link',
            pt: 'Link do podcast',
            fr: 'Lien du podcast',
            it: 'Link del podcast',
          },
          placeholder: {
            es: 'Ej.: https://podcasts.apple.com/ar/podcast/mi-podcast/id1200361736',
            en: 'e.g. https://podcasts.apple.com/us/podcast/my-podcast/id1200361736',
            pt: 'Ex.: https://podcasts.apple.com/br/podcast/meu-podcast/id1200361736',
            fr: 'Ex. : https://podcasts.apple.com/fr/podcast/mon-podcast/id1200361736',
            it: 'Es.: https://podcasts.apple.com/it/podcast/il-mio-podcast/id1200361736',
          },
          hint: {
            es: 'Pega el enlace del podcast o la parte que empieza con «id».',
            en: 'Paste the podcast link or the part starting with "id".',
            pt: 'Cole o link do podcast ou a parte que começa com "id".',
            fr: 'Collez le lien du podcast ou la partie commençant par « id ».',
            it: 'Incolla il link del podcast o la parte che inizia con «id».',
          },
        },
      ],
    },
  ],
};

export default template;
