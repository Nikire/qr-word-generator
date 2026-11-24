import { siKakaotalk } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'kakaotalk',
  name: 'KakaoTalk',
  icon: { path: siKakaotalk.path, color: `#${siKakaotalk.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR que abre el chat o el perfil de tu canal de KakaoTalk.',
    en: 'Create a QR code that opens the chat or profile of your KakaoTalk Channel.',
    pt: 'Crie um QR code que abre o chat ou o perfil do seu canal do KakaoTalk.',
    fr: 'Créez un code QR qui ouvre la discussion ou le profil de votre chaîne KakaoTalk.',
    it: 'Crea un codice QR che apre la chat o il profilo del tuo canale KakaoTalk.',
  },
  modes: [
    {
      id: 'profile',
      label: {
        es: 'Perfil del canal',
        en: 'Channel profile',
        pt: 'Perfil do canal',
        fr: 'Profil de la chaîne',
        it: 'Profilo del canale',
      },
      template: 'https://pf.kakao.com/{channelId}',
      fields: [
        {
          id: 'channelId',
          type: 'text',
          required: true,
          maxLength: 21,
          prefix: 'pf.kakao.com/',
          sanitize: 'trim',
          pattern: '^_[A-Za-z0-9]{3,20}$',
          label: {
            es: 'ID del canal',
            en: 'Channel ID',
            pt: 'ID do canal',
            fr: 'ID de la chaîne',
            it: 'ID del canale',
          },
          placeholder: {
            es: 'Ej.: _ZeUTxl',
            en: 'e.g. _ZeUTxl',
            pt: 'Ex.: _ZeUTxl',
            fr: 'Ex. : _ZeUTxl',
            it: 'Es.: _ZeUTxl',
          },
          hint: {
            es: 'Empieza con guion bajo; es lo que sigue a pf.kakao.com/ en la URL de tu canal.',
            en: 'Starts with an underscore; it\'s what follows pf.kakao.com/ in your channel URL.',
            pt: 'Começa com sublinhado; é o que vem depois de pf.kakao.com/ na URL do canal.',
            fr: 'Commence par un tiret bas ; c\'est ce qui suit pf.kakao.com/ dans l\'URL de la chaîne.',
            it: 'Inizia con un trattino basso; è ciò che segue pf.kakao.com/ nell\'URL del canale.',
          },
        },
      ],
    },
    {
      id: 'chat',
      label: {
        es: 'Chat del canal',
        en: 'Channel chat',
        pt: 'Chat do canal',
        fr: 'Discussion de la chaîne',
        it: 'Chat del canale',
      },
      template: 'https://pf.kakao.com/{channelId}/chat',
      fields: [
        {
          id: 'channelId',
          type: 'text',
          required: true,
          maxLength: 21,
          prefix: 'pf.kakao.com/',
          sanitize: 'trim',
          pattern: '^_[A-Za-z0-9]{3,20}$',
          label: {
            es: 'ID del canal',
            en: 'Channel ID',
            pt: 'ID do canal',
            fr: 'ID de la chaîne',
            it: 'ID del canale',
          },
          placeholder: {
            es: 'Ej.: _ZeUTxl',
            en: 'e.g. _ZeUTxl',
            pt: 'Ex.: _ZeUTxl',
            fr: 'Ex. : _ZeUTxl',
            it: 'Es.: _ZeUTxl',
          },
          hint: {
            es: 'Empieza con guion bajo; es lo que sigue a pf.kakao.com/ en la URL de tu canal.',
            en: 'Starts with an underscore; it\'s what follows pf.kakao.com/ in your channel URL.',
            pt: 'Começa com sublinhado; é o que vem depois de pf.kakao.com/ na URL do canal.',
            fr: 'Commence par un tiret bas ; c\'est ce qui suit pf.kakao.com/ dans l\'URL de la chaîne.',
            it: 'Inizia con un trattino basso; è ciò che segue pf.kakao.com/ nell\'URL del canale.',
          },
        },
      ],
    },
  ],
};

export default template;
