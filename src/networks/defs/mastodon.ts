import { siMastodon } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'mastodon',
  name: 'Mastodon',
  icon: { path: siMastodon.path, color: `#${siMastodon.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Mastodon.',
    en: 'Create a QR code that opens your Mastodon profile.',
    pt: 'Crie um QR code que abre seu perfil do Mastodon.',
    fr: 'Créez un code QR qui ouvre votre profil Mastodon.',
    it: 'Crea un codice QR che apre il tuo profilo Mastodon.',
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
      template: 'https://{instance:raw}/@{username}',
      fields: [
        {
          id: 'instance',
          type: 'text',
          required: true,
          maxLength: 253,
          prefix: 'https://',
          sanitize: 'trim',
          pattern: '^([A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?\\.)+[A-Za-z]{2,}$',
          label: {
            es: 'Servidor',
            en: 'Server',
            pt: 'Servidor',
            fr: 'Serveur',
            it: 'Server',
          },
          placeholder: {
            es: 'Ej.: mastodon.social',
            en: 'e.g. mastodon.social',
            pt: 'Ex.: mastodon.social',
            fr: 'Ex. : mastodon.social',
            it: 'Es.: mastodon.social',
          },
          hint: {
            es: 'Solo el dominio de tu servidor, sin https:// ni barras.',
            en: 'Just your server\'s domain, without https:// or slashes.',
            pt: 'Apenas o domínio do seu servidor, sem https:// nem barras.',
            fr: 'Seulement le domaine de votre serveur, sans https:// ni barres obliques.',
            it: 'Solo il dominio del tuo server, senza https:// né barre.',
          },
        },
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 30,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_]{1,30}$',
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
            es: 'Solo la primera parte de @usuario@servidor.',
            en: 'Only the first part of @user@server.',
            pt: 'Apenas a primeira parte de @usuário@servidor.',
            fr: 'Seulement la première partie de @utilisateur@serveur.',
            it: 'Solo la prima parte di @utente@server.',
          },
        },
      ],
    },
  ],
};

export default template;
