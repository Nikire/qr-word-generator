import { siQuora } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'quora',
  name: 'Quora',
  icon: { path: siQuora.path, color: `#${siQuora.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Quora.',
    en: 'Create a QR code that opens your Quora profile.',
    pt: 'Crie um QR code que abre seu perfil do Quora.',
    fr: 'Créez un code QR qui ouvre votre profil Quora.',
    it: 'Crea un codice QR che apre il tuo profilo Quora.',
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
      template: 'https://www.quora.com/profile/{profile}',
      fields: [
        {
          id: 'profile',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: 'quora.com/profile/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{1,100}$',
          label: {
            es: 'Perfil',
            en: 'Profile',
            pt: 'Perfil',
            fr: 'Profil',
            it: 'Profilo',
          },
          placeholder: {
            es: 'Ej.: Juan-Perez-12',
            en: 'e.g. Jane-Doe-12',
            pt: 'Ex.: Joao-Silva-12',
            fr: 'Ex. : Marie-Dupont-12',
            it: 'Es.: Mario-Rossi-12',
          },
          hint: {
            es: 'Copia lo que aparece después de quora.com/profile/ en tu perfil.',
            en: 'Copy what appears after quora.com/profile/ on your profile.',
            pt: 'Copie o que aparece depois de quora.com/profile/ no seu perfil.',
            fr: 'Copiez ce qui suit quora.com/profile/ sur votre profil.',
            it: 'Copia ciò che segue quora.com/profile/ nel tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
