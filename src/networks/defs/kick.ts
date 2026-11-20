import { siKick } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'kick',
  name: 'Kick',
  icon: { path: siKick.path, color: `#${siKick.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Creá un código QR que abre tu canal de Kick.',
    en: 'Create a QR code that opens your Kick channel.',
    pt: 'Crie um QR code que abre seu canal da Kick.',
    fr: 'Créez un code QR qui ouvre votre chaîne Kick.',
    it: 'Crea un codice QR che apre il tuo canale Kick.',
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
      template: 'https://kick.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: 'kick.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{2,30}$',
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
        },
      ],
    },
  ],
};

export default template;
