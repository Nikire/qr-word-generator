import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Recibe pagos con un código QR de revolut.me',
    en: 'Receive payments with a revolut.me QR code',
    pt: 'Receba pagamentos com um código QR do revolut.me',
    fr: 'Recevez des paiements avec un code QR revolut.me',
    it: 'Ricevi pagamenti con un codice QR di revolut.me',
  },
  about: {
    es: 'El código abre tu página de revolut.me, identificada con tu Revtag, donde la otra persona indica cuánto quiere enviarte y completa el pago. Como Revolut se usa en muchos países y con varias monedas, resulta cómodo para viajeros, estudiantes en el extranjero y quienes cobran a personas de otros lugares.',
    en: 'The code opens your revolut.me page, identified by your Revtag, where the other person enters how much they want to send you and completes the payment. As Revolut is used in many countries and with several currencies, it is convenient for travellers, students abroad and anyone paid by people from elsewhere.',
    pt: 'O código abre a sua página do revolut.me, identificada pela sua Revtag, onde a outra pessoa informa quanto quer enviar e conclui o pagamento. Como a Revolut é usada em muitos países e com várias moedas, é prática para viajantes, estudantes no exterior e quem recebe de pessoas de outros lugares.',
    fr: 'Le code ouvre votre page revolut.me, identifiée par votre Revtag, où l’autre personne indique la somme qu’elle souhaite vous envoyer et finalise le paiement. Revolut étant utilisé dans de nombreux pays et avec plusieurs devises, il est commode pour les voyageurs, les étudiants à l’étranger et celles et ceux qui sont payés par des personnes venues d’ailleurs.',
    it: 'Il codice apre la tua pagina revolut.me, identificata dal tuo Revtag, dove l’altra persona indica quanto vuole inviarti e completa il pagamento. Poiché Revolut è usato in molti paesi e con diverse valute, è comodo per viaggiatori, studenti all’estero e chi viene pagato da persone di altri luoghi.',
  },
  uses: [
    {
      es: 'Gastos de un viaje en grupo, una cena o una vivienda compartida: un solo código para que cada persona envíe su parte.',
      en: 'Costs of a group trip, a dinner or a shared flat: a single code for everyone to send their share.',
      pt: 'Despesas de uma viagem em grupo, um jantar ou um apartamento dividido: um único código para cada pessoa enviar a sua parte.',
      fr: 'Frais d’un voyage en groupe, d’un dîner ou d’une colocation : un seul code pour que chacun envoie sa part.',
      it: 'Spese di un viaggio di gruppo, di una cena o di un appartamento condiviso: un solo codice con cui ognuno invia la propria quota.',
    },
    {
      es: 'Clases particulares y trabajos independientes: en el recibo o la factura, junto al importe que se debe pagar.',
      en: 'Private lessons and freelance jobs: on the receipt or invoice, next to the amount due.',
      pt: 'Aulas particulares e trabalhos autônomos: no recibo ou na fatura, ao lado do valor a pagar.',
      fr: 'Cours particuliers et missions en indépendant : sur le reçu ou la facture, à côté du montant dû.',
      it: 'Lezioni private e lavori da freelance: sulla ricevuta o sulla fattura, accanto all’importo dovuto.',
    },
    {
      es: 'Propinas para guías turísticos y músicos callejeros, en una tarjeta o un cartel que el público escanea.',
      en: 'Tips for tour guides and buskers, on a card or sign that the audience scans.',
      pt: 'Gorjetas para guias turísticos e músicos de rua, em um cartão ou uma placa que o público lê.',
      fr: 'Pourboires pour guides touristiques et musiciens de rue, sur une carte ou une affichette que le public scanne.',
      it: 'Mance per guide turistiche e musicisti di strada, su un biglietto o un cartello che il pubblico scansiona.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Puedo indicar el importe en el código?',
        en: 'Can I put the amount in the code?',
        pt: 'Posso indicar o valor no código?',
        fr: 'Puis-je indiquer le montant dans le code ?',
        it: 'Posso indicare l’importo nel codice?',
      },
      a: {
        es: 'No con esta plantilla: el código abre tu página y quien paga escribe la cantidad. Si cobras un precio fijo, indícalo junto al código o en la factura para que la persona sepa cuánto enviar.',
        en: 'Not with this template: the code opens your page and the payer types the figure. If you charge a fixed price, state it next to the code or on the invoice so the person knows how much to send.',
        pt: 'Não com este modelo: o código abre a sua página e quem paga digita a quantia. Se você cobra um preço fixo, indique-o ao lado do código ou na fatura para que a pessoa saiba quanto enviar.',
        fr: 'Pas avec ce modèle : le code ouvre votre page et la personne qui paie saisit la somme. Si votre prix est fixe, indiquez-le à côté du code ou sur la facture pour qu’elle sache combien envoyer.',
        it: 'Non con questo modello: il codice apre la tua pagina e chi paga scrive la cifra. Se hai un prezzo fisso, indicalo accanto al codice o sulla fattura, così la persona sa quanto inviare.',
      },
    },
    {
      q: {
        es: '¿Qué ve quien escanea el código?',
        en: 'What does the person who scans the code see?',
        pt: 'O que vê quem lê o código?',
        fr: 'Que voit la personne qui scanne le code ?',
        it: 'Cosa vede chi scansiona il codice?',
      },
      a: {
        es: 'Tu página de pago en Revolut, identificada con tu Revtag. El código no contiene números de tarjeta ni de cuenta, solo ese enlace público. Antes de imprimirlo, escanéalo y comprueba que la página que se abre es la tuya.',
        en: 'Your payment page on Revolut, identified by your Revtag. The code contains no card or account numbers, only that public link. Before printing it, scan it and check that the page that opens is yours.',
        pt: 'A sua página de pagamento na Revolut, identificada pela sua Revtag. O código não contém números de cartão nem de conta, apenas esse link público. Antes de imprimir, leia o código e confira se a página que abre é a sua.',
        fr: 'Votre page de paiement sur Revolut, identifiée par votre Revtag. Le code ne contient aucun numéro de carte ni de compte, seulement ce lien public. Avant de l’imprimer, scannez-le et vérifiez que la page qui s’ouvre est bien la vôtre.',
        it: 'La tua pagina di pagamento su Revolut, identificata dal tuo Revtag. Il codice non contiene numeri di carta né di conto, solo quel link pubblico. Prima di stamparlo, scansionalo e controlla che la pagina che si apre sia la tua.',
      },
    },
  ],
};

export default content;
