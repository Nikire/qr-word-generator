import { siFlickr } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'flickr',
  name: 'Flickr',
  icon: { path: siFlickr.path, color: `#${siFlickr.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu galería de fotos de Flickr.',
    en: 'Create a QR code that opens your Flickr photostream.',
    pt: 'Crie um QR code que abre sua galeria de fotos no Flickr.',
    fr: 'Créez un QR code qui ouvre votre galerie de photos Flickr.',
    it: 'Crea un codice QR che apre la tua galleria di foto su Flickr.',
  },
  modes: [
    {
      id: 'photos',
      label: {
        es: 'Fotos',
        en: 'Photostream',
        pt: 'Fotos',
        fr: 'Photos',
        it: 'Foto',
      },
      template: 'https://www.flickr.com/photos/{user:raw}/',
      fields: [
        {
          id: 'user',
          type: 'text',
          required: true,
          maxLength: 60,
          prefix: 'flickr.com/photos/',
          sanitize: 'handle',
          pattern: '^(?:[A-Za-z0-9_-]{1,60}|\\d+@N\\d{2})$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Usuário',
            fr: 'Nom d\'utilisateur',
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
            es: 'Tu alias de URL o tu ID (como 12345678@N00), después de /photos/.',
            en: 'Your URL alias or ID (like 12345678@N00), after /photos/.',
            pt: 'Seu alias de URL ou ID (como 12345678@N00), depois de /photos/.',
            fr: 'Votre alias d\'URL ou ID (comme 12345678@N00), après /photos/.',
            it: 'Il tuo alias URL o ID (come 12345678@N00), dopo /photos/.',
          },
        },
      ],
    },
  ],
};

export default template;
