import { siGithubsponsors } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'githubsponsors',
  name: 'GitHub Sponsors',
  icon: { path: siGithubsponsors.path, color: `#${siGithubsponsors.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de GitHub Sponsors.',
    en: 'Create a QR code that opens your GitHub Sponsors profile.',
    pt: 'Crie um QR code que abre seu perfil do GitHub Sponsors.',
    fr: 'Créez un code QR qui ouvre votre profil GitHub Sponsors.',
    it: 'Crea un codice QR che apre il tuo profilo GitHub Sponsors.',
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
      template: 'https://github.com/sponsors/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 39,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9](?:[A-Za-z0-9]|-(?=[A-Za-z0-9])){0,38}$',
          label: {
            es: 'Usuario u organización',
            en: 'User or organization',
            pt: 'Usuário ou organização',
            fr: 'Utilisateur ou organisation',
            it: 'Utente o organizzazione',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Tu nombre de usuario de GitHub.',
            en: 'Your GitHub username.',
            pt: 'Seu nome de usuário do GitHub.',
            fr: 'Votre nom d\'utilisateur GitHub.',
            it: 'Il tuo nome utente GitHub.',
          },
        },
      ],
    },
  ],
};

export default template;
