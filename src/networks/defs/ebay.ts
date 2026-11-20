import { siEbay } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'ebay',
  name: 'eBay',
  icon: { path: siEbay.path, color: `#${siEbay.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu tienda o perfil de vendedor en eBay.',
    en: 'Create a QR code that opens your eBay store or seller profile.',
    pt: 'Crie um QR code que abre sua loja ou perfil de vendedor no eBay.',
    fr: 'Créez un code QR qui ouvre votre boutique ou profil vendeur eBay.',
    it: 'Crea un codice QR che apre il tuo negozio o profilo venditore eBay.',
  },
  modes: [
    {
      id: 'store',
      label: {
        es: 'Tienda eBay',
        en: 'eBay Store',
        pt: 'Loja eBay',
        fr: 'Boutique eBay',
        it: 'Negozio eBay',
      },
      template: 'https://www.ebay.com/str/{storeName}',
      fields: [
        {
          id: 'storeName',
          type: 'text',
          required: true,
          maxLength: 60,
          prefix: 'ebay.com/str/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{1,60}$',
          label: {
            es: 'Tienda',
            en: 'Store',
            pt: 'Loja',
            fr: 'Boutique',
            it: 'Negozio',
          },
          placeholder: {
            es: 'Ej.: mi-tienda',
            en: 'e.g. fine-jewelry',
            pt: 'Ex.: minha-loja',
            fr: 'Ex. : ma-boutique',
            it: 'Es.: mio-negozio',
          },
          hint: {
            es: 'Es lo que va después de /str/ en el enlace de tu tienda.',
            en: 'It\'s what comes after /str/ in your store link.',
            pt: 'É o que vem depois de /str/ no link da sua loja.',
            fr: 'C\'est ce qui suit /str/ dans le lien de votre boutique.',
            it: 'È ciò che segue /str/ nel link del tuo negozio.',
          },
        },
      ],
    },
    {
      id: 'seller',
      label: {
        es: 'Perfil de vendedor',
        en: 'Seller profile',
        pt: 'Perfil de vendedor',
        fr: 'Profil vendeur',
        it: 'Profilo venditore',
      },
      template: 'https://www.ebay.com/usr/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 64,
          prefix: 'ebay.com/usr/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._*-]{2,64}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Nome de usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: juanperez_ventas',
            en: 'e.g. janedoe_shop',
            pt: 'Ex.: joaosilva_vendas',
            fr: 'Ex. : mariedupont_ventes',
            it: 'Es.: mariorossi_vendite',
          },
          hint: {
            es: 'Tu ID de usuario de eBay, el que ven los compradores.',
            en: 'Your eBay user ID, as buyers see it.',
            pt: 'Seu ID de usuário do eBay, o que os compradores veem.',
            fr: 'Votre pseudo eBay, tel que le voient les acheteurs.',
            it: 'Il tuo ID utente eBay, quello che vedono gli acquirenti.',
          },
        },
      ],
    },
  ],
};

export default template;
