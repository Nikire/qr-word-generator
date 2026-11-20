import { siElement } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'element',
  name: 'Element (Matrix)',
  icon: { path: siElement.path, color: `#${siElement.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu usuario o sala de Matrix en Element u otra app compatible.',
    en: 'Create a QR code that opens your Matrix user or room in Element or another compatible app.',
    pt: 'Crie um QR code que abre seu usuário ou sala do Matrix no Element ou em outro app compatível.',
    fr: 'Créez un code QR qui ouvre votre utilisateur ou salon Matrix dans Element ou une autre app compatible.',
    it: 'Crea un codice QR che apre il tuo utente o la tua stanza Matrix in Element o in un\'altra app compatibile.',
  },
  modes: [
    {
      id: 'user',
      label: {
        es: 'Usuario',
        en: 'User',
        pt: 'Usuário',
        fr: 'Utilisateur',
        it: 'Utente',
      },
      template: 'https://matrix.to/#/@{userId}',
      fields: [
        {
          id: 'userId',
          type: 'text',
          required: true,
          maxLength: 255,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[a-z0-9._=/+-]+:[A-Za-z0-9.-]+(:[0-9]{1,5})?$',
          label: {
            es: 'ID de Matrix',
            en: 'Matrix ID',
            pt: 'ID do Matrix',
            fr: 'ID Matrix',
            it: 'ID Matrix',
          },
          placeholder: {
            es: 'Ej.: mitienda:matrix.org',
            en: 'e.g. mystore:matrix.org',
            pt: 'Ex.: minhaloja:matrix.org',
            fr: 'Ex. : maboutique:matrix.org',
            it: 'Es.: ilmionegozio:matrix.org',
          },
          hint: {
            es: 'En minúsculas, con el servidor después de los dos puntos.',
            en: 'Lowercase, with the server after the colon.',
            pt: 'Em minúsculas, com o servidor depois dos dois-pontos.',
            fr: 'En minuscules, avec le serveur après les deux-points.',
            it: 'In minuscolo, con il server dopo i due punti.',
          },
        },
      ],
    },
    {
      id: 'room',
      label: {
        es: 'Sala',
        en: 'Room',
        pt: 'Sala',
        fr: 'Salon',
        it: 'Stanza',
      },
      template: 'https://matrix.to/#/%23{roomAlias}',
      fields: [
        {
          id: 'roomAlias',
          type: 'text',
          required: true,
          maxLength: 255,
          prefix: '#',
          sanitize: 'trim',
          pattern: '^[^\\s#:]+:[A-Za-z0-9.-]+(:[0-9]{1,5})?$',
          label: {
            es: 'Alias de la sala',
            en: 'Room alias',
            pt: 'Alias da sala',
            fr: 'Alias du salon',
            it: 'Alias della stanza',
          },
          placeholder: {
            es: 'Ej.: comunidad:matrix.org',
            en: 'e.g. community:matrix.org',
            pt: 'Ex.: comunidade:matrix.org',
            fr: 'Ex. : communaute:matrix.org',
            it: 'Es.: comunita:matrix.org',
          },
          hint: {
            es: 'Escribilo sin el # inicial, con el servidor después de los dos puntos.',
            en: 'Type it without the leading #, with the server after the colon.',
            pt: 'Digite sem o # inicial, com o servidor depois dos dois-pontos.',
            fr: 'Saisissez-le sans le # initial, avec le serveur après les deux-points.',
            it: 'Scrivilo senza il # iniziale, con il server dopo i due punti.',
          },
        },
      ],
    },
  ],
};

export default template;
