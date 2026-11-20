import { siDeviantart } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'deviantart',
  name: 'DeviantArt',
  icon: { path: siDeviantart.path, color: `#${siDeviantart.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu galería de DeviantArt.',
    en: 'Create a QR code that opens your DeviantArt gallery.',
    pt: 'Crie um QR code que abre sua galeria no DeviantArt.',
    fr: 'Créez un QR code qui ouvre votre galerie DeviantArt.',
    it: 'Crea un codice QR che apre la tua galleria DeviantArt.',
  },
  modes: [
    {
      id: 'profile',
      label: {
        es: 'Perfil',
        en: 'Profile',
        pt: 'Perfil',
        fr: 'Profil',
        it: 'Profilo',
      },
      template: 'https://www.deviantart.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 20,
          prefix: 'deviantart.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{3,20}$',
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
