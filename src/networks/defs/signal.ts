import { siSignal } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'signal',
  name: 'Signal',
  icon: { path: siSignal.path, color: `#${siSignal.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre un chat de Signal con tu número.',
    en: 'Create a QR code that opens a Signal chat with your number.',
    pt: 'Crie um QR code que abre uma conversa no Signal com seu número.',
    fr: 'Créez un code QR qui ouvre une conversation Signal avec votre numéro.',
    it: 'Crea un codice QR che apre una chat Signal con il tuo numero.',
  },
  modes: [
    {
      id: 'phone',
      label: {
        es: 'Número de teléfono',
        en: 'Phone number',
        pt: 'Número de telefone',
        fr: 'Numéro de téléphone',
        it: 'Numero di telefono',
      },
      template: 'https://signal.me/#p/+{phone}',
      fields: [
        {
          id: 'phone',
          type: 'phone',
          required: true,
          maxLength: 15,
          sanitize: 'digits',
          label: {
            es: 'Número de teléfono',
            en: 'Phone number',
            pt: 'Número de telefone',
            fr: 'Numéro de téléphone',
            it: 'Numero di telefono',
          },
          placeholder: {
            es: 'Ej.: 55 1234 5678',
            en: 'e.g. 20 7946 0958',
            pt: 'Ex.: 11 91234 5678',
            fr: 'Ex. : 6 12 34 56 78',
            it: 'Es.: 312 345 6789',
          },
          hint: {
            es: 'En Signal tienes que permitir que te encuentren por tu número (Ajustes > Privacidad).',
            en: 'Signal must allow people to find you by number (Settings > Privacy).',
            pt: 'No Signal, permita que te encontrem pelo número (Configurações > Privacidade).',
            fr: 'Signal doit autoriser qu\'on vous trouve par numéro (Paramètres > Confidentialité).',
            it: 'Su Signal devi consentire di trovarti tramite numero (Impostazioni > Privacy).',
          },
        },
      ],
    },
  ],
};

export default template;
