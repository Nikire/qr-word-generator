import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de WhatsApp',
    en: 'What a WhatsApp QR code is for',
    pt: 'Para que serve um código QR do WhatsApp',
    fr: 'À quoi sert un code QR WhatsApp',
    it: 'A cosa serve un codice QR di WhatsApp',
  },
  about: {
    es: 'Quien escanea el código abre un chat contigo en WhatsApp al instante, sin tener que guardar tu número en sus contactos. Puedes dejar un mensaje ya escrito para que la conversación empiece con el motivo de la consulta. Funciona igual con WhatsApp y con WhatsApp Business.',
    en: 'Anyone who scans the code opens a WhatsApp chat with you instantly, without saving your number to their contacts. You can add a pre-written message so the conversation starts with the reason for the enquiry. It works the same with WhatsApp and WhatsApp Business.',
    pt: 'Quem lê o código abre uma conversa com você no WhatsApp na hora, sem precisar salvar o seu número nos contatos. Você pode deixar uma mensagem já escrita para que a conversa comece com o motivo do contato. Funciona igual no WhatsApp e no WhatsApp Business.',
    fr: 'La personne qui scanne le code ouvre aussitôt une discussion WhatsApp avec vous, sans enregistrer votre numéro dans ses contacts. Vous pouvez ajouter un message déjà rédigé pour que la conversation commence par l’objet de la demande. Cela fonctionne de la même façon avec WhatsApp et WhatsApp Business.',
    it: 'Chi scansiona il codice apre subito una chat WhatsApp con te, senza salvare il tuo numero in rubrica. Puoi aggiungere un messaggio già scritto, così la conversazione inizia con il motivo della richiesta. Funziona allo stesso modo con WhatsApp e WhatsApp Business.',
  },
  uses: [
    {
      es: 'Escaparates, mostradores y empaques: los clientes consultan o hacen pedidos con un escaneo.',
      en: 'Shop windows, counters and packaging: customers ask questions or place orders with one scan.',
      pt: 'Vitrines, balcões e embalagens: os clientes tiram dúvidas ou fazem pedidos com uma leitura.',
      fr: 'Vitrines, comptoirs et emballages : les clients posent une question ou passent commande en un scan.',
      it: 'Vetrine, banconi e confezioni: i clienti chiedono informazioni o ordinano con una scansione.',
    },
    {
      es: 'Tarjetas de presentación y folletos, para que te escriban sin tener que escribir el número.',
      en: 'Business cards and flyers, so people can message you without typing your number.',
      pt: 'Cartões de visita e folhetos, para que escrevam para você sem digitar o número.',
      fr: 'Cartes de visite et flyers, pour que l’on vous écrive sans avoir à saisir votre numéro.',
      it: 'Biglietti da visita e volantini, per farti scrivere senza dover digitare il numero.',
    },
    {
      es: 'Reservas, citas y soporte: un código distinto por tema, cada uno con su mensaje inicial.',
      en: 'Bookings, appointments and support: a different code per topic, each with its own opening message.',
      pt: 'Reservas, agendamentos e suporte: um código diferente por assunto, cada um com sua mensagem inicial.',
      fr: 'Réservations, rendez-vous et assistance : un code différent par sujet, chacun avec son message d’ouverture.',
      it: 'Prenotazioni, appuntamenti e assistenza: un codice diverso per argomento, ognuno con il suo messaggio iniziale.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Cómo tengo que escribir el número?',
        en: 'How should I enter the number?',
        pt: 'Como devo escrever o número?',
        fr: 'Comment saisir le numéro ?',
        it: 'Come devo scrivere il numero?',
      },
      a: {
        es: 'Elige tu país en la lista y escribe el número completo con el código de área, sin el 0 inicial. El generador arma el enlace en formato internacional, que es el que WhatsApp necesita.',
        en: 'Pick your country from the list and type the full number including the area code, without the leading 0. The generator builds the link in international format, which is what WhatsApp requires.',
        pt: 'Escolha o seu país na lista e digite o número completo com o DDD, sem o 0 inicial. O gerador monta o link no formato internacional, que é o que o WhatsApp exige.',
        fr: 'Choisissez votre pays dans la liste et saisissez le numéro complet, sans le 0 initial. Le générateur crée le lien au format international, celui dont WhatsApp a besoin.',
        it: 'Scegli il tuo paese dall’elenco e scrivi il numero completo, senza il prefisso internazionale. Il generatore crea il link in formato internazionale, quello richiesto da WhatsApp.',
      },
    },
    {
      q: {
        es: '¿Quien escanea el código ve mi número?',
        en: 'Can people who scan the code see my number?',
        pt: 'Quem lê o código vê o meu número?',
        fr: 'Les personnes qui scannent le code voient-elles mon numéro ?',
        it: 'Chi scansiona il codice vede il mio numero?',
      },
      a: {
        es: 'Sí. El enlace incluye tu número y WhatsApp lo muestra al abrir el chat, igual que cuando alguien te escribe por primera vez.',
        en: 'Yes. The link contains your number and WhatsApp shows it when the chat opens, just as when someone messages you for the first time.',
        pt: 'Sim. O link inclui o seu número e o WhatsApp o mostra ao abrir a conversa, como quando alguém escreve para você pela primeira vez.',
        fr: 'Oui. Le lien contient votre numéro et WhatsApp l’affiche à l’ouverture de la discussion, comme lorsqu’une personne vous écrit pour la première fois.',
        it: 'Sì. Il link contiene il tuo numero e WhatsApp lo mostra all’apertura della chat, come quando qualcuno ti scrive per la prima volta.',
      },
    },
  ],
};

export default content;
