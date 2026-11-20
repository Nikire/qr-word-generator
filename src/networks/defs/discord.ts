import { siDiscord } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'discord',
  name: 'Discord',
  icon: { path: siDiscord.path, color: `#${siDiscord.hex}` },
  subtitle: {
    es: 'Creá un código QR que invita a tu servidor de Discord.',
    en: 'Create a QR code that invites people to your Discord server.',
    pt: 'Crie um QR code que convida para seu servidor do Discord.',
    fr: 'Créez un code QR qui invite sur votre serveur Discord.',
    it: 'Crea un codice QR che invita al tuo server Discord.',
  },
  modes: [
    {
      id: 'invite',
      label: {
        es: 'Invitación a servidor',
        en: 'Server invite',
        pt: 'Convite para servidor',
        fr: 'Invitation au serveur',
        it: 'Invito al server',
      },
      template: 'https://discord.gg/{inviteCode}',
      fields: [
        {
          id: 'inviteCode',
          type: 'text',
          required: true,
          maxLength: 32,
          prefix: 'discord.gg/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{2,32}$',
          label: {
            es: 'Código de invitación',
            en: 'Invite code',
            pt: 'Código do convite',
            fr: 'Code d\'invitation',
            it: 'Codice di invito',
          },
          placeholder: {
            es: 'Ej.: aBc123XyZ',
            en: 'e.g. aBc123XyZ',
            pt: 'Ex.: aBc123XyZ',
            fr: 'Ex. : aBc123XyZ',
            it: 'Es.: aBc123XyZ',
          },
          hint: {
            es: 'Pegá el enlace de invitación; elegí que no caduque para que el QR siga funcionando.',
            en: 'Paste your invite link; set it to never expire so the QR keeps working.',
            pt: 'Cole o link de convite; defina que nunca expire para o QR continuar funcionando.',
            fr: 'Collez votre lien d\'invitation ; réglez-le pour qu\'il n\'expire jamais.',
            it: 'Incolla il link di invito; impostalo senza scadenza perché il QR continui a funzionare.',
          },
        },
      ],
    },
  ],
};

export default template;
