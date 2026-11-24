import { siMedium } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'medium',
  name: 'Medium',
  icon: { path: siMedium.path, color: `#${siMedium.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Medium.',
    en: 'Create a QR code that opens your Medium profile.',
    pt: 'Crie um QR code que abre seu perfil no Medium.',
    fr: 'Créez un QR code qui ouvre votre profil Medium.',
    it: 'Crea un codice QR che apre il tuo profilo Medium.',
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
      template: 'https://medium.com/@{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: 'medium.com/@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_.-]{1,50}$',
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
          hint: {
            es: 'Escríbelo sin la @.',
            en: 'Enter it without the @.',
            pt: 'Digite sem o @.',
            fr: 'Saisissez-le sans le @.',
            it: 'Inseriscilo senza la @.',
          },
        },
      ],
    },
  ],
};

export default template;
