import { siSubstack } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'substack',
  name: 'Substack',
  icon: { path: siSubstack.path, color: `#${siSubstack.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu publicación o perfil de Substack.',
    en: 'Create a QR code that opens your Substack publication or profile.',
    pt: 'Crie um QR code que abre sua publicação ou perfil no Substack.',
    fr: 'Créez un QR code qui ouvre votre publication ou profil Substack.',
    it: 'Crea un codice QR che apre la tua pubblicazione o il tuo profilo Substack.',
  },
  modes: [
    {
      id: 'publication',
      label: {
        es: 'Publicación',
        en: 'Publication',
        pt: 'Publicação',
        fr: 'Publication',
        it: 'Pubblicazione',
      },
      template: 'https://{subdomain:raw}.substack.com',
      fields: [
        {
          id: 'subdomain',
          type: 'text',
          required: true,
          maxLength: 63,
          sanitize: 'trim',
          pattern: '^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$',
          label: {
            es: 'Subdominio',
            en: 'Subdomain',
            pt: 'Subdomínio',
            fr: 'Sous-domaine',
            it: 'Sottodominio',
          },
          placeholder: {
            es: 'Ej.: miboletin',
            en: 'e.g. mynewsletter',
            pt: 'Ex.: minhanewsletter',
            fr: 'Ex. : manewsletter',
            it: 'Es.: lamianewsletter',
          },
          hint: {
            es: 'Solo la parte antes de .substack.com.',
            en: 'Only the part before .substack.com.',
            pt: 'Só a parte antes de .substack.com.',
            fr: 'Seulement la partie avant .substack.com.',
            it: 'Solo la parte prima di .substack.com.',
          },
        },
      ],
    },
    {
      id: 'profile',
      label: {
        es: 'Perfil',
        en: 'Profile',
        pt: 'Perfil',
        fr: 'Profil',
        it: 'Profilo',
      },
      template: 'https://substack.com/@{handle}',
      fields: [
        {
          id: 'handle',
          type: 'text',
          required: true,
          maxLength: 63,
          prefix: 'substack.com/@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,63}$',
          label: {
            es: 'Usuario',
            en: 'Handle',
            pt: 'Usuário',
            fr: 'Identifiant',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: juanperez',
            en: 'e.g. janedoe',
            pt: 'Ex.: joaosilva',
            fr: 'Ex. : mariedupont',
            it: 'Es.: mariorossi',
          },
          hint: {
            es: 'Escribilo sin la @.',
            en: 'Enter it without the @.',
            pt: 'Digite sem o @.',
            fr: 'Saisissez-le sans le @.',
            it: 'Inseriscilo senza la @.',
          },
        },
      ],
    },
  ],
};

export default template;
