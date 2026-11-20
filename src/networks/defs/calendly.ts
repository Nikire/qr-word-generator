import { siCalendly } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'calendly',
  name: 'Calendly',
  icon: { path: siCalendly.path, color: `#${siCalendly.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu página de reservas de Calendly.',
    en: 'Create a QR code that opens your Calendly booking page.',
    pt: 'Crie um QR code que abre sua página de agendamento no Calendly.',
    fr: 'Créez un QR code qui ouvre votre page de réservation Calendly.',
    it: 'Crea un codice QR che apre la tua pagina di prenotazione Calendly.',
  },
  modes: [
    {
      id: 'page',
      label: {
        es: 'Página de reservas',
        en: 'Booking page',
        pt: 'Página de agendamento',
        fr: 'Page de réservation',
        it: 'Pagina prenotazioni',
      },
      template: 'https://calendly.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 60,
          prefix: 'calendly.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,60}$',
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
            es: 'Es lo que va después de calendly.com/ en tu enlace.',
            en: 'It\'s what comes after calendly.com/ in your link.',
            pt: 'É o que vem depois de calendly.com/ no seu link.',
            fr: 'C\'est ce qui suit calendly.com/ dans votre lien.',
            it: 'È ciò che segue calendly.com/ nel tuo link.',
          },
        },
      ],
    },
    {
      id: 'event',
      label: {
        es: 'Evento',
        en: 'Event',
        pt: 'Evento',
        fr: 'Événement',
        it: 'Evento',
      },
      template: 'https://calendly.com/{username}/{event}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 60,
          prefix: 'calendly.com/',
          sanitize: 'trim',
          pattern: '^[A-Za-z0-9_-]{1,60}$',
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
        },
        {
          id: 'event',
          type: 'text',
          required: true,
          maxLength: 80,
          prefix: '/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,80}$',
          label: {
            es: 'Tipo de evento',
            en: 'Event type',
            pt: 'Tipo de evento',
            fr: 'Type d\'événement',
            it: 'Tipo di evento',
          },
          placeholder: {
            es: 'Ej.: 30min',
            en: 'e.g. 30min',
            pt: 'Ex.: 30min',
            fr: 'Ex. : 30min',
            it: 'Es.: 30min',
          },
          hint: {
            es: 'Es la última parte del enlace del evento.',
            en: 'It\'s the last part of the event link.',
            pt: 'É a última parte do link do evento.',
            fr: 'C\'est la dernière partie du lien de l\'événement.',
            it: 'È l\'ultima parte del link dell\'evento.',
          },
        },
      ],
    },
  ],
};

export default template;
