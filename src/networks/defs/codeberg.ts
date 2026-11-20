import { siCodeberg } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'codeberg',
  name: 'Codeberg',
  icon: { path: siCodeberg.path, color: `#${siCodeberg.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Codeberg.',
    en: 'Create a QR code that opens your Codeberg profile.',
    pt: 'Crie um QR code que abre seu perfil no Codeberg.',
    fr: 'Créez un QR code qui ouvre votre profil Codeberg.',
    it: 'Crea un codice QR che apre il tuo profilo Codeberg.',
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
      template: 'https://codeberg.org/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'codeberg.org/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_.-]{1,40}$',
          label: {
            es: 'Usuario u organización',
            en: 'User or organization',
            pt: 'Usuário ou organização',
            fr: 'Utilisateur ou organisation',
            it: 'Utente o organizzazione',
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
