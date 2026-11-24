import { siHashnode } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'hashnode',
  name: 'Hashnode',
  icon: { path: siHashnode.path, color: `#${siHashnode.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Hashnode.',
    en: 'Create a QR code that opens your Hashnode profile.',
    pt: 'Crie um QR code que abre seu perfil no Hashnode.',
    fr: 'Créez un QR code qui ouvre votre profil Hashnode.',
    it: 'Crea un codice QR che apre il tuo profilo Hashnode.',
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
      template: 'https://hashnode.com/@{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'hashnode.com/@',
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
