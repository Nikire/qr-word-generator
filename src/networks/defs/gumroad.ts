import { siGumroad } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'gumroad',
  name: 'Gumroad',
  icon: { path: siGumroad.path, color: `#${siGumroad.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR que abre tu tienda de Gumroad.',
    en: 'Create a QR code that opens your Gumroad shop.',
    pt: 'Crie um QR code que abre sua loja no Gumroad.',
    fr: 'Créez un code QR qui ouvre votre boutique Gumroad.',
    it: 'Crea un codice QR che apre il tuo negozio Gumroad.',
  },
  modes: [
    {
      id: 'profile',
      label: {
        es: 'Tienda',
        en: 'Shop',
        pt: 'Loja',
        fr: 'Boutique',
        it: 'Negozio',
      },
      template: 'https://{username}.gumroad.com',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9]{3,40}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Nome de usuário',
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
            es: 'Es lo que va antes de .gumroad.com en tu enlace.',
            en: 'It\'s what comes before .gumroad.com in your link.',
            pt: 'É o que vem antes de .gumroad.com no seu link.',
            fr: 'C\'est ce qui précède .gumroad.com dans votre lien.',
            it: 'È ciò che precede .gumroad.com nel tuo link.',
          },
        },
      ],
    },
  ],
};

export default template;
