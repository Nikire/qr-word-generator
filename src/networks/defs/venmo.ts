import { siVenmo } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'venmo',
  name: 'Venmo',
  icon: { path: siVenmo.path, color: `#${siVenmo.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de Venmo para que te paguen.',
    en: 'Create a QR code that opens your Venmo profile so people can pay you.',
    pt: 'Crie um QR code que abre seu perfil do Venmo para receber pagamentos.',
    fr: 'Créez un code QR qui ouvre votre profil Venmo pour recevoir des paiements.',
    it: 'Crea un codice QR che apre il tuo profilo Venmo per ricevere pagamenti.',
  },
  modes: [
    {
      id: 'profile',
      label: {
        es: 'Perfil',
        en: 'Profile',
        pt: 'Perfil',
        fr: 'Profil',
        it: 'Profilo',
      },
      template: 'https://venmo.com/u/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 30,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{5,30}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Nome de usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: Juan-Perez',
            en: 'e.g. Jane-Doe',
            pt: 'Ex.: Joao-Silva',
            fr: 'Ex. : Marie-Dupont',
            it: 'Es.: Mario-Rossi',
          },
          hint: {
            es: 'Lo ves en la app de Venmo, en la pestaña Yo, debajo de tu nombre.',
            en: 'Find it in the Venmo app on the Me tab, under your name.',
            pt: 'Fica no app do Venmo, na aba Eu, abaixo do seu nome.',
            fr: 'Il apparaît dans l\'app Venmo, onglet Moi, sous votre nom.',
            it: 'Lo trovi nell\'app Venmo, scheda Io, sotto il tuo nome.',
          },
        },
      ],
    },
  ],
};

export default template;
