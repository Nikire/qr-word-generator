import { siPatreon } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'patreon',
  name: 'Patreon',
  icon: { path: siPatreon.path, color: `#${siPatreon.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu página de Patreon.',
    en: 'Create a QR code that opens your Patreon page.',
    pt: 'Crie um QR code que abre sua página do Patreon.',
    fr: 'Créez un code QR qui ouvre votre page Patreon.',
    it: 'Crea un codice QR che apre la tua pagina Patreon.',
  },
  modes: [
    {
      id: 'creator',
      label: {
        es: 'Página de creador',
        en: 'Creator page',
        pt: 'Página de criador',
        fr: 'Page créateur',
        it: 'Pagina creator',
      },
      template: 'https://www.patreon.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 64,
          prefix: 'patreon.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,64}$',
          label: {
            es: 'URL personalizada',
            en: 'Custom URL',
            pt: 'URL personalizada',
            fr: 'URL personnalisée',
            it: 'URL personalizzato',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Es lo que va después de patreon.com/ en tu página.',
            en: 'It\'s what comes after patreon.com/ on your page.',
            pt: 'É o que vem depois de patreon.com/ na sua página.',
            fr: 'C\'est ce qui suit patreon.com/ sur votre page.',
            it: 'È ciò che segue patreon.com/ nella tua pagina.',
          },
        },
      ],
    },
  ],
};

export default template;
