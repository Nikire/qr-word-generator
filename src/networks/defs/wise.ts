import { siWise } from 'simple-icons';
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'wise',
  name: 'Wise',
  icon: { path: siWise.path, color: `#${siWise.hex}`, darkGlyph: true },
  subtitle: {
    es: 'Crea un código QR para que te paguen a tu cuenta Wise.',
    en: 'Create a QR code so people can pay into your Wise account.',
    pt: 'Crie um QR code para receber pagamentos na sua conta Wise.',
    fr: 'Créez un code QR pour recevoir des paiements sur votre compte Wise.',
    it: 'Crea un codice QR per ricevere pagamenti sul tuo conto Wise.',
  },
  modes: [
    {
      id: 'personal',
      label: {
        es: 'Wisetag personal',
        en: 'Personal Wisetag',
        pt: 'Wisetag pessoal',
        fr: 'Wisetag personnel',
        it: 'Wisetag personale',
      },
      template: 'https://wise.com/pay/me/{wisetag}',
      fields: [
        {
          id: 'wisetag',
          type: 'text',
          required: true,
          maxLength: 40,
          prefix: '@',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{2,40}$',
          label: {
            es: 'Wisetag',
            en: 'Wisetag',
            pt: 'Wisetag',
            fr: 'Wisetag',
            it: 'Wisetag',
          },
          placeholder: {
            es: 'Ej.: juanp12',
            en: 'e.g. janed12',
            pt: 'Ex.: joaos12',
            fr: 'Ex. : maried12',
            it: 'Es.: marior12',
          },
          hint: {
            es: 'Lo encuentras en Pagos > Tu Wisetag, en la app o la web de Wise.',
            en: 'Find it under Payments > Your Wisetag in the Wise app or website.',
            pt: 'Fica em Pagamentos > Seu Wisetag, no app ou no site da Wise.',
            fr: 'Il se trouve dans Paiements > Votre Wisetag, dans l\'app ou sur le site Wise.',
            it: 'Lo trovi in Pagamenti > Il tuo Wisetag, nell\'app o sul sito Wise.',
          },
        },
      ],
    },
    {
      id: 'business',
      label: {
        es: 'Quick Pay (empresas)',
        en: 'Quick Pay (business)',
        pt: 'Quick Pay (empresas)',
        fr: 'Quick Pay (entreprises)',
        it: 'Quick Pay (aziende)',
      },
      template: 'https://wise.com/pay/business/{business}',
      fields: [
        {
          id: 'business',
          type: 'text',
          required: true,
          maxLength: 60,
          prefix: 'wise.com/pay/business/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9._-]{2,60}$',
          label: {
            es: 'Nombre de empresa',
            en: 'Business name',
            pt: 'Nome da empresa',
            fr: 'Nom d\'entreprise',
            it: 'Nome azienda',
          },
          placeholder: {
            es: 'Ej.: mitienda',
            en: 'e.g. myshop',
            pt: 'Ex.: minhaloja',
            fr: 'Ex. : maboutique',
            it: 'Es.: mionegozio',
          },
          hint: {
            es: 'Cópialo de tu enlace en Pagos > Quick Pay de Wise Business.',
            en: 'Copy it from your link under Payments > Quick Pay in Wise Business.',
            pt: 'Copie do seu link em Pagamentos > Quick Pay no Wise Business.',
            fr: 'Copiez-le depuis votre lien dans Paiements > Quick Pay de Wise Business.',
            it: 'Copialo dal tuo link in Pagamenti > Quick Pay di Wise Business.',
          },
        },
      ],
    },
  ],
};

export default template;
