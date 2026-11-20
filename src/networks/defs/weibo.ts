import { siSinaweibo } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'weibo',
  name: 'Weibo',
  icon: { path: siSinaweibo.path, color: `#${siSinaweibo.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Weibo.',
    en: 'Create a QR code that opens your Weibo profile.',
    pt: 'Crie um QR code que abre seu perfil do Weibo.',
    fr: 'Créez un code QR qui ouvre votre profil Weibo.',
    it: 'Crea un codice QR che apre il tuo profilo Weibo.',
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
      template: 'https://weibo.com/u/{uid}',
      fields: [
        {
          id: 'uid',
          type: 'text',
          required: true,
          maxLength: 12,
          prefix: 'weibo.com/u/',
          sanitize: 'handle',
          pattern: '^[0-9]{5,12}$',
          label: {
            es: 'ID de usuario',
            en: 'User ID',
            pt: 'ID de usuário',
            fr: 'ID utilisateur',
            it: 'ID utente',
          },
          placeholder: {
            es: 'Ej.: 1699432410',
            en: 'e.g. 1699432410',
            pt: 'Ex.: 1699432410',
            fr: 'Ex. : 1699432410',
            it: 'Es.: 1699432410',
          },
          hint: {
            es: 'Es el número que aparece después de weibo.com/u/ en la dirección de tu perfil.',
            en: 'The number shown after weibo.com/u/ in your profile address.',
            pt: 'É o número que aparece depois de weibo.com/u/ no endereço do seu perfil.',
            fr: 'Le numéro qui suit weibo.com/u/ dans l\'adresse de votre profil.',
            it: 'Il numero che segue weibo.com/u/ nell\'indirizzo del profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
