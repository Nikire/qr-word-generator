import { siThreads } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'threads',
  name: 'Threads',
  icon: { path: siThreads.path, color: `#${siThreads.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de Threads o una publicación con texto ya escrito.',
    en: 'Create a QR code that opens your Threads profile or a post with pre-filled text.',
    pt: 'Crie um QR code que abre seu perfil do Threads ou uma publicação com texto pré-preenchido.',
    fr: 'Créez un code QR qui ouvre votre profil Threads ou une publication avec un texte prérempli.',
    it: 'Crea un codice QR che apre il tuo profilo Threads o un post con testo precompilato.',
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
      template: 'https://www.threads.com/@{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 30,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^(?!\\.)(?!.*\\.\\.)(?!.*\\.$)[A-Za-z0-9._]{1,30}$',
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
            es: 'Es el mismo usuario que tenés en Instagram.',
            en: 'It\'s the same username you use on Instagram.',
            pt: 'É o mesmo nome de usuário do Instagram.',
            fr: 'C\'est le même nom d\'utilisateur que sur Instagram.',
            it: 'È lo stesso nome utente che usi su Instagram.',
          },
        },
      ],
    },
    {
      id: 'post',
      label: {
        es: 'Nueva publicación',
        en: 'New post',
        pt: 'Nova publicação',
        fr: 'Nouvelle publication',
        it: 'Nuovo post',
      },
      template: 'https://www.threads.com/intent/post?text={text}',
      query: [{ param: 'url', field: 'link' }],
      fields: [
        {
          id: 'text',
          type: 'textarea',
          required: true,
          maxLength: 500,
          sanitize: 'trim',
          label: {
            es: 'Texto de la publicación',
            en: 'Post text',
            pt: 'Texto da publicação',
            fr: 'Texte de la publication',
            it: 'Testo del post',
          },
          placeholder: {
            es: 'Ej.: ¡Estoy en la feria de @mitienda!',
            en: 'e.g. I\'m at the @mystore fair!',
            pt: 'Ex.: Estou na feira da @minhaloja!',
            fr: 'Ex. : Je suis au salon de @maboutique !',
            it: 'Es.: Sono alla fiera di @mionegozio!',
          },
          hint: {
            es: 'Quien escanee podrá editarlo antes de publicar.',
            en: 'Whoever scans it can edit it before posting.',
            pt: 'Quem escanear poderá editar antes de publicar.',
            fr: 'La personne qui scanne pourra le modifier avant de publier.',
            it: 'Chi scansiona potrà modificarlo prima di pubblicare.',
          },
        },
        {
          id: 'link',
          type: 'text',
          required: false,
          maxLength: 500,
          sanitize: 'url',
          label: {
            es: 'Enlace',
            en: 'Link',
            pt: 'Link',
            fr: 'Lien',
            it: 'Link',
          },
          placeholder: {
            es: 'Ej.: mitienda.com',
            en: 'e.g. mystore.com',
            pt: 'Ex.: minhaloja.com',
            fr: 'Ex. : maboutique.fr',
            it: 'Es.: mionegozio.it',
          },
          hint: {
            es: 'Opcional: se adjunta como enlace.',
            en: 'Optional: attached as a link.',
            pt: 'Opcional: anexado como link.',
            fr: 'Facultatif : joint comme lien.',
            it: 'Facoltativo: allegato come link.',
          },
        },
      ],
    },
  ],
};

export default template;
