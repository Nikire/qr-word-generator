import { siOpencollective } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'opencollective',
  name: 'Open Collective',
  icon: { path: siOpencollective.path, color: `#${siOpencollective.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Creá un código QR que abre la página de tu colectivo en Open Collective.',
    en: 'Create a QR code that opens your Open Collective page.',
    pt: 'Crie um QR code que abre a página do seu coletivo no Open Collective.',
    fr: 'Créez un code QR qui ouvre votre page Open Collective.',
    it: 'Crea un codice QR che apre la tua pagina Open Collective.',
  },
  modes: [
    {
      id: 'collective',
      label: {
        es: 'Colectivo',
        en: 'Collective',
        pt: 'Coletivo',
        fr: 'Collectif',
        it: 'Collettivo',
      },
      template: 'https://opencollective.com/{slug}',
      fields: [
        {
          id: 'slug',
          type: 'text',
          required: true,
          maxLength: 60,
          prefix: 'opencollective.com/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{1,60}$',
          label: {
            es: 'Identificador',
            en: 'Handle',
            pt: 'Identificador',
            fr: 'Identifiant',
            it: 'Identificativo',
          },
          placeholder: {
            es: 'Ej.: mi-proyecto',
            en: 'e.g. my-project',
            pt: 'Ex.: meu-projeto',
            fr: 'Ex. : mon-projet',
            it: 'Es.: mio-progetto',
          },
          hint: {
            es: 'Es lo que va después de opencollective.com/ en tu enlace.',
            en: 'It\'s what comes after opencollective.com/ in your link.',
            pt: 'É o que vem depois de opencollective.com/ no seu link.',
            fr: 'C\'est ce qui suit opencollective.com/ dans votre lien.',
            it: 'È ciò che segue opencollective.com/ nel tuo link.',
          },
        },
      ],
    },
  ],
};

export default template;
