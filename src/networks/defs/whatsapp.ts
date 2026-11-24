import { siWhatsapp } from 'simple-icons';
import type { NetworkDef } from '../types';

const whatsapp: NetworkDef = {
  id: 'whatsapp',
  name: 'WhatsApp',
  icon: { path: siWhatsapp.path, color: `#${siWhatsapp.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre un chat de WhatsApp con tu número.',
    en: 'Create a QR code that opens a WhatsApp chat with your number.',
    pt: 'Crie um QR Code que abre uma conversa no WhatsApp com o seu número.',
    fr: 'Créez un QR code qui ouvre une discussion WhatsApp avec votre numéro.',
    it: 'Crea un codice QR che apre una chat WhatsApp con il tuo numero.',
  },
  modes: [
    {
      id: 'chat',
      label: { es: 'Chat', en: 'Chat', pt: 'Conversa', fr: 'Discussion', it: 'Chat' },
      template: 'https://wa.me/{phone}',
      query: [{ param: 'text', field: 'message' }],
      fields: [
        {
          id: 'phone',
          type: 'phone',
          required: true,
          sanitize: 'digits',
          label: {
            es: 'Número de WhatsApp',
            en: 'WhatsApp number',
            pt: 'Número do WhatsApp',
            fr: 'Numéro WhatsApp',
            it: 'Numero WhatsApp',
          },
          placeholder: {
            es: 'Ej.: 55 1234 5678',
            en: 'E.g. 555 123 4567',
            pt: 'Ex.: 11 91234 5678',
            fr: 'Ex. : 6 12 34 56 78',
            it: 'Es.: 312 345 6789',
          },
        },
        {
          id: 'message',
          type: 'textarea',
          required: false,
          maxLength: 300,
          sanitize: 'trim',
          label: {
            es: 'Mensaje personalizado',
            en: 'Custom message',
            pt: 'Mensagem personalizada',
            fr: 'Message personnalisé',
            it: 'Messaggio personalizzato',
          },
          placeholder: {
            es: 'Ej.: ¡Hola! Quiero más información.',
            en: 'E.g. Hi! I would like more information.',
            pt: 'Ex.: Olá! Gostaria de mais informações.',
            fr: 'Ex. : Bonjour ! Je souhaite plus d’informations.',
            it: 'Es.: Ciao! Vorrei maggiori informazioni.',
          },
          hint: {
            es: 'Quien escanee el código verá este mensaje ya escrito en el chat.',
            en: 'Anyone who scans the code will see this message already typed in the chat.',
            pt: 'Quem escanear o código verá esta mensagem já escrita na conversa.',
            fr: 'La personne qui scanne le code verra ce message déjà écrit dans la discussion.',
            it: 'Chi scansiona il codice vedrà questo messaggio già scritto nella chat.',
          },
        },
      ],
    },
  ],
};

export default whatsapp;
