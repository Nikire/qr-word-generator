import { siFiverr } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'fiverr',
  name: 'Fiverr',
  icon: { path: siFiverr.path, color: `#${siFiverr.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de freelancer en Fiverr.',
    en: 'Create a QR code that opens your Fiverr freelancer profile.',
    pt: 'Crie um QR code que abre seu perfil de freelancer no Fiverr.',
    fr: 'Créez un QR code qui ouvre votre profil de freelance Fiverr.',
    it: 'Crea un codice QR che apre il tuo profilo freelance su Fiverr.',
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
      template: 'https://www.fiverr.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'fiverr.com/',
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
