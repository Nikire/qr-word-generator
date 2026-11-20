import { siBuymeacoffee } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'buymeacoffee',
  name: 'Buy Me a Coffee',
  icon: { path: siBuymeacoffee.path, color: `#${siBuymeacoffee.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Creá un código QR que abre tu página de Buy Me a Coffee.',
    en: 'Create a QR code that opens your Buy Me a Coffee page.',
    pt: 'Crie um QR code que abre sua página do Buy Me a Coffee.',
    fr: 'Créez un code QR qui ouvre votre page Buy Me a Coffee.',
    it: 'Crea un codice QR che apre la tua pagina Buy Me a Coffee.',
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
      template: 'https://buymeacoffee.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: 'buymeacoffee.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{1,50}$',
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
            es: 'Es lo que va después de buymeacoffee.com/ en tu enlace.',
            en: 'It\'s what comes after buymeacoffee.com/ in your link.',
            pt: 'É o que vem depois de buymeacoffee.com/ no seu link.',
            fr: 'C\'est ce qui suit buymeacoffee.com/ dans votre lien.',
            it: 'È ciò che segue buymeacoffee.com/ nel tuo link.',
          },
        },
      ],
    },
  ],
};

export default template;
