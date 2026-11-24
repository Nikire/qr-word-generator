import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Twitch',
    en: 'What a Twitch QR code is for',
    pt: 'Para que serve um código QR da Twitch',
    fr: 'À quoi sert un code QR Twitch',
    it: 'A cosa serve un codice QR di Twitch',
  },
  about: {
    es: 'El código abre tu canal de Twitch. Quien lo escanea llega al directo si estás transmitiendo, o a la página del canal si no lo estás, y desde allí puede seguirte. Es la forma más corta de pasar de un espacio físico, como un torneo o una convención, a tu transmisión, y también de llevar a quien te ve en una pantalla grande a seguirte desde el teléfono.',
    en: 'The code opens your Twitch channel. Whoever scans it lands on the live stream if you are broadcasting, or on the channel page if you are not, and can follow you from there. It is the shortest route from a physical space, such as a tournament or a convention, to your stream, and also a way to get someone watching you on a big screen to follow you from their phone.',
    pt: 'O código abre o seu canal na Twitch. Quem faz a leitura chega à live se você está transmitindo, ou à página do canal se não está, e dali pode seguir você. É o caminho mais curto de um espaço físico, como um torneio ou uma convenção, até a sua transmissão, e também um jeito de fazer quem assiste em um telão seguir você pelo celular.',
    fr: 'Le code ouvre votre chaîne Twitch. La personne qui le scanne arrive sur le direct si vous diffusez, ou sur la page de la chaîne dans le cas contraire, et peut vous suivre depuis là. C’est le chemin le plus court entre un lieu physique, comme un tournoi ou une convention, et votre stream, et aussi un moyen d’amener celui qui vous regarde sur grand écran à vous suivre depuis son téléphone.',
    it: 'Il codice apre il tuo canale Twitch. Chi lo scansiona arriva alla diretta se stai trasmettendo, oppure alla pagina del canale se non lo stai facendo, e da lì può seguirti. È la strada più breve da uno spazio fisico, come un torneo o una convention, alla tua live, e anche un modo per portare chi ti guarda su un grande schermo a seguirti dal telefono.',
  },
  uses: [
    {
      es: 'Torneos y LAN parties: en la pantalla del escenario, en las mesas de juego o en la camiseta del equipo.',
      en: 'Tournaments and LAN parties: on the stage screen, on the gaming tables or on the team jersey.',
      pt: 'Torneios e LAN parties: no telão do palco, nas mesas de jogo ou na camisa da equipe.',
      fr: 'Tournois et LAN : sur l’écran de la scène, sur les tables de jeu ou sur le maillot de l’équipe.',
      it: 'Tornei e LAN party: sullo schermo del palco, sui tavoli di gioco o sulla maglia della squadra.',
    },
    {
      es: 'Convenciones y encuentros con seguidores: en tarjetas, adhesivos y credenciales para repartir en persona.',
      en: 'Conventions and meet-ups: on cards, stickers and badges to hand out in person.',
      pt: 'Convenções e encontros com seguidores: em cartões, adesivos e credenciais para entregar pessoalmente.',
      fr: 'Conventions et rencontres avec la communauté : sur des cartes, des autocollants et des badges à distribuer en personne.',
      it: 'Convention e incontri con i follower: su biglietti, adesivi e badge da distribuire di persona.',
    },
    {
      es: 'Bares de videojuegos, tiendas y clubes: junto a la pantalla, hacia el canal donde transmiten sus partidas y eventos.',
      en: 'Gaming bars, shops and clubs: next to the screen, leading to the channel where they stream their matches and events.',
      pt: 'Bares de games, lojas e clubes: ao lado da tela, levando ao canal onde transmitem suas partidas e eventos.',
      fr: 'Bars gaming, boutiques et clubs : à côté de l’écran, vers la chaîne où ils diffusent leurs parties et leurs événements.',
      it: 'Gaming bar, negozi e club: accanto allo schermo, verso il canale dove trasmettono partite ed eventi.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Puedo mostrar el código dentro de mi transmisión?',
        en: 'Can I show the code inside my stream?',
        pt: 'Posso mostrar o código dentro da minha transmissão?',
        fr: 'Puis-je afficher le code dans mon stream ?',
        it: 'Posso mostrare il codice dentro la mia diretta?',
      },
      a: {
        es: 'Sí. Descarga el código en PNG o SVG y añádelo como imagen en tu programa de transmisión, por ejemplo en una escena de pausa o de cierre. Dale un tamaño generoso y un fondo claro: la compresión del video puede dificultar la lectura de un código pequeño.',
        en: 'Yes. Download the code as PNG or SVG and add it as an image in your streaming software, for example on a break or ending scene. Give it a generous size and a light background: video compression can make a small code hard to read.',
        pt: 'Sim. Baixe o código em PNG ou SVG e adicione como imagem no seu programa de transmissão, por exemplo em uma cena de pausa ou de encerramento. Use um tamanho generoso e um fundo claro: a compressão do vídeo pode dificultar a leitura de um código pequeno.',
        fr: 'Oui. Téléchargez le code en PNG ou en SVG et ajoutez-le comme image dans votre logiciel de diffusion, par exemple sur une scène de pause ou de fin. Donnez-lui une taille généreuse et un fond clair : la compression vidéo peut rendre un petit code difficile à lire.',
        it: 'Sì. Scarica il codice in PNG o SVG e aggiungilo come immagine nel tuo programma di streaming, per esempio in una scena di pausa o di chiusura. Dagli una dimensione generosa e uno sfondo chiaro: la compressione video può rendere difficile la lettura di un codice piccolo.',
      },
    },
    {
      q: {
        es: '¿Qué pasa con el código si cambio mi nombre de usuario?',
        en: 'What happens to the code if I change my username?',
        pt: 'O que acontece com o código se eu mudar meu nome de usuário?',
        fr: 'Que devient le code si je change de nom d’utilisateur ?',
        it: 'Cosa succede al codice se cambio il mio nome utente?',
      },
      a: {
        es: 'Deja de servir. La dirección del canal incluye el nombre de usuario, así que al cambiarlo en Twitch la dirección anterior ya no lleva a tu canal. Genera un código nuevo con el nombre actual y reemplaza los que tengas impresos o en pantalla.',
        en: 'It stops working. The channel address includes the username, so once you change it on Twitch the previous address no longer leads to your channel. Generate a new code with the current name and replace the ones you have in print or on screen.',
        pt: 'Ele deixa de funcionar. O endereço do canal inclui o nome de usuário, então, ao mudá-lo na Twitch, o endereço anterior não leva mais ao seu canal. Gere um código novo com o nome atual e substitua os que você tem impressos ou na tela.',
        fr: 'Il ne fonctionne plus. L’adresse de la chaîne contient le nom d’utilisateur : une fois celui-ci modifié sur Twitch, l’ancienne adresse ne mène plus à votre chaîne. Générez un nouveau code avec le nom actuel et remplacez ceux qui sont imprimés ou affichés à l’écran.',
        it: 'Smette di funzionare. L’indirizzo del canale contiene il nome utente, quindi dopo averlo cambiato su Twitch il vecchio indirizzo non porta più al tuo canale. Genera un nuovo codice con il nome attuale e sostituisci quelli stampati o mostrati sullo schermo.',
      },
    },
  ],
};

export default content;
