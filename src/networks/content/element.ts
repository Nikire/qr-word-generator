import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Código QR de Matrix y Element: para qué sirve',
    en: 'Matrix and Element QR code: what it is for',
    pt: 'Código QR do Matrix e do Element: para que serve',
    fr: 'Code QR Matrix et Element : à quoi sert-il',
    it: 'Codice QR di Matrix ed Element: a cosa serve',
  },
  about: {
    es: 'El código lleva a una página de matrix.to con tu usuario o con una sala de Matrix. Desde ahí, quien escanea elige con qué aplicación continuar: Element u otro cliente compatible. Evita tener que dictar identificadores largos, con el servidor incluido, que es donde más errores se cometen al escribirlos a mano.',
    en: 'The code leads to a matrix.to page for your user or for a Matrix room. From there the person scanning chooses which app to continue with: Element or another compatible client. It saves dictating long identifiers that include the server, which is where most typing mistakes happen.',
    pt: 'O código leva a uma página do matrix.to com o seu usuário ou com uma sala do Matrix. A partir dela, quem lê o código escolhe com qual aplicativo continuar: o Element ou outro cliente compatível. Evita ter que ditar identificadores longos, com o servidor incluído, que é onde mais se erra ao digitar.',
    fr: 'Le code mène à une page matrix.to correspondant à votre utilisateur ou à un salon Matrix. De là, la personne qui scanne choisit l’application avec laquelle continuer : Element ou un autre client compatible. Cela évite de dicter de longs identifiants comprenant le serveur, source de la plupart des erreurs de saisie.',
    it: 'Il codice porta a una pagina di matrix.to con il tuo utente o con una stanza Matrix. Da lì chi scansiona sceglie con quale app proseguire: Element o un altro client compatibile. Evita di dover dettare identificativi lunghi, con il server incluso, che sono quelli in cui si sbaglia più spesso a scrivere.',
  },
  uses: [
    {
      es: 'Proyectos de software libre: en stands, charlas y adhesivos, para sumar gente a la sala de la comunidad.',
      en: 'Open source projects: at stands, talks and on stickers, to bring people into the community room.',
      pt: 'Projetos de software livre: em estandes, palestras e adesivos, para levar pessoas à sala da comunidade.',
      fr: 'Projets de logiciel libre : sur des stands, lors de conférences et sur des autocollants, pour amener du monde dans le salon de la communauté.',
      it: 'Progetti di software libero: in stand, interventi e adesivi, per portare le persone nella stanza della comunità.',
    },
    {
      es: 'Organizaciones, universidades y equipos con servidor propio: en la documentación de bienvenida para nuevos miembros.',
      en: 'Organisations, universities and teams with their own server: in the welcome documentation for new members.',
      pt: 'Organizações, universidades e equipes com servidor próprio: na documentação de boas-vindas para novos membros.',
      fr: 'Organisations, universités et équipes disposant de leur propre serveur : dans la documentation d’accueil des nouveaux membres.',
      it: 'Organizzazioni, università e team con un proprio server: nella documentazione di benvenuto per i nuovi membri.',
    },
    {
      es: 'Contacto personal: en una tarjeta, para quienes prefieren no dar su número de teléfono.',
      en: 'Personal contact: on a card, for those who prefer not to give out their phone number.',
      pt: 'Contato pessoal: em um cartão, para quem prefere não informar o número de telefone.',
      fr: 'Contact personnel : sur une carte, pour celles et ceux qui préfèrent ne pas donner leur numéro de téléphone.',
      it: 'Contatto personale: su un biglietto, per chi preferisce non dare il proprio numero di telefono.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿El código solo funciona con Element?',
        en: 'Does the code only work with Element?',
        pt: 'O código só funciona com o Element?',
        fr: 'Le code fonctionne-t-il uniquement avec Element ?',
        it: 'Il codice funziona solo con Element?',
      },
      a: {
        es: 'No. El enlace es de matrix.to, un servicio neutral que deja elegir la aplicación de Matrix que cada persona tenga instalada. Para conversar o unirse a una sala sí hace falta una cuenta de Matrix, en cualquier servidor.',
        en: 'No. The link uses matrix.to, a neutral service that lets each person choose the Matrix app they have installed. A Matrix account, on any server, is needed to chat or join a room.',
        pt: 'Não. O link é do matrix.to, um serviço neutro que permite escolher o aplicativo do Matrix que cada pessoa tem instalado. Para conversar ou entrar em uma sala é necessária uma conta do Matrix, em qualquer servidor.',
        fr: 'Non. Le lien passe par matrix.to, un service neutre qui laisse chacun choisir l’application Matrix installée sur son appareil. Un compte Matrix, sur n’importe quel serveur, reste nécessaire pour discuter ou rejoindre un salon.',
        it: 'No. Il link usa matrix.to, un servizio neutrale che permette a ognuno di scegliere l’app Matrix che ha installato. Per chattare o entrare in una stanza serve comunque un account Matrix, su qualsiasi server.',
      },
    },
    {
      q: {
        es: '¿Qué necesito para crear el código de una sala?',
        en: 'What do I need to create a code for a room?',
        pt: 'O que preciso para criar o código de uma sala?',
        fr: 'Que faut-il pour créer le code d’un salon ?',
        it: 'Cosa mi serve per creare il codice di una stanza?',
      },
      a: {
        es: 'El alias de la sala, con el formato nombre:servidor (por ejemplo, comunidad:matrix.org). La sala tiene que tener un alias publicado; si además es privada, quien escanee solo podrá entrar si recibe una invitación.',
        en: 'The room alias, in the format name:server (for example community:matrix.org). The room must have a published alias; if it is also private, people who scan can only get in once they are invited.',
        pt: 'O alias da sala, no formato nome:servidor (por exemplo, comunidade:matrix.org). A sala precisa ter um alias publicado; se além disso for privada, quem ler o código só poderá entrar se receber um convite.',
        fr: 'L’alias du salon, au format nom:serveur (par exemple communaute:matrix.org). Le salon doit avoir un alias publié ; s’il est en plus privé, les personnes qui scannent ne pourront entrer qu’après avoir reçu une invitation.',
        it: 'L’alias della stanza, nel formato nome:server (per esempio comunita:matrix.org). La stanza deve avere un alias pubblicato; se inoltre è privata, chi scansiona potrà entrare solo dopo aver ricevuto un invito.',
      },
    },
  ],
};

export default content;
