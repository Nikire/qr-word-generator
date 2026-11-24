import { siMercadopago } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'mercadopago',
  name: 'Mercado Pago',
  icon: { path: siMercadopago.path, color: `#${siMercadopago.hex}` },
  subtitle: {
    es: 'Crea un código QR con Tu link de Mercado Pago para cobrar cualquier monto.',
    en: 'Create a QR code with your Mercado Pago link to get paid any amount.',
    pt: 'Crie um QR code com o Seu link do Mercado Pago para receber qualquer valor.',
    fr: 'Créez un code QR avec votre lien Mercado Pago pour encaisser n\'importe quel montant.',
    it: 'Crea un codice QR con il tuo link Mercado Pago per incassare qualsiasi importo.',
  },
  modes: [
    {
      id: 'ar',
      label: {
        es: 'Argentina',
        en: 'Argentina',
        pt: 'Argentina',
        fr: 'Argentine',
        it: 'Argentina',
      },
      template: 'https://link.mercadopago.com.ar/{alias}',
      fields: [
        {
          id: 'alias',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: 'link.mercadopago.com.ar/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{3,50}$',
          label: {
            es: 'Nombre de Tu link',
            en: 'Link name',
            pt: 'Nome do Seu link',
            fr: 'Nom du lien',
            it: 'Nome del link',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. myshop',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: mionegozio',
          },
          hint: {
            es: 'Es el nombre que elegiste al crear Tu link en la app de Mercado Pago.',
            en: 'The name you chose when creating your link in the Mercado Pago app.',
            pt: 'É o nome que você escolheu ao criar o Seu link no app do Mercado Pago.',
            fr: 'Le nom choisi en créant votre lien dans l\'app Mercado Pago.',
            it: 'Il nome scelto quando hai creato il link nell\'app Mercado Pago.',
          },
        },
      ],
    },
    {
      id: 'mx',
      label: {
        es: 'México',
        en: 'Mexico',
        pt: 'México',
        fr: 'Mexique',
        it: 'Messico',
      },
      template: 'https://link.mercadopago.com.mx/{alias}',
      fields: [
        {
          id: 'alias',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: 'link.mercadopago.com.mx/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{3,50}$',
          label: {
            es: 'Nombre de Tu link',
            en: 'Link name',
            pt: 'Nome do Seu link',
            fr: 'Nom du lien',
            it: 'Nome del link',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. myshop',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: mionegozio',
          },
          hint: {
            es: 'Es el nombre que elegiste al crear Tu link en la app de Mercado Pago.',
            en: 'The name you chose when creating your link in the Mercado Pago app.',
            pt: 'É o nome que você escolheu ao criar o Seu link no app do Mercado Pago.',
            fr: 'Le nom choisi en créant votre lien dans l\'app Mercado Pago.',
            it: 'Il nome scelto quando hai creato il link nell\'app Mercado Pago.',
          },
        },
      ],
    },
    {
      id: 'br',
      label: {
        es: 'Brasil',
        en: 'Brazil',
        pt: 'Brasil',
        fr: 'Brésil',
        it: 'Brasile',
      },
      template: 'https://link.mercadopago.com.br/{alias}',
      fields: [
        {
          id: 'alias',
          type: 'text',
          required: true,
          maxLength: 50,
          prefix: 'link.mercadopago.com.br/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{3,50}$',
          label: {
            es: 'Nombre de Tu link',
            en: 'Link name',
            pt: 'Nome do Seu link',
            fr: 'Nom du lien',
            it: 'Nome del link',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. myshop',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: mionegozio',
          },
          hint: {
            es: 'Es el nombre que elegiste al crear Tu link en la app de Mercado Pago.',
            en: 'The name you chose when creating your link in the Mercado Pago app.',
            pt: 'É o nome que você escolheu ao criar o Seu link no app do Mercado Pago.',
            fr: 'Le nom choisi en créant votre lien dans l\'app Mercado Pago.',
            it: 'Il nome scelto quando hai creato il link nell\'app Mercado Pago.',
          },
        },
      ],
    },
  ],
};

export default template;
