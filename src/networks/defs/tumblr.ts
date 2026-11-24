import { siTumblr } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'tumblr',
  name: 'Tumblr',
  icon: { path: siTumblr.path, color: `#${siTumblr.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu blog de Tumblr.',
    en: 'Create a QR code that opens your Tumblr blog.',
    pt: 'Crie um QR code que abre seu blog do Tumblr.',
    fr: 'Créez un code QR qui ouvre votre blog Tumblr.',
    it: 'Crea un codice QR che apre il tuo blog Tumblr.',
  },
  modes: [
    {
      id: 'blog',
      label: {
        es: 'Blog',
        en: 'Blog',
        pt: 'Blog',
        fr: 'Blog',
        it: 'Blog',
      },
      template: 'https://www.tumblr.com/{blog}',
      fields: [
        {
          id: 'blog',
          type: 'text',
          required: true,
          maxLength: 32,
          prefix: 'tumblr.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{1,32}$',
          label: {
            es: 'Nombre del blog',
            en: 'Blog name',
            pt: 'Nome do blog',
            fr: 'Nom du blog',
            it: 'Nome del blog',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: mionegozio',
          },
          hint: {
            es: 'Solo el nombre, sin .tumblr.com.',
            en: 'Just the name, without .tumblr.com.',
            pt: 'Apenas o nome, sem .tumblr.com.',
            fr: 'Seulement le nom, sans .tumblr.com.',
            it: 'Solo il nome, senza .tumblr.com.',
          },
        },
      ],
    },
  ],
};

export default template;
