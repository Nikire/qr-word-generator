import { siOnlyfans } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'onlyfans',
  name: 'OnlyFans',
  icon: { path: siOnlyfans.path, color: `#${siOnlyfans.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de OnlyFans.',
    en: 'Create a QR code that opens your OnlyFans profile.',
    pt: 'Crie um QR code que abre seu perfil do OnlyFans.',
    fr: 'Créez un code QR qui ouvre votre profil OnlyFans.',
    it: 'Crea un codice QR che apre il tuo profilo OnlyFans.',
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
      template: 'https://onlyfans.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{1,50}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Nome de usuário',
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
            es: 'Es lo que va después de onlyfans.com/ en tu perfil.',
            en: 'It\'s what comes after onlyfans.com/ on your profile.',
            pt: 'É o que vem depois de onlyfans.com/ no seu perfil.',
            fr: 'C\'est ce qui suit onlyfans.com/ sur votre profil.',
            it: 'È ciò che segue onlyfans.com/ nel tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
