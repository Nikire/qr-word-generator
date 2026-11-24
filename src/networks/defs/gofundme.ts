import { siGofundme } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'gofundme',
  name: 'GoFundMe',
  icon: { path: siGofundme.path, color: `#${siGofundme.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu campaña de GoFundMe.',
    en: 'Create a QR code that opens your GoFundMe fundraiser.',
    pt: 'Crie um QR code que abre sua vaquinha no GoFundMe.',
    fr: 'Créez un code QR qui ouvre votre cagnotte GoFundMe.',
    it: 'Crea un codice QR che apre la tua raccolta fondi GoFundMe.',
  },
  modes: [
    {
      id: 'fundraiser',
      label: {
        es: 'Campaña',
        en: 'Fundraiser',
        pt: 'Campanha',
        fr: 'Cagnotte',
        it: 'Raccolta fondi',
      },
      template: 'https://www.gofundme.com/f/{slug}',
      fields: [
        {
          id: 'slug',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: 'gofundme.com/f/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{2,100}$',
          label: {
            es: 'Enlace de la campaña',
            en: 'Fundraiser link',
            pt: 'Link da campanha',
            fr: 'Lien de la cagnotte',
            it: 'Link della raccolta',
          },
          placeholder: {
            es: 'Ej.: ayuda-para-el-comedor',
            en: 'e.g. help-the-community-garden',
            pt: 'Ex.: ajuda-para-a-horta',
            fr: 'Ex. : aide-pour-le-jardin',
            it: 'Es.: aiuto-per-il-giardino',
          },
          hint: {
            es: 'Pega el enlace gofundme.com/f/… (no el corto gofund.me) o lo que va después de /f/.',
            en: 'Paste the gofundme.com/f/… link (not the short gofund.me one) or the part after /f/.',
            pt: 'Cole o link gofundme.com/f/… (não o curto gofund.me) ou o que vem depois de /f/.',
            fr: 'Collez le lien gofundme.com/f/… (pas le lien court gofund.me) ou la partie après /f/.',
            it: 'Incolla il link gofundme.com/f/… (non quello breve gofund.me) o la parte dopo /f/.',
          },
        },
      ],
    },
  ],
};

export default template;
