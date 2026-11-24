import { siMessenger } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'messenger',
  name: 'Messenger',
  icon: { path: siMessenger.path, color: `#${siMessenger.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre un chat de Messenger con tu página o perfil de Facebook.',
    en: 'Create a QR code that opens a Messenger chat with your Facebook Page or profile.',
    pt: 'Crie um QR code que abre uma conversa no Messenger com sua Página ou perfil do Facebook.',
    fr: 'Créez un code QR qui ouvre une conversation Messenger avec votre Page ou profil Facebook.',
    it: 'Crea un codice QR che apre una chat di Messenger con la tua Pagina o profilo Facebook.',
  },
  modes: [
    {
      id: 'page',
      label: {
        es: 'Página o perfil',
        en: 'Page or profile',
        pt: 'Página ou perfil',
        fr: 'Page ou profil',
        it: 'Pagina o profilo',
      },
      template: 'https://m.me/{username}',
      query: [{ param: 'text', field: 'message' }],
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: 'm.me/',
          sanitize: 'handle',
          pattern: '^(?!profile\\.php$)[A-Za-z0-9.]{5,50}$',
          label: {
            es: 'Usuario de Facebook',
            en: 'Facebook username',
            pt: 'Usuário do Facebook',
            fr: 'Nom d\'utilisateur Facebook',
            it: 'Nome utente Facebook',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: ilmionegozio',
          },
          hint: {
            es: 'Es lo que va después de facebook.com/ en la dirección de tu página. También sirve el ID numérico.',
            en: 'It\'s what comes after facebook.com/ in your Page\'s address. The numeric ID also works.',
            pt: 'É o que vem depois de facebook.com/ no endereço da sua página. O ID numérico também serve.',
            fr: 'C\'est ce qui suit facebook.com/ dans l\'adresse de votre Page. L\'ID numérique fonctionne aussi.',
            it: 'È ciò che segue facebook.com/ nell\'indirizzo della tua Pagina. Va bene anche l\'ID numerico.',
          },
        },
        {
          id: 'message',
          type: 'textarea',
          required: false,
          maxLength: 1000,
          sanitize: 'trim',
          label: {
            es: 'Mensaje',
            en: 'Message',
            pt: 'Mensagem',
            fr: 'Message',
            it: 'Messaggio',
          },
          placeholder: {
            es: 'Ej.: Hola, quiero más información',
            en: 'e.g. Hi, I\'d like more information',
            pt: 'Ex.: Olá, quero mais informações',
            fr: 'Ex. : Bonjour, je voudrais plus d\'informations',
            it: 'Es.: Ciao, vorrei più informazioni',
          },
          hint: {
            es: 'Opcional. Funciona con páginas de Facebook; en perfiles personales puede que no aparezca.',
            en: 'Optional. Works with Facebook Pages; it may not appear for personal profiles.',
            pt: 'Opcional. Funciona com Páginas do Facebook; em perfis pessoais pode não aparecer.',
            fr: 'Facultatif. Fonctionne avec les Pages Facebook ; il peut ne pas apparaître pour les profils personnels.',
            it: 'Facoltativo. Funziona con le Pagine Facebook; per i profili personali potrebbe non comparire.',
          },
        },
      ],
    },
  ],
};

export default template;
