import { siDeezer } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'deezer',
  name: 'Deezer',
  icon: { path: siDeezer.path, color: `#${siDeezer.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre un artista, una playlist o un podcast en Deezer.',
    en: 'Create a QR code that opens an artist, playlist or podcast on Deezer.',
    pt: 'Crie um QR code que abre um artista, uma playlist ou um podcast no Deezer.',
    fr: 'Créez un code QR qui ouvre un artiste, une playlist ou un podcast sur Deezer.',
    it: 'Crea un codice QR che apre un artista, una playlist o un podcast su Deezer.',
  },
  modes: [
    {
      id: 'artist',
      label: {
        es: 'Artista',
        en: 'Artist',
        pt: 'Artista',
        fr: 'Artiste',
        it: 'Artista',
      },
      template: 'https://www.deezer.com/artist/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'handle',
          pattern: '^[0-9]+$',
          label: {
            es: 'ID del artista',
            en: 'Artist ID',
            pt: 'ID do artista',
            fr: 'ID de l\'artiste',
            it: 'ID dell\'artista',
          },
          placeholder: {
            es: 'Ej.: 1234567',
            en: 'e.g. 1234567',
            pt: 'Ex.: 1234567',
            fr: 'Ex. : 1234567',
            it: 'Es.: 1234567',
          },
          hint: {
            es: 'Es el número después de /artist/ en deezer.com; también puedes pegar ese enlace.',
            en: 'It\'s the number after /artist/ on deezer.com; you can also paste that link.',
            pt: 'É o número depois de /artist/ em deezer.com; também dá para colar esse link.',
            fr: 'C\'est le numéro après /artist/ sur deezer.com ; vous pouvez aussi coller ce lien.',
            it: 'È il numero dopo /artist/ su deezer.com; puoi anche incollare quel link.',
          },
        },
      ],
    },
    {
      id: 'playlist',
      label: {
        es: 'Playlist',
        en: 'Playlist',
        pt: 'Playlist',
        fr: 'Playlist',
        it: 'Playlist',
      },
      template: 'https://www.deezer.com/playlist/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'handle',
          pattern: '^[0-9]+$',
          label: {
            es: 'ID de la playlist',
            en: 'Playlist ID',
            pt: 'ID da playlist',
            fr: 'ID de la playlist',
            it: 'ID della playlist',
          },
          placeholder: {
            es: 'Ej.: 908622995',
            en: 'e.g. 908622995',
            pt: 'Ex.: 908622995',
            fr: 'Ex. : 908622995',
            it: 'Es.: 908622995',
          },
          hint: {
            es: 'Es el número después de /playlist/ en deezer.com.',
            en: 'It\'s the number after /playlist/ on deezer.com.',
            pt: 'É o número depois de /playlist/ em deezer.com.',
            fr: 'C\'est le numéro après /playlist/ sur deezer.com.',
            it: 'È il numero dopo /playlist/ su deezer.com.',
          },
        },
      ],
    },
    {
      id: 'show',
      label: {
        es: 'Podcast',
        en: 'Podcast',
        pt: 'Podcast',
        fr: 'Podcast',
        it: 'Podcast',
      },
      template: 'https://www.deezer.com/show/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'handle',
          pattern: '^[0-9]+$',
          label: {
            es: 'ID del podcast',
            en: 'Podcast ID',
            pt: 'ID do podcast',
            fr: 'ID du podcast',
            it: 'ID del podcast',
          },
          placeholder: {
            es: 'Ej.: 1001',
            en: 'e.g. 1001',
            pt: 'Ex.: 1001',
            fr: 'Ex. : 1001',
            it: 'Es.: 1001',
          },
          hint: {
            es: 'Es el número después de /show/ en deezer.com.',
            en: 'It\'s the number after /show/ on deezer.com.',
            pt: 'É o número depois de /show/ em deezer.com.',
            fr: 'C\'est le numéro après /show/ sur deezer.com.',
            it: 'È il numero dopo /show/ su deezer.com.',
          },
        },
      ],
    },
  ],
};

export default template;
