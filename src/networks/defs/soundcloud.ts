import { siSoundcloud } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'soundcloud',
  name: 'SoundCloud',
  icon: { path: siSoundcloud.path, color: `#${siSoundcloud.hex}` },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil de SoundCloud.',
    en: 'Create a QR code that opens your SoundCloud profile.',
    pt: 'Crie um QR code que abre seu perfil do SoundCloud.',
    fr: 'Créez un code QR qui ouvre votre profil SoundCloud.',
    it: 'Crea un codice QR che apre il tuo profilo SoundCloud.',
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
      template: 'https://soundcloud.com/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 200,
          prefix: 'soundcloud.com/',
          sanitize: 'handle',
          pattern: '^(?!(?:tracks|albums|sets|reposts|popular-tracks|likes|followers|following)$)[A-Za-z0-9_-]{2,50}$',
          label: {
            es: 'Usuario',
            en: 'Username',
            pt: 'Usuário',
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
            es: 'Es lo que sigue a soundcloud.com/ en tu perfil; no uses el enlace corto on.soundcloud.com.',
            en: 'It\'s what follows soundcloud.com/ on your profile; don\'t use the on.soundcloud.com short link.',
            pt: 'É o que vem depois de soundcloud.com/ no seu perfil; não use o link curto on.soundcloud.com.',
            fr: 'C\'est ce qui suit soundcloud.com/ sur votre profil ; n\'utilisez pas le lien court on.soundcloud.com.',
            it: 'È ciò che segue soundcloud.com/ nel tuo profilo; non usare il link breve on.soundcloud.com.',
          },
        },
      ],
    },
  ],
};

export default template;
