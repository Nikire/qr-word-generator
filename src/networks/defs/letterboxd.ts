import { siLetterboxd } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'letterboxd',
  name: 'Letterboxd',
  icon: { path: siLetterboxd.path, color: `#${siLetterboxd.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Letterboxd.',
    en: 'Create a QR code that opens your Letterboxd profile.',
    pt: 'Crie um QR code que abre seu perfil no Letterboxd.',
    fr: 'Créez un QR code qui ouvre votre profil Letterboxd.',
    it: 'Crea un codice QR che apre il tuo profilo Letterboxd.',
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
      template: 'https://letterboxd.com/{username}/',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 15,
          prefix: 'letterboxd.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_]{2,15}$',
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
