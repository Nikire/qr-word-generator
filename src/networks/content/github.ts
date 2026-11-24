import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de GitHub',
    en: 'What a GitHub QR code is for',
    pt: 'Para que serve um código QR do GitHub',
    fr: 'À quoi sert un code QR GitHub',
    it: 'A cosa serve un codice QR di GitHub',
  },
  about: {
    es: 'El código abre tu perfil, el de una organización o un repositorio concreto de GitHub. Es útil cuando el enlace se muestra en un lugar donde nadie puede hacer clic: una diapositiva, un póster o un currículum impreso. Quien lo escanea llega al código fuente sin copiar la dirección a mano ni equivocarse con un guion.',
    en: 'The code opens your profile, an organisation’s profile or a specific repository on GitHub. It helps whenever the link is shown somewhere nobody can click: a slide, a poster or a printed résumé. Whoever scans it reaches the source code without typing the address by hand or getting a hyphen wrong.',
    pt: 'O código abre o seu perfil, o de uma organização ou um repositório específico do GitHub. É útil quando o link aparece em um lugar onde ninguém consegue clicar: um slide, um pôster ou um currículo impresso. Quem escaneia chega ao código-fonte sem copiar o endereço à mão nem errar um hífen.',
    fr: 'Le code ouvre votre profil, celui d’une organisation ou un dépôt précis sur GitHub. Il est utile dès que le lien s’affiche là où personne ne peut cliquer : une diapositive, un poster ou un CV imprimé. La personne qui le scanne arrive au code source sans recopier l’adresse à la main ni se tromper de tiret.',
    it: 'Il codice apre il tuo profilo, quello di un’organizzazione o un repository specifico su GitHub. È utile quando il link compare dove nessuno può fare clic: una slide, un poster o un curriculum stampato. Chi lo scansiona arriva al codice sorgente senza copiare l’indirizzo a mano né sbagliare un trattino.',
  },
  uses: [
    {
      es: 'Charlas y talleres: el repositorio de la demostración en la última diapositiva, para que el público lo clone al momento.',
      en: 'Talks and workshops: the demo repository on the last slide, so the audience can clone it straight away.',
      pt: 'Palestras e oficinas: o repositório da demonstração no último slide, para que o público o clone na hora.',
      fr: 'Conférences et ateliers : le dépôt de la démonstration sur la dernière diapositive, pour que le public le clone aussitôt.',
      it: 'Talk e workshop: il repository della demo sull’ultima slide, perché il pubblico possa clonarlo subito.',
    },
    {
      es: 'Currículums y portafolios impresos: quien te entrevista ve tus proyectos y tu actividad reciente.',
      en: 'Printed résumés and portfolios: the interviewer sees your projects and recent activity.',
      pt: 'Currículos e portfólios impressos: quem entrevista você vê os seus projetos e a sua atividade recente.',
      fr: 'CV et portfolios imprimés : la personne qui vous reçoit en entretien voit vos projets et votre activité récente.',
      it: 'Curriculum e portfolio stampati: chi ti fa il colloquio vede i tuoi progetti e la tua attività recente.',
    },
    {
      es: 'Proyectos de código abierto: adhesivos para el portátil y carteles en hackatones que llevan al repositorio.',
      en: 'Open-source projects: laptop stickers and hackathon signs that lead to the repository.',
      pt: 'Projetos de código aberto: adesivos para o notebook e cartazes em hackathons que levam ao repositório.',
      fr: 'Projets open source : autocollants pour ordinateur portable et affiches de hackathon qui mènent au dépôt.',
      it: 'Progetti open source: adesivi per il portatile e cartelli agli hackathon che portano al repository.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Qué pasa si cambio el nombre del repositorio o mi nombre de usuario?',
        en: 'What happens if I rename the repository or change my username?',
        pt: 'O que acontece se eu renomear o repositório ou mudar o meu nome de usuário?',
        fr: 'Que se passe-t-il si je renomme le dépôt ou si je change de nom d’utilisateur ?',
        it: 'Cosa succede se rinomino il repository o cambio nome utente?',
      },
      a: {
        es: 'El código guarda la dirección tal como la escribiste y no se puede editar después. GitHub suele redirigir los repositorios renombrados, pero la dirección del perfil anterior deja de funcionar y otra persona puede registrar ese nombre. Si ya imprimiste el código, lo más seguro es generar uno nuevo.',
        en: 'The code stores the address exactly as you typed it and cannot be edited afterwards. GitHub usually redirects renamed repositories, but the old profile address stops working and someone else can register that name. If the code is already printed, the safe option is to generate a new one.',
        pt: 'O código guarda o endereço exatamente como você digitou e não pode ser editado depois. O GitHub costuma redirecionar repositórios renomeados, mas o endereço do perfil antigo deixa de funcionar e outra pessoa pode registrar esse nome. Se o código já foi impresso, o mais seguro é gerar um novo.',
        fr: 'Le code enregistre l’adresse telle que vous l’avez saisie et ne peut pas être modifié ensuite. GitHub redirige en général les dépôts renommés, mais l’ancienne adresse du profil cesse de fonctionner et quelqu’un d’autre peut enregistrer ce nom. Si le code est déjà imprimé, le plus sûr est d’en générer un nouveau.',
        it: 'Il codice salva l’indirizzo così come l’hai scritto e non si può modificare in seguito. GitHub di solito reindirizza i repository rinominati, ma il vecchio indirizzo del profilo smette di funzionare e qualcun altro può registrare quel nome. Se il codice è già stampato, la scelta più sicura è generarne uno nuovo.',
      },
    },
    {
      q: {
        es: '¿Funciona con repositorios privados?',
        en: 'Does it work with private repositories?',
        pt: 'Funciona com repositórios privados?',
        fr: 'Est-ce que cela fonctionne avec les dépôts privés ?',
        it: 'Funziona con i repository privati?',
      },
      a: {
        es: 'El código se genera igual, pero solo podrán abrir el repositorio las personas que tengan acceso y hayan iniciado sesión en GitHub. El resto verá una página de error, así que para material público conviene enlazar un repositorio público.',
        en: 'The code is generated all the same, but only people who have access and are signed in to GitHub will be able to open the repository. Everyone else sees an error page, so for public material it is better to link a public repository.',
        pt: 'O código é gerado do mesmo jeito, mas só conseguem abrir o repositório as pessoas que têm acesso e estão conectadas ao GitHub. As demais verão uma página de erro, então para material público é melhor apontar para um repositório público.',
        fr: 'Le code est généré de la même façon, mais seules les personnes qui ont accès au dépôt et sont connectées à GitHub pourront l’ouvrir. Les autres verront une page d’erreur : pour un support public, mieux vaut pointer vers un dépôt public.',
        it: 'Il codice viene generato comunque, ma potranno aprire il repository solo le persone che hanno accesso e hanno effettuato il login su GitHub. Gli altri vedranno una pagina di errore, quindi per materiale pubblico conviene collegare un repository pubblico.',
      },
    },
  ],
};

export default content;
