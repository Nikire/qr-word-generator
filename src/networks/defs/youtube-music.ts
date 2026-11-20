import { siYoutubemusic } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'youtube-music',
  name: 'YouTube Music',
  icon: { path: siYoutubemusic.path, color: `#${siYoutubemusic.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de artista en YouTube Music.',
    en: 'Create a QR code that opens your artist profile on YouTube Music.',
    pt: 'Crie um QR code que abre seu perfil de artista no YouTube Music.',
    fr: 'Créez un code QR qui ouvre votre profil d\'artiste sur YouTube Music.',
    it: 'Crea un codice QR che apre il tuo profilo artista su YouTube Music.',
  },
  modes: [
    {
      id: 'channel',
      label: {
        es: 'Artista',
        en: 'Artist',
        pt: 'Artista',
        fr: 'Artiste',
        it: 'Artista',
      },
      template: 'https://music.youtube.com/channel/{channelId}',
      fields: [
        {
          id: 'channelId',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'handle',
          pattern: '^UC[A-Za-z0-9_-]{22}$',
          label: {
            es: 'Enlace o ID del canal',
            en: 'Channel link or ID',
            pt: 'Link ou ID do canal',
            fr: 'Lien ou ID de la chaîne',
            it: 'Link o ID del canale',
          },
          placeholder: {
            es: 'Ej.: UCuAXFkgsw1L7xaCfnd5JJOw',
            en: 'e.g. UCuAXFkgsw1L7xaCfnd5JJOw',
            pt: 'Ex.: UCuAXFkgsw1L7xaCfnd5JJOw',
            fr: 'Ex. : UCuAXFkgsw1L7xaCfnd5JJOw',
            it: 'Es.: UCuAXFkgsw1L7xaCfnd5JJOw',
          },
          hint: {
            es: 'Pegá el enlace de tu perfil de artista; el ID empieza con UC.',
            en: 'Paste your artist profile link; the ID starts with UC.',
            pt: 'Cole o link do seu perfil de artista; o ID começa com UC.',
            fr: 'Collez le lien de votre profil d\'artiste ; l\'ID commence par UC.',
            it: 'Incolla il link del tuo profilo artista; l\'ID inizia con UC.',
          },
        },
      ],
    },
  ],
};

export default template;
