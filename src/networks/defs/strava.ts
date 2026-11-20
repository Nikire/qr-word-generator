import { siStrava } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'strava',
  name: 'Strava',
  icon: { path: siStrava.path, color: `#${siStrava.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil o tu club de Strava.',
    en: 'Create a QR code that opens your Strava profile or club.',
    pt: 'Crie um QR code que abre seu perfil ou clube no Strava.',
    fr: 'Créez un QR code qui ouvre votre profil ou club Strava.',
    it: 'Crea un codice QR che apre il tuo profilo o club Strava.',
  },
  modes: [
    {
      id: 'athlete',
      label: {
        es: 'Atleta',
        en: 'Athlete',
        pt: 'Atleta',
        fr: 'Athlète',
        it: 'Atleta',
      },
      template: 'https://www.strava.com/athletes/{athleteId}',
      fields: [
        {
          id: 'athleteId',
          type: 'text',
          required: true,
          maxLength: 12,
          prefix: 'strava.com/athletes/',
          sanitize: 'digits',
          pattern: '^\\d{1,12}$',
          label: {
            es: 'ID de atleta',
            en: 'Athlete ID',
            pt: 'ID de atleta',
            fr: 'ID d\'athlète',
            it: 'ID atleta',
          },
          placeholder: {
            es: 'Ej.: 12345678',
            en: 'e.g. 12345678',
            pt: 'Ex.: 12345678',
            fr: 'Ex. : 12345678',
            it: 'Es.: 12345678',
          },
          hint: {
            es: 'Es el número al final de la URL de tu perfil en la web de Strava.',
            en: 'It\'s the number at the end of your profile URL on the Strava website.',
            pt: 'É o número no final da URL do seu perfil no site do Strava.',
            fr: 'C\'est le numéro à la fin de l\'URL de votre profil sur le site Strava.',
            it: 'È il numero alla fine dell\'URL del tuo profilo sul sito Strava.',
          },
        },
      ],
    },
    {
      id: 'club',
      label: {
        es: 'Club',
        en: 'Club',
        pt: 'Clube',
        fr: 'Club',
        it: 'Club',
      },
      template: 'https://www.strava.com/clubs/{club}',
      fields: [
        {
          id: 'club',
          type: 'text',
          required: true,
          maxLength: 80,
          prefix: 'strava.com/clubs/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,80}$',
          label: {
            es: 'Club',
            en: 'Club',
            pt: 'Clube',
            fr: 'Club',
            it: 'Club',
          },
          placeholder: {
            es: 'Ej.: runners-palermo',
            en: 'e.g. city-runners',
            pt: 'Ex.: corredores-sp',
            fr: 'Ex. : coureurs-paris',
            it: 'Es.: runner-milano',
          },
          hint: {
            es: 'Es lo que va después de /clubs/ en la página de tu club (nombre o número).',
            en: 'It\'s what comes after /clubs/ on your club page (name or number).',
            pt: 'É o que vem depois de /clubs/ na página do seu clube (nome ou número).',
            fr: 'C\'est ce qui suit /clubs/ sur la page de votre club (nom ou numéro).',
            it: 'È ciò che segue /clubs/ nella pagina del tuo club (nome o numero).',
          },
        },
      ],
    },
  ],
};

export default template;
