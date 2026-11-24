import { siGoodreads } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'goodreads',
  name: 'Goodreads',
  icon: { path: siGoodreads.path, color: `#${siGoodreads.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu página de autor o tu perfil de lector en Goodreads.',
    en: 'Create a QR code that opens your Goodreads author page or reader profile.',
    pt: 'Crie um QR code que abre sua página de autor ou perfil de leitor no Goodreads.',
    fr: 'Créez un QR code qui ouvre votre page d\'auteur ou profil de lecteur Goodreads.',
    it: 'Crea un codice QR che apre la tua pagina autore o il tuo profilo lettore su Goodreads.',
  },
  modes: [
    {
      id: 'author',
      label: {
        es: 'Autor',
        en: 'Author',
        pt: 'Autor',
        fr: 'Auteur',
        it: 'Autore',
      },
      template: 'https://www.goodreads.com/author/show/{authorId}',
      fields: [
        {
          id: 'authorId',
          type: 'text',
          required: true,
          maxLength: 120,
          prefix: 'goodreads.com/author/show/',
          sanitize: 'handle',
          pattern: '^\\d+(?:[.-][A-Za-z0-9_.-]*)?$',
          label: {
            es: 'ID de autor',
            en: 'Author ID',
            pt: 'ID do autor',
            fr: 'ID d\'auteur',
            it: 'ID autore',
          },
          placeholder: {
            es: 'Ej.: 17621440',
            en: 'e.g. 17621440',
            pt: 'Ex.: 17621440',
            fr: 'Ex. : 17621440',
            it: 'Es.: 17621440',
          },
          hint: {
            es: 'Es el número que aparece después de /author/show/ en tu página de autor.',
            en: 'It\'s the number after /author/show/ on your author page.',
            pt: 'É o número depois de /author/show/ na sua página de autor.',
            fr: 'C\'est le numéro après /author/show/ sur votre page d\'auteur.',
            it: 'È il numero dopo /author/show/ nella tua pagina autore.',
          },
        },
      ],
    },
    {
      id: 'reader',
      label: {
        es: 'Lector',
        en: 'Reader',
        pt: 'Leitor',
        fr: 'Lecteur',
        it: 'Lettore',
      },
      template: 'https://www.goodreads.com/user/show/{userId}',
      fields: [
        {
          id: 'userId',
          type: 'text',
          required: true,
          maxLength: 120,
          prefix: 'goodreads.com/user/show/',
          sanitize: 'handle',
          pattern: '^\\d+(?:[.-][A-Za-z0-9_.-]*)?$',
          label: {
            es: 'ID de usuario',
            en: 'User ID',
            pt: 'ID de usuário',
            fr: 'ID utilisateur',
            it: 'ID utente',
          },
          placeholder: {
            es: 'Ej.: 12345678',
            en: 'e.g. 12345678',
            pt: 'Ex.: 12345678',
            fr: 'Ex. : 12345678',
            it: 'Es.: 12345678',
          },
          hint: {
            es: 'Es el número que aparece después de /user/show/ en tu perfil.',
            en: 'It\'s the number after /user/show/ on your profile.',
            pt: 'É o número depois de /user/show/ no seu perfil.',
            fr: 'C\'est le numéro après /user/show/ sur votre profil.',
            it: 'È il numero dopo /user/show/ nel tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
