import { siEtsy } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'etsy',
  name: 'Etsy',
  icon: { path: siEtsy.path, color: `#${siEtsy.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu tienda de Etsy.',
    en: 'Create a QR code that opens your Etsy shop.',
    pt: 'Crie um QR code que abre sua loja na Etsy.',
    fr: 'Créez un code QR qui ouvre votre boutique Etsy.',
    it: 'Crea un codice QR che apre il tuo negozio Etsy.',
  },
  modes: [
    {
      id: 'shop',
      label: {
        es: 'Tienda',
        en: 'Shop',
        pt: 'Loja',
        fr: 'Boutique',
        it: 'Negozio',
      },
      template: 'https://www.etsy.com/shop/{shopName}',
      fields: [
        {
          id: 'shopName',
          type: 'text',
          required: true,
          maxLength: 20,
          prefix: 'etsy.com/shop/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9]{4,20}$',
          label: {
            es: 'Nombre de la tienda',
            en: 'Shop name',
            pt: 'Nome da loja',
            fr: 'Nom de la boutique',
            it: 'Nome del negozio',
          },
          placeholder: {
            es: 'Ej.: MiTiendaArtesanal',
            en: 'e.g. MyHandmadeShop',
            pt: 'Ex.: MinhaLojaArtesanal',
            fr: 'Ex. : MaBoutiqueArtisanale',
            it: 'Es.: MioNegozioArtigiano',
          },
          hint: {
            es: 'Sin espacios: entre 4 y 20 letras o números.',
            en: 'No spaces: 4 to 20 letters or numbers.',
            pt: 'Sem espaços: de 4 a 20 letras ou números.',
            fr: 'Sans espaces : 4 à 20 lettres ou chiffres.',
            it: 'Senza spazi: da 4 a 20 lettere o numeri.',
          },
        },
      ],
    },
  ],
};

export default template;
