import { siThreema } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'threema',
  name: 'Threema',
  icon: { path: siThreema.path, color: `#${siThreema.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR que abre un chat de Threema con tu ID.',
    en: 'Create a QR code that opens a Threema chat with your ID.',
    pt: 'Crie um QR code que abre uma conversa no Threema com seu ID.',
    fr: 'Créez un code QR qui ouvre une conversation Threema avec votre ID.',
    it: 'Crea un codice QR che apre una chat Threema con il tuo ID.',
  },
  modes: [
    {
      id: 'id',
      label: {
        es: 'ID de Threema',
        en: 'Threema ID',
        pt: 'ID do Threema',
        fr: 'ID Threema',
        it: 'ID Threema',
      },
      template: 'https://threema.id/{threemaId}',
      query: [{ param: 'text', field: 'message' }],
      fields: [
        {
          id: 'threemaId',
          type: 'text',
          required: true,
          maxLength: 8,
          prefix: 'threema.id/',
          sanitize: 'handle',
          pattern: '^[A-Z0-9]{8}$',
          label: {
            es: 'ID de Threema',
            en: 'Threema ID',
            pt: 'ID do Threema',
            fr: 'ID Threema',
            it: 'ID Threema',
          },
          placeholder: {
            es: 'Ej.: ABCD1234',
            en: 'e.g. ABCD1234',
            pt: 'Ex.: ABCD1234',
            fr: 'Ex. : ABCD1234',
            it: 'Es.: ABCD1234',
          },
          hint: {
            es: '8 caracteres en mayúsculas; lo ves en Mi perfil.',
            en: '8 uppercase characters, shown in My Profile.',
            pt: '8 caracteres maiúsculos; aparece em Meu perfil.',
            fr: '8 caractères en majuscules, visibles dans Mon profil.',
            it: '8 caratteri maiuscoli, visibili in Il mio profilo.',
          },
        },
        {
          id: 'message',
          type: 'textarea',
          required: false,
          maxLength: 1000,
          sanitize: 'trim',
          label: {
            es: 'Mensaje',
            en: 'Message',
            pt: 'Mensagem',
            fr: 'Message',
            it: 'Messaggio',
          },
          placeholder: {
            es: 'Ej.: Hola, te escribo por tu anuncio',
            en: 'e.g. Hi, I\'m writing about your ad',
            pt: 'Ex.: Olá, estou escrevendo sobre seu anúncio',
            fr: 'Ex. : Bonjour, je vous écris au sujet de votre annonce',
            it: 'Es.: Ciao, ti scrivo per il tuo annuncio',
          },
          hint: {
            es: 'Opcional. Aparece escrito en el chat, listo para enviar.',
            en: 'Optional. It appears pre-typed in the chat, ready to send.',
            pt: 'Opcional. Aparece já digitada na conversa, pronta para enviar.',
            fr: 'Facultatif. Il apparaît déjà saisi dans la conversation, prêt à envoyer.',
            it: 'Facoltativo. Compare già scritto nella chat, pronto da inviare.',
          },
        },
      ],
    },
  ],
};

export default template;
