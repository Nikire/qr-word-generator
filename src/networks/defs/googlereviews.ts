import { siGoogle } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'googlereviews',
  name: 'Google Reviews',
  icon: { path: siGoogle.path, color: `#${siGoogle.hex}` },
  subtitle: {
    es: 'Crea un código QR que abre el formulario para dejar una reseña de tu negocio en Google.',
    en: 'Create a QR code that opens the form to review your business on Google.',
    pt: 'Crie um QR code que abre o formulário para avaliar seu negócio no Google.',
    fr: 'Créez un QR code qui ouvre le formulaire d\'avis de votre établissement sur Google.',
    it: 'Crea un codice QR che apre il modulo per recensire la tua attività su Google.',
  },
  modes: [
    {
      id: 'shortlink',
      label: {
        es: 'Enlace de reseñas',
        en: 'Review link',
        pt: 'Link de avaliações',
        fr: 'Lien d\'avis',
        it: 'Link recensioni',
      },
      template: 'https://g.page/r/{code}/review',
      fields: [
        {
          id: 'code',
          type: 'text',
          required: true,
          maxLength: 60,
          prefix: 'g.page/r/',
          sanitize: 'trim',
          pattern: '^[A-Za-z0-9_-]{8,60}$',
          label: {
            es: 'Código',
            en: 'Code',
            pt: 'Código',
            fr: 'Code',
            it: 'Codice',
          },
          placeholder: {
            es: 'Ej.: CbQ8kZ3xY1AbEBM',
            en: 'e.g. CbQ8kZ3xY1AbEBM',
            pt: 'Ex.: CbQ8kZ3xY1AbEBM',
            fr: 'Ex. : CbQ8kZ3xY1AbEBM',
            it: 'Es.: CbQ8kZ3xY1AbEBM',
          },
          hint: {
            es: 'En tu Perfil de Empresa, toca Pedir reseñas y copia el código entre g.page/r/ y /review.',
            en: 'In your Business Profile, choose Ask for reviews and copy the code between g.page/r/ and /review.',
            pt: 'No seu Perfil da Empresa, escolha Pedir avaliações e copie o código entre g.page/r/ e /review.',
            fr: 'Dans votre fiche d\'établissement, choisissez Demander des avis et copiez le code entre g.page/r/ et /review.',
            it: 'Nel tuo Profilo dell\'attività, scegli Chiedi recensioni e copia il codice tra g.page/r/ e /review.',
          },
        },
      ],
    },
    {
      id: 'placeid',
      label: {
        es: 'Place ID',
        en: 'Place ID',
        pt: 'Place ID',
        fr: 'Place ID',
        it: 'Place ID',
      },
      template: 'https://search.google.com/local/writereview?placeid={placeId}',
      fields: [
        {
          id: 'placeId',
          type: 'text',
          required: true,
          maxLength: 300,
          sanitize: 'trim',
          pattern: '^[A-Za-z0-9_-]{10,300}$',
          label: {
            es: 'Place ID',
            en: 'Place ID',
            pt: 'Place ID',
            fr: 'Place ID',
            it: 'Place ID',
          },
          placeholder: {
            es: 'Ej.: ChIJN1t_tDeuEmsRUsoyG83frY4',
            en: 'e.g. ChIJN1t_tDeuEmsRUsoyG83frY4',
            pt: 'Ex.: ChIJN1t_tDeuEmsRUsoyG83frY4',
            fr: 'Ex. : ChIJN1t_tDeuEmsRUsoyG83frY4',
            it: 'Es.: ChIJN1t_tDeuEmsRUsoyG83frY4',
          },
          hint: {
            es: 'Busca tu negocio en el Place ID Finder de Google y copia el ID.',
            en: 'Look up your business in Google\'s Place ID Finder and copy the ID.',
            pt: 'Busque seu negócio no Place ID Finder do Google e copie o ID.',
            fr: 'Recherchez votre établissement dans le Place ID Finder de Google et copiez l\'ID.',
            it: 'Cerca la tua attività nel Place ID Finder di Google e copia l\'ID.',
          },
        },
      ],
    },
  ],
};

export default template;
