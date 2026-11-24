import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Cobra con un código QR de tu enlace monzo.me',
    en: 'Get paid with a QR code for your monzo.me link',
    pt: 'Receba com um código QR do seu link monzo.me',
    fr: 'Faites-vous payer avec un code QR de votre lien monzo.me',
    it: 'Fatti pagare con un codice QR del tuo link monzo.me',
  },
  about: {
    es: 'El código abre tu página de monzo.me, desde la que otras personas te envían dinero a tu cuenta de Monzo. Puedes dejar el importe abierto o fijar una cantidad en libras con una referencia, para que quien paga solo tenga que confirmar. Monzo es un banco del Reino Unido, así que está pensado para cobros en libras esterlinas.',
    en: 'The code opens your monzo.me page, from which other people send money to your Monzo account. You can leave the amount open or set a figure in pounds with a reference, so the payer only has to confirm. Monzo is a UK bank, so it is meant for payments in pounds sterling.',
    pt: 'O código abre a sua página do monzo.me, pela qual outras pessoas enviam dinheiro para a sua conta do Monzo. Você pode deixar o valor em aberto ou fixar uma quantia em libras com uma referência, para que quem paga só precise confirmar. O Monzo é um banco do Reino Unido, então é voltado para pagamentos em libras esterlinas.',
    fr: 'Le code ouvre votre page monzo.me, depuis laquelle d’autres personnes envoient de l’argent sur votre compte Monzo. Vous pouvez laisser le montant libre ou fixer une somme en livres avec une référence, afin que la personne qui paie n’ait plus qu’à confirmer. Monzo est une banque britannique : il est donc destiné aux paiements en livres sterling.',
    it: 'Il codice apre la tua pagina monzo.me, da cui altre persone inviano denaro sul tuo conto Monzo. Puoi lasciare l’importo libero o fissare una cifra in sterline con una causale, così chi paga deve solo confermare. Monzo è una banca del Regno Unito, quindi è pensato per i pagamenti in sterline.',
  },
  uses: [
    {
      es: 'Dividir la cuenta de una cena, el alquiler o un viaje: un código con la parte exacta de cada persona y su referencia.',
      en: 'Splitting a dinner bill, the rent or a trip: a code with each person’s exact share and its reference.',
      pt: 'Dividir a conta de um jantar, o aluguel ou uma viagem: um código com a parte exata de cada pessoa e a referência.',
      fr: 'Partager l’addition d’un dîner, le loyer ou un voyage : un code avec la part exacte de chacun et sa référence.',
      it: 'Dividere il conto di una cena, l’affitto o un viaggio: un codice con la quota esatta di ogni persona e la causale.',
    },
    {
      es: 'Puestos de mercado y ventas de segunda mano, con un código por cada precio o con el importe abierto.',
      en: 'Market stalls and car boot sales, with one code per price or with the amount left open.',
      pt: 'Barracas de feira e vendas de usados, com um código para cada preço ou com o valor em aberto.',
      fr: 'Stands de marché et vide-greniers, avec un code par prix ou avec le montant laissé libre.',
      it: 'Bancarelle e mercatini dell’usato, con un codice per ogni prezzo o con l’importo libero.',
    },
    {
      es: 'Propinas para músicos callejeros y cuotas de clubes o equipos, en un cartel o en la hoja de inscripción.',
      en: 'Tips for buskers and club or team fees, on a sign or on the sign-up sheet.',
      pt: 'Gorjetas para músicos de rua e mensalidades de clubes ou times, em uma placa ou na ficha de inscrição.',
      fr: 'Pourboires pour musiciens de rue et cotisations de clubs ou d’équipes, sur une affichette ou sur la feuille d’inscription.',
      it: 'Mance per musicisti di strada e quote di club o squadre, su un cartello o sul foglio di iscrizione.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Cómo escribo el importe y para qué sirve la referencia?',
        en: 'How do I enter the amount, and what is the reference for?',
        pt: 'Como escrevo o valor e para que serve a referência?',
        fr: 'Comment saisir le montant et à quoi sert la référence ?',
        it: 'Come scrivo l’importo e a cosa serve la causale?',
      },
      a: {
        es: 'El importe va en libras, con punto para los decimales, por ejemplo 12.50. La referencia es opcional y sirve para reconocer el motivo del pago. Si cobras importes distintos, crea un código para cada uno.',
        en: 'The amount is in pounds, with a dot for decimals, for example 12.50. The reference is optional and helps you recognise what the payment is for. If you charge different amounts, create one code for each.',
        pt: 'O valor vai em libras, com ponto para os decimais, por exemplo 12.50. A referência é opcional e serve para identificar o motivo do pagamento. Se você cobra valores diferentes, crie um código para cada um.',
        fr: 'Le montant s’exprime en livres, avec un point pour les décimales, par exemple 12.50. La référence est facultative et permet de reconnaître l’objet du paiement. Si vous encaissez des montants différents, créez un code pour chacun.',
        it: 'L’importo va in sterline, con il punto per i decimali, per esempio 12.50. La causale è facoltativa e serve a riconoscere il motivo del pagamento. Se incassi importi diversi, crea un codice per ciascuno.',
      },
    },
    {
      q: {
        es: '¿El código muestra mis datos bancarios?',
        en: 'Does the code reveal my bank details?',
        pt: 'O código mostra os meus dados bancários?',
        fr: 'Le code révèle-t-il mes coordonnées bancaires ?',
        it: 'Il codice rivela i miei dati bancari?',
      },
      a: {
        es: 'No. Solo contiene tu enlace monzo.me con tu usuario y, si los agregaste, el importe y la referencia. No incluye número de cuenta ni código de sucursal, y el pago se completa en la página de Monzo.',
        en: 'No. It only contains your monzo.me link with your username and, if you added them, the amount and the reference. It includes no account number or sort code, and the payment is completed on Monzo’s page.',
        pt: 'Não. Ele contém apenas o seu link monzo.me com o seu usuário e, se você tiver adicionado, o valor e a referência. Não inclui número de conta nem código de agência, e o pagamento é concluído na página do Monzo.',
        fr: 'Non. Il contient uniquement votre lien monzo.me avec votre nom d’utilisateur et, si vous les avez ajoutés, le montant et la référence. Il n’inclut ni numéro de compte ni code guichet, et le paiement se termine sur la page de Monzo.',
        it: 'No. Contiene solo il tuo link monzo.me con il tuo nome utente e, se li hai aggiunti, l’importo e la causale. Non include numero di conto né codice della filiale, e il pagamento si completa sulla pagina di Monzo.',
      },
    },
  ],
};

export default content;
