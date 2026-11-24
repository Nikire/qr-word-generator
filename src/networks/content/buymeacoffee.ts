import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Recibe apoyo con un código QR de Buy Me a Coffee',
    en: 'Get support with a Buy Me a Coffee QR code',
    pt: 'Receba apoio com um código QR do Buy Me a Coffee',
    fr: 'Recevez du soutien avec un code QR Buy Me a Coffee',
    it: 'Ricevi sostegno con un codice QR di Buy Me a Coffee',
  },
  about: {
    es: 'El código abre tu página de Buy Me a Coffee, donde cualquiera puede dejarte un aporte pequeño, del valor de un café, o sumarse a una membresía si la ofreces. Es útil para quienes publican su trabajo gratis, como escritores, ilustradores, podcasters o desarrolladores, y quieren que también se les pueda agradecer fuera de internet.',
    en: 'The code opens your Buy Me a Coffee page, where anyone can leave a small contribution, about the price of a coffee, or join a membership if you offer one. It suits people who publish their work for free, such as writers, illustrators, podcasters or developers, and want to be thanked away from the internet too.',
    pt: 'O código abre a sua página do Buy Me a Coffee, onde qualquer pessoa pode deixar uma contribuição pequena, do valor de um café, ou entrar em uma assinatura, se você oferecer. É útil para quem publica o próprio trabalho de graça, como escritores, ilustradores, podcasters ou desenvolvedores, e quer receber esse agradecimento também fora da internet.',
    fr: 'Le code ouvre votre page Buy Me a Coffee, où chacun peut laisser une petite contribution, de la valeur d’un café, ou rejoindre un abonnement si vous en proposez un. Il convient à celles et ceux qui publient leur travail gratuitement, comme les auteurs, illustrateurs, podcasteurs ou développeurs, et qui veulent pouvoir être remerciés aussi hors ligne.',
    it: 'Il codice apre la tua pagina Buy Me a Coffee, dove chiunque può lasciare un piccolo contributo, del valore di un caffè, o iscriversi a un abbonamento se lo offri. È utile per chi pubblica il proprio lavoro gratis, come scrittori, illustratori, podcaster o sviluppatori, e vuole poter essere ringraziato anche fuori da internet.',
  },
  uses: [
    {
      es: 'En tu mesa de una feria, mercado o convención, junto a láminas, fanzines o piezas hechas a mano.',
      en: 'On your table at a fair, market or convention, next to prints, zines or handmade pieces.',
      pt: 'Na sua mesa em uma feira ou convenção, ao lado de gravuras, zines ou peças feitas à mão.',
      fr: 'Sur votre table lors d’un salon, d’un marché ou d’une convention, à côté de tirages, de fanzines ou de pièces faites main.',
      it: 'Sul tuo tavolo a una fiera, un mercatino o una convention, accanto a stampe, fanzine o pezzi fatti a mano.',
    },
    {
      es: 'Al final de una charla, un taller o una presentación en vivo: en la última diapositiva o en un cartel junto al escenario.',
      en: 'At the end of a talk, workshop or live show: on the last slide or on a sign by the stage.',
      pt: 'No fim de uma palestra, oficina ou apresentação ao vivo: no último slide ou em um cartaz ao lado do palco.',
      fr: 'À la fin d’une conférence, d’un atelier ou d’un spectacle : sur la dernière diapositive ou sur un panneau près de la scène.',
      it: 'Alla fine di un talk, di un laboratorio o di uno spettacolo dal vivo: nell’ultima slide o su un cartello vicino al palco.',
    },
    {
      es: 'Dentro de tu obra impresa: la última página de un fanzine o una tarjeta de agradecimiento en los pedidos.',
      en: 'Inside your printed work: the last page of a zine or a thank-you card in your orders.',
      pt: 'Dentro do seu trabalho impresso: a última página de um zine ou um cartão de agradecimento nos pedidos.',
      fr: 'Dans vos créations imprimées : la dernière page d’un fanzine ou une carte de remerciement glissée dans les commandes.',
      it: 'Dentro i tuoi lavori stampati: l’ultima pagina di una fanzine o un biglietto di ringraziamento negli ordini.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Qué necesito tener listo antes de imprimir el código?',
        en: 'What do I need to have ready before printing the code?',
        pt: 'O que preciso ter pronto antes de imprimir o código?',
        fr: 'Que faut-il préparer avant d’imprimer le code ?',
        it: 'Cosa devo avere pronto prima di stampare il codice?',
      },
      a: {
        es: 'Tu página tiene que estar creada y publicada. El generador solo necesita el nombre de usuario, que es lo que aparece después de buymeacoffee.com/ en tu enlace. Antes de imprimir, escanea el código y comprueba que se abre la página correcta.',
        en: 'Your page has to be created and published. The generator only needs the username, which is what appears after buymeacoffee.com/ in your link. Before printing, scan the code and check that the right page opens.',
        pt: 'A sua página precisa estar criada e publicada. O gerador só precisa do nome de usuário, que é o que aparece depois de buymeacoffee.com/ no seu link. Antes de imprimir, leia o código e confira se a página certa abre.',
        fr: 'Votre page doit être créée et publiée. Le générateur n’a besoin que du nom d’utilisateur, c’est-à-dire ce qui suit buymeacoffee.com/ dans votre lien. Avant d’imprimer, scannez le code et vérifiez que la bonne page s’ouvre.',
        it: 'La tua pagina deve essere creata e pubblicata. Al generatore serve solo il nome utente, cioè quello che compare dopo buymeacoffee.com/ nel tuo link. Prima di stampare, scansiona il codice e controlla che si apra la pagina giusta.',
      },
    },
    {
      q: {
        es: '¿Este sitio interviene en el pago?',
        en: 'Does this site take part in the payment?',
        pt: 'Este site participa do pagamento?',
        fr: 'Ce site intervient-il dans le paiement ?',
        it: 'Questo sito interviene nel pagamento?',
      },
      a: {
        es: 'No. El código solo guarda la dirección pública de tu página. Los aportes se pagan en Buy Me a Coffee, y este generador nunca ve el dinero ni los datos de tu cuenta.',
        en: 'No. The code only holds the public address of your page. Contributions are paid on Buy Me a Coffee, and this generator never sees the money or your account details.',
        pt: 'Não. O código guarda apenas o endereço público da sua página. As contribuições são pagas no Buy Me a Coffee, e este gerador nunca vê o dinheiro nem os dados da sua conta.',
        fr: 'Non. Le code ne contient que l’adresse publique de votre page. Les contributions sont réglées sur Buy Me a Coffee, et ce générateur ne voit jamais l’argent ni les données de votre compte.',
        it: 'No. Il codice contiene solo l’indirizzo pubblico della tua pagina. I contributi si pagano su Buy Me a Coffee, e questo generatore non vede mai il denaro né i dati del tuo account.',
      },
    },
  ],
};

export default content;
