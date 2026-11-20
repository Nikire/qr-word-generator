import { siDailymotion } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'dailymotion',
  name: 'Dailymotion',
  icon: { path: siDailymotion.path, color: `#${siDailymotion.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu canal de Dailymotion.',
    en: 'Create a QR code that opens your Dailymotion channel.',
    pt: 'Crie um QR code que abre seu canal do Dailymotion.',
    fr: 'Créez un code QR qui ouvre votre chaîne Dailymotion.',
    it: 'Crea un codice QR che apre il tuo canale Dailymotion.',
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
      template: 'https://www.dailymotion.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: 'dailymotion.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_.-]{1,50}$',
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
            es: 'Es lo que sigue a dailymotion.com/ en tu canal.',
            en: 'It\'s what follows dailymotion.com/ on your channel.',
            pt: 'É o que vem depois de dailymotion.com/ no seu canal.',
            fr: 'C\'est ce qui suit dailymotion.com/ sur votre chaîne.',
            it: 'È ciò che segue dailymotion.com/ nel tuo canale.',
          },
        },
      ],
    },
  ],
};

export default template;
