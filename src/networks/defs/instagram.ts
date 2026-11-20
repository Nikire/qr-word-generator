import { siInstagram } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'instagram',
  name: 'Instagram',
  icon: { path: siInstagram.path, color: `#${siInstagram.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Instagram o un chat directo.',
    en: 'Create a QR code that opens your Instagram profile or a direct chat.',
    pt: 'Crie um QR code que abre seu perfil do Instagram ou uma conversa direta.',
    fr: 'Créez un code QR qui ouvre votre profil Instagram ou une conversation privée.',
    it: 'Crea un codice QR che apre il tuo profilo Instagram o una chat diretta.',
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
      template: 'https://www.instagram.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 30,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^(?!\\.)(?!.*\\.\\.)(?!.*\\.$)[A-Za-z0-9._]{1,30}$',
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
            es: 'Es el nombre que aparece arriba de tu perfil, sin la @.',
            en: 'The name shown at the top of your profile, without the @.',
            pt: 'É o nome que aparece no topo do seu perfil, sem o @.',
            fr: 'Le nom affiché en haut de votre profil, sans le @.',
            it: 'Il nome mostrato in cima al tuo profilo, senza la @.',
          },
        },
      ],
    },
    {
      id: 'dm',
      label: {
        es: 'Mensaje directo',
        en: 'Direct message',
        pt: 'Mensagem direta',
        fr: 'Message privé',
        it: 'Messaggio diretto',
      },
      template: 'https://ig.me/m/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 30,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^(?!\\.)(?!.*\\.\\.)(?!.*\\.$)[A-Za-z0-9._]{1,30}$',
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
            es: 'Al escanearlo se abre un chat de Instagram con esta cuenta.',
            en: 'Scanning it opens an Instagram chat with this account.',
            pt: 'Ao escanear, abre uma conversa do Instagram com esta conta.',
            fr: 'Le scan ouvre une conversation Instagram avec ce compte.',
            it: 'Scansionandolo si apre una chat Instagram con questo account.',
          },
        },
      ],
    },
  ],
};

export default template;
