import { siKofi } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'kofi',
  name: 'Ko-fi',
  icon: { path: siKofi.path, color: `#${siKofi.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu página de Ko-fi para recibir apoyo.',
    en: 'Create a QR code that opens your Ko-fi page to receive support.',
    pt: 'Crie um QR code que abre sua página do Ko-fi para receber apoio.',
    fr: 'Créez un QR code qui ouvre votre page Ko-fi pour recevoir du soutien.',
    it: 'Crea un codice QR che apre la tua pagina Ko-fi per ricevere supporto.',
  },
  modes: [
    {
      id: 'page',
      label: {
        es: 'Página',
        en: 'Page',
        pt: 'Página',
        fr: 'Page',
        it: 'Pagina',
      },
      template: 'https://ko-fi.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'ko-fi.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_]{1,40}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Usuário',
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
        },
      ],
    },
  ],
};

export default template;
