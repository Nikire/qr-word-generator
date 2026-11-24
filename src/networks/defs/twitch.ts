import { siTwitch } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'twitch',
  name: 'Twitch',
  icon: { path: siTwitch.path, color: `#${siTwitch.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu canal de Twitch.',
    en: 'Create a QR code that opens your Twitch channel.',
    pt: 'Crie um QR code que abre seu canal da Twitch.',
    fr: 'Créez un code QR qui ouvre votre chaîne Twitch.',
    it: 'Crea un codice QR che apre il tuo canale Twitch.',
  },
  modes: [
    {
      id: 'channel',
      label: {
        es: 'Canal',
        en: 'Channel',
        pt: 'Canal',
        fr: 'Chaîne',
        it: 'Canale',
      },
      template: 'https://www.twitch.tv/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: 'twitch.tv/',
          sanitize: 'handle',
          pattern: '^(?!(?:videos|clips|schedule|about)$)[A-Za-z0-9_]{2,25}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: ilmionegozio',
          },
          hint: {
            es: 'Solo letras, números y guion bajo.',
            en: 'Letters, numbers and underscores only.',
            pt: 'Apenas letras, números e sublinhado.',
            fr: 'Lettres, chiffres et tiret bas uniquement.',
            it: 'Solo lettere, numeri e trattino basso.',
          },
        },
      ],
    },
  ],
};

export default template;
