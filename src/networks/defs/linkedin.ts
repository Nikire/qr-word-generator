// Ícono de LinkedIn tomado de Simple Icons 13 (CC0); las versiones nuevas del paquete ya no lo incluyen.
import type { NetworkDef } from '../types';

const template: NetworkDef = {
  id: 'linkedin',
  name: 'LinkedIn',
  icon: {
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    color: '#0A66C2',
  },
  subtitle: {
    es: 'Creá un código QR que abre tu perfil o la página de tu empresa en LinkedIn.',
    en: 'Create a QR code that opens your LinkedIn profile or company page.',
    pt: 'Crie um QR code que abre seu perfil ou a página da sua empresa no LinkedIn.',
    fr: 'Créez un code QR qui ouvre votre profil ou la page de votre entreprise sur LinkedIn.',
    it: 'Crea un codice QR che apre il tuo profilo o la pagina aziendale su LinkedIn.',
  },
  modes: [
    {
      id: 'profile',
      label: {
        es: 'Perfil personal',
        en: 'Personal profile',
        pt: 'Perfil pessoal',
        fr: 'Profil personnel',
        it: 'Profilo personale',
      },
      template: 'https://www.linkedin.com/in/{username}',
      fields: [
        {
          id: 'username',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: 'linkedin.com/in/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{3,100}$',
          label: {
            es: 'URL personalizada',
            en: 'Custom URL',
            pt: 'URL personalizada',
            fr: 'URL personnalisée',
            it: 'URL personalizzato',
          },
          placeholder: {
            es: 'Ej.: juan-perez',
            en: 'e.g. jane-doe',
            pt: 'Ex.: joao-silva',
            fr: 'Ex. : marie-dupont',
            it: 'Es.: mario-rossi',
          },
          hint: {
            es: 'Está en Yo > Ver perfil > Editar perfil público y URL.',
            en: 'Find it in Me > View profile > Edit public profile & URL.',
            pt: 'Está em Eu > Ver perfil > Editar perfil público e URL.',
            fr: 'Dans Vous > Voir le profil > Modifier le profil public et l\'URL.',
            it: 'In Tu > Visualizza profilo > Modifica profilo pubblico e URL.',
          },
        },
      ],
    },
    {
      id: 'company',
      label: {
        es: 'Página de empresa',
        en: 'Company page',
        pt: 'Página da empresa',
        fr: 'Page entreprise',
        it: 'Pagina aziendale',
      },
      template: 'https://www.linkedin.com/company/{company}',
      fields: [
        {
          id: 'company',
          type: 'text',
          required: true,
          maxLength: 100,
          prefix: 'linkedin.com/company/',
          sanitize: 'handle',
          pattern: '^[A-Za-z0-9-]{2,100}$',
          label: {
            es: 'Empresa',
            en: 'Company',
            pt: 'Empresa',
            fr: 'Entreprise',
            it: 'Azienda',
          },
          placeholder: {
            es: 'Ej.: mi-empresa',
            en: 'e.g. my-company',
            pt: 'Ex.: minha-empresa',
            fr: 'Ex. : mon-entreprise',
            it: 'Es.: mia-azienda',
          },
          hint: {
            es: 'Copiá lo que aparece después de linkedin.com/company/ en la dirección de la página.',
            en: 'Copy what appears after linkedin.com/company/ in the page address.',
            pt: 'Copie o que aparece depois de linkedin.com/company/ no endereço da página.',
            fr: 'Copiez ce qui suit linkedin.com/company/ dans l\'adresse de la page.',
            it: 'Copia ciò che segue linkedin.com/company/ nell\'indirizzo della pagina.',
          },
        },
      ],
    },
  ],
};

export default template;
