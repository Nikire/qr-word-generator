import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Cómo aprovechar un código QR de invitación a Discord',
    en: 'How to use a Discord invite QR code',
    pt: 'Como aproveitar um código QR de convite do Discord',
    fr: 'Comment utiliser un code QR d’invitation Discord',
    it: 'Come usare un codice QR di invito a Discord',
  },
  about: {
    es: 'El código contiene el enlace de invitación a tu servidor de Discord. Quien lo escanea ve el nombre del servidor y puede unirse con un toque, sin que tengas que enviarle el enlace por otro medio. Es la forma más directa de pasar a una comunidad en línea a la gente que conoces en persona.',
    en: 'The code holds the invite link to your Discord server. Whoever scans it sees the server name and can join with one tap, without you having to send the link some other way. It is the most direct way to bring people you meet in person into an online community.',
    pt: 'O código contém o link de convite para o seu servidor do Discord. Quem lê o código vê o nome do servidor e pode entrar com um toque, sem que você precise enviar o link por outro meio. É a forma mais direta de levar para uma comunidade online as pessoas que você conhece pessoalmente.',
    fr: 'Le code contient le lien d’invitation vers votre serveur Discord. La personne qui le scanne voit le nom du serveur et peut le rejoindre d’un geste, sans que vous ayez à lui transmettre le lien autrement. C’est le moyen le plus direct d’amener dans une communauté en ligne les personnes rencontrées sur place.',
    it: 'Il codice contiene il link di invito al tuo server Discord. Chi lo scansiona vede il nome del server e può entrare con un tocco, senza che tu debba mandargli il link in un altro modo. È il modo più diretto per portare in una comunità online le persone che incontri dal vivo.',
  },
  uses: [
    {
      es: 'Torneos, salas de juego y tiendas de videojuegos o juegos de mesa: en la entrada o en cada mesa.',
      en: 'Tournaments, gaming venues and video game or board game shops: at the entrance or on each table.',
      pt: 'Torneios, salas de jogos e lojas de videogames ou jogos de tabuleiro: na entrada ou em cada mesa.',
      fr: 'Tournois, salles de jeu et boutiques de jeux vidéo ou de jeux de société : à l’entrée ou sur chaque table.',
      it: 'Tornei, sale giochi e negozi di videogiochi o giochi da tavolo: all’ingresso o su ogni tavolo.',
    },
    {
      es: 'Clases, cursos y grupos de estudio: en la primera diapositiva, para que todos entren al servidor a la vez.',
      en: 'Classes, courses and study groups: on the first slide, so everyone joins the server at the same time.',
      pt: 'Aulas, cursos e grupos de estudo: no primeiro slide, para que todos entrem no servidor ao mesmo tempo.',
      fr: 'Cours, formations et groupes d’étude : sur la première diapositive, pour que tout le monde rejoigne le serveur en même temps.',
      it: 'Lezioni, corsi e gruppi di studio: sulla prima slide, per far entrare tutti nel server nello stesso momento.',
    },
    {
      es: 'Creadores de contenido y proyectos de software: en la pantalla de una transmisión, en un stand o en la documentación impresa.',
      en: 'Content creators and software projects: on a stream overlay, at a stand or in printed documentation.',
      pt: 'Criadores de conteúdo e projetos de software: na tela de uma transmissão, em um estande ou na documentação impressa.',
      fr: 'Créateurs de contenu et projets logiciels : à l’écran pendant un direct, sur un stand ou dans une documentation imprimée.',
      it: 'Creator e progetti software: sullo schermo di una diretta, in uno stand o nella documentazione stampata.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Por qué mi código QR de Discord dejó de funcionar?',
        en: 'Why has my Discord QR code stopped working?',
        pt: 'Por que o meu código QR do Discord parou de funcionar?',
        fr: 'Pourquoi mon code QR Discord ne fonctionne-t-il plus ?',
        it: 'Perché il mio codice QR di Discord ha smesso di funzionare?',
      },
      a: {
        es: 'Casi siempre porque la invitación venció. Por defecto, Discord crea invitaciones que caducan a los pocos días. Antes de generar el código, edita la invitación para que no caduque nunca y no tenga límite de usos. Si alguien la elimina del servidor, el código también deja de servir.',
        en: 'Nearly always because the invite expired. By default Discord creates invites that lapse after a few days. Before generating the code, edit the invite so it never expires and has no limit on uses. If someone deletes it from the server, the code stops working as well.',
        pt: 'Quase sempre porque o convite expirou. Por padrão, o Discord cria convites que vencem em poucos dias. Antes de gerar o código, edite o convite para que nunca expire e não tenha limite de usos. Se alguém o excluir do servidor, o código também deixa de funcionar.',
        fr: 'Presque toujours parce que l’invitation a expiré. Par défaut, Discord crée des invitations qui expirent au bout de quelques jours. Avant de générer le code, modifiez l’invitation pour qu’elle n’expire jamais et n’ait pas de limite d’utilisations. Si quelqu’un la supprime du serveur, le code cesse lui aussi de fonctionner.',
        it: 'Quasi sempre perché l’invito è scaduto. Per impostazione predefinita Discord crea inviti che scadono dopo pochi giorni. Prima di generare il codice, modifica l’invito in modo che non scada mai e non abbia un limite di utilizzi. Se qualcuno lo elimina dal server, anche il codice smette di funzionare.',
      },
    },
    {
      q: {
        es: '¿Hace falta una cuenta de Discord para unirse con el código?',
        en: 'Do people need a Discord account to join with the code?',
        pt: 'É preciso ter uma conta do Discord para entrar pelo código?',
        fr: 'Faut-il un compte Discord pour rejoindre le serveur avec le code ?',
        it: 'Serve un account Discord per entrare con il codice?',
      },
      a: {
        es: 'Sí. El código se escanea con la cámara del teléfono y abre la invitación en la app o en el navegador, pero para entrar al servidor hay que iniciar sesión o crear una cuenta en ese momento.',
        en: 'Yes. The code is scanned with the phone camera and opens the invite in the app or the browser, but to enter the server people have to sign in or create an account at that point.',
        pt: 'Sim. O código é lido com a câmera do celular e abre o convite no app ou no navegador, mas para entrar no servidor é preciso fazer login ou criar uma conta nesse momento.',
        fr: 'Oui. Le code se scanne avec l’appareil photo du téléphone et ouvre l’invitation dans l’application ou le navigateur, mais pour entrer sur le serveur il faut se connecter ou créer un compte à ce moment-là.',
        it: 'Sì. Il codice si scansiona con la fotocamera del telefono e apre l’invito nell’app o nel browser, ma per entrare nel server bisogna accedere o creare un account in quel momento.',
      },
    },
  ],
};

export default content;
