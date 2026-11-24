import { siCaldotcom } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'caldotcom',
  name: 'Cal.com',
  icon: { path: siCaldotcom.path, color: `#${siCaldotcom.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu página de reservas de Cal.com.',
    en: 'Create a QR code that opens your Cal.com booking page.',
    pt: 'Crie um QR code que abre sua página de agendamento no Cal.com.',
    fr: 'Créez un QR code qui ouvre votre page de réservation Cal.com.',
    it: 'Crea un codice QR che apre la tua pagina di prenotazione Cal.com.',
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
      template: 'https://cal.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 60,
          prefix: 'cal.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_.-]{1,60}$',
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
      ],
    },
  ],
};

export default template;
