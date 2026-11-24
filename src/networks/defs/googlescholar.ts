import { siGooglescholar } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'googlescholar',
  name: 'Google Scholar',
  icon: { path: siGooglescholar.path, color: `#${siGooglescholar.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Google Académico.',
    en: 'Create a QR code that opens your Google Scholar profile.',
    pt: 'Crie um QR code que abre seu perfil no Google Acadêmico.',
    fr: 'Créez un QR code qui ouvre votre profil Google Scholar.',
    it: 'Crea un codice QR che apre il tuo profilo Google Scholar.',
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
      template: 'https://scholar.google.com/citations?user={userId}',
      fields: [
        {
          id: 'userId',
          type: 'text',
          required: true,
          maxLength: 12,
          prefix: 'citations?user=',
          sanitize: 'trim',
          pattern: '^[A-Za-z0-9_-]{12}$',
          label: {
            es: 'ID de usuario',
            en: 'User ID',
            pt: 'ID de usuário',
            fr: 'ID utilisateur',
            it: 'ID utente',
          },
          placeholder: {
            es: 'Ej.: JicYPdAAAAAJ',
            en: 'e.g. JicYPdAAAAAJ',
            pt: 'Ex.: JicYPdAAAAAJ',
            fr: 'Ex. : JicYPdAAAAAJ',
            it: 'Es.: JicYPdAAAAAJ',
          },
          hint: {
            es: 'Es el código de 12 caracteres después de user= en la URL de tu perfil.',
            en: 'It\'s the 12-character code after user= in your profile URL.',
            pt: 'É o código de 12 caracteres depois de user= na URL do seu perfil.',
            fr: 'C\'est le code de 12 caractères après user= dans l\'URL de votre profil.',
            it: 'È il codice di 12 caratteri dopo user= nell\'URL del tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
