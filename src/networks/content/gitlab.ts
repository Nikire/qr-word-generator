import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Cuándo conviene usar un código QR de GitLab',
    en: 'When a GitLab QR code is worth using',
    pt: 'Quando vale a pena usar um código QR do GitLab',
    fr: 'Quand utiliser un code QR GitLab',
    it: 'Quando conviene usare un codice QR di GitLab',
  },
  about: {
    es: 'El código abre tu perfil de usuario o la página de un grupo en gitlab.com. En el perfil se ven tus proyectos públicos y tu actividad; en el grupo, todos los proyectos que un equipo mantiene juntos. Sirve para compartir ese punto de entrada en persona, sin dictar una dirección ni pedir que te busquen.',
    en: 'The code opens your user profile or a group page on gitlab.com. The profile shows your public projects and activity; the group shows every project a team maintains together. It lets you share that entry point in person, without dictating an address or asking people to search for you.',
    pt: 'O código abre o seu perfil de usuário ou a página de um grupo no gitlab.com. No perfil aparecem os seus projetos públicos e a sua atividade; no grupo, todos os projetos que uma equipe mantém em conjunto. Serve para compartilhar esse ponto de entrada pessoalmente, sem ditar um endereço nem pedir que procurem você.',
    fr: 'Le code ouvre votre profil d’utilisateur ou la page d’un groupe sur gitlab.com. Le profil montre vos projets publics et votre activité ; le groupe, tous les projets qu’une équipe maintient ensemble. Il permet de partager ce point d’entrée en personne, sans dicter d’adresse ni demander qu’on vous cherche.',
    it: 'Il codice apre il tuo profilo utente o la pagina di un gruppo su gitlab.com. Nel profilo si vedono i tuoi progetti pubblici e la tua attività; nel gruppo, tutti i progetti che un team mantiene insieme. Serve a condividere questo punto di ingresso di persona, senza dettare un indirizzo né chiedere di cercarti.',
  },
  uses: [
    {
      es: 'Equipos y empresas: el grupo con todos sus proyectos en el material de un puesto o de una oferta de empleo.',
      en: 'Teams and companies: the group with all its projects on stand material or a job advert.',
      pt: 'Equipes e empresas: o grupo com todos os seus projetos no material de um estande ou de uma vaga de emprego.',
      fr: 'Équipes et entreprises : le groupe et tous ses projets sur les supports d’un stand ou d’une offre d’emploi.',
      it: 'Team e aziende: il gruppo con tutti i suoi progetti sul materiale di uno stand o di un annuncio di lavoro.',
    },
    {
      es: 'Encuentros de DevOps y de software libre: tu perfil en la credencial o al final de una charla.',
      en: 'DevOps and free-software meetups: your profile on your badge or at the end of a talk.',
      pt: 'Encontros de DevOps e de software livre: o seu perfil no crachá ou no fim de uma palestra.',
      fr: 'Rencontres DevOps et logiciel libre : votre profil sur votre badge ou à la fin d’une présentation.',
      it: 'Incontri DevOps e di software libero: il tuo profilo sul badge o alla fine di un talk.',
    },
    {
      es: 'Trabajos de curso y proyectos de fin de carrera: en la memoria impresa, para que el tribunal vea el código.',
      en: 'Coursework and final-year projects: in the printed report, so the examiners can see the code.',
      pt: 'Trabalhos de disciplina e de conclusão de curso: no relatório impresso, para que a banca veja o código.',
      fr: 'Travaux universitaires et projets de fin d’études : dans le rapport imprimé, pour que le jury voie le code.',
      it: 'Progetti di corso e tesi: nella relazione stampata, perché la commissione possa vedere il codice.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Sirve para una instancia de GitLab instalada en mi empresa o universidad?',
        en: 'Does it work for a GitLab instance hosted by my company or university?',
        pt: 'Funciona para uma instância do GitLab instalada na minha empresa ou universidade?',
        fr: 'Est-ce que cela fonctionne pour une instance GitLab hébergée par mon entreprise ou mon université ?',
        it: 'Funziona per un’istanza GitLab installata nella mia azienda o università?',
      },
      a: {
        es: 'Esta plantilla arma enlaces de gitlab.com. Si tu GitLab tiene otra dirección, usa la plantilla URL personalizada y pega el enlace completo. Recuerda que una instancia interna solo se abre desde la red o con la cuenta de la organización.',
        en: 'This template builds gitlab.com links. If your GitLab lives at another address, use the Custom URL template and paste the full link. Bear in mind that an internal instance only opens from the organisation’s network or with its account.',
        pt: 'Este modelo monta links do gitlab.com. Se o seu GitLab tem outro endereço, use o modelo URL personalizada e cole o link completo. Lembre que uma instância interna só abre a partir da rede ou com a conta da organização.',
        fr: 'Ce modèle crée des liens gitlab.com. Si votre GitLab se trouve à une autre adresse, utilisez le modèle URL personnalisée et collez le lien complet. N’oubliez pas qu’une instance interne ne s’ouvre que depuis le réseau ou avec le compte de l’organisation.',
        it: 'Questo modello crea link di gitlab.com. Se il tuo GitLab ha un altro indirizzo, usa il modello URL personalizzato e incolla il link completo. Ricorda che un’istanza interna si apre solo dalla rete o con l’account dell’organizzazione.',
      },
    },
    {
      q: {
        es: '¿Cuál es la diferencia entre un perfil y un grupo?',
        en: 'What is the difference between a profile and a group?',
        pt: 'Qual é a diferença entre um perfil e um grupo?',
        fr: 'Quelle est la différence entre un profil et un groupe ?',
        it: 'Qual è la differenza tra un profilo e un gruppo?',
      },
      a: {
        es: 'El perfil pertenece a una persona; el grupo reúne proyectos y miembros de un equipo. Los dos tienen la misma forma de dirección, gitlab.com/nombre, así que escribes el nombre en el mismo campo. Si el grupo es privado, solo sus miembros podrán verlo.',
        en: 'A profile belongs to one person; a group gathers a team’s projects and members. Both share the same address format, gitlab.com/name, so you type the name in the same field. If the group is private, only its members will be able to see it.',
        pt: 'O perfil pertence a uma pessoa; o grupo reúne projetos e membros de uma equipe. Os dois têm o mesmo formato de endereço, gitlab.com/nome, então você digita o nome no mesmo campo. Se o grupo for privado, só os membros poderão vê-lo.',
        fr: 'Le profil appartient à une personne ; le groupe réunit les projets et les membres d’une équipe. Les deux ont le même format d’adresse, gitlab.com/nom, vous saisissez donc le nom dans le même champ. Si le groupe est privé, seuls ses membres pourront le voir.',
        it: 'Il profilo appartiene a una persona; il gruppo riunisce progetti e membri di un team. Entrambi hanno lo stesso formato di indirizzo, gitlab.com/nome, quindi scrivi il nome nello stesso campo. Se il gruppo è privato, potranno vederlo solo i suoi membri.',
      },
    },
  ],
};

export default content;
