import { siLinktree } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'linktree',
  name: 'Linktree',
  icon: { path: siLinktree.path, color: `#${siLinktree.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Creá un código QR que abre tu página de Linktree.',
    en: 'Create a QR code that opens your Linktree page.',
    pt: 'Crie um QR code que abre sua página do Linktree.',
    fr: 'Créez un QR code qui ouvre votre page Linktree.',
    it: 'Crea un codice QR che apre la tua pagina Linktree.',
  },
  modes: [
    {
      id: 'profile',
      label: {
        es: 'Página',
        en: 'Page',
        pt: 'Página',
        fr: 'Page',
        it: 'Pagina',
      },
      template: 'https://linktr.ee/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 30,
          prefix: 'linktr.ee/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_.]{1,30}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: mionegozio',
          },
          hint: {
            es: 'Es lo que va después de linktr.ee/ en tu enlace.',
            en: 'It\'s what comes after linktr.ee/ in your link.',
            pt: 'É o que vem depois de linktr.ee/ no seu link.',
            fr: 'C\'est ce qui suit linktr.ee/ dans votre lien.',
            it: 'È ciò che segue linktr.ee/ nel tuo link.',
          },
        },
      ],
    },
  ],
};

export default template;
