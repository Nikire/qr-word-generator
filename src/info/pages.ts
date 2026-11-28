// Páginas informativas (privacidad, acerca del sitio, contacto) en cada idioma.
// Los párrafos admiten HTML simple y dos marcadores:
//   {contact}  ruta de la página de contacto en ese idioma
//   {email}    enlace al correo de contacto (CONTACT_EMAIL en site.config.mjs)
import { defaultLocale, type Locale } from '../i18n/ui';
import { BASE_PATH } from '../../site.config.mjs';

export const infoIds = ['privacy', 'about', 'contact'] as const;
export type InfoId = (typeof infoIds)[number];

export interface InfoSection {
  h?: string;
  p: string[];
}

export interface InfoPage {
  slug: string;
  title: string;
  description: string;
  sections: InfoSection[];
}

const ADS_SETTINGS = '<a href="https://adssettings.google.com" rel="noopener">adssettings.google.com</a>';
const PARTNER_SITES =
  '<a href="https://policies.google.com/technologies/partner-sites" rel="noopener">policies.google.com/technologies/partner-sites</a>';

export const info: Record<Locale, Record<InfoId, InfoPage>> = {
  es: {
    privacy: {
      slug: 'privacidad',
      title: 'Política de privacidad',
      description: 'Qué datos trata QR Word Generator, qué cookies se usan y cómo gestionarlas.',
      sections: [
        {
          p: [
            'Última actualización: 28 de noviembre de 2026.',
            'Esta política explica qué pasa con tus datos cuando usas QR Word Generator (qrwordgenerator.com).',
          ],
        },
        {
          h: 'Los datos que escribes',
          p: [
            'Los códigos QR se generan en tu navegador. Los números, enlaces, mensajes y logos que subes no se envían a nuestros servidores ni se guardan en ellos.',
            'No hace falta crear una cuenta ni dejar tu nombre o tu correo para usar el sitio.',
          ],
        },
        {
          h: 'Lo que se guarda en tu dispositivo',
          p: ['Guardamos en tu navegador el tema elegido (claro u oscuro) para recordarlo en tu próxima visita. Ese dato no sale de tu dispositivo.'],
        },
        {
          h: 'Estadísticas de uso',
          p: [
            'Para saber cuánto se usa el sitio y qué plantillas son las más útiles, contamos de forma anónima algunas acciones: que se abrió una página, que se creó un código, que se descargó (y en qué formato) o que se copió el enlace.',
            'Con cada acción guardamos solo la fecha y la hora, la plantilla, el idioma del sitio y el del navegador, el tipo de dispositivo (móvil o de escritorio) y si el código llevaba un logo propio. No guardamos lo que escribes, el contenido del código, el logo, tu dirección IP ni ningún identificador, y para esto no usamos cookies. Con esos datos no podemos saber quién eres ni reconocerte en otra visita.',
          ],
        },
        {
          h: 'Registros del servidor',
          p: ['Como cualquier sitio web, nuestro proveedor de alojamiento registra datos técnicos de cada visita (dirección IP, navegador, fecha y página pedida) por motivos de seguridad y funcionamiento.'],
        },
        {
          h: 'Publicidad y cookies',
          p: [
            'Este sitio puede mostrar anuncios de Google AdSense. Google y sus socios publicitarios usan cookies para mostrar anuncios basados en tus visitas a este y a otros sitios web.',
            `Puedes desactivar la publicidad personalizada en ${ADS_SETTINGS}. Para saber cómo usa Google la información de los sitios que utilizan sus servicios, consulta ${PARTNER_SITES}.`,
            'Si nos visitas desde el Espacio Económico Europeo, el Reino Unido o Suiza, te pedimos tu consentimiento antes de usar cookies publicitarias y puedes cambiar tu elección cuando quieras.',
          ],
        },
        {
          h: 'Enlaces a otros servicios',
          p: ['Los códigos QR que generas llevan a servicios de terceros (redes sociales, mensajería, pagos y otros). Cada uno tiene su propia política de privacidad y no tenemos control sobre ellos.'],
        },
        {
          h: 'Tus derechos y contacto',
          p: ['Si tienes preguntas sobre esta política o quieres ejercer tus derechos sobre tus datos, escríbenos desde la página de <a href="{contact}">contacto</a>.'],
        },
        {
          h: 'Cambios en esta política',
          p: ['Si cambiamos esta política, publicaremos la versión nueva en esta página con su fecha de actualización.'],
        },
      ],
    },
    about: {
      slug: 'acerca',
      title: 'Acerca de QR Word Generator',
      description: 'Qué es QR Word Generator, cómo funciona y por qué tus códigos QR no vencen.',
      sections: [
        {
          p: [
            'QR Word Generator es una herramienta gratuita para crear códigos QR de enlaces, WhatsApp, redes sociales, música, pagos y decenas de servicios más.',
            'Eliges una plantilla, completas el formulario y descargas el código en PNG o SVG, con el logo en el centro y listo para imprimir o compartir.',
          ],
        },
        {
          h: 'Cómo funciona',
          p: [
            'El código se arma en tu navegador: lo que escribes no pasa por nuestros servidores.',
            'Los códigos son estáticos. Guardan el enlace final, sin pasar por redirecciones nuestras, así que no vencen, no tienen límite de escaneos y siguen funcionando aunque este sitio deje de existir.',
          ],
        },
        {
          h: 'Gratis',
          p: ['No hay versiones pagas. Puedes usar los códigos para fines personales o comerciales.'],
        },
        {
          h: 'Marcas de terceros',
          p: ['Los nombres y logos de cada servicio pertenecen a sus dueños y se usan solo para identificar a dónde lleva el código. QR Word Generator es un proyecto independiente, sin afiliación con esas marcas.'],
        },
      ],
    },
    contact: {
      slug: 'contacto',
      title: 'Contacto',
      description: 'Cómo escribirnos por dudas, errores o sugerencias sobre QR Word Generator.',
      sections: [
        {
          p: [
            '¿Encontraste un error, falta una red o tienes una sugerencia? Escríbenos a {email}.',
            'Leemos todos los mensajes y respondemos lo antes posible.',
          ],
        },
      ],
    },
  },
  en: {
    privacy: {
      slug: 'privacy',
      title: 'Privacy policy',
      description: 'What data QR Word Generator handles, which cookies are used and how to manage them.',
      sections: [
        {
          p: [
            'Last updated: 28 November 2026.',
            'This policy explains what happens to your data when you use QR Word Generator (qrwordgenerator.com).',
          ],
        },
        {
          h: 'The data you type',
          p: [
            'QR codes are generated in your browser. The numbers, links, messages and logos you enter are not sent to or stored on our servers.',
            'You do not need an account, and you never have to give your name or email to use the site.',
          ],
        },
        {
          h: 'What is stored on your device',
          p: ['We store your chosen theme (light or dark) in your browser so it is remembered on your next visit. It never leaves your device.'],
        },
        {
          h: 'Usage statistics',
          p: [
            'To understand how much the site is used and which templates are most useful, we anonymously count a few actions: a page being opened, a code being created, a download (and its format) or the link being copied.',
            'With each action we store only the date and time, the template, the site language and the browser language, the type of device (mobile or desktop) and whether the code had a custom logo. We do not store what you type, the content of the code, the logo, your IP address or any identifier, and we use no cookies for this. This data cannot tell us who you are or recognise you on another visit.',
          ],
        },
        {
          h: 'Server logs',
          p: ['Like any website, our hosting provider records technical data for each visit (IP address, browser, date and requested page) for security and operational reasons.'],
        },
        {
          h: 'Advertising and cookies',
          p: [
            'This site may show ads from Google AdSense. Google and its advertising partners use cookies to serve ads based on your visits to this and other websites.',
            `You can turn off personalised advertising at ${ADS_SETTINGS}. To learn how Google uses information from sites that use its services, see ${PARTNER_SITES}.`,
            'If you visit from the European Economic Area, the United Kingdom or Switzerland, we ask for your consent before advertising cookies are used, and you can change your choice at any time.',
          ],
        },
        {
          h: 'Links to other services',
          p: ['The QR codes you create lead to third-party services (social networks, messaging, payments and others). Each has its own privacy policy and we have no control over them.'],
        },
        {
          h: 'Your rights and contact',
          p: ['If you have questions about this policy or want to exercise your rights over your data, write to us from the <a href="{contact}">contact</a> page.'],
        },
        {
          h: 'Changes to this policy',
          p: ['If we change this policy, we will publish the new version on this page with its update date.'],
        },
      ],
    },
    about: {
      slug: 'about',
      title: 'About QR Word Generator',
      description: 'What QR Word Generator is, how it works and why your QR codes never expire.',
      sections: [
        {
          p: [
            'QR Word Generator is a free tool for creating QR codes for links, WhatsApp, social networks, music, payments and dozens of other services.',
            'Pick a template, fill in the form and download the code as PNG or SVG, with the logo in the centre and ready to print or share.',
          ],
        },
        {
          h: 'How it works',
          p: [
            'The code is built in your browser: what you type never goes through our servers.',
            'The codes are static. They hold the final link, with no redirect through us, so they never expire, have no scan limit and keep working even if this site goes away.',
          ],
        },
        {
          h: 'Free',
          p: ['There are no paid tiers. You can use the codes for personal or commercial purposes.'],
        },
        {
          h: 'Third-party brands',
          p: ['The names and logos of each service belong to their owners and are used only to identify where the code leads. QR Word Generator is an independent project with no affiliation to those brands.'],
        },
      ],
    },
    contact: {
      slug: 'contact',
      title: 'Contact us',
      description: 'How to reach us with questions, bug reports or suggestions about QR Word Generator.',
      sections: [
        {
          p: [
            'Found a bug, missing a network or have a suggestion? Write to us at {email}.',
            'We read every message and reply as soon as we can.',
          ],
        },
      ],
    },
  },
  pt: {
    privacy: {
      slug: 'privacidade',
      title: 'Política de privacidade',
      description: 'Quais dados o QR Word Generator trata, quais cookies são usados e como gerenciá-los.',
      sections: [
        {
          p: [
            'Última atualização: 28 de novembro de 2026.',
            'Esta política explica o que acontece com os seus dados quando você usa o QR Word Generator (qrwordgenerator.com).',
          ],
        },
        {
          h: 'Os dados que você digita',
          p: [
            'Os códigos QR são gerados no seu navegador. Os números, links, mensagens e logos que você insere não são enviados aos nossos servidores nem armazenados neles.',
            'Não é preciso criar conta nem informar nome ou e-mail para usar o site.',
          ],
        },
        {
          h: 'O que fica salvo no seu dispositivo',
          p: ['Salvamos no seu navegador o tema escolhido (claro ou escuro) para lembrá-lo na próxima visita. Esse dado não sai do seu dispositivo.'],
        },
        {
          h: 'Estatísticas de uso',
          p: [
            'Para saber quanto o site é usado e quais modelos são mais úteis, contamos de forma anônima algumas ações: a abertura de uma página, a criação de um código, o download (e o formato) ou a cópia do link.',
            'Em cada ação guardamos apenas a data e a hora, o modelo, o idioma do site e o do navegador, o tipo de dispositivo (celular ou computador) e se o código tinha um logo próprio. Não guardamos o que você digita, o conteúdo do código, o logo, o seu endereço IP nem qualquer identificador, e não usamos cookies para isso. Com esses dados não é possível saber quem você é nem reconhecer você em outra visita.',
          ],
        },
        {
          h: 'Registros do servidor',
          p: ['Como qualquer site, o nosso provedor de hospedagem registra dados técnicos de cada visita (endereço IP, navegador, data e página solicitada) por motivos de segurança e funcionamento.'],
        },
        {
          h: 'Publicidade e cookies',
          p: [
            'Este site pode exibir anúncios do Google AdSense. O Google e seus parceiros de publicidade usam cookies para exibir anúncios com base nas suas visitas a este e a outros sites.',
            `Você pode desativar a publicidade personalizada em ${ADS_SETTINGS}. Para saber como o Google usa as informações dos sites que utilizam seus serviços, consulte ${PARTNER_SITES}.`,
            'Se você nos visita a partir do Espaço Econômico Europeu, do Reino Unido ou da Suíça, pedimos o seu consentimento antes de usar cookies de publicidade, e você pode mudar sua escolha quando quiser.',
          ],
        },
        {
          h: 'Links para outros serviços',
          p: ['Os códigos QR que você gera levam a serviços de terceiros (redes sociais, mensagens, pagamentos e outros). Cada um tem a sua própria política de privacidade e não temos controle sobre eles.'],
        },
        {
          h: 'Seus direitos e contato',
          p: ['Se tiver dúvidas sobre esta política ou quiser exercer os seus direitos sobre os seus dados, escreva para nós pela página de <a href="{contact}">contato</a>.'],
        },
        {
          h: 'Alterações nesta política',
          p: ['Se alterarmos esta política, publicaremos a nova versão nesta página com a data de atualização.'],
        },
      ],
    },
    about: {
      slug: 'sobre',
      title: 'Sobre o QR Word Generator',
      description: 'O que é o QR Word Generator, como funciona e por que os seus códigos QR não expiram.',
      sections: [
        {
          p: [
            'O QR Word Generator é uma ferramenta gratuita para criar códigos QR de links, WhatsApp, redes sociais, música, pagamentos e dezenas de outros serviços.',
            'Você escolhe um modelo, preenche o formulário e baixa o código em PNG ou SVG, com o logo no centro e pronto para imprimir ou compartilhar.',
          ],
        },
        {
          h: 'Como funciona',
          p: [
            'O código é montado no seu navegador: o que você digita não passa pelos nossos servidores.',
            'Os códigos são estáticos. Guardam o link final, sem redirecionamentos nossos, por isso não expiram, não têm limite de leituras e continuam funcionando mesmo que este site deixe de existir.',
          ],
        },
        {
          h: 'Grátis',
          p: ['Não há versões pagas. Você pode usar os códigos para fins pessoais ou comerciais.'],
        },
        {
          h: 'Marcas de terceiros',
          p: ['Os nomes e logos de cada serviço pertencem aos seus donos e são usados apenas para identificar para onde o código leva. O QR Word Generator é um projeto independente, sem afiliação com essas marcas.'],
        },
      ],
    },
    contact: {
      slug: 'contato',
      title: 'Contato',
      description: 'Como falar conosco sobre dúvidas, erros ou sugestões do QR Word Generator.',
      sections: [
        {
          p: [
            'Encontrou um erro, falta uma rede ou tem uma sugestão? Escreva para {email}.',
            'Lemos todas as mensagens e respondemos o quanto antes.',
          ],
        },
      ],
    },
  },
  fr: {
    privacy: {
      slug: 'confidentialite',
      title: 'Politique de confidentialité',
      description: 'Quelles données QR Word Generator traite, quels cookies sont utilisés et comment les gérer.',
      sections: [
        {
          p: [
            'Dernière mise à jour : 28 novembre 2026.',
            'Cette politique explique ce qu’il advient de vos données lorsque vous utilisez QR Word Generator (qrwordgenerator.com).',
          ],
        },
        {
          h: 'Les données que vous saisissez',
          p: [
            'Les codes QR sont générés dans votre navigateur. Les numéros, liens, messages et logos que vous saisissez ne sont ni envoyés à nos serveurs ni stockés sur ceux-ci.',
            'Aucun compte n’est nécessaire, et vous n’avez jamais à donner votre nom ou votre e-mail pour utiliser le site.',
          ],
        },
        {
          h: 'Ce qui est enregistré sur votre appareil',
          p: ['Nous enregistrons dans votre navigateur le thème choisi (clair ou sombre) pour le retrouver à votre prochaine visite. Cette information ne quitte pas votre appareil.'],
        },
        {
          h: 'Statistiques d’utilisation',
          p: [
            'Pour savoir à quel point le site est utilisé et quels modèles sont les plus utiles, nous comptons de manière anonyme quelques actions : l’ouverture d’une page, la création d’un code, le téléchargement (et son format) ou la copie du lien.',
            'Pour chaque action, nous enregistrons uniquement la date et l’heure, le modèle, la langue du site et celle du navigateur, le type d’appareil (mobile ou ordinateur) et la présence éventuelle d’un logo personnalisé. Nous n’enregistrons ni ce que vous saisissez, ni le contenu du code, ni le logo, ni votre adresse IP, ni aucun identifiant, et nous n’utilisons pas de cookies pour cela. Ces données ne permettent ni de savoir qui vous êtes ni de vous reconnaître lors d’une autre visite.',
          ],
        },
        {
          h: 'Journaux du serveur',
          p: ['Comme tout site web, notre hébergeur enregistre des données techniques à chaque visite (adresse IP, navigateur, date et page demandée) pour des raisons de sécurité et de fonctionnement.'],
        },
        {
          h: 'Publicité et cookies',
          p: [
            'Ce site peut afficher des annonces Google AdSense. Google et ses partenaires publicitaires utilisent des cookies pour diffuser des annonces en fonction de vos visites sur ce site et sur d’autres.',
            `Vous pouvez désactiver la publicité personnalisée sur ${ADS_SETTINGS}. Pour savoir comment Google utilise les informations des sites qui recourent à ses services, consultez ${PARTNER_SITES}.`,
            'Si vous nous consultez depuis l’Espace économique européen, le Royaume-Uni ou la Suisse, nous demandons votre consentement avant d’utiliser des cookies publicitaires, et vous pouvez modifier votre choix à tout moment.',
          ],
        },
        {
          h: 'Liens vers d’autres services',
          p: ['Les codes QR que vous créez mènent à des services tiers (réseaux sociaux, messageries, paiements et autres). Chacun a sa propre politique de confidentialité et nous n’avons aucun contrôle sur eux.'],
        },
        {
          h: 'Vos droits et contact',
          p: ['Pour toute question sur cette politique ou pour exercer vos droits sur vos données, écrivez-nous depuis la page de <a href="{contact}">contact</a>.'],
        },
        {
          h: 'Modifications de cette politique',
          p: ['Si nous modifions cette politique, nous publierons la nouvelle version sur cette page avec sa date de mise à jour.'],
        },
      ],
    },
    about: {
      slug: 'a-propos',
      title: 'À propos de QR Word Generator',
      description: 'Ce qu’est QR Word Generator, comment il fonctionne et pourquoi vos codes QR n’expirent pas.',
      sections: [
        {
          p: [
            'QR Word Generator est un outil gratuit pour créer des codes QR de liens, WhatsApp, réseaux sociaux, musique, paiements et des dizaines d’autres services.',
            'Choisissez un modèle, remplissez le formulaire et téléchargez le code en PNG ou SVG, avec le logo au centre, prêt à imprimer ou à partager.',
          ],
        },
        {
          h: 'Comment ça marche',
          p: [
            'Le code est créé dans votre navigateur : ce que vous saisissez ne passe pas par nos serveurs.',
            'Les codes sont statiques. Ils contiennent le lien final, sans redirection par notre site : ils n’expirent donc pas, n’ont aucune limite de scans et continuent de fonctionner même si ce site disparaît.',
          ],
        },
        {
          h: 'Gratuit',
          p: ['Pas de version payante. Vous pouvez utiliser les codes à des fins personnelles ou commerciales.'],
        },
        {
          h: 'Marques tierces',
          p: ['Les noms et logos de chaque service appartiennent à leurs propriétaires et servent uniquement à indiquer où mène le code. QR Word Generator est un projet indépendant, sans lien avec ces marques.'],
        },
      ],
    },
    contact: {
      slug: 'contact',
      title: 'Contact',
      description: 'Comment nous écrire pour une question, un bug ou une suggestion sur QR Word Generator.',
      sections: [
        {
          p: [
            'Vous avez trouvé un bug, il manque un réseau ou vous avez une suggestion ? Écrivez-nous à {email}.',
            'Nous lisons tous les messages et répondons dès que possible.',
          ],
        },
      ],
    },
  },
  it: {
    privacy: {
      slug: 'privacy',
      title: 'Informativa sulla privacy',
      description: 'Quali dati tratta QR Word Generator, quali cookie vengono usati e come gestirli.',
      sections: [
        {
          p: [
            'Ultimo aggiornamento: 28 novembre 2026.',
            'Questa informativa spiega cosa succede ai tuoi dati quando usi QR Word Generator (qrwordgenerator.com).',
          ],
        },
        {
          h: 'I dati che inserisci',
          p: [
            'I codici QR vengono generati nel tuo browser. I numeri, i link, i messaggi e i loghi che inserisci non vengono inviati ai nostri server né salvati su di essi.',
            'Non serve creare un account né fornire nome o email per usare il sito.',
          ],
        },
        {
          h: 'Cosa viene salvato sul tuo dispositivo',
          p: ['Salviamo nel tuo browser il tema scelto (chiaro o scuro) per ricordarlo alla prossima visita. Questo dato non lascia il tuo dispositivo.'],
        },
        {
          h: 'Statistiche di utilizzo',
          p: [
            'Per capire quanto viene usato il sito e quali modelli sono più utili, contiamo in forma anonima alcune azioni: l’apertura di una pagina, la creazione di un codice, il download (e il formato) o la copia del link.',
            'Per ogni azione salviamo solo la data e l’ora, il modello, la lingua del sito e quella del browser, il tipo di dispositivo (mobile o computer) e se il codice aveva un logo personalizzato. Non salviamo ciò che scrivi, il contenuto del codice, il logo, il tuo indirizzo IP né alcun identificativo, e per questo non usiamo cookie. Con questi dati non possiamo sapere chi sei né riconoscerti in un’altra visita.',
          ],
        },
        {
          h: 'Log del server',
          p: ['Come ogni sito web, il nostro fornitore di hosting registra dati tecnici di ogni visita (indirizzo IP, browser, data e pagina richiesta) per motivi di sicurezza e funzionamento.'],
        },
        {
          h: 'Pubblicità e cookie',
          p: [
            'Questo sito può mostrare annunci di Google AdSense. Google e i suoi partner pubblicitari usano i cookie per mostrare annunci basati sulle tue visite a questo e ad altri siti.',
            `Puoi disattivare la pubblicità personalizzata su ${ADS_SETTINGS}. Per sapere come Google usa le informazioni dei siti che utilizzano i suoi servizi, consulta ${PARTNER_SITES}.`,
            'Se ci visiti dallo Spazio Economico Europeo, dal Regno Unito o dalla Svizzera, chiediamo il tuo consenso prima di usare cookie pubblicitari e puoi cambiare la tua scelta in qualsiasi momento.',
          ],
        },
        {
          h: 'Link ad altri servizi',
          p: ['I codici QR che crei portano a servizi di terze parti (social network, messaggistica, pagamenti e altri). Ognuno ha la propria informativa sulla privacy e non abbiamo alcun controllo su di essi.'],
        },
        {
          h: 'I tuoi diritti e contatti',
          p: ['Se hai domande su questa informativa o vuoi esercitare i tuoi diritti sui tuoi dati, scrivici dalla pagina dei <a href="{contact}">contatti</a>.'],
        },
        {
          h: 'Modifiche a questa informativa',
          p: ['Se modifichiamo questa informativa, pubblicheremo la nuova versione su questa pagina con la data di aggiornamento.'],
        },
      ],
    },
    about: {
      slug: 'chi-siamo',
      title: 'Informazioni su QR Word Generator',
      description: 'Che cos’è QR Word Generator, come funziona e perché i tuoi codici QR non scadono.',
      sections: [
        {
          p: [
            'QR Word Generator è uno strumento gratuito per creare codici QR per link, WhatsApp, social network, musica, pagamenti e decine di altri servizi.',
            'Scegli un modello, compila il modulo e scarica il codice in PNG o SVG, con il logo al centro e pronto da stampare o condividere.',
          ],
        },
        {
          h: 'Come funziona',
          p: [
            'Il codice viene creato nel tuo browser: ciò che scrivi non passa dai nostri server.',
            'I codici sono statici. Contengono il link finale, senza reindirizzamenti nostri, quindi non scadono, non hanno limiti di scansioni e continuano a funzionare anche se questo sito smette di esistere.',
          ],
        },
        {
          h: 'Gratis',
          p: ['Nessuna versione a pagamento. Puoi usare i codici per scopi personali o commerciali.'],
        },
        {
          h: 'Marchi di terze parti',
          p: ['I nomi e i loghi di ogni servizio appartengono ai rispettivi proprietari e sono usati solo per indicare dove porta il codice. QR Word Generator è un progetto indipendente, senza affiliazione con questi marchi.'],
        },
      ],
    },
    contact: {
      slug: 'contatti',
      title: 'Contatti',
      description: 'Come scriverci per domande, errori o suggerimenti su QR Word Generator.',
      sections: [
        {
          p: [
            'Hai trovato un errore, manca una rete o hai un suggerimento? Scrivici a {email}.',
            'Leggiamo tutti i messaggi e rispondiamo il prima possibile.',
          ],
        },
      ],
    },
  },
};

/** Segmentos de la URL de una página informativa, sin barras. */
export function infoSegments(locale: Locale, id: InfoId): string[] {
  return [locale === defaultLocale ? '' : locale, info[locale][id].slug].filter(Boolean);
}

export function infoPath(locale: Locale, id: InfoId): string {
  return `${BASE_PATH}/${infoSegments(locale, id).join('/')}/`;
}
