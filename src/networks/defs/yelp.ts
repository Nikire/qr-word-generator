import { siYelp } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'yelp',
  name: 'Yelp',
  icon: { path: siYelp.path, color: `#${siYelp.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre la página de tu negocio en Yelp.',
    en: 'Create a QR code that opens your business page on Yelp.',
    pt: 'Crie um QR code que abre a página do seu negócio no Yelp.',
    fr: 'Créez un QR code qui ouvre la page de votre établissement sur Yelp.',
    it: 'Crea un codice QR che apre la pagina della tua attività su Yelp.',
  },
  modes: [
    {
      id: 'business',
      label: {
        es: 'Negocio',
        en: 'Business',
        pt: 'Negócio',
        fr: 'Établissement',
        it: 'Attività',
      },
      template: 'https://www.yelp.com/biz/{bizAlias:raw}',
      fields: [
        {
          id: 'bizAlias',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: 'yelp.com/biz/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9%_-]{1,200}$',
          label: {
            es: 'ID del negocio',
            en: 'Business ID',
            pt: 'ID do negócio',
            fr: 'ID de l\'établissement',
            it: 'ID attività',
          },
          placeholder: {
            es: 'Ej.: mi-cafe-buenos-aires',
            en: 'e.g. my-cafe-san-francisco',
            pt: 'Ex.: meu-cafe-sao-paulo',
            fr: 'Ex. : mon-cafe-paris',
            it: 'Es.: mio-caffe-milano',
          },
          hint: {
            es: 'Es lo que va después de /biz/ en la página de tu negocio.',
            en: 'It\'s what comes after /biz/ on your business page.',
            pt: 'É o que vem depois de /biz/ na página do seu negócio.',
            fr: 'C\'est ce qui suit /biz/ sur la page de votre établissement.',
            it: 'È ciò che segue /biz/ nella pagina della tua attività.',
          },
        },
      ],
    },
  ],
};

export default template;
