import { siYoutube } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'youtube',
  name: 'YouTube',
  icon: { path: siYoutube.path, color: `#${siYoutube.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu canal o un video de YouTube.',
    en: 'Create a QR code that opens your YouTube channel or a video.',
    pt: 'Crie um QR code que abre seu canal ou um vídeo do YouTube.',
    fr: 'Créez un code QR qui ouvre votre chaîne ou une vidéo YouTube.',
    it: 'Crea un codice QR che apre il tuo canale o un video di YouTube.',
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
      template: 'https://www.youtube.com/@{handle}',
      fields: [
        {
          id: 'handle',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^(?!(?:videos|shorts|streams|featured|playlists|community|posts|about|live|podcasts|releases|store|search|courses)$)[^\\s/?#@]{3,30}$',
          label: {
            es: 'Identificador',
            en: 'Handle',
            pt: 'Identificador',
            fr: 'Identifiant',
            it: 'Handle',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: ilmionegozio',
          },
          hint: {
            es: 'Lo ves en tu canal, después de youtube.com/@.',
            en: 'It appears on your channel, after youtube.com/@.',
            pt: 'Aparece no seu canal, depois de youtube.com/@.',
            fr: 'Il apparaît sur votre chaîne, après youtube.com/@.',
            it: 'Lo trovi sul tuo canale, dopo youtube.com/@.',
          },
        },
      ],
    },
    {
      id: 'subscribe',
      label: {
        es: 'Suscribirse',
        en: 'Subscribe',
        pt: 'Inscrever-se',
        fr: 'S\'abonner',
        it: 'Iscriviti',
      },
      template: 'https://www.youtube.com/@{handle}?sub_confirmation=1',
      fields: [
        {
          id: 'handle',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^(?!(?:videos|shorts|streams|featured|playlists|community|posts|about|live|podcasts|releases|store|search|courses)$)[^\\s/?#@]{3,30}$',
          label: {
            es: 'Identificador',
            en: 'Handle',
            pt: 'Identificador',
            fr: 'Identifiant',
            it: 'Handle',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: ilmionegozio',
          },
          hint: {
            es: 'En la web, YouTube pide confirmar la suscripción; en la app abre el canal.',
            en: 'On the web, YouTube asks to confirm the subscription; in the app it opens the channel.',
            pt: 'Na web, o YouTube pede para confirmar a inscrição; no app, abre o canal.',
            fr: 'Sur le web, YouTube demande de confirmer l\'abonnement ; dans l\'appli, la chaîne s\'ouvre.',
            it: 'Sul web, YouTube chiede di confermare l\'iscrizione; nell\'app apre il canale.',
          },
        },
      ],
    },
    {
      id: 'video',
      label: {
        es: 'Video',
        en: 'Video',
        pt: 'Vídeo',
        fr: 'Vidéo',
        it: 'Video',
      },
      template: 'https://youtu.be/{videoId}',
      fields: [
        {
          id: 'videoId',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{11}$',
          label: {
            es: 'Enlace o ID del video',
            en: 'Video link or ID',
            pt: 'Link ou ID do vídeo',
            fr: 'Lien ou ID de la vidéo',
            it: 'Link o ID del video',
          },
          placeholder: {
            es: 'Ej.: dQw4w9WgXcQ',
            en: 'e.g. dQw4w9WgXcQ',
            pt: 'Ex.: dQw4w9WgXcQ',
            fr: 'Ex. : dQw4w9WgXcQ',
            it: 'Es.: dQw4w9WgXcQ',
          },
          hint: {
            es: 'Pegá el enlace del botón Compartir (youtu.be/…) o el ID de 11 caracteres.',
            en: 'Paste the link from the Share button (youtu.be/…) or the 11-character ID.',
            pt: 'Cole o link do botão Compartilhar (youtu.be/…) ou o ID de 11 caracteres.',
            fr: 'Collez le lien du bouton Partager (youtu.be/…) ou l\'ID de 11 caractères.',
            it: 'Incolla il link del pulsante Condividi (youtu.be/…) o l\'ID di 11 caratteri.',
          },
        },
      ],
    },
  ],
};

export default template;
