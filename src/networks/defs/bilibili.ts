import { siBilibili } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'bilibili',
  name: 'bilibili',
  icon: { path: siBilibili.path, color: `#${siBilibili.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu espacio personal en bilibili.',
    en: 'Create a QR code that opens your bilibili space.',
    pt: 'Crie um QR code que abre seu espaço no bilibili.',
    fr: 'Créez un code QR qui ouvre votre espace bilibili.',
    it: 'Crea un codice QR che apre il tuo spazio su bilibili.',
  },
  modes: [
    {
      id: 'space',
      label: {
        es: 'Perfil',
        en: 'Profile',
        pt: 'Perfil',
        fr: 'Profil',
        it: 'Profilo',
      },
      template: 'https://space.bilibili.com/{uid}',
      fields: [
        {
          id: 'uid',
          type: 'text',
          required: true,
          maxLength: 200,
          sanitize: 'handle',
          pattern: '^[0-9]{1,20}$',
          label: {
            es: 'UID',
            en: 'UID',
            pt: 'UID',
            fr: 'UID',
            it: 'UID',
          },
          placeholder: {
            es: 'Ej.: 12345678',
            en: 'e.g. 12345678',
            pt: 'Ex.: 12345678',
            fr: 'Ex. : 12345678',
            it: 'Es.: 12345678',
          },
          hint: {
            es: 'Es el número de tu perfil; también podés pegar el enlace de space.bilibili.com.',
            en: 'Your numeric profile ID; you can also paste your space.bilibili.com link.',
            pt: 'É o número do seu perfil; também dá para colar o link de space.bilibili.com.',
            fr: 'Votre identifiant numérique ; vous pouvez aussi coller le lien space.bilibili.com.',
            it: 'È il numero del tuo profilo; puoi anche incollare il link space.bilibili.com.',
          },
        },
      ],
    },
  ],
};

export default template;
