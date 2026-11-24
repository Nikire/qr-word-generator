import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Cómo usar un código QR de Venmo para que te paguen',
    en: 'How to use a Venmo QR code to get paid',
    pt: 'Como usar um código QR do Venmo para receber',
    fr: 'Comment utiliser un code QR Venmo pour être payé',
    it: 'Come usare un codice QR di Venmo per farti pagare',
  },
  about: {
    es: 'El código abre tu perfil de Venmo, desde donde la otra persona te paga con su propia cuenta. Así no tiene que buscarte entre usuarios con nombres parecidos, un error frecuente al pagar por Venmo. El servicio funciona en Estados Unidos, por lo que el código es útil para cobrar a personas con cuenta de ese país.',
    en: 'The code opens your Venmo profile, from which the other person pays you with their own account. That way they do not have to search for you among users with similar names, a frequent mistake when paying by Venmo. The service works in the United States, so the code is useful for being paid by people with an account there.',
    pt: 'O código abre o seu perfil do Venmo, a partir do qual a outra pessoa paga com a própria conta. Assim ela não precisa procurar você entre usuários com nomes parecidos, um erro frequente ao pagar pelo Venmo. O serviço funciona nos Estados Unidos, então o código é útil para receber de pessoas com conta nesse país.',
    fr: 'Le code ouvre votre profil Venmo, à partir duquel l’autre personne vous paie avec son propre compte. Elle n’a ainsi pas à vous chercher parmi des utilisateurs aux noms proches, une erreur fréquente lors d’un paiement par Venmo. Le service fonctionne aux États-Unis : le code est donc utile pour être payé par des personnes ayant un compte dans ce pays.',
    it: 'Il codice apre il tuo profilo Venmo, da cui l’altra persona ti paga con il proprio account. Così non deve cercarti tra utenti con nomi simili, un errore frequente quando si paga con Venmo. Il servizio funziona negli Stati Uniti, quindi il codice è utile per farsi pagare da persone con un account in quel paese.',
  },
  uses: [
    {
      es: 'Mercados de productores, ferias de artesanía y ventas de garaje: el código en un soporte sobre la mesa.',
      en: 'Farmers’ markets, craft fairs and garage sales: the code on a stand on the table.',
      pt: 'Feiras de produtores, feiras de artesanato e vendas de garagem: o código em um suporte sobre a mesa.',
      fr: 'Marchés de producteurs, salons d’artisanat et vide-greniers : le code sur un présentoir posé sur la table.',
      it: 'Mercati contadini, fiere dell’artigianato e mercatini dell’usato: il codice su un espositore sul tavolo.',
    },
    {
      es: 'Propinas para músicos, camareros de bar, peluqueros o conductores, junto al frasco de propinas.',
      en: 'Tips for musicians, bartenders, hairdressers or drivers, next to the tip jar.',
      pt: 'Gorjetas para músicos, bartenders, cabeleireiros ou motoristas, ao lado do pote de gorjetas.',
      fr: 'Pourboires pour musiciens, barmans, coiffeurs ou chauffeurs, à côté du bocal à pourboires.',
      it: 'Mance per musicisti, baristi, parrucchieri o autisti, accanto al barattolo delle mance.',
    },
    {
      es: 'Alquiler, servicios y gastos de viaje entre amigos o personas que comparten vivienda, en un lugar visible de la casa.',
      en: 'Rent, utilities and travel costs between flatmates or friends, somewhere visible at home.',
      pt: 'Aluguel, contas e despesas de viagem entre colegas de apartamento ou amigos, em um lugar visível da casa.',
      fr: 'Loyer, charges et frais de voyage entre colocataires ou amis, à un endroit visible du logement.',
      it: 'Affitto, bollette e spese di viaggio tra coinquilini o amici, in un punto visibile della casa.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Dónde encuentro mi nombre de usuario de Venmo?',
        en: 'Where do I find my Venmo username?',
        pt: 'Onde encontro o meu nome de usuário do Venmo?',
        fr: 'Où trouver mon nom d’utilisateur Venmo ?',
        it: 'Dove trovo il mio nome utente Venmo?',
      },
      a: {
        es: 'En la app de Venmo, en la pestaña Me, debajo de tu nombre. Escríbelo sin la arroba y respetando los guiones. No es tu nombre visible ni tu número de teléfono.',
        en: 'In the Venmo app, on the Me tab, under your name. Type it without the @ sign and keep any hyphens. It is not your display name or your phone number.',
        pt: 'No app do Venmo, na aba Me, abaixo do seu nome. Digite-o sem a arroba e mantendo os hifens. Não é o seu nome de exibição nem o seu número de telefone.',
        fr: 'Dans l’application Venmo, dans l’onglet Me, sous votre nom. Saisissez-le sans l’arobase et en conservant les tirets. Ce n’est ni votre nom affiché ni votre numéro de téléphone.',
        it: 'Nell’app Venmo, nella scheda Me, sotto il tuo nome. Scrivilo senza la chiocciola e mantenendo i trattini. Non è il nome visualizzato né il tuo numero di telefono.',
      },
    },
    {
      q: {
        es: '¿En qué se diferencia del código que muestra la app de Venmo?',
        en: 'How is it different from the code shown in the Venmo app?',
        pt: 'Qual é a diferença em relação ao código que o app do Venmo mostra?',
        fr: 'En quoi diffère-t-il du code affiché dans l’application Venmo ?',
        it: 'In cosa è diverso dal codice mostrato nell’app Venmo?',
      },
      a: {
        es: 'Este código contiene la dirección web pública de tu perfil y se descarga como PNG o SVG, listo para imprimir en el tamaño que necesites. No incluye datos bancarios ni da acceso a tu cuenta: el pago se confirma siempre dentro de Venmo.',
        en: 'This code contains the public web address of your profile and downloads as a PNG or SVG, ready to print at whatever size you need. It includes no bank details and gives no access to your account: the payment is always confirmed inside Venmo.',
        pt: 'Este código contém o endereço público do seu perfil na web e pode ser baixado em PNG ou SVG, pronto para imprimir no tamanho que você precisar. Ele não inclui dados bancários nem dá acesso à sua conta: o pagamento é sempre confirmado dentro do Venmo.',
        fr: 'Ce code contient l’adresse web publique de votre profil et se télécharge en PNG ou en SVG, prêt à être imprimé à la taille voulue. Il ne comporte aucune donnée bancaire et ne donne aucun accès à votre compte : le paiement se confirme toujours dans Venmo.',
        it: 'Questo codice contiene l’indirizzo web pubblico del tuo profilo e si scarica in PNG o SVG, pronto da stampare nella dimensione che ti serve. Non include dati bancari e non dà accesso al tuo account: il pagamento si conferma sempre dentro Venmo.',
      },
    },
  ],
};

export default content;
