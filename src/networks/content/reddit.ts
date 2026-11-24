import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Qué puedes hacer con un código QR de Reddit',
    en: 'What you can do with a Reddit QR code',
    pt: 'O que você pode fazer com um código QR do Reddit',
    fr: 'Ce que vous pouvez faire avec un code QR Reddit',
    it: 'Cosa puoi fare con un codice QR di Reddit',
  },
  about: {
    es: 'El código abre un perfil de usuario o una comunidad de Reddit (un subreddit). La opción de comunidad es la más usada: lleva a la gente desde un evento, un producto o un lugar físico hasta el foro donde sigue la conversación, sin tener que recordar el nombre exacto.',
    en: 'The code opens a user profile or a Reddit community (a subreddit). The community option is the most widely used: it takes people from an event, a product or a physical place to the forum where the conversation continues, without having to remember the exact name.',
    pt: 'O código abre um perfil de usuário ou uma comunidade do Reddit (um subreddit). A opção de comunidade é a mais usada: leva as pessoas de um evento, de um produto ou de um lugar físico até o fórum onde a conversa continua, sem precisar lembrar o nome exato.',
    fr: 'Le code ouvre un profil d’utilisateur ou une communauté Reddit (un subreddit). L’option communauté est la plus utilisée : elle conduit les gens depuis un événement, un produit ou un lieu physique jusqu’au forum où la discussion se poursuit, sans avoir à retenir le nom exact.',
    it: 'Il codice apre un profilo utente o una community di Reddit (un subreddit). L’opzione community è la più usata: porta le persone da un evento, da un prodotto o da un luogo fisico al forum dove la conversazione continua, senza dover ricordare il nome esatto.',
  },
  uses: [
    {
      es: 'Comunidades de juegos, aficiones o ciudades: en carteles y adhesivos durante encuentros presenciales.',
      en: 'Gaming, hobby or city communities: on posters and stickers at in-person meetups.',
      pt: 'Comunidades de jogos, hobbies ou cidades: em cartazes e adesivos durante encontros presenciais.',
      fr: 'Communautés de jeux, de loisirs ou de villes : sur des affiches et des autocollants lors de rencontres en personne.',
      it: 'Community di giochi, hobby o città: su manifesti e adesivi durante gli incontri dal vivo.',
    },
    {
      es: 'Productos y proyectos de código abierto: en el empaque o el manual, para llevar a la comunidad de ayuda.',
      en: 'Products and open-source projects: on the packaging or the manual, pointing to the support community.',
      pt: 'Produtos e projetos de código aberto: na embalagem ou no manual, para levar à comunidade de ajuda.',
      fr: 'Produits et projets open source : sur l’emballage ou le manuel, pour renvoyer vers la communauté d’entraide.',
      it: 'Prodotti e progetti open source: sulla confezione o sul manuale, per portare alla community di supporto.',
    },
    {
      es: 'Artistas y creadores: en un puesto de feria o en una lámina, con el perfil donde publican su trabajo.',
      en: 'Artists and creators: at a fair stall or on a print, linking to the profile where they post their work.',
      pt: 'Artistas e criadores: em uma banca de feira ou em uma gravura, com o perfil onde publicam o trabalho.',
      fr: 'Artistes et créateurs : sur un stand ou sur un tirage, avec le profil où ils publient leur travail.',
      it: 'Artisti e creator: su uno stand in fiera o su una stampa, con il profilo dove pubblicano i propri lavori.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Qué pasa si la comunidad es privada?',
        en: 'What happens if the community is private?',
        pt: 'O que acontece se a comunidade for privada?',
        fr: 'Que se passe-t-il si la communauté est privée ?',
        it: 'Cosa succede se la community è privata?',
      },
      a: {
        es: 'El código abre la dirección igual, pero solo los miembros aprobados ven el contenido; el resto ve un aviso. Para material impreso conviene usar una comunidad pública.',
        en: 'The code still opens the address, but only approved members see the content; everyone else sees a notice. For printed material it is best to use a public community.',
        pt: 'O código abre o endereço do mesmo jeito, mas só os membros aprovados veem o conteúdo; os demais veem um aviso. Para material impresso, é melhor usar uma comunidade pública.',
        fr: 'Le code ouvre tout de même l’adresse, mais seuls les membres approuvés voient le contenu ; les autres voient un avertissement. Pour un support imprimé, mieux vaut une communauté publique.',
        it: 'Il codice apre comunque l’indirizzo, ma solo i membri approvati vedono i contenuti; gli altri vedono un avviso. Per il materiale stampato conviene usare una community pubblica.',
      },
    },
    {
      q: {
        es: '¿El código de mi perfil puede dejar de funcionar?',
        en: 'Can my profile code stop working?',
        pt: 'O código do meu perfil pode deixar de funcionar?',
        fr: 'Le code de mon profil peut-il cesser de fonctionner ?',
        it: 'Il codice del mio profilo può smettere di funzionare?',
      },
      a: {
        es: 'Es poco probable. Reddit normalmente no permite cambiar el nombre de usuario una vez confirmado, así que el enlace sigue siendo el mismo mientras la cuenta exista.',
        en: 'It is unlikely. Reddit does not normally allow a username to be changed once it is confirmed, so the link stays the same for as long as the account exists.',
        pt: 'É pouco provável. O Reddit normalmente não permite mudar o nome de usuário depois de confirmado, então o link continua o mesmo enquanto a conta existir.',
        fr: 'C’est peu probable. Reddit ne permet normalement pas de changer de nom d’utilisateur une fois celui-ci confirmé : le lien reste donc le même tant que le compte existe.',
        it: 'È poco probabile. Di norma Reddit non permette di cambiare il nome utente dopo averlo confermato, quindi il link resta lo stesso finché l’account esiste.',
      },
    },
  ],
};

export default content;
