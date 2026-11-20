import { siAudiomack } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'audiomack',
  name: 'Audiomack',
  icon: { path: siAudiomack.path, color: `#${siAudiomack.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Audiomack.',
    en: 'Create a QR code that opens your Audiomack profile.',
    pt: 'Crie um QR code que abre seu perfil do Audiomack.',
    fr: 'Créez un code QR qui ouvre votre profil Audiomack.',
    it: 'Crea un codice QR che apre il tuo profilo Audiomack.',
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
      template: 'https://audiomack.com/{slug}',
      fields: [
        {
          id: 'slug',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: 'audiomack.com/',
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
            es: 'Ej.: mibanda',
            en: 'e.g. myband',
            pt: 'Ex.: minhabanda',
            fr: 'Ex. : mongroupe',
            it: 'Es.: lamiaband',
          },
          hint: {
            es: 'Es lo que sigue a audiomack.com/ en tu perfil.',
            en: 'It\'s what follows audiomack.com/ on your profile.',
            pt: 'É o que vem depois de audiomack.com/ no seu perfil.',
            fr: 'C\'est ce qui suit audiomack.com/ sur votre profil.',
            it: 'È ciò che segue audiomack.com/ nel tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
