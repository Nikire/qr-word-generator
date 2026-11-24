import { siResearchgate } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'researchgate',
  name: 'ResearchGate',
  icon: { path: siResearchgate.path, color: `#${siResearchgate.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre tu perfil de ResearchGate.',
    en: 'Create a QR code that opens your ResearchGate profile.',
    pt: 'Crie um QR code que abre seu perfil no ResearchGate.',
    fr: 'Créez un QR code qui ouvre votre profil ResearchGate.',
    it: 'Crea un codice QR che apre il tuo profilo ResearchGate.',
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
      template: 'https://www.researchgate.net/profile/{profile}',
      fields: [
        {
          id: 'profile',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: 'researchgate.net/profile/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9_-]{1,100}$',
          label: {
            es: 'ID de perfil',
            en: 'Profile ID',
            pt: 'ID do perfil',
            fr: 'ID du profil',
            it: 'ID profilo',
          },
          placeholder: {
            es: 'Ej.: Juan-Perez-3',
            en: 'e.g. Jane-Doe-2',
            pt: 'Ex.: Joao-Silva-4',
            fr: 'Ex. : Marie-Dupont-5',
            it: 'Es.: Mario-Rossi-6',
          },
          hint: {
            es: 'Es lo que va después de /profile/ en la URL de tu perfil.',
            en: 'It\'s what comes after /profile/ in your profile URL.',
            pt: 'É o que vem depois de /profile/ na URL do seu perfil.',
            fr: 'C\'est ce qui suit /profile/ dans l\'URL de votre profil.',
            it: 'È ciò che segue /profile/ nell\'URL del tuo profilo.',
          },
        },
      ],
    },
  ],
};

export default template;
