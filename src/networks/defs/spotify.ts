import { siSpotify } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'spotify',
  name: 'Spotify',
  icon: { path: siSpotify.path, color: `#${siSpotify.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Creá un código QR que abre un artista, una playlist o un podcast en Spotify.',
    en: 'Create a QR code that opens an artist, playlist or podcast on Spotify.',
    pt: 'Crie um QR code que abre um artista, uma playlist ou um podcast no Spotify.',
    fr: 'Créez un code QR qui ouvre un artiste, une playlist ou un podcast sur Spotify.',
    it: 'Crea un codice QR che apre un artista, una playlist o un podcast su Spotify.',
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
      template: 'https://open.spotify.com/artist/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 300,
          sanitize: 'handle',
          pattern: '^[0-9A-Za-z]{22}$',
          label: {
            es: 'Enlace del artista',
            en: 'Artist link',
            pt: 'Link do artista',
            fr: 'Lien de l\'artiste',
            it: 'Link dell\'artista',
          },
          placeholder: {
            es: 'Ej.: https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            en: 'e.g. https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            pt: 'Ex.: https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            fr: 'Ex. : https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            it: 'Es.: https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
          },
          hint: {
            es: 'En Spotify, tocá ⋯ > Compartir > Copiar enlace del artista y pegalo acá.',
            en: 'In Spotify, tap ⋯ > Share > Copy link to artist and paste it here.',
            pt: 'No Spotify, toque em ⋯ > Compartilhar > Copiar link do artista e cole aqui.',
            fr: 'Dans Spotify, touchez ⋯ > Partager > Copier le lien de l\'artiste et collez-le ici.',
            it: 'In Spotify, tocca ⋯ > Condividi > Copia link dell\'artista e incollalo qui.',
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
      template: 'https://open.spotify.com/playlist/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 300,
          sanitize: 'handle',
          pattern: '^[0-9A-Za-z]{22}$',
          label: {
            es: 'Enlace de la playlist',
            en: 'Playlist link',
            pt: 'Link da playlist',
            fr: 'Lien de la playlist',
            it: 'Link della playlist',
          },
          placeholder: {
            es: 'Ej.: https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
            en: 'e.g. https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
            pt: 'Ex.: https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
            fr: 'Ex. : https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
            it: 'Es.: https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
          },
          hint: {
            es: 'En la playlist, tocá ⋯ > Compartir > Copiar enlace y pegalo acá.',
            en: 'On the playlist, tap ⋯ > Share > Copy link and paste it here.',
            pt: 'Na playlist, toque em ⋯ > Compartilhar > Copiar link e cole aqui.',
            fr: 'Sur la playlist, touchez ⋯ > Partager > Copier le lien et collez-le ici.',
            it: 'Nella playlist, tocca ⋯ > Condividi > Copia link e incollalo qui.',
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
      template: 'https://open.spotify.com/show/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 300,
          sanitize: 'handle',
          pattern: '^[0-9A-Za-z]{22}$',
          label: {
            es: 'Enlace del podcast',
            en: 'Podcast link',
            pt: 'Link do podcast',
            fr: 'Lien du podcast',
            it: 'Link del podcast',
          },
          placeholder: {
            es: 'Ej.: https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL',
            en: 'e.g. https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL',
            pt: 'Ex.: https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL',
            fr: 'Ex. : https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL',
            it: 'Es.: https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL',
          },
          hint: {
            es: 'En el podcast, tocá ⋯ > Compartir > Copiar enlace y pegalo acá.',
            en: 'On the podcast, tap ⋯ > Share > Copy link and paste it here.',
            pt: 'No podcast, toque em ⋯ > Compartilhar > Copiar link e cole aqui.',
            fr: 'Sur le podcast, touchez ⋯ > Partager > Copier le lien et collez-le ici.',
            it: 'Nel podcast, tocca ⋯ > Condividi > Copia link e incollalo qui.',
          },
        },
      ],
    },
  ],
};

export default template;
