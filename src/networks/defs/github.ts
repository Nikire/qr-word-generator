import { siGithub } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'github',
  name: 'GitHub',
  icon: { path: siGithub.path, color: `#${siGithub.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil o un repositorio de GitHub.',
    en: 'Create a QR code that opens your GitHub profile or a repository.',
    pt: 'Crie um QR code que abre seu perfil ou um repositório do GitHub.',
    fr: 'Créez un QR code qui ouvre votre profil ou un dépôt GitHub.',
    it: 'Crea un codice QR che apre il tuo profilo o un repository GitHub.',
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
      template: 'https://github.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 39,
          prefix: 'github.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9][A-Za-z0-9-]{0,38}$',
          label: {
            es: 'Usuario u organización',
            en: 'User or organization',
            pt: 'Usuário ou organização',
            fr: 'Utilisateur ou organisation',
            it: 'Utente o organizzazione',
          },
          placeholder: {
            es: 'Ej.: octocat',
            en: 'e.g. octocat',
            pt: 'Ex.: octocat',
            fr: 'Ex. : octocat',
            it: 'Es.: octocat',
          },
          hint: {
            es: 'Es lo que va después de github.com/ en la dirección de tu perfil.',
            en: 'It\'s what comes after github.com/ in your profile address.',
            pt: 'É o que vem depois de github.com/ no endereço do seu perfil.',
            fr: 'C\'est ce qui suit github.com/ dans l\'adresse de votre profil.',
            it: 'È ciò che segue github.com/ nell\'indirizzo del tuo profilo.',
          },
        },
      ],
    },
    {
      id: 'repo',
      label: {
        es: 'Repositorio',
        en: 'Repository',
        pt: 'Repositório',
        fr: 'Dépôt',
        it: 'Repository',
      },
      template: 'https://github.com/{owner}/{repo}',
      fields: [
        {
          id: 'owner',
          type: 'text',
          required: true,
          maxLength: 39,
          prefix: 'github.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9][A-Za-z0-9-]{0,38}$',
          label: {
            es: 'Propietario',
            en: 'Owner',
            pt: 'Proprietário',
            fr: 'Propriétaire',
            it: 'Proprietario',
          },
          placeholder: {
            es: 'Ej.: octocat',
            en: 'e.g. octocat',
            pt: 'Ex.: octocat',
            fr: 'Ex. : octocat',
            it: 'Es.: octocat',
          },
          hint: {
            es: 'Usuario u organización dueña del repositorio.',
            en: 'User or organization that owns the repository.',
            pt: 'Usuário ou organização dona do repositório.',
            fr: 'Utilisateur ou organisation propriétaire du dépôt.',
            it: 'Utente o organizzazione proprietaria del repository.',
          },
        },
        {
          id: 'repo',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: '/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{1,100}$',
          label: {
            es: 'Repositorio',
            en: 'Repository',
            pt: 'Repositório',
            fr: 'Dépôt',
            it: 'Repository',
          },
          placeholder: {
            es: 'Ej.: Hello-World',
            en: 'e.g. Hello-World',
            pt: 'Ex.: Hello-World',
            fr: 'Ex. : Hello-World',
            it: 'Es.: Hello-World',
          },
        },
      ],
    },
  ],
};

export default template;
