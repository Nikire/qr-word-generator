import { siReddit } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'reddit',
  name: 'Reddit',
  icon: { path: siReddit.path, color: `#${siReddit.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil o una comunidad de Reddit.',
    en: 'Create a QR code that opens your Reddit profile or a community.',
    pt: 'Crie um QR code que abre seu perfil ou uma comunidade do Reddit.',
    fr: 'Créez un code QR qui ouvre votre profil ou une communauté Reddit.',
    it: 'Crea un codice QR che apre il tuo profilo o una community di Reddit.',
  },
  modes: [
    {
      id: 'user',
      label: {
        es: 'Usuario',
        en: 'User',
        pt: 'Usuário',
        fr: 'Utilisateur',
        it: 'Utente',
      },
      template: 'https://www.reddit.com/user/{username}/',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 20,
          prefix: 'u/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{3,20}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Nome de usuário',
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
            es: 'Tu nombre de usuario sin el u/.',
            en: 'Your username without the u/.',
            pt: 'Seu nome de usuário sem o u/.',
            fr: 'Votre nom d\'utilisateur sans le u/.',
            it: 'Il tuo nome utente senza u/.',
          },
        },
      ],
    },
    {
      id: 'community',
      label: {
        es: 'Comunidad',
        en: 'Community',
        pt: 'Comunidade',
        fr: 'Communauté',
        it: 'Community',
      },
      template: 'https://www.reddit.com/r/{subreddit}/',
      fields: [
        {
          id: 'subreddit',
          type: 'text',
          required: true,
          maxLength: 21,
          prefix: 'r/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_]{2,21}$',
          label: {
            es: 'Comunidad',
            en: 'Community',
            pt: 'Comunidade',
            fr: 'Communauté',
            it: 'Community',
          },
          placeholder: {
            es: 'Ej.: argentina',
            en: 'e.g. smallbusiness',
            pt: 'Ex.: brasil',
            fr: 'Ex. : france',
            it: 'Es.: italy',
          },
          hint: {
            es: 'El nombre de la comunidad sin el r/.',
            en: 'The community name without the r/.',
            pt: 'O nome da comunidade sem o r/.',
            fr: 'Le nom de la communauté sans le r/.',
            it: 'Il nome della community senza r/.',
          },
        },
      ],
    },
  ],
};

export default template;
