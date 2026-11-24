import { siTidal } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'tidal',
  name: 'TIDAL',
  icon: { path: siTidal.path, color: `#${siTidal.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre un artista o una playlist en TIDAL.',
    en: 'Create a QR code that opens an artist or playlist on TIDAL.',
    pt: 'Crie um QR code que abre um artista ou uma playlist no TIDAL.',
    fr: 'Créez un code QR qui ouvre un artiste ou une playlist sur TIDAL.',
    it: 'Crea un codice QR che apre un artista o una playlist su TIDAL.',
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
      template: 'https://tidal.com/browse/artist/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'digits',
          pattern: '^[0-9]{1,15}$',
          label: {
            es: 'ID del artista',
            en: 'Artist ID',
            pt: 'ID do artista',
            fr: 'ID de l\'artiste',
            it: 'ID dell\'artista',
          },
          placeholder: {
            es: 'Ej.: 7804',
            en: 'e.g. 7804',
            pt: 'Ex.: 7804',
            fr: 'Ex. : 7804',
            it: 'Es.: 7804',
          },
          hint: {
            es: 'Es el número que aparece después de /artist/ en el enlace del artista.',
            en: 'It\'s the number after /artist/ in the artist link.',
            pt: 'É o número depois de /artist/ no link do artista.',
            fr: 'C\'est le numéro après /artist/ dans le lien de l\'artiste.',
            it: 'È il numero dopo /artist/ nel link dell\'artista.',
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
      template: 'https://tidal.com/browse/playlist/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'handle',
          pattern: '^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$',
          label: {
            es: 'ID de la playlist',
            en: 'Playlist ID',
            pt: 'ID da playlist',
            fr: 'ID de la playlist',
            it: 'ID della playlist',
          },
          placeholder: {
            es: 'Ej.: 36ea71a8-445e-41a4-82ab-6628c581535d',
            en: 'e.g. 36ea71a8-445e-41a4-82ab-6628c581535d',
            pt: 'Ex.: 36ea71a8-445e-41a4-82ab-6628c581535d',
            fr: 'Ex. : 36ea71a8-445e-41a4-82ab-6628c581535d',
            it: 'Es.: 36ea71a8-445e-41a4-82ab-6628c581535d',
          },
          hint: {
            es: 'Es el código con guiones que sigue a /playlist/ en el enlace.',
            en: 'It\'s the hyphenated code after /playlist/ in the link.',
            pt: 'É o código com hifens depois de /playlist/ no link.',
            fr: 'C\'est le code avec tirets après /playlist/ dans le lien.',
            it: 'È il codice con trattini dopo /playlist/ nel link.',
          },
        },
      ],
    },
  ],
};

export default template;
