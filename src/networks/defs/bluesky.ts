import { siBluesky } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'bluesky',
  name: 'Bluesky',
  icon: { path: siBluesky.path, color: `#${siBluesky.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Bluesky o una publicación con texto ya escrito.',
    en: 'Create a QR code that opens your Bluesky profile or a post with pre-filled text.',
    pt: 'Crie um QR code que abre seu perfil do Bluesky ou um post com texto pré-preenchido.',
    fr: 'Créez un code QR qui ouvre votre profil Bluesky ou une publication avec un texte prérempli.',
    it: 'Crea un codice QR che apre il tuo profilo Bluesky o un post con testo precompilato.',
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
      template: 'https://bsky.app/profile/{handle}',
      fields: [
        {
          id: 'handle',
          type: 'text',
          required: true,
          maxLength: 253,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^([A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?\\.)+[A-Za-z]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?$',
          label: {
            es: 'Usuario',
            en: 'Handle',
            pt: 'Usuário',
            fr: 'Identifiant',
            it: 'Handle',
          },
          placeholder: {
            es: 'Ej.: mitienda.bsky.social',
            en: 'e.g. mystore.bsky.social',
            pt: 'Ex.: minhaloja.bsky.social',
            fr: 'Ex. : maboutique.bsky.social',
            it: 'Es.: mionegozio.bsky.social',
          },
          hint: {
            es: 'Ingresa el usuario completo, con .bsky.social o tu dominio.',
            en: 'Enter the full handle, including .bsky.social or your domain.',
            pt: 'Digite o usuário completo, com .bsky.social ou seu domínio.',
            fr: 'Saisissez l\'identifiant complet, avec .bsky.social ou votre domaine.',
            it: 'Inserisci l\'handle completo, con .bsky.social o il tuo dominio.',
          },
        },
      ],
    },
    {
      id: 'post',
      label: {
        es: 'Nueva publicación',
        en: 'New post',
        pt: 'Novo post',
        fr: 'Nouvelle publication',
        it: 'Nuovo post',
      },
      template: 'https://bsky.app/intent/compose?text={text}',
      fields: [
        {
          id: 'text',
          type: 'textarea',
          required: true,
          maxLength: 300,
          sanitize: 'trim',
          label: {
            es: 'Texto de la publicación',
            en: 'Post text',
            pt: 'Texto do post',
            fr: 'Texte de la publication',
            it: 'Testo del post',
          },
          placeholder: {
            es: 'Ej.: ¡Estoy en la feria de @mitienda.bsky.social!',
            en: 'e.g. I\'m at the @mystore.bsky.social fair!',
            pt: 'Ex.: Estou na feira da @minhaloja.bsky.social!',
            fr: 'Ex. : Je suis au salon de @maboutique.bsky.social !',
            it: 'Es.: Sono alla fiera di @mionegozio.bsky.social!',
          },
          hint: {
            es: 'Hasta 300 caracteres; puedes incluir un enlace.',
            en: 'Up to 300 characters; you can include a link.',
            pt: 'Até 300 caracteres; você pode incluir um link.',
            fr: 'Jusqu\'à 300 caractères ; vous pouvez inclure un lien.',
            it: 'Fino a 300 caratteri; puoi includere un link.',
          },
        },
      ],
    },
  ],
};

export default template;
