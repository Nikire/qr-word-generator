import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Consigue patrocinadores con un código QR de GitHub Sponsors',
    en: 'Find sponsors with a GitHub Sponsors QR code',
    pt: 'Consiga patrocinadores com um código QR do GitHub Sponsors',
    fr: 'Trouvez des sponsors avec un code QR GitHub Sponsors',
    it: 'Trova sponsor con un codice QR di GitHub Sponsors',
  },
  about: {
    es: 'El código abre tu perfil de GitHub Sponsors, donde quien tenga una cuenta de GitHub puede patrocinar a una persona o a una organización que mantiene software de código abierto. Sirve para llevar el botón de patrocinio fuera del repositorio, a los lugares donde te encuentras cara a cara con quienes usan tu proyecto.',
    en: 'The code opens your GitHub Sponsors profile, where anyone with a GitHub account can sponsor a person or an organisation that maintains open-source software. It takes the sponsor button out of the repository and into the places where you meet the people who use your project face to face.',
    pt: 'O código abre o seu perfil do GitHub Sponsors, onde quem tem uma conta do GitHub pode patrocinar uma pessoa ou uma organização que mantém software de código aberto. Serve para levar o botão de patrocínio para fora do repositório, aos lugares onde você encontra pessoalmente quem usa o seu projeto.',
    fr: 'Le code ouvre votre profil GitHub Sponsors, où toute personne disposant d’un compte GitHub peut sponsoriser un développeur ou une organisation qui maintient un logiciel open source. Il permet de sortir le bouton de sponsoring du dépôt pour l’amener là où vous rencontrez en personne celles et ceux qui utilisent votre projet.',
    it: 'Il codice apre il tuo profilo GitHub Sponsors, dove chi ha un account GitHub può sponsorizzare una persona o un’organizzazione che mantiene software open source. Serve a portare il pulsante di sponsorizzazione fuori dal repository, nei luoghi in cui incontri di persona chi usa il tuo progetto.',
  },
  uses: [
    {
      es: 'En la última diapositiva de una charla en una conferencia o un encuentro de desarrolladores.',
      en: 'On the last slide of a talk at a conference or developer meetup.',
      pt: 'No último slide de uma palestra em uma conferência ou encontro de desenvolvedores.',
      fr: 'Sur la dernière diapositive d’une présentation lors d’une conférence ou d’un meetup de développeurs.',
      it: 'Nell’ultima slide di un talk a una conferenza o a un meetup di sviluppatori.',
    },
    {
      es: 'En pegatinas y en el stand del proyecto durante eventos y hackatones.',
      en: 'On stickers and at the project’s stand during events and hackathons.',
      pt: 'Em adesivos e no estande do projeto durante eventos e hackathons.',
      fr: 'Sur des autocollants et sur le stand du projet lors d’événements et de hackathons.',
      it: 'Su adesivi e allo stand del progetto durante eventi e hackathon.',
    },
    {
      es: 'En documentación impresa, pósteres académicos o el empaque de un kit de hardware abierto.',
      en: 'In printed documentation, academic posters or the packaging of an open hardware kit.',
      pt: 'Em documentação impressa, pôsteres acadêmicos ou na embalagem de um kit de hardware aberto.',
      fr: 'Dans une documentation imprimée, sur un poster scientifique ou sur l’emballage d’un kit de matériel libre.',
      it: 'Nella documentazione stampata, nei poster accademici o sulla confezione di un kit di hardware aperto.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Sirve también para una organización?',
        en: 'Does it work for an organisation too?',
        pt: 'Também funciona para uma organização?',
        fr: 'Cela fonctionne-t-il aussi pour une organisation ?',
        it: 'Funziona anche per un’organizzazione?',
      },
      a: {
        es: 'Sí. Escribe el nombre de la organización en GitHub en lugar de un usuario personal; el enlace tiene la misma forma. En ambos casos la cuenta debe estar aceptada en GitHub Sponsors: de lo contrario, el enlace no mostrará una página de patrocinio.',
        en: 'Yes. Enter the organisation’s GitHub name instead of a personal username; the link has the same shape. In both cases the account must have been accepted into GitHub Sponsors, otherwise the link will not show a sponsorship page.',
        pt: 'Sim. Digite o nome da organização no GitHub em vez de um usuário pessoal; o link tem o mesmo formato. Nos dois casos a conta precisa ter sido aceita no GitHub Sponsors: caso contrário, o link não mostrará uma página de patrocínio.',
        fr: 'Oui. Saisissez le nom de l’organisation sur GitHub à la place d’un nom d’utilisateur personnel ; le lien a la même forme. Dans les deux cas, le compte doit avoir été accepté dans GitHub Sponsors, sans quoi le lien n’affichera pas de page de sponsoring.',
        it: 'Sì. Scrivi il nome dell’organizzazione su GitHub al posto di un utente personale; il link ha la stessa forma. In entrambi i casi l’account deve essere stato accettato in GitHub Sponsors, altrimenti il link non mostrerà una pagina di sponsorizzazione.',
      },
    },
    {
      q: {
        es: '¿Qué contiene exactamente el código?',
        en: 'What exactly does the code contain?',
        pt: 'O que exatamente o código contém?',
        fr: 'Que contient exactement le code ?',
        it: 'Che cosa contiene esattamente il codice?',
      },
      a: {
        es: 'Únicamente la dirección pública github.com/sponsors/ seguida de tu usuario. El patrocinio se elige y se paga dentro de GitHub, con la cuenta de quien patrocina; este sitio no participa en ese paso.',
        en: 'Just the public address github.com/sponsors/ followed by your username. The sponsorship is chosen and paid for inside GitHub, with the sponsor’s own account; this site plays no part in that step.',
        pt: 'Apenas o endereço público github.com/sponsors/ seguido do seu usuário. O patrocínio é escolhido e pago dentro do GitHub, com a conta de quem patrocina; este site não participa dessa etapa.',
        fr: 'Seulement l’adresse publique github.com/sponsors/ suivie de votre nom d’utilisateur. Le sponsoring se choisit et se règle dans GitHub, avec le compte du sponsor ; ce site n’intervient pas à cette étape.',
        it: 'Soltanto l’indirizzo pubblico github.com/sponsors/ seguito dal tuo nome utente. La sponsorizzazione si sceglie e si paga dentro GitHub, con l’account di chi sponsorizza; questo sito non partecipa a quel passaggio.',
      },
    },
  ],
};

export default content;
