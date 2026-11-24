import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Cobra con un código QR de Mercado Pago',
    en: 'Take payments with a Mercado Pago QR code',
    pt: 'Receba pagamentos com um código QR do Mercado Pago',
    fr: 'Encaissez avec un code QR Mercado Pago',
    it: 'Incassa con un codice QR di Mercado Pago',
  },
  about: {
    es: 'El código abre tu link de pago de Mercado Pago, donde el cliente escribe el importe y paga desde su teléfono. Eliges el país de tu cuenta, Argentina, México o Brasil, porque cada uno usa una dirección distinta. Es práctico para quien vende en persona y no tiene un lector de tarjetas a mano.',
    en: 'The code opens your Mercado Pago payment link, where the customer types the amount and pays from their phone. You choose the country of your account, Argentina, Mexico or Brazil, because each one uses a different address. It is handy for anyone who sells in person without a card reader to hand.',
    pt: 'O código abre o seu link de pagamento do Mercado Pago, onde o cliente digita o valor e paga pelo celular. Você escolhe o país da sua conta, Argentina, México ou Brasil, porque cada um usa um endereço diferente. É prático para quem vende pessoalmente e não tem uma maquininha por perto.',
    fr: 'Le code ouvre votre lien de paiement Mercado Pago, où le client saisit le montant et paie depuis son téléphone. Vous choisissez le pays de votre compte, Argentine, Mexique ou Brésil, car chacun utilise une adresse différente. C’est pratique pour vendre en personne sans terminal de paiement sous la main.',
    it: 'Il codice apre il tuo link di pagamento Mercado Pago, dove il cliente scrive l’importo e paga dal telefono. Scegli il paese del tuo account, Argentina, Messico o Brasile, perché ognuno usa un indirizzo diverso. È pratico per chi vende di persona e non ha un POS a portata di mano.',
  },
  uses: [
    {
      es: 'Puestos de mercado, vendedores ambulantes y entregas a domicilio: un cartel impreso que el cliente escanea.',
      en: 'Market stalls, street vendors and home deliveries: a printed sign the customer scans.',
      pt: 'Barracas de feira, vendedores ambulantes e entregas em domicílio: uma placa impressa que o cliente lê.',
      fr: 'Stands de marché, vendeurs ambulants et livraisons à domicile : une affichette imprimée que le client scanne.',
      it: 'Bancarelle, venditori ambulanti e consegne a domicilio: un cartello stampato che il cliente scansiona.',
    },
    {
      es: 'Profesionales independientes y oficios: en presupuestos, facturas o tarjetas, para cobrar al terminar el trabajo.',
      en: 'Freelancers and tradespeople: on quotes, invoices or cards, to get paid when the job is done.',
      pt: 'Profissionais autônomos e prestadores de serviço: em orçamentos, notas ou cartões, para receber ao terminar o trabalho.',
      fr: 'Indépendants et artisans : sur les devis, factures ou cartes, pour être payé une fois le travail terminé.',
      it: 'Liberi professionisti e artigiani: su preventivi, fatture o biglietti, per farsi pagare a lavoro finito.',
    },
    {
      es: 'Clases, rifas y colectas de grupo: el código en el cartel del evento o en la hoja de inscripción.',
      en: 'Classes, raffles and group collections: the code on the event poster or the sign-up sheet.',
      pt: 'Aulas, rifas e vaquinhas: o código no cartaz do evento ou na ficha de inscrição.',
      fr: 'Cours, tombolas et collectes de groupe : le code sur l’affiche de l’événement ou sur la feuille d’inscription.',
      it: 'Lezioni, lotterie e collette di gruppo: il codice sul manifesto dell’evento o sul foglio di iscrizione.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Es lo mismo que el código QR que me da la app de Mercado Pago?',
        en: 'Is it the same as the QR code the Mercado Pago app gives me?',
        pt: 'É o mesmo código QR que o app do Mercado Pago me dá?',
        fr: 'Est-ce le même code QR que celui fourni par l’application Mercado Pago ?',
        it: 'È lo stesso codice QR che mi dà l’app di Mercado Pago?',
      },
      a: {
        es: 'No. Este código contiene la dirección de tu link de pago, así que se abre con la cámara de cualquier teléfono, como una página web. En ambos casos el cobro se realiza dentro de Mercado Pago: este sitio no recibe el dinero ni ve los datos de tu cuenta.',
        en: 'No. This code contains the address of your payment link, so it opens with any phone camera, like a web page. In both cases the payment takes place inside Mercado Pago: this site does not receive the money or see your account details.',
        pt: 'Não. Este código contém o endereço do seu link de pagamento, então abre com a câmera de qualquer celular, como uma página da web. Nos dois casos a cobrança acontece dentro do Mercado Pago: este site não recebe o dinheiro nem vê os dados da sua conta.',
        fr: 'Non. Ce code contient l’adresse de votre lien de paiement : il s’ouvre donc avec l’appareil photo de n’importe quel téléphone, comme une page web. Dans les deux cas, l’encaissement se fait dans Mercado Pago : ce site ne reçoit pas l’argent et ne voit pas les données de votre compte.',
        it: 'No. Questo codice contiene l’indirizzo del tuo link di pagamento, quindi si apre con la fotocamera di qualsiasi telefono, come una pagina web. In entrambi i casi l’incasso avviene dentro Mercado Pago: questo sito non riceve il denaro né vede i dati del tuo account.',
      },
    },
    {
      q: {
        es: '¿Qué país elijo y qué nombre tengo que escribir?',
        en: 'Which country do I choose and which name do I enter?',
        pt: 'Qual país eu escolho e qual nome devo digitar?',
        fr: 'Quel pays choisir et quel nom saisir ?',
        it: 'Quale paese scelgo e quale nome devo scrivere?',
      },
      a: {
        es: 'Elige el país donde abriste tu cuenta de Mercado Pago. El nombre es el que elegiste al crear tu link en la app, lo que aparece después de link.mercadopago en la dirección. Si pegas el enlace completo, el generador se queda con esa parte.',
        en: 'Choose the country where you opened your Mercado Pago account. The name is the one you picked when creating your link in the app, the part that comes after link.mercadopago in the address. If you paste the full link, the generator keeps just that part.',
        pt: 'Escolha o país onde você abriu a sua conta do Mercado Pago. O nome é o que você escolheu ao criar o seu link no app, a parte que vem depois de link.mercadopago no endereço. Se você colar o link completo, o gerador fica só com essa parte.',
        fr: 'Choisissez le pays où vous avez ouvert votre compte Mercado Pago. Le nom est celui que vous avez choisi en créant votre lien dans l’application, la partie située à la fin de l’adresse link.mercadopago. Si vous collez le lien complet, le générateur ne garde que cette partie.',
        it: 'Scegli il paese in cui hai aperto il tuo account Mercado Pago. Il nome è quello che hai scelto creando il tuo link nell’app, la parte finale dell’indirizzo link.mercadopago. Se incolli il link completo, il generatore tiene solo quella parte.',
      },
    },
  ],
};

export default content;
