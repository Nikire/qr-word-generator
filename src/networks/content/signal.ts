import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Signal',
    en: 'What a Signal QR code is for',
    pt: 'Para que serve um código QR do Signal',
    fr: 'À quoi sert un code QR Signal',
    it: 'A cosa serve un codice QR di Signal',
  },
  about: {
    es: 'El código abre un chat de Signal con tu número de teléfono, sin que la otra persona tenga que guardarlo antes en sus contactos. Tiene sentido cuando quieres ofrecer un canal de contacto cifrado de extremo a extremo: fuentes periodísticas, consultas confidenciales o simplemente personas que prefieren Signal a otras apps.',
    en: 'The code opens a Signal chat with your phone number, without the other person having to save it to their contacts first. It makes sense when you want to offer an end-to-end encrypted contact channel: journalistic sources, confidential enquiries or simply people who prefer Signal to other apps.',
    pt: 'O código abre uma conversa do Signal com o seu número de telefone, sem que a outra pessoa precise salvá-lo antes nos contatos. Faz sentido quando você quer oferecer um canal de contato com criptografia de ponta a ponta: fontes jornalísticas, consultas confidenciais ou simplesmente pessoas que preferem o Signal a outros apps.',
    fr: 'Le code ouvre une discussion Signal avec votre numéro de téléphone, sans que l’autre personne ait à l’enregistrer au préalable dans ses contacts. Il a du sens lorsque vous souhaitez proposer un canal de contact chiffré de bout en bout : sources journalistiques, demandes confidentielles ou simplement personnes qui préfèrent Signal aux autres applications.',
    it: 'Il codice apre una chat Signal con il tuo numero di telefono, senza che l’altra persona debba prima salvarlo in rubrica. Ha senso quando vuoi offrire un canale di contatto con crittografia end-to-end: fonti giornalistiche, richieste riservate o semplicemente persone che preferiscono Signal ad altre app.',
  },
  uses: [
    {
      es: 'Periodistas y redacciones: en la página de contacto impresa o en una tarjeta, para recibir información de forma reservada.',
      en: 'Journalists and newsrooms: on a printed contact page or a card, to receive information discreetly.',
      pt: 'Jornalistas e redações: na página de contato impressa ou em um cartão, para receber informações de forma reservada.',
      fr: 'Journalistes et rédactions : sur une page de contact imprimée ou une carte, pour recevoir des informations en toute discrétion.',
      it: 'Giornalisti e redazioni: nella pagina dei contatti stampata o su un biglietto, per ricevere informazioni in modo riservato.',
    },
    {
      es: 'Abogados, terapeutas y profesionales de la salud: en la tarjeta de presentación, como vía de contacto privada.',
      en: 'Lawyers, therapists and health professionals: on a business card, as a private way to get in touch.',
      pt: 'Advogados, terapeutas e profissionais de saúde: no cartão de visita, como meio de contato privado.',
      fr: 'Avocats, thérapeutes et professionnels de santé : sur la carte de visite, comme moyen de contact privé.',
      it: 'Avvocati, terapeuti e professionisti sanitari: sul biglietto da visita, come canale di contatto privato.',
    },
    {
      es: 'Organizaciones sociales y equipos de voluntarios: en material interno, para coordinar sin pasar números a mano.',
      en: 'Non-profits and volunteer teams: in internal material, to coordinate without passing numbers around by hand.',
      pt: 'Organizações sociais e equipes de voluntários: em material interno, para coordenar sem passar números manualmente.',
      fr: 'Associations et équipes de bénévoles : dans les documents internes, pour se coordonner sans échanger les numéros à la main.',
      it: 'Associazioni e gruppi di volontari: nel materiale interno, per coordinarsi senza passarsi i numeri a mano.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Por qué al escanear no se abre el chat conmigo?',
        en: 'Why does scanning not open a chat with me?',
        pt: 'Por que a conversa comigo não abre ao ler o código?',
        fr: 'Pourquoi le scan n’ouvre-t-il pas la discussion avec moi ?',
        it: 'Perché la scansione non apre la chat con me?',
      },
      a: {
        es: 'Hay dos causas habituales. La persona necesita tener Signal instalado, porque el enlace se abre en la app. Y en tu cuenta, la opción de privacidad que permite que te encuentren por tu número debe estar habilitada para todos.',
        en: 'There are two usual causes. The person needs Signal installed, because the link opens in the app. And in your account, the privacy option that lets people find you by your number has to be enabled for everyone.',
        pt: 'Há duas causas comuns. A pessoa precisa ter o Signal instalado, porque o link abre no app. E, na sua conta, a opção de privacidade que permite que encontrem você pelo número deve estar habilitada para todos.',
        fr: 'Il y a deux causes fréquentes. La personne doit avoir Signal installé, car le lien s’ouvre dans l’application. Et dans votre compte, l’option de confidentialité qui permet de vous trouver grâce à votre numéro doit être activée pour tout le monde.',
        it: 'Le cause abituali sono due. La persona deve avere Signal installato, perché il link si apre nell’app. E nel tuo account l’opzione di privacy che permette di trovarti tramite il numero deve essere attiva per tutti.',
      },
    },
    {
      q: {
        es: '¿El código revela mi número de teléfono?',
        en: 'Does the code reveal my phone number?',
        pt: 'O código revela o meu número de telefone?',
        fr: 'Le code révèle-t-il mon numéro de téléphone ?',
        it: 'Il codice rivela il mio numero di telefono?',
      },
      a: {
        es: 'Sí. El enlace contiene tu número en formato internacional, así que cualquiera que escanee el código puede verlo. Imprímelo solo donde no te importe que el número sea visible.',
        en: 'Yes. The link contains your number in international format, so anyone who scans the code can see it. Print it only where you do not mind the number being visible.',
        pt: 'Sim. O link contém o seu número em formato internacional, então qualquer pessoa que ler o código pode vê-lo. Imprima apenas onde você não se importe que o número fique visível.',
        fr: 'Oui. Le lien contient votre numéro au format international : toute personne qui scanne le code peut donc le voir. Ne l’imprimez que là où la visibilité de ce numéro ne vous dérange pas.',
        it: 'Sì. Il link contiene il tuo numero in formato internazionale, quindi chiunque scansioni il codice può vederlo. Stampalo solo dove non ti crea problemi che il numero sia visibile.',
      },
    },
  ],
};

export default content;
