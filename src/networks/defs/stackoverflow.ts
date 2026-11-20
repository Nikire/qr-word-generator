import { siStackoverflow } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'stackoverflow',
  name: 'Stack Overflow',
  icon: { path: siStackoverflow.path, color: `#${siStackoverflow.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Stack Overflow.',
    en: 'Create a QR code that opens your Stack Overflow profile.',
    pt: 'Crie um QR code que abre seu perfil no Stack Overflow.',
    fr: 'Créez un QR code qui ouvre votre profil Stack Overflow.',
    it: 'Crea un codice QR che apre il tuo profilo Stack Overflow.',
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
      template: 'https://stackoverflow.com/users/{userId}',
      fields: [
        {
          id: 'userId',
          type: 'text',
          required: true,
          maxLength: 12,
          prefix: 'stackoverflow.com/users/',
          sanitize: 'trim',
          pattern: '^\\d{1,12}$',
          label: {
            es: 'ID de usuario',
            en: 'User ID',
            pt: 'ID de usuário',
            fr: 'ID utilisateur',
            it: 'ID utente',
          },
          placeholder: {
            es: 'Ej.: 22656',
            en: 'e.g. 22656',
            pt: 'Ex.: 22656',
            fr: 'Ex. : 22656',
            it: 'Es.: 22656',
          },
          hint: {
            es: 'Es el número que aparece en la URL de tu perfil, después de /users/.',
            en: 'It\'s the number in your profile URL, right after /users/.',
            pt: 'É o número na URL do seu perfil, logo depois de /users/.',
            fr: 'C\'est le numéro dans l\'URL de votre profil, juste après /users/.',
            it: 'È il numero nell\'URL del tuo profilo, subito dopo /users/.',
          },
        },
      ],
    },
  ],
};

export default template;
