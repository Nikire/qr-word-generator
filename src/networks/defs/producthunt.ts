import { siProducthunt } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'producthunt',
  name: 'Product Hunt',
  icon: { path: siProducthunt.path, color: `#${siProducthunt.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil o tu producto en Product Hunt.',
    en: 'Create a QR code that opens your Product Hunt profile or product.',
    pt: 'Crie um QR code que abre seu perfil ou produto no Product Hunt.',
    fr: 'Créez un QR code qui ouvre votre profil ou produit sur Product Hunt.',
    it: 'Crea un codice QR che apre il tuo profilo o prodotto su Product Hunt.',
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
      template: 'https://www.producthunt.com/@{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'producthunt.com/@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_]{1,40}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Escríbelo sin la @.',
            en: 'Enter it without the @.',
            pt: 'Digite sem o @.',
            fr: 'Saisissez-le sans le @.',
            it: 'Inseriscilo senza la @.',
          },
        },
      ],
    },
    {
      id: 'product',
      label: {
        es: 'Producto',
        en: 'Product',
        pt: 'Produto',
        fr: 'Produit',
        it: 'Prodotto',
      },
      template: 'https://www.producthunt.com/products/{slug}',
      fields: [
        {
          id: 'slug',
          type: 'text',
          required: true,
          maxLength: 80,
          prefix: 'producthunt.com/products/',
          sanitize: 'handle',
          pattern: '^[a-z0-9-]{1,80}$',
          label: {
            es: 'Producto',
            en: 'Product',
            pt: 'Produto',
            fr: 'Produit',
            it: 'Prodotto',
          },
          placeholder: {
            es: 'Ej.: mi-app',
            en: 'e.g. my-app',
            pt: 'Ex.: meu-app',
            fr: 'Ex. : mon-app',
            it: 'Es.: mia-app',
          },
          hint: {
            es: 'Es lo que va después de /products/ en la página de tu producto.',
            en: 'It\'s what comes after /products/ on your product page.',
            pt: 'É o que vem depois de /products/ na página do seu produto.',
            fr: 'C\'est ce qui suit /products/ sur la page de votre produit.',
            it: 'È ciò che segue /products/ nella pagina del tuo prodotto.',
          },
        },
      ],
    },
  ],
};

export default template;
