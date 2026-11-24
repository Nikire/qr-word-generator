import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Código QR de Calendly: cómo y dónde usarlo',
    en: 'Calendly QR code: how and where to use it',
    pt: 'Código QR do Calendly: como e onde usar',
    fr: 'Code QR Calendly : comment et où l’utiliser',
    it: 'Codice QR di Calendly: come e dove usarlo',
  },
  about: {
    es: 'El código abre tu página de reservas de Calendly o un tipo de evento concreto, como una consulta de 30 minutos. Quien lo escanea ve tus horarios disponibles y reserva en el momento, sin llamadas ni mensajes para coordinar. Es habitual entre consultores, asesores, terapeutas, equipos de ventas y cualquier profesional que atiende con cita.',
    en: 'The code opens your Calendly booking page or one specific event type, such as a 30-minute consultation. Whoever scans it sees your available times and books on the spot, with no calls or messages to coordinate. It is common among consultants, advisers, therapists, sales teams and any professional who works by appointment.',
    pt: 'O código abre a sua página de agendamento do Calendly ou um tipo de evento específico, como uma consulta de 30 minutos. Quem escaneia vê os seus horários disponíveis e agenda na hora, sem ligações nem mensagens para combinar. É comum entre consultores, assessores, terapeutas, equipes de vendas e qualquer profissional que atende com hora marcada.',
    fr: 'Le code ouvre votre page de réservation Calendly ou un type d’événement précis, comme une consultation de 30 minutes. La personne qui le scanne voit vos disponibilités et réserve aussitôt, sans appels ni messages pour s’organiser. Il est courant chez les consultants, conseillers, thérapeutes, équipes commerciales et tout professionnel qui reçoit sur rendez-vous.',
    it: 'Il codice apre la tua pagina di prenotazione Calendly o un tipo di evento specifico, come una consulenza di 30 minuti. Chi lo scansiona vede i tuoi orari disponibili e prenota subito, senza telefonate né messaggi per organizzarsi. È diffuso tra consulenti, terapeuti, team di vendita e qualsiasi professionista che riceve su appuntamento.',
  },
  uses: [
    {
      es: 'Recepciones y salas de espera de consultorios, estudios y despachos, para reservar la próxima cita antes de irse.',
      en: 'Reception desks and waiting rooms in clinics, studios and offices, to book the next appointment before leaving.',
      pt: 'Recepções e salas de espera de consultórios, estúdios e escritórios, para marcar o próximo horário antes de sair.',
      fr: 'Accueils et salles d’attente de cabinets, studios et bureaux, pour réserver le prochain rendez-vous avant de partir.',
      it: 'Reception e sale d’attesa di studi e uffici, per prenotare il prossimo appuntamento prima di andare via.',
    },
    {
      es: 'Folletos, catálogos y presupuestos impresos: una llamada de asesoría al alcance de quien los está leyendo.',
      en: 'Leaflets, catalogues and printed quotes: an advice call within reach of whoever is reading them.',
      pt: 'Folhetos, catálogos e orçamentos impressos: uma chamada de orientação ao alcance de quem os está lendo.',
      fr: 'Dépliants, catalogues et devis imprimés : un appel de conseil à portée de la personne qui les lit.',
      it: 'Pieghevoli, cataloghi e preventivi stampati: una chiamata di consulenza a portata di chi li sta leggendo.',
    },
    {
      es: 'Ferias de empleo y jornadas de puertas abiertas: los interesados reservan una entrevista o una visita guiada.',
      en: 'Job fairs and open days: interested people book an interview or a guided visit.',
      pt: 'Feiras de emprego e dias de portas abertas: os interessados agendam uma entrevista ou uma visita guiada.',
      fr: 'Salons de l’emploi et journées portes ouvertes : les personnes intéressées réservent un entretien ou une visite guidée.',
      it: 'Fiere del lavoro e open day: gli interessati prenotano un colloquio o una visita guidata.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Qué diferencia hay entre la página de reservas y el evento?',
        en: 'What is the difference between the booking page and the event?',
        pt: 'Qual é a diferença entre a página de agendamento e o evento?',
        fr: 'Quelle différence entre la page de réservation et l’événement ?',
        it: 'Che differenza c’è tra la pagina di prenotazione e l’evento?',
      },
      a: {
        es: 'La página de reservas, calendly.com/usuario, muestra todos tus tipos de evento públicos y deja elegir. La opción de evento añade la última parte del enlace, por ejemplo /30min, y lleva directo al calendario de ese tipo de reunión. Usa la segunda cuando el código tiene un solo propósito.',
        en: 'The booking page, calendly.com/username, shows all your public event types and lets the person choose. The event option adds the last part of the link, for example /30min, and leads straight to the calendar for that meeting type. Use the second when the code has a single purpose.',
        pt: 'A página de agendamento, calendly.com/usuario, mostra todos os seus tipos de evento públicos e deixa a pessoa escolher. A opção de evento acrescenta a última parte do link, por exemplo /30min, e leva direto ao calendário desse tipo de reunião. Use a segunda quando o código tem um único propósito.',
        fr: 'La page de réservation, calendly.com/utilisateur, affiche tous vos types d’événement publics et laisse le choix. L’option événement ajoute la dernière partie du lien, par exemple /30min, et mène directement au calendrier de ce type de rendez-vous. Utilisez la seconde lorsque le code a un seul objectif.',
        it: 'La pagina di prenotazione, calendly.com/utente, mostra tutti i tuoi tipi di evento pubblici e lascia scegliere. L’opzione evento aggiunge l’ultima parte del link, per esempio /30min, e porta direttamente al calendario di quel tipo di incontro. Usa la seconda quando il codice ha un solo scopo.',
      },
    },
    {
      q: {
        es: '¿Qué pasa si cambio mi enlace de Calendly o el nombre del evento?',
        en: 'What happens if I change my Calendly link or the event name?',
        pt: 'O que acontece se eu mudar o meu link do Calendly ou o nome do evento?',
        fr: 'Que se passe-t-il si je modifie mon lien Calendly ou le nom de l’événement ?',
        it: 'Cosa succede se cambio il mio link Calendly o il nome dell’evento?',
      },
      a: {
        es: 'El código guarda el enlace exacto que tenías al generarlo y no se puede editar. Si cambias la parte de usuario o la del evento en Calendly, el código impreso deja de abrir la página correcta y tienes que crear uno nuevo. Cambiar tus horarios disponibles no lo afecta.',
        en: 'The code stores the exact link you had when you generated it and cannot be edited. If you change the username part or the event part in Calendly, the printed code stops opening the right page and you have to create a new one. Changing your available hours does not affect it.',
        pt: 'O código guarda o link exato que você tinha ao gerá-lo e não pode ser editado. Se você mudar a parte do usuário ou a do evento no Calendly, o código impresso deixa de abrir a página certa e é preciso criar um novo. Mudar os seus horários disponíveis não o afeta.',
        fr: 'Le code conserve le lien exact que vous aviez au moment de le générer et ne peut pas être modifié. Si vous changez la partie utilisateur ou celle de l’événement dans Calendly, le code imprimé n’ouvre plus la bonne page et il faut en créer un nouveau. Modifier vos disponibilités n’a aucun effet sur lui.',
        it: 'Il codice conserva il link esatto che avevi quando l’hai generato e non si può modificare. Se cambi la parte del nome utente o quella dell’evento in Calendly, il codice stampato non apre più la pagina giusta e devi crearne uno nuovo. Cambiare i tuoi orari disponibili non lo influenza.',
      },
    },
  ],
};

export default content;
