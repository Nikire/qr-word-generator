import { siFacebook } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'facebook',
  name: 'Facebook',
  icon: { path: siFacebook.path, color: `#${siFacebook.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil, página o grupo de Facebook.',
    en: 'Create a QR code that opens your Facebook profile, page or group.',
    pt: 'Crie um QR code que abre seu perfil, página ou grupo do Facebook.',
    fr: 'Créez un code QR qui ouvre votre profil, page ou groupe Facebook.',
    it: 'Crea un codice QR che apre il tuo profilo, pagina o gruppo Facebook.',
  },
  modes: [
    {
      id: 'page',
      label: {
        es: 'Perfil o página',
        en: 'Profile or page',
        pt: 'Perfil ou página',
        fr: 'Profil ou page',
        it: 'Profilo o pagina',
      },
      template: 'https://www.facebook.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: 'facebook.com/',
          sanitize: 'handle',
          pattern: '^(?!.*\\.php$)[A-Za-z0-9.]{5,50}$',
          label: {
            es: 'Nombre de usuario',
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
            es: 'Es lo que va después de facebook.com/ en la dirección de tu perfil o página; también sirve el ID numérico.',
            en: 'It\'s what comes after facebook.com/ in your profile or page address; the numeric ID also works.',
            pt: 'É o que vem depois de facebook.com/ no endereço do seu perfil ou página; o ID numérico também serve.',
            fr: 'C\'est ce qui suit facebook.com/ dans l\'adresse de votre profil ou page ; l\'ID numérique fonctionne aussi.',
            it: 'È ciò che segue facebook.com/ nell\'indirizzo del profilo o della pagina; va bene anche l\'ID numerico.',
          },
        },
      ],
    },
    {
      id: 'group',
      label: {
        es: 'Grupo',
        en: 'Group',
        pt: 'Grupo',
        fr: 'Groupe',
        it: 'Gruppo',
      },
      template: 'https://www.facebook.com/groups/{group}',
      fields: [
        {
          id: 'group',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: 'facebook.com/groups/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{1,100}$',
          label: {
            es: 'Nombre o ID del grupo',
            en: 'Group name or ID',
            pt: 'Nome ou ID do grupo',
            fr: 'Nom ou ID du groupe',
            it: 'Nome o ID del gruppo',
          },
          placeholder: {
            es: 'Ej.: vecinosdepalermo',
            en: 'e.g. ourneighborhood',
            pt: 'Ex.: vizinhosdobairro',
            fr: 'Ex. : voisinsduquartier',
            it: 'Es.: viciniquartiere',
          },
          hint: {
            es: 'Copiá lo que aparece después de facebook.com/groups/ en la dirección del grupo.',
            en: 'Copy what appears after facebook.com/groups/ in the group\'s address.',
            pt: 'Copie o que aparece depois de facebook.com/groups/ no endereço do grupo.',
            fr: 'Copiez ce qui suit facebook.com/groups/ dans l\'adresse du groupe.',
            it: 'Copia ciò che segue facebook.com/groups/ nell\'indirizzo del gruppo.',
          },
        },
      ],
    },
  ],
};

export default template;
