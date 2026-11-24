import { siRumble } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'rumble',
  name: 'Rumble',
  icon: { path: siRumble.path, color: `#${siRumble.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR que abre tu canal de Rumble.',
    en: 'Create a QR code that opens your Rumble channel.',
    pt: 'Crie um QR code que abre seu canal do Rumble.',
    fr: 'Créez un code QR qui ouvre votre chaîne Rumble.',
    it: 'Crea un codice QR che apre il tuo canale Rumble.',
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
      template: 'https://rumble.com/c/{channel}',
      fields: [
        {
          id: 'channel',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: 'rumble.com/c/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{3,60}$',
          label: {
            es: 'Nombre del canal',
            en: 'Channel name',
            pt: 'Nome do canal',
            fr: 'Nom de la chaîne',
            it: 'Nome del canale',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: ilmionegozio',
          },
          hint: {
            es: 'Es lo que sigue a rumble.com/c/ en tu canal.',
            en: 'It\'s what follows rumble.com/c/ on your channel.',
            pt: 'É o que vem depois de rumble.com/c/ no seu canal.',
            fr: 'C\'est ce qui suit rumble.com/c/ sur votre chaîne.',
            it: 'È ciò che segue rumble.com/c/ nel tuo canale.',
          },
        },
      ],
    },
  ],
};

export default template;
