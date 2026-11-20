import { siArtstation } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'artstation',
  name: 'ArtStation',
  icon: { path: siArtstation.path, color: `#${siArtstation.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu portfolio de ArtStation.',
    en: 'Create a QR code that opens your ArtStation portfolio.',
    pt: 'Crie um QR code que abre seu portfólio no ArtStation.',
    fr: 'Créez un QR code qui ouvre votre portfolio ArtStation.',
    it: 'Crea un codice QR che apre il tuo portfolio ArtStation.',
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
      template: 'https://www.artstation.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: 'artstation.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,40}$',
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
        },
      ],
    },
  ],
};

export default template;
