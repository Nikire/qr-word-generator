import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Steam',
    en: 'What a Steam QR code is for',
    pt: 'Para que serve um código QR do Steam',
    fr: 'À quoi sert un code QR Steam',
    it: 'A cosa serve un codice QR di Steam',
  },
  about: {
    es: 'El generador ofrece tres opciones: un perfil con URL personalizada, un perfil por su Steam ID o la página de un juego en la tienda. Los jugadores lo usan para agregarse como amigos sin buscar entre nombres repetidos; los desarrolladores, para llevar a la gente a la página de su juego, donde puede comprarlo o agregarlo a su lista de deseados.',
    en: 'The generator offers three options: a profile with a custom URL, a profile by its Steam ID, or a game’s store page. Players use it to add each other as friends without searching through duplicate names; developers use it to take people to their game’s page, where they can buy it or add it to their wishlist.',
    pt: 'O gerador oferece três opções: um perfil com URL personalizada, um perfil pelo Steam ID ou a página de um jogo na loja. Os jogadores usam para se adicionar como amigos sem procurar entre nomes repetidos; os desenvolvedores, para levar as pessoas à página do jogo, onde podem comprá-lo ou adicioná-lo à lista de desejos.',
    fr: 'Le générateur propose trois options : un profil avec URL personnalisée, un profil par son Steam ID ou la page d’un jeu dans le magasin. Les joueurs s’en servent pour s’ajouter en amis sans chercher parmi des noms identiques ; les développeurs, pour amener le public sur la page de leur jeu, où il peut l’acheter ou l’ajouter à sa liste de souhaits.',
    it: 'Il generatore offre tre opzioni: un profilo con URL personalizzato, un profilo tramite Steam ID o la pagina di un gioco nel negozio. I giocatori lo usano per aggiungersi come amici senza cercare tra nomi uguali; gli sviluppatori per portare le persone alla pagina del gioco, dove possono acquistarlo o aggiungerlo alla lista dei desideri.',
  },
  uses: [
    {
      es: 'Desarrolladores independientes: en el stand de una feria o en folletos, para sumar el juego a la lista de deseados.',
      en: 'Indie developers: at a show stand or on leaflets, so visitors add the game to their wishlist.',
      pt: 'Desenvolvedores independentes: no estande de uma feira ou em folhetos, para adicionar o jogo à lista de desejos.',
      fr: 'Développeurs indépendants : sur le stand d’un salon ou sur des dépliants, pour faire ajouter le jeu à la liste de souhaits.',
      it: 'Sviluppatori indipendenti: sullo stand di una fiera o sui volantini, per far aggiungere il gioco alla lista dei desideri.',
    },
    {
      es: 'Streamers y equipos de deportes electrónicos: en pantalla durante la transmisión o en las camisetas.',
      en: 'Streamers and esports teams: on screen during the stream or on jerseys.',
      pt: 'Streamers e equipes de esportes eletrônicos: na tela durante a transmissão ou nas camisetas.',
      fr: 'Streamers et équipes d’esport : à l’écran pendant la diffusion ou sur les maillots.',
      it: 'Streamer e squadre di eSport: sullo schermo durante la diretta o sulle maglie.',
    },
    {
      es: 'Torneos y reuniones de jugadores: en las credenciales, para agregarse como amigos en segundos.',
      en: 'Tournaments and LAN parties: on badges, to add each other as friends in seconds.',
      pt: 'Torneios e encontros de jogadores: nos crachás, para se adicionar como amigos em segundos.',
      fr: 'Tournois et LAN : sur les badges, pour s’ajouter en amis en quelques secondes.',
      it: 'Tornei e LAN party: sui badge, per aggiungersi come amici in pochi secondi.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Me conviene usar la URL personalizada o el Steam ID?',
        en: 'Should I use the custom URL or the Steam ID?',
        pt: 'É melhor usar a URL personalizada ou o Steam ID?',
        fr: 'Vaut-il mieux utiliser l’URL personnalisée ou le Steam ID ?',
        it: 'Mi conviene usare l’URL personalizzato o lo Steam ID?',
      },
      a: {
        es: 'La URL personalizada es más corta, pero puedes cambiarla cuando quieras desde tu perfil y, si lo haces, el código deja de funcionar. El Steam ID de 17 dígitos no cambia nunca, así que es la opción más segura para imprimir.',
        en: 'The custom URL is shorter, but you can change it at any time from your profile and, if you do, the code stops working. The 17-digit Steam ID never changes, so it is the safer option for print.',
        pt: 'A URL personalizada é mais curta, mas você pode mudá-la quando quiser no seu perfil e, se fizer isso, o código deixa de funcionar. O Steam ID de 17 dígitos nunca muda, então é a opção mais segura para imprimir.',
        fr: 'L’URL personnalisée est plus courte, mais vous pouvez la modifier à tout moment depuis votre profil et, dans ce cas, le code cesse de fonctionner. Le Steam ID à 17 chiffres ne change jamais : c’est l’option la plus sûre pour l’impression.',
        it: 'L’URL personalizzato è più corto, ma puoi cambiarlo quando vuoi dal tuo profilo e, se lo fai, il codice smette di funzionare. Lo Steam ID di 17 cifre non cambia mai, quindi è l’opzione più sicura per la stampa.',
      },
    },
    {
      q: {
        es: '¿Qué ve quien escanea el código si mi perfil es privado?',
        en: 'What do people see when they scan the code if my profile is private?',
        pt: 'O que vê quem lê o código se o meu perfil for privado?',
        fr: 'Que voit la personne qui scanne le code si mon profil est privé ?',
        it: 'Cosa vede chi scansiona il codice se il mio profilo è privato?',
      },
      a: {
        es: 'Solo lo básico, como tu nombre y tu avatar. La lista de juegos, los amigos y el resto de los datos dependen de la configuración de privacidad de tu cuenta de Steam.',
        en: 'Only the basics, such as your name and avatar. Your game list, friends and other details depend on the privacy settings of your Steam account.',
        pt: 'Apenas o básico, como o seu nome e o seu avatar. A lista de jogos, os amigos e os demais dados dependem das configurações de privacidade da sua conta Steam.',
        fr: 'Seulement l’essentiel, comme votre nom et votre avatar. La liste de jeux, les amis et les autres informations dépendent des paramètres de confidentialité de votre compte Steam.',
        it: 'Solo le informazioni di base, come il nome e l’avatar. L’elenco dei giochi, gli amici e gli altri dati dipendono dalle impostazioni sulla privacy del tuo account Steam.',
      },
    },
  ],
};

export default content;
