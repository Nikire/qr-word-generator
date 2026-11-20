export const defaultLocale = 'es';
export const locales = ['es', 'en', 'pt', 'fr', 'it'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
  fr: 'Français',
  it: 'Italiano',
};

/** País preseleccionado cuando no se puede deducir del navegador. */
export const localeDefaultCountry: Record<Locale, string> = {
  es: 'AR',
  en: 'US',
  pt: 'BR',
  fr: 'FR',
  it: 'IT',
};

const es = {
  'meta.title': 'Generador de código QR para WhatsApp gratis | QR Word Generator',
  'meta.description':
    'Creá gratis un código QR para tu número de WhatsApp, con mensaje personalizado y el logo en el centro. Descargalo en PNG o SVG, sin registro.',
  'hero.title': 'Generador de código QR para WhatsApp',
  'hero.subtitle':
    'Convertí tu número en un QR listo para imprimir o compartir. Gratis, sin registro y sin marcas de agua.',
  'form.country': 'País',
  'form.searchCountry': 'Buscar país o código',
  'form.noResults': 'Sin resultados',
  'form.phone': 'Número de WhatsApp',
  'form.phonePlaceholder': 'Ej.: 11 2345 6789',
  'form.phoneHint': 'Sin el código de país ni el 0 inicial.',
  'form.message': 'Mensaje personalizado',
  'form.optional': 'opcional',
  'form.messagePlaceholder': 'Ej.: ¡Hola! Quiero más información.',
  'form.messageHint': 'Quien escanee el código verá este mensaje ya escrito en el chat.',
  'preview.title': 'Tu código QR',
  'preview.empty': 'Ingresá un número de WhatsApp para generar tu código.',
  'preview.invalid': 'El número no parece válido. Revisá la cantidad de dígitos.',
  'preview.tooLong': 'El mensaje es demasiado largo para un código QR. Acortalo un poco.',
  'preview.link': 'Enlace generado',
  'preview.copy': 'Copiar',
  'preview.copied': '¡Copiado!',
  'preview.open': 'Probar enlace',
  'download.png': 'Descargar PNG',
  'download.svg': 'Descargar SVG',
  'theme.toggle': 'Cambiar entre modo día y noche',
  'theme.day': 'Día',
  'theme.night': 'Noche',
  'lang.label': 'Idioma',
  'ads.label': 'Publicidad',
  'steps.title': 'Cómo funciona',
  'steps.1.title': 'Elegí tu país',
  'steps.1.text': 'Seleccioná el código de país en la lista y escribí tu número de WhatsApp.',
  'steps.2.title': 'Sumá un mensaje',
  'steps.2.text': 'Si querés, agregá un texto que aparecerá escrito al abrir el chat.',
  'steps.3.title': 'Descargá tu QR',
  'steps.3.text': 'Bajalo en PNG para compartir o en SVG para imprimir en cualquier tamaño.',
  'faq.title': 'Preguntas frecuentes',
  'faq.1.q': '¿Es realmente gratis?',
  'faq.1.a':
    'Sí. Podés generar y descargar todos los códigos que quieras, sin registrarte y sin pagar. El sitio se sostiene con publicidad.',
  'faq.2.q': '¿El código QR vence?',
  'faq.2.a':
    'No. El código contiene un enlace directo a tu chat de WhatsApp y funciona mientras el número siga activo.',
  'faq.3.q': '¿Guardan mi número?',
  'faq.3.a':
    'No. El código se genera en tu navegador: tu número y tu mensaje nunca se envían a nuestros servidores.',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.disclaimer':
    'WhatsApp es una marca registrada de WhatsApp LLC. Este sitio no está afiliado ni respaldado por WhatsApp.',
};

export type UiKey = keyof typeof es;

const en: Record<UiKey, string> = {
  'meta.title': 'Free WhatsApp QR Code Generator | QR Word Generator',
  'meta.description':
    'Create a free QR code for your WhatsApp number, with a custom message and the logo in the center. Download it as PNG or SVG, no sign-up.',
  'hero.title': 'WhatsApp QR code generator',
  'hero.subtitle':
    'Turn your number into a QR code ready to print or share. Free, no sign-up and no watermarks.',
  'form.country': 'Country',
  'form.searchCountry': 'Search country or code',
  'form.noResults': 'No results',
  'form.phone': 'WhatsApp number',
  'form.phonePlaceholder': 'E.g. 555 123 4567',
  'form.phoneHint': 'Without the country code or the leading 0.',
  'form.message': 'Custom message',
  'form.optional': 'optional',
  'form.messagePlaceholder': 'E.g. Hi! I would like more information.',
  'form.messageHint': 'Anyone who scans the code will see this message already typed in the chat.',
  'preview.title': 'Your QR code',
  'preview.empty': 'Enter a WhatsApp number to generate your code.',
  'preview.invalid': 'The number does not look valid. Check the number of digits.',
  'preview.tooLong': 'The message is too long for a QR code. Shorten it a little.',
  'preview.link': 'Generated link',
  'preview.copy': 'Copy',
  'preview.copied': 'Copied!',
  'preview.open': 'Test link',
  'download.png': 'Download PNG',
  'download.svg': 'Download SVG',
  'theme.toggle': 'Switch between day and night mode',
  'theme.day': 'Day',
  'theme.night': 'Night',
  'lang.label': 'Language',
  'ads.label': 'Advertisement',
  'steps.title': 'How it works',
  'steps.1.title': 'Pick your country',
  'steps.1.text': 'Select the country code from the list and type your WhatsApp number.',
  'steps.2.title': 'Add a message',
  'steps.2.text': 'Optionally add a text that will appear already typed when the chat opens.',
  'steps.3.title': 'Download your QR',
  'steps.3.text': 'Get it as PNG to share or as SVG to print at any size.',
  'faq.title': 'Frequently asked questions',
  'faq.1.q': 'Is it really free?',
  'faq.1.a':
    'Yes. You can generate and download as many codes as you like, with no sign-up and no payment. The site is supported by ads.',
  'faq.2.q': 'Does the QR code expire?',
  'faq.2.a':
    'No. The code contains a direct link to your WhatsApp chat and works for as long as the number is active.',
  'faq.3.q': 'Do you store my number?',
  'faq.3.a':
    'No. The code is generated in your browser: your number and message are never sent to our servers.',
  'footer.rights': 'All rights reserved.',
  'footer.disclaimer':
    'WhatsApp is a registered trademark of WhatsApp LLC. This site is not affiliated with or endorsed by WhatsApp.',
};

const pt: Record<UiKey, string> = {
  'meta.title': 'Gerador de QR Code para WhatsApp grátis | QR Word Generator',
  'meta.description':
    'Crie grátis um QR Code para o seu número de WhatsApp, com mensagem personalizada e o logo no centro. Baixe em PNG ou SVG, sem cadastro.',
  'hero.title': 'Gerador de QR Code para WhatsApp',
  'hero.subtitle':
    'Transforme seu número em um QR Code pronto para imprimir ou compartilhar. Grátis, sem cadastro e sem marca d’água.',
  'form.country': 'País',
  'form.searchCountry': 'Buscar país ou código',
  'form.noResults': 'Nenhum resultado',
  'form.phone': 'Número do WhatsApp',
  'form.phonePlaceholder': 'Ex.: 11 91234 5678',
  'form.phoneHint': 'Sem o código do país nem o 0 inicial.',
  'form.message': 'Mensagem personalizada',
  'form.optional': 'opcional',
  'form.messagePlaceholder': 'Ex.: Olá! Gostaria de mais informações.',
  'form.messageHint': 'Quem escanear o código verá esta mensagem já escrita na conversa.',
  'preview.title': 'Seu QR Code',
  'preview.empty': 'Digite um número de WhatsApp para gerar seu código.',
  'preview.invalid': 'O número não parece válido. Confira a quantidade de dígitos.',
  'preview.tooLong': 'A mensagem é longa demais para um QR Code. Encurte um pouco.',
  'preview.link': 'Link gerado',
  'preview.copy': 'Copiar',
  'preview.copied': 'Copiado!',
  'preview.open': 'Testar link',
  'download.png': 'Baixar PNG',
  'download.svg': 'Baixar SVG',
  'theme.toggle': 'Alternar entre modo dia e noite',
  'theme.day': 'Dia',
  'theme.night': 'Noite',
  'lang.label': 'Idioma',
  'ads.label': 'Publicidade',
  'steps.title': 'Como funciona',
  'steps.1.title': 'Escolha seu país',
  'steps.1.text': 'Selecione o código do país na lista e digite seu número de WhatsApp.',
  'steps.2.title': 'Adicione uma mensagem',
  'steps.2.text': 'Se quiser, inclua um texto que aparecerá escrito ao abrir a conversa.',
  'steps.3.title': 'Baixe seu QR',
  'steps.3.text': 'Baixe em PNG para compartilhar ou em SVG para imprimir em qualquer tamanho.',
  'faq.title': 'Perguntas frequentes',
  'faq.1.q': 'É realmente grátis?',
  'faq.1.a':
    'Sim. Você pode gerar e baixar quantos códigos quiser, sem cadastro e sem pagar. O site é mantido por anúncios.',
  'faq.2.q': 'O QR Code expira?',
  'faq.2.a':
    'Não. O código contém um link direto para a sua conversa no WhatsApp e funciona enquanto o número estiver ativo.',
  'faq.3.q': 'Vocês guardam meu número?',
  'faq.3.a':
    'Não. O código é gerado no seu navegador: seu número e sua mensagem nunca são enviados aos nossos servidores.',
  'footer.rights': 'Todos os direitos reservados.',
  'footer.disclaimer':
    'WhatsApp é uma marca registrada da WhatsApp LLC. Este site não é afiliado nem endossado pelo WhatsApp.',
};

const fr: Record<UiKey, string> = {
  'meta.title': 'Générateur de QR code WhatsApp gratuit | QR Word Generator',
  'meta.description':
    'Créez gratuitement un QR code pour votre numéro WhatsApp, avec un message personnalisé et le logo au centre. Téléchargez-le en PNG ou SVG, sans inscription.',
  'hero.title': 'Générateur de QR code pour WhatsApp',
  'hero.subtitle':
    'Transformez votre numéro en QR code prêt à imprimer ou à partager. Gratuit, sans inscription et sans filigrane.',
  'form.country': 'Pays',
  'form.searchCountry': 'Rechercher un pays ou un indicatif',
  'form.noResults': 'Aucun résultat',
  'form.phone': 'Numéro WhatsApp',
  'form.phonePlaceholder': 'Ex. : 6 12 34 56 78',
  'form.phoneHint': 'Sans l’indicatif du pays ni le 0 initial.',
  'form.message': 'Message personnalisé',
  'form.optional': 'facultatif',
  'form.messagePlaceholder': 'Ex. : Bonjour ! Je souhaite plus d’informations.',
  'form.messageHint': 'La personne qui scanne le code verra ce message déjà écrit dans la discussion.',
  'preview.title': 'Votre QR code',
  'preview.empty': 'Saisissez un numéro WhatsApp pour générer votre code.',
  'preview.invalid': 'Le numéro ne semble pas valide. Vérifiez le nombre de chiffres.',
  'preview.tooLong': 'Le message est trop long pour un QR code. Raccourcissez-le un peu.',
  'preview.link': 'Lien généré',
  'preview.copy': 'Copier',
  'preview.copied': 'Copié !',
  'preview.open': 'Tester le lien',
  'download.png': 'Télécharger PNG',
  'download.svg': 'Télécharger SVG',
  'theme.toggle': 'Basculer entre le mode jour et nuit',
  'theme.day': 'Jour',
  'theme.night': 'Nuit',
  'lang.label': 'Langue',
  'ads.label': 'Publicité',
  'steps.title': 'Comment ça marche',
  'steps.1.title': 'Choisissez votre pays',
  'steps.1.text': 'Sélectionnez l’indicatif dans la liste et saisissez votre numéro WhatsApp.',
  'steps.2.title': 'Ajoutez un message',
  'steps.2.text': 'Si vous le souhaitez, ajoutez un texte qui apparaîtra déjà écrit à l’ouverture de la discussion.',
  'steps.3.title': 'Téléchargez votre QR',
  'steps.3.text': 'Récupérez-le en PNG pour le partager ou en SVG pour l’imprimer à n’importe quelle taille.',
  'faq.title': 'Questions fréquentes',
  'faq.1.q': 'Est-ce vraiment gratuit ?',
  'faq.1.a':
    'Oui. Vous pouvez générer et télécharger autant de codes que vous le souhaitez, sans inscription ni paiement. Le site est financé par la publicité.',
  'faq.2.q': 'Le QR code expire-t-il ?',
  'faq.2.a':
    'Non. Le code contient un lien direct vers votre discussion WhatsApp et fonctionne tant que le numéro est actif.',
  'faq.3.q': 'Conservez-vous mon numéro ?',
  'faq.3.a':
    'Non. Le code est généré dans votre navigateur : votre numéro et votre message ne sont jamais envoyés à nos serveurs.',
  'footer.rights': 'Tous droits réservés.',
  'footer.disclaimer':
    'WhatsApp est une marque déposée de WhatsApp LLC. Ce site n’est ni affilié à WhatsApp ni approuvé par WhatsApp.',
};

const it: Record<UiKey, string> = {
  'meta.title': 'Generatore di codici QR per WhatsApp gratis | QR Word Generator',
  'meta.description':
    'Crea gratis un codice QR per il tuo numero WhatsApp, con messaggio personalizzato e il logo al centro. Scaricalo in PNG o SVG, senza registrazione.',
  'hero.title': 'Generatore di codici QR per WhatsApp',
  'hero.subtitle':
    'Trasforma il tuo numero in un codice QR pronto da stampare o condividere. Gratis, senza registrazione e senza filigrana.',
  'form.country': 'Paese',
  'form.searchCountry': 'Cerca paese o prefisso',
  'form.noResults': 'Nessun risultato',
  'form.phone': 'Numero WhatsApp',
  'form.phonePlaceholder': 'Es.: 312 345 6789',
  'form.phoneHint': 'Senza il prefisso internazionale né lo 0 iniziale.',
  'form.message': 'Messaggio personalizzato',
  'form.optional': 'facoltativo',
  'form.messagePlaceholder': 'Es.: Ciao! Vorrei maggiori informazioni.',
  'form.messageHint': 'Chi scansiona il codice vedrà questo messaggio già scritto nella chat.',
  'preview.title': 'Il tuo codice QR',
  'preview.empty': 'Inserisci un numero WhatsApp per generare il tuo codice.',
  'preview.invalid': 'Il numero non sembra valido. Controlla il numero di cifre.',
  'preview.tooLong': 'Il messaggio è troppo lungo per un codice QR. Accorcialo un po’.',
  'preview.link': 'Link generato',
  'preview.copy': 'Copia',
  'preview.copied': 'Copiato!',
  'preview.open': 'Prova il link',
  'download.png': 'Scarica PNG',
  'download.svg': 'Scarica SVG',
  'theme.toggle': 'Passa dalla modalità giorno a notte',
  'theme.day': 'Giorno',
  'theme.night': 'Notte',
  'lang.label': 'Lingua',
  'ads.label': 'Pubblicità',
  'steps.title': 'Come funziona',
  'steps.1.title': 'Scegli il tuo paese',
  'steps.1.text': 'Seleziona il prefisso dall’elenco e scrivi il tuo numero WhatsApp.',
  'steps.2.title': 'Aggiungi un messaggio',
  'steps.2.text': 'Se vuoi, aggiungi un testo che apparirà già scritto all’apertura della chat.',
  'steps.3.title': 'Scarica il tuo QR',
  'steps.3.text': 'Scaricalo in PNG per condividerlo o in SVG per stamparlo in qualsiasi dimensione.',
  'faq.title': 'Domande frequenti',
  'faq.1.q': 'È davvero gratis?',
  'faq.1.a':
    'Sì. Puoi generare e scaricare tutti i codici che vuoi, senza registrarti e senza pagare. Il sito si sostiene con la pubblicità.',
  'faq.2.q': 'Il codice QR scade?',
  'faq.2.a':
    'No. Il codice contiene un link diretto alla tua chat WhatsApp e funziona finché il numero resta attivo.',
  'faq.3.q': 'Conservate il mio numero?',
  'faq.3.a':
    'No. Il codice viene generato nel tuo browser: il tuo numero e il tuo messaggio non vengono mai inviati ai nostri server.',
  'footer.rights': 'Tutti i diritti riservati.',
  'footer.disclaimer':
    'WhatsApp è un marchio registrato di WhatsApp LLC. Questo sito non è affiliato né approvato da WhatsApp.',
};

export const ui: Record<Locale, Record<UiKey, string>> = { es, en, pt, fr, it };

export function useTranslations(locale: Locale) {
  return (key: UiKey): string => ui[locale][key];
}

/** Ruta de la portada para un idioma (el idioma por defecto vive en la raíz). */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}
