import { siPinterest } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'pinterest',
  name: 'Pinterest',
  icon: { path: siPinterest.path, color: `#${siPinterest.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Pinterest.',
    en: 'Create a QR code that opens your Pinterest profile.',
    pt: 'Crie um QR code que abre seu perfil do Pinterest.',
    fr: 'Créez un code QR qui ouvre votre profil Pinterest.',
    it: 'Crea un codice QR che apre il tuo profilo Pinterest.',
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
      template: 'https://www.pinterest.com/{username}/',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 30,
          prefix: 'pinterest.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_]{3,30}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Nome de usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: mionegozio',
          },
          hint: {
            es: 'Lo ves en tu perfil, debajo de tu nombre.',
            en: 'You\'ll find it on your profile, under your name.',
            pt: 'Aparece no seu perfil, abaixo do seu nome.',
            fr: 'Il apparaît sur votre profil, sous votre nom.',
            it: 'Lo trovi nel tuo profilo, sotto il tuo nome.',
          },
        },
      ],
    },
  ],
};

export default template;
