import { siItchdotio } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'itchio',
  name: 'itch.io',
  icon: { path: siItchdotio.path, color: `#${siItchdotio.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu página de creador en itch.io.',
    en: 'Create a QR code that opens your itch.io creator page.',
    pt: 'Crie um QR code que abre sua página de criador no itch.io.',
    fr: 'Créez un QR code qui ouvre votre page de créateur itch.io.',
    it: 'Crea un codice QR che apre la tua pagina creator su itch.io.',
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
      template: 'https://{username:raw}.itch.io',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 63,
          sanitize: 'trim',
          pattern: '^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$',
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
            es: 'Solo la parte antes de .itch.io.',
            en: 'Only the part before .itch.io.',
            pt: 'Só a parte antes de .itch.io.',
            fr: 'Seulement la partie avant .itch.io.',
            it: 'Solo la parte prima di .itch.io.',
          },
        },
      ],
    },
  ],
};

export default template;
