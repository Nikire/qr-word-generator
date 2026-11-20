import { si500px } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: '500px',
  name: '500px',
  icon: { path: si500px.path, color: `#${si500px.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de fotografía en 500px.',
    en: 'Create a QR code that opens your 500px photography profile.',
    pt: 'Crie um QR code que abre seu perfil de fotografia no 500px.',
    fr: 'Créez un QR code qui ouvre votre profil photo 500px.',
    it: 'Crea un codice QR che apre il tuo profilo fotografico su 500px.',
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
      template: 'https://500px.com/p/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: '500px.com/p/',
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
