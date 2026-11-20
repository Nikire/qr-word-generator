import { siFigma } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'figma',
  name: 'Figma Community',
  icon: { path: siFigma.path, color: `#${siFigma.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil en la comunidad de Figma.',
    en: 'Create a QR code that opens your Figma Community profile.',
    pt: 'Crie um QR code que abre seu perfil na comunidade do Figma.',
    fr: 'Créez un QR code qui ouvre votre profil Figma Community.',
    it: 'Crea un codice QR che apre il tuo profilo nella community di Figma.',
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
      template: 'https://www.figma.com/@{handle}',
      fields: [
        {
          id: 'handle',
          type: 'text',
          required: true,
          maxLength: 30,
          prefix: 'figma.com/@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_.-]{1,30}$',
          label: {
            es: 'Usuario',
            en: 'Handle',
            pt: 'Usuário',
            fr: 'Identifiant',
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
            es: 'Es el identificador de tu perfil público de la comunidad, sin la @.',
            en: 'Your public Community profile handle, without the @.',
            pt: 'É o identificador do seu perfil público na comunidade, sem o @.',
            fr: 'L\'identifiant de votre profil Community public, sans le @.',
            it: 'L\'identificativo del tuo profilo pubblico nella Community, senza la @.',
          },
        },
      ],
    },
  ],
};

export default template;
