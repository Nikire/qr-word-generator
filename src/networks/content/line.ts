import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Qué puedes hacer con un código QR de LINE',
    en: 'What you can do with a LINE QR code',
    pt: 'O que você pode fazer com um código QR do LINE',
    fr: 'Ce que permet un code QR LINE',
    it: 'Cosa puoi fare con un codice QR di LINE',
  },
  about: {
    es: 'LINE es la app de mensajería principal en Japón, Taiwán y Tailandia, y los negocios la usan a través de una Cuenta Oficial. El código abre tu Cuenta Oficial para que la agreguen como amiga, o bien abre el chat con un mensaje ya escrito, listo para enviar. Así los clientes llegan a tu cuenta sin buscar el ID a mano.',
    en: 'LINE is the main messaging app in Japan, Taiwan and Thailand, and businesses use it through an Official Account. The code opens your Official Account so people can add it as a friend, or opens the chat with a message already typed and ready to send. Customers reach your account without looking up the ID by hand.',
    pt: 'O LINE é o principal aplicativo de mensagens no Japão, em Taiwan e na Tailândia, e as empresas o usam por meio de uma Conta Oficial. O código abre a sua Conta Oficial para que a adicionem como amiga, ou então abre o chat com uma mensagem já escrita, pronta para enviar. Assim os clientes chegam à sua conta sem procurar o ID manualmente.',
    fr: 'LINE est la principale application de messagerie au Japon, à Taïwan et en Thaïlande, et les entreprises l’utilisent au moyen d’un Compte Officiel. Le code ouvre votre Compte Officiel pour qu’on l’ajoute en ami, ou bien ouvre la discussion avec un message déjà rédigé, prêt à être envoyé. Vos clients arrivent ainsi sur votre compte sans chercher l’identifiant à la main.',
    it: 'LINE è la principale app di messaggistica in Giappone, a Taiwan e in Thailandia, e le attività la usano tramite un Account Ufficiale. Il codice apre il tuo Account Ufficiale per farlo aggiungere agli amici, oppure apre la chat con un messaggio già scritto, pronto da inviare. Così i clienti arrivano al tuo account senza cercare l’ID a mano.',
  },
  uses: [
    {
      es: 'Restaurantes, salones de belleza y tiendas: en la caja o en la mesa, para sumar amigos a la Cuenta Oficial.',
      en: 'Restaurants, beauty salons and shops: at the till or on the table, to gain friends for the Official Account.',
      pt: 'Restaurantes, salões de beleza e lojas: no caixa ou na mesa, para ganhar amigos na Conta Oficial.',
      fr: 'Restaurants, salons de beauté et boutiques : à la caisse ou sur la table, pour gagner des amis sur le Compte Officiel.',
      it: 'Ristoranti, saloni di bellezza e negozi: alla cassa o sul tavolo, per aggiungere amici all’Account Ufficiale.',
    },
    {
      es: 'Reservas y pedidos: un código con el mensaje inicial ya escrito, por ejemplo «Quiero reservar una mesa».',
      en: 'Bookings and orders: a code with the opening message already written, for example “I would like to book a table”.',
      pt: 'Reservas e pedidos: um código com a mensagem inicial já escrita, por exemplo “Quero reservar uma mesa”.',
      fr: 'Réservations et commandes : un code avec le premier message déjà rédigé, par exemple « Je souhaite réserver une table ».',
      it: 'Prenotazioni e ordini: un codice con il messaggio iniziale già scritto, per esempio «Vorrei prenotare un tavolo».',
    },
    {
      es: 'Negocios que atienden a viajeros de Asia: en folletos, tarjetas y carteles junto a los demás medios de contacto.',
      en: 'Businesses serving travellers from Asia: on leaflets, cards and signs next to the other contact options.',
      pt: 'Negócios que atendem viajantes da Ásia: em folhetos, cartões e cartazes, ao lado dos outros meios de contato.',
      fr: 'Commerces qui accueillent des voyageurs venus d’Asie : sur des dépliants, des cartes et des affiches, à côté des autres moyens de contact.',
      it: 'Attività che accolgono viaggiatori dall’Asia: su pieghevoli, biglietti e cartelli, accanto agli altri contatti.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Sirve para una cuenta personal de LINE?',
        en: 'Does it work for a personal LINE account?',
        pt: 'Serve para uma conta pessoal do LINE?',
        fr: 'Fonctionne-t-il pour un compte LINE personnel ?',
        it: 'Funziona per un account LINE personale?',
      },
      a: {
        es: 'No. El enlace que arma el generador es el de las Cuentas Oficiales, cuyo ID empieza con @. Lo encuentras en LINE Official Account Manager; escríbelo sin la @, porque el generador ya la agrega.',
        en: 'No. The link the generator builds is the one for Official Accounts, whose ID starts with @. You will find it in LINE Official Account Manager; enter it without the @, as the generator adds it for you.',
        pt: 'Não. O link que o gerador monta é o das Contas Oficiais, cujo ID começa com @. Você o encontra no LINE Official Account Manager; escreva sem o @, porque o gerador já o adiciona.',
        fr: 'Non. Le lien créé par le générateur est celui des Comptes Officiels, dont l’identifiant commence par @. Vous le trouverez dans LINE Official Account Manager ; saisissez-le sans le @, que le générateur ajoute lui-même.',
        it: 'No. Il link creato dal generatore è quello degli Account Ufficiali, il cui ID inizia con @. Lo trovi in LINE Official Account Manager; scrivilo senza la @, perché il generatore la aggiunge già.',
      },
    },
    {
      q: {
        es: '¿El mensaje ya escrito se envía solo?',
        en: 'Is the pre-written message sent automatically?',
        pt: 'A mensagem já escrita é enviada sozinha?',
        fr: 'Le message prérédigé est-il envoyé automatiquement ?',
        it: 'Il messaggio già scritto viene inviato da solo?',
      },
      a: {
        es: 'No. Aparece en el cuadro de texto del chat y la persona decide si lo envía tal cual o lo cambia. Esta opción está pensada para la app de LINE en el teléfono, que debe estar instalada.',
        en: 'No. It appears in the chat text box and the person decides whether to send it as it is or change it. This option is designed for the LINE app on a phone, which has to be installed.',
        pt: 'Não. Ela aparece na caixa de texto do chat e a pessoa decide se envia como está ou se altera. Essa opção foi pensada para o app do LINE no celular, que precisa estar instalado.',
        fr: 'Non. Il apparaît dans la zone de saisie de la discussion et la personne décide de l’envoyer tel quel ou de le modifier. Cette option est prévue pour l’application LINE sur téléphone, qui doit être installée.',
        it: 'No. Compare nella casella di testo della chat e la persona decide se inviarlo così com’è o modificarlo. Questa opzione è pensata per l’app LINE sul telefono, che deve essere installata.',
      },
    },
  ],
};

export default content;
