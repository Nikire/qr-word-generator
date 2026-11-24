import { siDribbble } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'dribbble',
  name: 'Dribbble',
  icon: { path: siDribbble.path, color: `#${siDribbble.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Dribbble.',
    en: 'Create a QR code that opens your Dribbble profile.',
    pt: 'Crie um QR code que abre seu perfil no Dribbble.',
    fr: 'Créez un QR code qui ouvre votre profil Dribbble.',
    it: 'Crea un codice QR che apre il tuo profilo Dribbble.',
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
      template: 'https://dribbble.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'dribbble.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,40}$',
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
