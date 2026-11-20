import { siTiktok } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'tiktok',
  name: 'TikTok',
  icon: { path: siTiktok.path, color: `#${siTiktok.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de TikTok.',
    en: 'Create a QR code that opens your TikTok profile.',
    pt: 'Crie um QR code que abre seu perfil do TikTok.',
    fr: 'Créez un code QR qui ouvre votre profil TikTok.',
    it: 'Crea un codice QR che apre il tuo profilo TikTok.',
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
      template: 'https://www.tiktok.com/@{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 24,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^(?!.*\\.$)[A-Za-z0-9_.]{2,24}$',
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
            es: 'Tu @usuario de TikTok, no el nombre visible.',
            en: 'Your TikTok @username, not the display name.',
            pt: 'Seu @usuário do TikTok, não o nome de exibição.',
            fr: 'Votre @nom d\'utilisateur TikTok, pas le nom affiché.',
            it: 'Il tuo @nome utente TikTok, non il nome visualizzato.',
          },
        },
      ],
    },
  ],
};

export default template;
