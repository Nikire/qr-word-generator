import { siApplemusic } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'apple-music',
  name: 'Apple Music',
  icon: { path: siApplemusic.path, color: `#${siApplemusic.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre un artista o un álbum en Apple Music.',
    en: 'Create a QR code that opens an artist or album on Apple Music.',
    pt: 'Crie um QR code que abre um artista ou álbum no Apple Music.',
    fr: 'Créez un code QR qui ouvre un artiste ou un album sur Apple Music.',
    it: 'Crea un codice QR che apre un artista o un album su Apple Music.',
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
      template: 'https://music.apple.com/artist/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 300,
          sanitize: 'handle',
          pattern: '^[0-9]+$',
          label: {
            es: 'Enlace del artista',
            en: 'Artist link',
            pt: 'Link do artista',
            fr: 'Lien de l\'artiste',
            it: 'Link dell\'artista',
          },
          placeholder: {
            es: 'Ej.: https://music.apple.com/ar/artist/mi-banda/909253',
            en: 'e.g. https://music.apple.com/us/artist/my-band/909253',
            pt: 'Ex.: https://music.apple.com/br/artist/minha-banda/909253',
            fr: 'Ex. : https://music.apple.com/fr/artist/mon-groupe/909253',
            it: 'Es.: https://music.apple.com/it/artist/la-mia-band/909253',
          },
          hint: {
            es: 'En el perfil del artista, tocá ⋯ > Compartir > Copiar enlace; también sirve solo el número final.',
            en: 'On the artist page, tap ⋯ > Share > Copy Link; the final number alone also works.',
            pt: 'Na página do artista, toque em ⋯ > Compartilhar > Copiar link; só o número final também serve.',
            fr: 'Sur la page de l\'artiste, touchez ⋯ > Partager > Copier le lien ; le numéro final seul fonctionne aussi.',
            it: 'Nella pagina dell\'artista, tocca ⋯ > Condividi > Copia link; va bene anche solo il numero finale.',
          },
        },
      ],
    },
    {
      id: 'album',
      label: {
        es: 'Álbum',
        en: 'Album',
        pt: 'Álbum',
        fr: 'Album',
        it: 'Album',
      },
      template: 'https://music.apple.com/album/{id}',
      fields: [
        {
          id: 'id',
          type: 'text',
          required: true,
          maxLength: 300,
          sanitize: 'handle',
          pattern: '^[0-9]+$',
          label: {
            es: 'Enlace del álbum',
            en: 'Album link',
            pt: 'Link do álbum',
            fr: 'Lien de l\'album',
            it: 'Link dell\'album',
          },
          placeholder: {
            es: 'Ej.: https://music.apple.com/ar/album/mi-disco/1440857781',
            en: 'e.g. https://music.apple.com/us/album/my-record/1440857781',
            pt: 'Ex.: https://music.apple.com/br/album/meu-disco/1440857781',
            fr: 'Ex. : https://music.apple.com/fr/album/mon-disque/1440857781',
            it: 'Es.: https://music.apple.com/it/album/il-mio-disco/1440857781',
          },
          hint: {
            es: 'Copiá el enlace del álbum desde ⋯ > Compartir; también sirve solo el número final.',
            en: 'Copy the album link from ⋯ > Share; the final number alone also works.',
            pt: 'Copie o link do álbum em ⋯ > Compartilhar; só o número final também serve.',
            fr: 'Copiez le lien de l\'album via ⋯ > Partager ; le numéro final seul fonctionne aussi.',
            it: 'Copia il link dell\'album da ⋯ > Condividi; va bene anche solo il numero finale.',
          },
        },
      ],
    },
  ],
};

export default template;
