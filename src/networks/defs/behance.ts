import { siBehance } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'behance',
  name: 'Behance',
  icon: { path: siBehance.path, color: `#${siBehance.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu portfolio de Behance.',
    en: 'Create a QR code that opens your Behance portfolio.',
    pt: 'Crie um QR code que abre seu portfólio no Behance.',
    fr: 'Créez un QR code qui ouvre votre portfolio Behance.',
    it: 'Crea un codice QR che apre il tuo portfolio Behance.',
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
      template: 'https://www.behance.net/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 64,
          prefix: 'behance.net/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,64}$',
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
            es: 'Es lo que va después de behance.net/ en la dirección de tu perfil.',
            en: 'It\'s what comes after behance.net/ in your profile address.',
            pt: 'É o que vem depois de behance.net/ no endereço do seu perfil.',
            fr: 'C\'est ce qui suit behance.net/ dans l\'adresse de votre profil.',
            it: 'È ciò che segue behance.net/ nell\'indirizzo del tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
