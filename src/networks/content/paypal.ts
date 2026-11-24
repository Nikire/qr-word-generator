import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de PayPal',
    en: 'What a PayPal QR code is for',
    pt: 'Para que serve um código QR do PayPal',
    fr: 'À quoi sert un code QR PayPal',
    it: 'A cosa serve un codice QR di PayPal',
  },
  about: {
    es: 'El código abre tu enlace de PayPal.Me, con el que una persona te envía dinero sin conocer tu correo electrónico. Puedes dejar el importe abierto o fijar una cantidad y una moneda, para que quien paga solo tenga que iniciar sesión y confirmar. Necesitas haber creado antes tu enlace PayPal.Me en tu cuenta.',
    en: 'The code opens your PayPal.Me link, which lets someone send you money without knowing your email address. You can leave the amount open or set a figure and a currency, so the payer only has to log in and confirm. You need to have created your PayPal.Me link in your account beforehand.',
    pt: 'O código abre o seu link do PayPal.Me, com o qual uma pessoa envia dinheiro para você sem conhecer o seu e-mail. Você pode deixar o valor em aberto ou fixar uma quantia e uma moeda, para que quem paga só precise entrar na conta e confirmar. É preciso ter criado antes o seu link PayPal.Me na sua conta.',
    fr: 'Le code ouvre votre lien PayPal.Me, grâce auquel une personne vous envoie de l’argent sans connaître votre adresse e-mail. Vous pouvez laisser le montant libre ou fixer une somme et une devise, afin que la personne qui paie n’ait plus qu’à se connecter et confirmer. Vous devez avoir créé au préalable votre lien PayPal.Me dans votre compte.',
    it: 'Il codice apre il tuo link PayPal.Me, con cui una persona ti invia denaro senza conoscere la tua email. Puoi lasciare l’importo libero o fissare una cifra e una valuta, così chi paga deve solo accedere e confermare. Devi aver creato prima il tuo link PayPal.Me nel tuo account.',
  },
  uses: [
    {
      es: 'En facturas y presupuestos: un código con el importe exacto y la moneda, junto al total.',
      en: 'On invoices and quotes: a code with the exact amount and currency, next to the total.',
      pt: 'Em faturas e orçamentos: um código com o valor exato e a moeda, ao lado do total.',
      fr: 'Sur les factures et les devis : un code avec le montant exact et la devise, à côté du total.',
      it: 'Su fatture e preventivi: un codice con l’importo esatto e la valuta, accanto al totale.',
    },
    {
      es: 'En mostradores, puestos de mercado y talleres: con el importe abierto o con un código por cada precio.',
      en: 'At counters, market stalls and workshops: with the amount left open or with one code per price.',
      pt: 'Em balcões, barracas de feira e oficinas: com o valor em aberto ou com um código para cada preço.',
      fr: 'Sur les comptoirs, les stands de marché et dans les ateliers : avec le montant libre ou un code par prix.',
      it: 'Su banconi, bancarelle e nei laboratori: con l’importo libero o con un codice per ogni prezzo.',
    },
    {
      es: 'En colectas para un regalo, cuotas de un club o entradas de un evento, con la parte de cada persona ya fijada.',
      en: 'For gift collections, club fees or event tickets, with each person’s share already set.',
      pt: 'Em vaquinhas para um presente, mensalidades de um clube ou ingressos de um evento, com a parte de cada pessoa já definida.',
      fr: 'Pour une cagnotte de cadeau, des cotisations de club ou des billets d’événement, avec la part de chacun déjà fixée.',
      it: 'Per collette per un regalo, quote di un club o biglietti di un evento, con la quota di ogni persona già fissata.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Cómo fijo el importe y la moneda?',
        en: 'How do I set the amount and the currency?',
        pt: 'Como defino o valor e a moeda?',
        fr: 'Comment fixer le montant et la devise ?',
        it: 'Come imposto l’importo e la valuta?',
      },
      a: {
        es: 'Elige la opción con importe, escribe la cantidad usando punto para los decimales y agrega el código de la moneda en tres letras mayúsculas, como USD, EUR o GBP. Usa una moneda que tu cuenta de PayPal pueda recibir y prueba el código antes de imprimirlo.',
        en: 'Choose the option with an amount, type the figure using a dot for decimals and add the three-letter currency code in capitals, such as USD, EUR or GBP. Use a currency your PayPal account can receive and test the code before printing it.',
        pt: 'Escolha a opção com valor, digite a quantia usando ponto para os decimais e adicione o código da moeda em três letras maiúsculas, como USD, EUR ou GBP. Use uma moeda que a sua conta do PayPal possa receber e teste o código antes de imprimir.',
        fr: 'Choisissez l’option avec montant, saisissez la somme avec un point pour les décimales et ajoutez le code de la devise en trois lettres majuscules, comme USD, EUR ou GBP. Utilisez une devise que votre compte PayPal peut recevoir et testez le code avant de l’imprimer.',
        it: 'Scegli l’opzione con importo, scrivi la cifra usando il punto per i decimali e aggiungi il codice della valuta in tre lettere maiuscole, come USD, EUR o GBP. Usa una valuta che il tuo conto PayPal può ricevere e prova il codice prima di stamparlo.',
      },
    },
    {
      q: {
        es: '¿Este sitio accede a mi cuenta de PayPal?',
        en: 'Does this site access my PayPal account?',
        pt: 'Este site acessa a minha conta do PayPal?',
        fr: 'Ce site accède-t-il à mon compte PayPal ?',
        it: 'Questo sito accede al mio conto PayPal?',
      },
      a: {
        es: 'No. El código se crea en tu navegador a partir de tu usuario público de PayPal.Me, y nunca se te pide la contraseña ni el correo. Quien paga inicia sesión en PayPal y confirma allí; el dinero no pasa por este sitio.',
        en: 'No. The code is created in your browser from your public PayPal.Me username, and you are never asked for your password or email. The payer logs in to PayPal and confirms there; the money does not pass through this site.',
        pt: 'Não. O código é criado no seu navegador a partir do seu usuário público do PayPal.Me, e nunca pedimos a sua senha nem o seu e-mail. Quem paga entra no PayPal e confirma por lá; o dinheiro não passa por este site.',
        fr: 'Non. Le code est créé dans votre navigateur à partir de votre nom d’utilisateur public PayPal.Me, et ni votre mot de passe ni votre e-mail ne vous sont demandés. La personne qui paie se connecte à PayPal et y confirme ; l’argent ne transite pas par ce site.',
        it: 'No. Il codice viene creato nel tuo browser a partire dal tuo nome utente pubblico PayPal.Me, e non ti vengono mai chieste la password né l’email. Chi paga accede a PayPal e conferma lì; il denaro non passa da questo sito.',
      },
    },
  ],
};

export default content;
