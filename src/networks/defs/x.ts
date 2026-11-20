import { siX } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'x',
  name: 'X (Twitter)',
  icon: { path: siX.path, color: `#${siX.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de X o un posteo con texto ya escrito.',
    en: 'Create a QR code that opens your X profile or a post with pre-filled text.',
    pt: 'Crie um QR code que abre seu perfil do X ou um post com texto pré-preenchido.',
    fr: 'Créez un code QR qui ouvre votre profil X ou une publication avec un texte prérempli.',
    it: 'Crea un codice QR che apre il tuo profilo X o un post con testo precompilato.',
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
      template: 'https://x.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 15,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_]{1,15}$',
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
            es: 'Tu @usuario, hasta 15 letras, números o guiones bajos.',
            en: 'Your @handle, up to 15 letters, numbers or underscores.',
            pt: 'Seu @usuário, até 15 letras, números ou sublinhados.',
            fr: 'Votre @identifiant, jusqu\'à 15 lettres, chiffres ou tirets bas.',
            it: 'Il tuo @nome, fino a 15 lettere, numeri o trattini bassi.',
          },
        },
      ],
    },
    {
      id: 'post',
      label: {
        es: 'Nuevo posteo',
        en: 'New post',
        pt: 'Novo post',
        fr: 'Nouvelle publication',
        it: 'Nuovo post',
      },
      template: 'https://x.com/intent/tweet?text={text}',
      query: [{ param: 'url', field: 'link' }],
      fields: [
        {
          id: 'text',
          type: 'textarea',
          required: true,
          maxLength: 280,
          sanitize: 'trim',
          label: {
            es: 'Texto del posteo',
            en: 'Post text',
            pt: 'Texto do post',
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
            es: 'Opcional: se agrega al final del posteo.',
            en: 'Optional: added at the end of the post.',
            pt: 'Opcional: é adicionado ao final do post.',
            fr: 'Facultatif : ajouté à la fin de la publication.',
            it: 'Facoltativo: viene aggiunto alla fine del post.',
          },
        },
      ],
    },
  ],
};

export default template;
