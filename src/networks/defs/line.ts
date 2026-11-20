import { siLine } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'line',
  name: 'LINE',
  icon: { path: siLine.path, color: `#${siLine.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu cuenta oficial de LINE.',
    en: 'Create a QR code that opens your LINE Official Account.',
    pt: 'Crie um QR code que abre sua conta oficial do LINE.',
    fr: 'Créez un code QR qui ouvre votre compte officiel LINE.',
    it: 'Crea un codice QR che apre il tuo account ufficiale LINE.',
  },
  modes: [
    {
      id: 'account',
      label: {
        es: 'Cuenta oficial',
        en: 'Official Account',
        pt: 'Conta oficial',
        fr: 'Compte officiel',
        it: 'Account ufficiale',
      },
      template: 'https://line.me/R/ti/p/%40{lineId}',
      fields: [
        {
          id: 'lineId',
          type: 'text',
          required: true,
          maxLength: 20,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{3,20}$',
          label: {
            es: 'LINE ID',
            en: 'LINE ID',
            pt: 'LINE ID',
            fr: 'LINE ID',
            it: 'LINE ID',
          },
          placeholder: {
            es: 'Ej.: 123abcde',
            en: 'e.g. 123abcde',
            pt: 'Ex.: 123abcde',
            fr: 'Ex. : 123abcde',
            it: 'Es.: 123abcde',
          },
          hint: {
            es: 'El ID de tu cuenta oficial, sin la @. Lo ves en LINE Official Account Manager.',
            en: 'Your Official Account ID without the @, shown in LINE Official Account Manager.',
            pt: 'O ID da sua conta oficial, sem o @, visível no LINE Official Account Manager.',
            fr: 'L\'ID de votre compte officiel, sans le @, visible dans LINE Official Account Manager.',
            it: 'L\'ID del tuo account ufficiale, senza @, visibile in LINE Official Account Manager.',
          },
        },
      ],
    },
    {
      id: 'message',
      label: {
        es: 'Mensaje a cuenta oficial',
        en: 'Message to account',
        pt: 'Mensagem para a conta',
        fr: 'Message au compte',
        it: 'Messaggio all\'account',
      },
      template: 'https://line.me/R/oaMessage/%40{lineId}/?{message}',
      fields: [
        {
          id: 'lineId',
          type: 'text',
          required: true,
          maxLength: 20,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{3,20}$',
          label: {
            es: 'LINE ID',
            en: 'LINE ID',
            pt: 'LINE ID',
            fr: 'LINE ID',
            it: 'LINE ID',
          },
          placeholder: {
            es: 'Ej.: 123abcde',
            en: 'e.g. 123abcde',
            pt: 'Ex.: 123abcde',
            fr: 'Ex. : 123abcde',
            it: 'Es.: 123abcde',
          },
          hint: {
            es: 'El ID de tu cuenta oficial, sin la @.',
            en: 'Your Official Account ID, without the @.',
            pt: 'O ID da sua conta oficial, sem o @.',
            fr: 'L\'ID de votre compte officiel, sans le @.',
            it: 'L\'ID del tuo account ufficiale, senza @.',
          },
        },
        {
          id: 'message',
          type: 'textarea',
          required: true,
          maxLength: 500,
          sanitize: 'trim',
          label: {
            es: 'Mensaje',
            en: 'Message',
            pt: 'Mensagem',
            fr: 'Message',
            it: 'Messaggio',
          },
          placeholder: {
            es: 'Ej.: Hola, quiero reservar',
            en: 'e.g. Hi, I\'d like to book',
            pt: 'Ex.: Olá, quero reservar',
            fr: 'Ex. : Bonjour, je voudrais réserver',
            it: 'Es.: Ciao, vorrei prenotare',
          },
          hint: {
            es: 'Aparece escrito en el chat, listo para enviar.',
            en: 'It appears pre-typed in the chat, ready to send.',
            pt: 'Aparece já digitada na conversa, pronta para enviar.',
            fr: 'Il apparaît déjà saisi dans la conversation, prêt à envoyer.',
            it: 'Compare già scritto nella chat, pronto da inviare.',
          },
        },
      ],
    },
  ],
};

export default template;
