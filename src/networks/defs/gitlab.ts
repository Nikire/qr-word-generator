import { siGitlab } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'gitlab',
  name: 'GitLab',
  icon: { path: siGitlab.path, color: `#${siGitlab.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil o grupo de GitLab.',
    en: 'Create a QR code that opens your GitLab profile or group.',
    pt: 'Crie um QR code que abre seu perfil ou grupo do GitLab.',
    fr: 'Créez un QR code qui ouvre votre profil ou groupe GitLab.',
    it: 'Crea un codice QR che apre il tuo profilo o gruppo GitLab.',
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
      template: 'https://gitlab.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 255,
          prefix: 'gitlab.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_](?:[A-Za-z0-9_.-]{0,253}[A-Za-z0-9_-])?$',
          label: {
            es: 'Usuario o grupo',
            en: 'User or group',
            pt: 'Usuário ou grupo',
            fr: 'Utilisateur ou groupe',
            it: 'Utente o gruppo',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Es lo que va después de gitlab.com/ en la dirección de tu perfil.',
            en: 'It\'s what comes after gitlab.com/ in your profile address.',
            pt: 'É o que vem depois de gitlab.com/ no endereço do seu perfil.',
            fr: 'C\'est ce qui suit gitlab.com/ dans l\'adresse de votre profil.',
            it: 'È ciò che segue gitlab.com/ nell\'indirizzo del tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
