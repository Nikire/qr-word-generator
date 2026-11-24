import { siHuggingface } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'huggingface',
  name: 'Hugging Face',
  icon: { path: siHuggingface.path, color: `#${siHuggingface.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil u organización en Hugging Face.',
    en: 'Create a QR code that opens your Hugging Face profile or organization.',
    pt: 'Crie um QR code que abre seu perfil ou organização no Hugging Face.',
    fr: 'Créez un QR code qui ouvre votre profil ou organisation Hugging Face.',
    it: 'Crea un codice QR che apre il tuo profilo o organizzazione su Hugging Face.',
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
      template: 'https://huggingface.co/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 42,
          prefix: 'huggingface.co/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_.-]{1,42}$',
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
        },
      ],
    },
  ],
};

export default template;
