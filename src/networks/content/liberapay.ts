import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Recibe donaciones recurrentes con un código QR de Liberapay',
    en: 'Receive recurring donations with a Liberapay QR code',
    pt: 'Receba doações recorrentes com um código QR do Liberapay',
    fr: 'Recevez des dons récurrents avec un code QR Liberapay',
    it: 'Ricevi donazioni ricorrenti con un codice QR di Liberapay',
  },
  about: {
    es: 'El código abre tu perfil de Liberapay, una plataforma de donaciones recurrentes gestionada por una organización sin fines de lucro y muy presente en el software libre. Quien dona elige cuánto aportar y cada cuánto tiempo. Encaja con proyectos que buscan un sostén constante más que un aporte puntual.',
    en: 'The code opens your Liberapay profile, a recurring donations platform run by a non-profit organisation and well established in the free software world. Donors choose how much to give and how often. It suits projects looking for steady support rather than a one-off contribution.',
    pt: 'O código abre o seu perfil do Liberapay, uma plataforma de doações recorrentes mantida por uma organização sem fins lucrativos e muito presente no software livre. Quem doa escolhe quanto contribuir e com que frequência. Combina com projetos que buscam um apoio constante mais do que uma contribuição avulsa.',
    fr: 'Le code ouvre votre profil Liberapay, une plateforme de dons récurrents gérée par une association à but non lucratif et bien implantée dans le monde du logiciel libre. Les donateurs choisissent le montant et la fréquence. Il convient aux projets qui cherchent un soutien régulier plutôt qu’une contribution ponctuelle.',
    it: 'Il codice apre il tuo profilo Liberapay, una piattaforma di donazioni ricorrenti gestita da un’organizzazione senza scopo di lucro e molto diffusa nel software libero. Chi dona sceglie quanto versare e con quale frequenza. È adatto ai progetti che cercano un sostegno costante più che un contributo occasionale.',
  },
  uses: [
    {
      es: 'En charlas y mesas de proyectos durante encuentros de software libre y en espacios hacker.',
      en: 'At talks and project tables during free software gatherings and in hackerspaces.',
      pt: 'Em palestras e mesas de projetos durante encontros de software livre e em hackerspaces.',
      fr: 'Lors de conférences et sur les tables de projets pendant les rencontres du logiciel libre et dans les hackerspaces.',
      it: 'Nei talk e ai tavoli dei progetti durante gli incontri sul software libero e negli hackerspace.',
    },
    {
      es: 'En pegatinas, manuales impresos y carteles de un proyecto mantenido por voluntarios.',
      en: 'On stickers, printed manuals and posters for a volunteer-run project.',
      pt: 'Em adesivos, manuais impressos e cartazes de um projeto mantido por voluntários.',
      fr: 'Sur des autocollants, des manuels imprimés et des affiches d’un projet porté par des bénévoles.',
      it: 'Su adesivi, manuali stampati e manifesti di un progetto portato avanti da volontari.',
    },
    {
      es: 'En el boletín impreso o en las reuniones de una asociación, una radio comunitaria o un medio independiente.',
      en: 'In the printed newsletter or at the meetings of an association, a community radio or an independent outlet.',
      pt: 'No boletim impresso ou nas reuniões de uma associação, uma rádio comunitária ou um veículo independente.',
      fr: 'Dans le bulletin imprimé ou lors des réunions d’une association, d’une radio associative ou d’un média indépendant.',
      it: 'Nel bollettino stampato o alle riunioni di un’associazione, di una radio comunitaria o di una testata indipendente.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Sirve para recibir una propina puntual?',
        en: 'Is it suitable for one-off tips?',
        pt: 'Serve para receber uma gorjeta avulsa?',
        fr: 'Convient-il pour un pourboire ponctuel ?',
        it: 'Va bene per ricevere una mancia occasionale?',
      },
      a: {
        es: 'Liberapay está pensado para donaciones que se repiten: quien dona fija un importe y una frecuencia, y puede dejar de hacerlo cuando quiera. Por eso conviene acompañar el código con una frase que explique que se trata de un apoyo periódico al proyecto.',
        en: 'Liberapay is designed for donations that repeat: the donor sets an amount and a frequency, and can stop whenever they like. That is why it helps to add a line next to the code explaining that it is regular support for the project.',
        pt: 'O Liberapay foi pensado para doações que se repetem: quem doa define um valor e uma frequência, e pode parar quando quiser. Por isso vale acompanhar o código com uma frase explicando que se trata de um apoio periódico ao projeto.',
        fr: 'Liberapay est conçu pour des dons qui se répètent : le donateur fixe un montant et une fréquence, et peut arrêter quand il le souhaite. Il est donc utile d’ajouter près du code une phrase expliquant qu’il s’agit d’un soutien régulier au projet.',
        it: 'Liberapay è pensato per donazioni che si ripetono: chi dona fissa un importo e una frequenza, e può smettere quando vuole. Per questo conviene accompagnare il codice con una frase che spieghi che si tratta di un sostegno periodico al progetto.',
      },
    },
    {
      q: {
        es: '¿El generador se conecta con mi cuenta de Liberapay?',
        en: 'Does the generator connect to my Liberapay account?',
        pt: 'O gerador se conecta à minha conta do Liberapay?',
        fr: 'Le générateur se connecte-t-il à mon compte Liberapay ?',
        it: 'Il generatore si collega al mio account Liberapay?',
      },
      a: {
        es: 'No. Solo usa tu nombre de usuario para armar la dirección pública liberapay.com/ seguida de ese nombre. El código se crea en tu navegador, y las donaciones se gestionan entre quien dona y Liberapay.',
        en: 'No. It only uses your username to build the public address liberapay.com/ followed by that name. The code is created in your browser, and donations are handled between the donor and Liberapay.',
        pt: 'Não. Ele só usa o seu nome de usuário para montar o endereço público liberapay.com/ seguido desse nome. O código é criado no seu navegador, e as doações são tratadas entre quem doa e o Liberapay.',
        fr: 'Non. Il utilise seulement votre nom d’utilisateur pour construire l’adresse publique liberapay.com/ suivie de ce nom. Le code est créé dans votre navigateur, et les dons se règlent entre le donateur et Liberapay.',
        it: 'No. Usa solo il tuo nome utente per creare l’indirizzo pubblico liberapay.com/ seguito da quel nome. Il codice viene creato nel tuo browser, e le donazioni si gestiscono tra chi dona e Liberapay.',
      },
    },
  ],
};

export default content;
