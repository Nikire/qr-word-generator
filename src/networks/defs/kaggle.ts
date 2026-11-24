import { siKaggle } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'kaggle',
  name: 'Kaggle',
  icon: { path: siKaggle.path, color: `#${siKaggle.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Kaggle.',
    en: 'Create a QR code that opens your Kaggle profile.',
    pt: 'Crie um QR code que abre seu perfil no Kaggle.',
    fr: 'Créez un QR code qui ouvre votre profil Kaggle.',
    it: 'Crea un codice QR che apre il tuo profilo Kaggle.',
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
      template: 'https://www.kaggle.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'kaggle.com/',
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
