import { siLiberapay } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'liberapay',
  name: 'Liberapay',
  icon: { path: siLiberapay.path, color: `#${siLiberapay.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR que abre tu página de donaciones en Liberapay.',
    en: 'Create a QR code that opens your Liberapay donation page.',
    pt: 'Crie um QR code que abre sua página de doações no Liberapay.',
    fr: 'Créez un code QR qui ouvre votre page de dons Liberapay.',
    it: 'Crea un codice QR che apre la tua pagina di donazioni Liberapay.',
  },
  modes: [
    {
      id: 'profile',
      label: {
        es: 'Página',
        en: 'Page',
        pt: 'Página',
        fr: 'Page',
        it: 'Pagina',
      },
      template: 'https://liberapay.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 32,
          prefix: 'liberapay.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{1,32}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Nome de usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Es lo que va después de liberapay.com/ en tu enlace.',
            en: 'It\'s what comes after liberapay.com/ in your link.',
            pt: 'É o que vem depois de liberapay.com/ no seu link.',
            fr: 'C\'est ce qui suit liberapay.com/ dans votre lien.',
            it: 'È ciò che segue liberapay.com/ nel tuo link.',
          },
        },
      ],
    },
  ],
};

export default template;
