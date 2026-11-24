import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Cal.com',
    en: 'What a Cal.com QR code is for',
    pt: 'Para que serve um código QR do Cal.com',
    fr: 'À quoi sert un code QR Cal.com',
    it: 'A cosa serve un codice QR di Cal.com',
  },
  about: {
    es: 'El código abre tu página pública de Cal.com, donde aparecen los tipos de reunión que ofreces y tus horarios libres. La persona elige el día y la hora desde el teléfono y la cita queda en tu calendario, sin intercambiar correos para ponerse de acuerdo. Para reservar no necesita una cuenta de Cal.com.',
    en: 'The code opens your public Cal.com page, which shows the meeting types you offer and your free slots. The person picks a day and time on their phone and the appointment lands in your calendar, with no back-and-forth emails to agree on it. They do not need a Cal.com account to book.',
    pt: 'O código abre a sua página pública do Cal.com, onde aparecem os tipos de reunião que você oferece e os seus horários livres. A pessoa escolhe o dia e a hora pelo celular e o compromisso entra na sua agenda, sem trocar e-mails para combinar. Para agendar, ela não precisa de uma conta no Cal.com.',
    fr: 'Le code ouvre votre page publique Cal.com, qui présente les types de rendez-vous que vous proposez et vos créneaux libres. La personne choisit le jour et l’heure depuis son téléphone et le rendez-vous s’inscrit dans votre agenda, sans échange d’e-mails pour se mettre d’accord. Elle n’a pas besoin de compte Cal.com pour réserver.',
    it: 'Il codice apre la tua pagina pubblica Cal.com, dove compaiono i tipi di incontro che offri e i tuoi orari liberi. La persona sceglie giorno e ora dal telefono e l’appuntamento finisce nel tuo calendario, senza scambi di email per mettersi d’accordo. Per prenotare non le serve un account Cal.com.',
  },
  uses: [
    {
      es: 'Conferencias y encuentros técnicos: en la credencial o la última diapositiva, para agendar una llamada después.',
      en: 'Conferences and tech meetups: on your badge or last slide, to schedule a follow-up call.',
      pt: 'Conferências e encontros técnicos: no crachá ou no último slide, para marcar uma chamada depois.',
      fr: 'Conférences et rencontres techniques : sur le badge ou la dernière diapositive, pour planifier un appel ensuite.',
      it: 'Conferenze e meetup tecnici: sul badge o sull’ultima slide, per fissare una chiamata in seguito.',
    },
    {
      es: 'Consultores, mentores y desarrolladores independientes: en propuestas y tarjetas, para la primera reunión.',
      en: 'Consultants, mentors and independent developers: on proposals and cards, for the first meeting.',
      pt: 'Consultores, mentores e desenvolvedores independentes: em propostas e cartões, para a primeira reunião.',
      fr: 'Consultants, mentors et développeurs indépendants : sur les propositions et les cartes, pour le premier rendez-vous.',
      it: 'Consulenti, mentor e sviluppatori indipendenti: su proposte e biglietti, per il primo incontro.',
    },
    {
      es: 'Stands de empresas en ferias: los visitantes reservan una demostración sin esperar a que alguien quede libre.',
      en: 'Company stands at trade fairs: visitors book a demo without waiting for someone to be free.',
      pt: 'Estandes de empresas em feiras: os visitantes agendam uma demonstração sem esperar alguém ficar livre.',
      fr: 'Stands d’entreprises sur les salons : les visiteurs réservent une démonstration sans attendre qu’une personne se libère.',
      it: 'Stand aziendali alle fiere: i visitatori prenotano una demo senza aspettare che qualcuno si liberi.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Puede abrir un tipo de reunión concreto, como una llamada de 30 minutos?',
        en: 'Can it open one specific meeting type, such as a 30-minute call?',
        pt: 'Ele pode abrir um tipo de reunião específico, como uma chamada de 30 minutos?',
        fr: 'Peut-il ouvrir un type de rendez-vous précis, comme un appel de 30 minutes ?',
        it: 'Può aprire un tipo di incontro specifico, come una chiamata di 30 minuti?',
      },
      a: {
        es: 'Esta plantilla abre tu página general, cal.com/usuario, donde la persona elige entre tus tipos de reunión. Para ir directo a uno, copia su enlace en Cal.com y usa la plantilla de URL personalizada.',
        en: 'This template opens your general page, cal.com/username, where the person chooses among your meeting types. To go straight to one, copy its link in Cal.com and use the Custom URL template.',
        pt: 'Este modelo abre a sua página geral, cal.com/usuario, onde a pessoa escolhe entre os seus tipos de reunião. Para ir direto a um deles, copie o link no Cal.com e use o modelo de URL personalizada.',
        fr: 'Ce modèle ouvre votre page générale, cal.com/utilisateur, où la personne choisit parmi vos types de rendez-vous. Pour aller directement à l’un d’eux, copiez son lien dans Cal.com et utilisez le modèle URL personnalisée.',
        it: 'Questo modello apre la tua pagina generale, cal.com/utente, dove la persona sceglie tra i tuoi tipi di incontro. Per andare direttamente a uno, copia il suo link in Cal.com e usa il modello URL personalizzato.',
      },
    },
    {
      q: {
        es: '¿Funciona si uso Cal.com en un servidor o dominio propio?',
        en: 'Does it work if I run Cal.com on my own server or domain?',
        pt: 'Funciona se eu uso o Cal.com em um servidor ou domínio próprio?',
        fr: 'Est-ce que cela fonctionne si j’utilise Cal.com sur mon propre serveur ou domaine ?',
        it: 'Funziona se uso Cal.com su un server o dominio mio?',
      },
      a: {
        es: 'Esta plantilla arma siempre enlaces que empiezan por cal.com/. Si tu página de reservas está en otra dirección, por ejemplo en una instalación propia, pega ese enlace completo en la plantilla de URL personalizada.',
        en: 'This template always builds links that start with cal.com/. If your booking page lives at another address, for example on a self-hosted installation, paste that full link into the Custom URL template.',
        pt: 'Este modelo sempre monta links que começam com cal.com/. Se a sua página de agendamento fica em outro endereço, por exemplo em uma instalação própria, cole esse link completo no modelo de URL personalizada.',
        fr: 'Ce modèle crée toujours des liens qui commencent par cal.com/. Si votre page de réservation se trouve à une autre adresse, par exemple sur une installation auto-hébergée, collez ce lien complet dans le modèle URL personnalisée.',
        it: 'Questo modello crea sempre link che iniziano con cal.com/. Se la tua pagina di prenotazione si trova a un altro indirizzo, per esempio su un’installazione self-hosted, incolla quel link completo nel modello URL personalizzato.',
      },
    },
  ],
};

export default content;
