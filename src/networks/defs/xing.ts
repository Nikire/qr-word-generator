import { siXing } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'xing',
  name: 'XING',
  icon: { path: siXing.path, color: `#${siXing.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil profesional de XING.',
    en: 'Create a QR code that opens your XING professional profile.',
    pt: 'Crie um QR code que abre seu perfil profissional no XING.',
    fr: 'Créez un QR code qui ouvre votre profil professionnel XING.',
    it: 'Crea un codice QR che apre il tuo profilo professionale XING.',
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
      template: 'https://www.xing.com/profile/{profile}',
      fields: [
        {
          id: 'profile',
          type: 'text',
          required: true,
          maxLength: 80,
          prefix: 'xing.com/profile/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,80}$',
          label: {
            es: 'ID de perfil',
            en: 'Profile ID',
            pt: 'ID do perfil',
            fr: 'ID du profil',
            it: 'ID profilo',
          },
          placeholder: {
            es: 'Ej.: Max_Mustermann',
            en: 'e.g. Max_Mustermann',
            pt: 'Ex.: Max_Mustermann',
            fr: 'Ex. : Max_Mustermann',
            it: 'Es.: Max_Mustermann',
          },
          hint: {
            es: 'Es lo que va después de xing.com/profile/ en la dirección de tu perfil.',
            en: 'It\'s what comes after xing.com/profile/ in your profile address.',
            pt: 'É o que vem depois de xing.com/profile/ no endereço do seu perfil.',
            fr: 'C\'est ce qui suit xing.com/profile/ dans l\'adresse de votre profil.',
            it: 'È ciò che segue xing.com/profile/ nell\'indirizzo del tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
