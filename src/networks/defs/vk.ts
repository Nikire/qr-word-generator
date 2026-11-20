import { siVk } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'vk',
  name: 'VK',
  icon: { path: siVk.path, color: `#${siVk.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil o comunidad de VK.',
    en: 'Create a QR code that opens your VK profile or community.',
    pt: 'Crie um QR code que abre seu perfil ou comunidade do VK.',
    fr: 'Créez un code QR qui ouvre votre profil ou votre communauté VK.',
    it: 'Crea un codice QR che apre il tuo profilo o la tua community VK.',
  },
  modes: [
    {
      id: 'profile',
      label: {
        es: 'Perfil o comunidad',
        en: 'Profile or community',
        pt: 'Perfil ou comunidade',
        fr: 'Profil ou communauté',
        it: 'Profilo o community',
      },
      template: 'https://vk.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 32,
          prefix: 'vk.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_.]{2,32}$',
          label: {
            es: 'Dirección corta',
            en: 'Short address',
            pt: 'Endereço curto',
            fr: 'Adresse courte',
            it: 'Indirizzo breve',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: mionegozio',
          },
          hint: {
            es: 'Lo que va después de vk.com/; también sirve id123456.',
            en: 'What comes after vk.com/; id123456 also works.',
            pt: 'O que vem depois de vk.com/; id123456 também serve.',
            fr: 'Ce qui suit vk.com/ ; id123456 fonctionne aussi.',
            it: 'Ciò che segue vk.com/; va bene anche id123456.',
          },
        },
      ],
    },
  ],
};

export default template;
