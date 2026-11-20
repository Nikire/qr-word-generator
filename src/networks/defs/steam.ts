import { siSteam } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'steam',
  name: 'Steam',
  icon: { path: siSteam.path, color: `#${siSteam.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Steam o la página de tu juego.',
    en: 'Create a QR code that opens your Steam profile or your game\'s store page.',
    pt: 'Crie um QR code que abre seu perfil na Steam ou a página do seu jogo.',
    fr: 'Créez un QR code qui ouvre votre profil Steam ou la page de votre jeu.',
    it: 'Crea un codice QR che apre il tuo profilo Steam o la pagina del tuo gioco.',
  },
  modes: [
    {
      id: 'custom',
      label: {
        es: 'URL personalizada',
        en: 'Custom URL',
        pt: 'URL personalizada',
        fr: 'URL personnalisée',
        it: 'URL personalizzato',
      },
      template: 'https://steamcommunity.com/id/{customUrl}',
      fields: [
        {
          id: 'customUrl',
          type: 'text',
          required: true,
          maxLength: 32,
          prefix: 'steamcommunity.com/id/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{2,32}$',
          label: {
            es: 'URL personalizada',
            en: 'Custom URL',
            pt: 'URL personalizada',
            fr: 'URL personnalisée',
            it: 'URL personalizzato',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Es lo que va después de /id/ en tu perfil, si configuraste una URL personalizada.',
            en: 'It\'s what comes after /id/ on your profile, if you set a custom URL.',
            pt: 'É o que vem depois de /id/ no seu perfil, se você definiu uma URL personalizada.',
            fr: 'C\'est ce qui suit /id/ sur votre profil, si vous avez défini une URL personnalisée.',
            it: 'È ciò che segue /id/ nel tuo profilo, se hai impostato un URL personalizzato.',
          },
        },
      ],
    },
    {
      id: 'steamid',
      label: {
        es: 'Steam ID',
        en: 'Steam ID',
        pt: 'Steam ID',
        fr: 'Steam ID',
        it: 'Steam ID',
      },
      template: 'https://steamcommunity.com/profiles/{steamId}',
      fields: [
        {
          id: 'steamId',
          type: 'text',
          required: true,
          maxLength: 17,
          prefix: 'steamcommunity.com/profiles/',
          sanitize: 'digits',
          pattern: '^7656119\\d{10}$',
          label: {
            es: 'Steam ID',
            en: 'Steam ID',
            pt: 'Steam ID',
            fr: 'Steam ID',
            it: 'Steam ID',
          },
          placeholder: {
            es: 'Ej.: 76561197960287930',
            en: 'e.g. 76561197960287930',
            pt: 'Ex.: 76561197960287930',
            fr: 'Ex. : 76561197960287930',
            it: 'Es.: 76561197960287930',
          },
          hint: {
            es: 'Número de 17 dígitos que empieza con 7656119.',
            en: '17-digit number starting with 7656119.',
            pt: 'Número de 17 dígitos que começa com 7656119.',
            fr: 'Numéro à 17 chiffres commençant par 7656119.',
            it: 'Numero di 17 cifre che inizia con 7656119.',
          },
        },
      ],
    },
    {
      id: 'game',
      label: {
        es: 'Juego',
        en: 'Game',
        pt: 'Jogo',
        fr: 'Jeu',
        it: 'Gioco',
      },
      template: 'https://store.steampowered.com/app/{appId}/',
      fields: [
        {
          id: 'appId',
          type: 'text',
          required: true,
          maxLength: 10,
          prefix: 'store.steampowered.com/app/',
          sanitize: 'trim',
          pattern: '^\\d{1,10}$',
          label: {
            es: 'App ID',
            en: 'App ID',
            pt: 'App ID',
            fr: 'App ID',
            it: 'App ID',
          },
          placeholder: {
            es: 'Ej.: 620',
            en: 'e.g. 620',
            pt: 'Ex.: 620',
            fr: 'Ex. : 620',
            it: 'Es.: 620',
          },
          hint: {
            es: 'Es el número después de /app/ en la página de la tienda.',
            en: 'It\'s the number after /app/ on the store page.',
            pt: 'É o número depois de /app/ na página da loja.',
            fr: 'C\'est le numéro après /app/ sur la page de la boutique.',
            it: 'È il numero dopo /app/ nella pagina dello store.',
          },
        },
      ],
    },
  ],
};

export default template;
