import { siDevdotto } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'devto',
  name: 'DEV Community',
  icon: { path: siDevdotto.path, color: `#${siDevdotto.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de DEV Community.',
    en: 'Create a QR code that opens your DEV Community profile.',
    pt: 'Crie um QR code que abre seu perfil na DEV Community.',
    fr: 'Créez un QR code qui ouvre votre profil DEV Community.',
    it: 'Crea un codice QR che apre il tuo profilo DEV Community.',
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
      template: 'https://dev.to/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: 'dev.to/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,50}$',
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
