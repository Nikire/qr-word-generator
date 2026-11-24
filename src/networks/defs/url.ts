import type { NetworkDef } from '../types';

// Plantilla libre: cualquier enlace, con un logo propio opcional en el centro.
const url: NetworkDef = {
  id: 'url',
  order: 0,
  name: {
    es: 'URL personalizada',
    en: 'Custom URL',
    pt: 'URL personalizada',
    fr: 'URL personnalisée',
    it: 'URL personalizzato',
  },
  // Ícono "link" de Material Symbols (Apache 2.0); solo se usa en el selector.
  icon: {
    path: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
    color: '#3B4A54',
  },
  qrLogo: false,
  logoUpload: true,
  title: {
    es: 'Generador de códigos QR gratis',
    en: 'Free QR code generator',
    pt: 'Gerador de QR Code grátis',
    fr: 'Générateur de QR code gratuit',
    it: 'Generatore di codici QR gratis',
  },
  subtitle: {
    es: 'Crea un código QR para cualquier enlace y, si quieres, añade tu logo en el centro.',
    en: 'Create a QR code for any link and, if you like, add your logo in the center.',
    pt: 'Crie um QR Code para qualquer link e, se quiser, adicione seu logo no centro.',
    fr: 'Créez un QR code pour n’importe quel lien et, si vous le souhaitez, ajoutez votre logo au centre.',
    it: 'Crea un codice QR per qualsiasi link e, se vuoi, aggiungi il tuo logo al centro.',
  },
  modes: [
    {
      id: 'link',
      label: { es: 'Enlace', en: 'Link', pt: 'Link', fr: 'Lien', it: 'Link' },
      template: '{url:raw}',
      fields: [
        {
          id: 'url',
          type: 'text',
          required: true,
          maxLength: 500,
          sanitize: 'url',
          pattern: '^https?:\\/\\/[^\\s\\/?#]+\\.[^\\s\\/?#]{2,}([\\/?#]\\S*)?$',
          label: {
            es: 'Enlace',
            en: 'Link',
            pt: 'Link',
            fr: 'Lien',
            it: 'Link',
          },
          placeholder: {
            es: 'Ej.: https://mitienda.com',
            en: 'E.g. https://myshop.com',
            pt: 'Ex.: https://minhaloja.com',
            fr: 'Ex. : https://maboutique.com',
            it: 'Es.: https://ilmionegozio.com',
          },
          hint: {
            es: 'La dirección que se abrirá al escanear el código.',
            en: 'The address that will open when the code is scanned.',
            pt: 'O endereço que será aberto ao escanear o código.',
            fr: 'L’adresse qui s’ouvrira lorsque le code sera scanné.',
            it: 'L’indirizzo che si aprirà quando il codice viene scansionato.',
          },
        },
      ],
    },
  ],
};

export default url;
