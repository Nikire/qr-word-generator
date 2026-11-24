import { siVimeo } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'vimeo',
  name: 'Vimeo',
  icon: { path: siVimeo.path, color: `#${siVimeo.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil o un video de Vimeo.',
    en: 'Create a QR code that opens your Vimeo profile or a video.',
    pt: 'Crie um QR code que abre seu perfil ou um vídeo do Vimeo.',
    fr: 'Créez un code QR qui ouvre votre profil ou une vidéo Vimeo.',
    it: 'Crea un codice QR che apre il tuo profilo o un video di Vimeo.',
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
      template: 'https://vimeo.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: 'vimeo.com/',
          sanitize: 'handle',
          pattern: '^(?![0-9]+$)(?!(?:videos|showcases|channels|about|likes|following|followers)$)[A-Za-z0-9_]+$',
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
            es: 'Es lo que sigue a vimeo.com/ en tu perfil, por ejemplo user12345678.',
            en: 'It\'s what follows vimeo.com/ on your profile, e.g. user12345678.',
            pt: 'É o que vem depois de vimeo.com/ no seu perfil, por exemplo user12345678.',
            fr: 'C\'est ce qui suit vimeo.com/ sur votre profil, par ex. user12345678.',
            it: 'È ciò che segue vimeo.com/ nel tuo profilo, ad es. user12345678.',
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
      template: 'https://vimeo.com/{videoId}',
      fields: [
        {
          id: 'videoId',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'handle',
          pattern: '^[0-9]+$',
          label: {
            es: 'Enlace o ID del video',
            en: 'Video link or ID',
            pt: 'Link ou ID do vídeo',
            fr: 'Lien ou ID de la vidéo',
            it: 'Link o ID del video',
          },
          placeholder: {
            es: 'Ej.: 76979871',
            en: 'e.g. 76979871',
            pt: 'Ex.: 76979871',
            fr: 'Ex. : 76979871',
            it: 'Es.: 76979871',
          },
          hint: {
            es: 'Es el número al final del enlace del video.',
            en: 'It\'s the number at the end of the video link.',
            pt: 'É o número no final do link do vídeo.',
            fr: 'C\'est le numéro à la fin du lien de la vidéo.',
            it: 'È il numero alla fine del link del video.',
          },
        },
      ],
    },
  ],
};

export default template;
