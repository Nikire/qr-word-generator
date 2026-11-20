import { siRevolut } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'revolut',
  name: 'Revolut',
  icon: { path: siRevolut.path, color: `#${siRevolut.hex}` },
  subtitle: {
    es: 'Creá un código QR con tu enlace revolut.me para que te paguen.',
    en: 'Create a QR code with your revolut.me link so people can pay you.',
    pt: 'Crie um QR code com seu link revolut.me para receber pagamentos.',
    fr: 'Créez un code QR avec votre lien revolut.me pour recevoir des paiements.',
    it: 'Crea un codice QR con il tuo link revolut.me per ricevere pagamenti.',
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
      template: 'https://revolut.me/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'revolut.me/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{2,40}$',
          label: {
            es: 'Revtag',
            en: 'Revtag',
            pt: 'Revtag',
            fr: 'Revtag',
            it: 'Revtag',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Es lo que va después de revolut.me/ en tu enlace de pago.',
            en: 'It\'s what comes after revolut.me/ in your payment link.',
            pt: 'É o que vem depois de revolut.me/ no seu link de pagamento.',
            fr: 'C\'est ce qui suit revolut.me/ dans votre lien de paiement.',
            it: 'È ciò che segue revolut.me/ nel tuo link di pagamento.',
          },
        },
      ],
    },
  ],
};

export default template;
