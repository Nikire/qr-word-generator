import { siMixcloud } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'mixcloud',
  name: 'Mixcloud',
  icon: { path: siMixcloud.path, color: `#${siMixcloud.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Mixcloud.',
    en: 'Create a QR code that opens your Mixcloud profile.',
    pt: 'Crie um QR code que abre seu perfil do Mixcloud.',
    fr: 'Créez un code QR qui ouvre votre profil Mixcloud.',
    it: 'Crea un codice QR che apre il tuo profilo Mixcloud.',
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
      template: 'https://www.mixcloud.com/{username}/',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: 'mixcloud.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,60}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: midj',
            en: 'e.g. mydj',
            pt: 'Ex.: meudj',
            fr: 'Ex. : mondj',
            it: 'Es.: ilmiodj',
          },
          hint: {
            es: 'Es lo que sigue a mixcloud.com/ en tu perfil.',
            en: 'It\'s what follows mixcloud.com/ on your profile.',
            pt: 'É o que vem depois de mixcloud.com/ no seu perfil.',
            fr: 'C\'est ce qui suit mixcloud.com/ sur votre profil.',
            it: 'È ciò che segue mixcloud.com/ nel tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
