import { siSnapchat } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'snapchat',
  name: 'Snapchat',
  icon: { path: siSnapchat.path, color: `#${siSnapchat.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR para que te agreguen como amigo en Snapchat.',
    en: 'Create a QR code that lets people add you as a friend on Snapchat.',
    pt: 'Crie um QR code para que te adicionem como amigo no Snapchat.',
    fr: 'Créez un code QR pour qu\'on vous ajoute en ami sur Snapchat.',
    it: 'Crea un codice QR per farti aggiungere come amico su Snapchat.',
  },
  modes: [
    {
      id: 'add',
      label: {
        es: 'Agregar amigo',
        en: 'Add friend',
        pt: 'Adicionar amigo',
        fr: 'Ajouter en ami',
        it: 'Aggiungi amico',
      },
      template: 'https://www.snapchat.com/add/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 15,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z][A-Za-z0-9._-]{1,13}[A-Za-z0-9]$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Nome de usuário',
            fr: 'Nom d\'utilisateur',
            it: 'Nome utente',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. mystore',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: ilmionegozio',
          },
          hint: {
            es: 'Es tu nombre de usuario, no el nombre visible.',
            en: 'Use your username, not your display name.',
            pt: 'Use seu nome de usuário, não o nome de exibição.',
            fr: 'Utilisez votre nom d\'utilisateur, pas votre nom affiché.',
            it: 'Usa il nome utente, non il nome visualizzato.',
          },
        },
      ],
    },
  ],
};

export default template;
