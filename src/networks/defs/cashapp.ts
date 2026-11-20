import { siCashapp } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'cashapp',
  name: 'Cash App',
  icon: { path: siCashapp.path, color: `#${siCashapp.hex}` },
  subtitle: {
    es: 'Creá un código QR con tu $Cashtag para que te paguen con Cash App.',
    en: 'Create a QR code with your $Cashtag so people can pay you with Cash App.',
    pt: 'Crie um QR code com seu $Cashtag para receber pagamentos pelo Cash App.',
    fr: 'Créez un code QR avec votre $Cashtag pour recevoir des paiements via Cash App.',
    it: 'Crea un codice QR con il tuo $Cashtag per ricevere pagamenti con Cash App.',
  },
  modes: [
    {
      id: 'cashtag',
      label: {
        es: '$Cashtag',
        en: '$Cashtag',
        pt: '$Cashtag',
        fr: '$Cashtag',
        it: '$Cashtag',
      },
      template: 'https://cash.app/${cashtag}',
      fields: [
        {
          id: 'cashtag',
          type: 'text',
          required: true,
          maxLength: 20,
          prefix: '$',
          sanitize: 'handle',
          pattern: '^(?=.*[A-Za-z])[A-Za-z0-9_-]{1,20}$',
          label: {
            es: '$Cashtag',
            en: '$Cashtag',
            pt: '$Cashtag',
            fr: '$Cashtag',
            it: '$Cashtag',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Escribilo sin el signo $.',
            en: 'Type it without the $ sign.',
            pt: 'Digite sem o sinal $.',
            fr: 'Saisissez-le sans le signe $.',
            it: 'Scrivilo senza il simbolo $.',
          },
        },
      ],
    },
  ],
};

export default template;
