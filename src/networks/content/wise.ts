import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Cobra con un código QR de Wise',
    en: 'Get paid with a Wise QR code',
    pt: 'Receba com um código QR da Wise',
    fr: 'Faites-vous payer avec un code QR Wise',
    it: 'Fatti pagare con un codice QR di Wise',
  },
  about: {
    es: 'El código abre tu página de pago de Wise: la de tu Wisetag personal o la de Quick Pay si tienes una cuenta Wise Business. Quien paga ve a quién le envía el dinero y completa la operación en Wise. Es una opción habitual entre profesionales independientes y negocios que cobran a clientes de otros países.',
    en: 'The code opens your Wise payment page: the one for your personal Wisetag, or the Quick Pay one if you have a Wise Business account. The payer sees who they are sending money to and completes the transfer on Wise. It is a common choice among freelancers and businesses paid by customers in other countries.',
    pt: 'O código abre a sua página de pagamento da Wise: a da sua Wisetag pessoal ou a do Quick Pay, se você tiver uma conta Wise Business. Quem paga vê para quem está enviando o dinheiro e conclui a operação na Wise. É uma opção comum entre profissionais autônomos e negócios que recebem de clientes de outros países.',
    fr: 'Le code ouvre votre page de paiement Wise : celle de votre Wisetag personnel, ou celle de Quick Pay si vous avez un compte Wise Business. La personne qui paie voit à qui elle envoie l’argent et finalise l’opération sur Wise. C’est un choix courant chez les indépendants et les entreprises payés par des clients d’autres pays.',
    it: 'Il codice apre la tua pagina di pagamento Wise: quella del tuo Wisetag personale o quella di Quick Pay se hai un conto Wise Business. Chi paga vede a chi sta inviando il denaro e completa l’operazione su Wise. È una scelta frequente tra liberi professionisti e attività che incassano da clienti di altri paesi.',
  },
  uses: [
    {
      es: 'En facturas para clientes del extranjero, junto al total y a las instrucciones de pago.',
      en: 'On invoices for clients abroad, next to the total and the payment instructions.',
      pt: 'Em faturas para clientes do exterior, ao lado do total e das instruções de pagamento.',
      fr: 'Sur les factures destinées à des clients à l’étranger, à côté du total et des instructions de paiement.',
      it: 'Sulle fatture per clienti all’estero, accanto al totale e alle istruzioni di pagamento.',
    },
    {
      es: 'En el mostrador de una tienda, un alojamiento o un puesto con cuenta Wise Business, usando el enlace de Quick Pay.',
      en: 'At the counter of a shop, guesthouse or stall with a Wise Business account, using the Quick Pay link.',
      pt: 'No balcão de uma loja, hospedagem ou barraca com conta Wise Business, usando o link do Quick Pay.',
      fr: 'Sur le comptoir d’une boutique, d’un hébergement ou d’un stand disposant d’un compte Wise Business, avec le lien Quick Pay.',
      it: 'Sul bancone di un negozio, di una struttura ricettiva o di una bancarella con conto Wise Business, usando il link Quick Pay.',
    },
    {
      es: 'Entre familiares y amigos que viven en países distintos, con el Wisetag personal en una tarjeta o un mensaje impreso.',
      en: 'Between family and friends living in different countries, with the personal Wisetag on a card or printed note.',
      pt: 'Entre familiares e amigos que moram em países diferentes, com a Wisetag pessoal em um cartão ou bilhete impresso.',
      fr: 'Entre proches vivant dans des pays différents, avec le Wisetag personnel sur une carte ou un mot imprimé.',
      it: 'Tra familiari e amici che vivono in paesi diversi, con il Wisetag personale su un biglietto o una nota stampata.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Elijo Wisetag o Quick Pay?',
        en: 'Should I choose Wisetag or Quick Pay?',
        pt: 'Escolho Wisetag ou Quick Pay?',
        fr: 'Faut-il choisir Wisetag ou Quick Pay ?',
        it: 'Scelgo Wisetag o Quick Pay?',
      },
      a: {
        es: 'El Wisetag es el identificador de una cuenta personal y lo encuentras en la sección de pagos, en la opción de tu Wisetag. Quick Pay es para cuentas Wise Business: copia el nombre del negocio que aparece al final de tu enlace de Quick Pay. Usa la opción que corresponda a tu tipo de cuenta.',
        en: 'The Wisetag is the identifier of a personal account and you will find it in the payments section, under your Wisetag. Quick Pay is for Wise Business accounts: copy the business name that appears at the end of your Quick Pay link. Use the option that matches your type of account.',
        pt: 'A Wisetag é o identificador de uma conta pessoal e fica na seção de pagamentos, na opção da sua Wisetag. O Quick Pay é para contas Wise Business: copie o nome do negócio que aparece no fim do seu link do Quick Pay. Use a opção que corresponde ao seu tipo de conta.',
        fr: 'Le Wisetag est l’identifiant d’un compte personnel ; vous le trouverez dans la section des paiements, à la rubrique de votre Wisetag. Quick Pay est réservé aux comptes Wise Business : copiez le nom de l’entreprise qui figure à la fin de votre lien Quick Pay. Utilisez l’option qui correspond à votre type de compte.',
        it: 'Il Wisetag è l’identificativo di un conto personale e lo trovi nella sezione dei pagamenti, alla voce del tuo Wisetag. Quick Pay è per i conti Wise Business: copia il nome dell’attività che compare alla fine del tuo link Quick Pay. Usa l’opzione che corrisponde al tuo tipo di conto.',
      },
    },
    {
      q: {
        es: '¿El código incluye mis datos bancarios?',
        en: 'Does the code include my bank details?',
        pt: 'O código inclui os meus dados bancários?',
        fr: 'Le code contient-il mes coordonnées bancaires ?',
        it: 'Il codice include i miei dati bancari?',
      },
      a: {
        es: 'No. Dentro del código solo va un enlace a wise.com con tu Wisetag o el nombre de tu negocio. No lleva números de cuenta, y este generador no se conecta con Wise: la transferencia se realiza por completo en su plataforma.',
        en: 'No. The code holds only a link to wise.com with your Wisetag or your business name. It carries no account numbers, and this generator does not connect to Wise: the transfer is carried out entirely on their platform.',
        pt: 'Não. Dentro do código vai apenas um link para wise.com com a sua Wisetag ou o nome do seu negócio. Ele não leva números de conta, e este gerador não se conecta à Wise: a transferência é feita inteiramente na plataforma deles.',
        fr: 'Non. Le code ne renferme qu’un lien vers wise.com avec votre Wisetag ou le nom de votre entreprise. Il ne comporte aucun numéro de compte, et ce générateur ne se connecte pas à Wise : le virement s’effectue entièrement sur leur plateforme.',
        it: 'No. Dentro il codice c’è solo un link a wise.com con il tuo Wisetag o il nome della tua attività. Non contiene numeri di conto, e questo generatore non si collega a Wise: il trasferimento avviene interamente sulla loro piattaforma.',
      },
    },
  ],
};

export default content;
