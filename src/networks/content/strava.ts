import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Código QR de Strava: perfil de atleta o club',
    en: 'Strava QR code: athlete profile or club',
    pt: 'Código QR do Strava: perfil de atleta ou clube',
    fr: 'Code QR Strava : profil d’athlète ou club',
    it: 'Codice QR di Strava: profilo atleta o club',
  },
  about: {
    es: 'El código abre un perfil de atleta o la página de un club de Strava. La opción de club es la más práctica: los grupos de running y ciclismo suman miembros en el momento, sin que nadie tenga que buscar el nombre del club dentro de la app.',
    en: 'The code opens an athlete profile or a Strava club page. The club option is the most practical: running and cycling groups gain members on the spot, without anyone having to search for the club name inside the app.',
    pt: 'O código abre um perfil de atleta ou a página de um clube do Strava. A opção de clube é a mais prática: os grupos de corrida e de ciclismo ganham membros na hora, sem que ninguém precise procurar o nome do clube dentro do app.',
    fr: 'Le code ouvre un profil d’athlète ou la page d’un club Strava. L’option club est la plus pratique : les groupes de course à pied et de cyclisme gagnent des membres sur place, sans que personne ait à chercher le nom du club dans l’application.',
    it: 'Il codice apre un profilo atleta o la pagina di un club Strava. L’opzione club è la più pratica: i gruppi di corsa e di ciclismo acquisiscono membri sul momento, senza che nessuno debba cercare il nome del club nell’app.',
  },
  uses: [
    {
      es: 'Clubes de running, ciclismo y triatlón: en carteles en el gimnasio, la tienda o el punto de encuentro.',
      en: 'Running, cycling and triathlon clubs: on posters at the gym, the shop or the meeting point.',
      pt: 'Clubes de corrida, ciclismo e triatlo: em cartazes na academia, na loja ou no ponto de encontro.',
      fr: 'Clubs de course à pied, de cyclisme et de triathlon : sur des affiches à la salle de sport, en boutique ou au point de rendez-vous.',
      it: 'Club di corsa, ciclismo e triathlon: su manifesti in palestra, in negozio o al punto di ritrovo.',
    },
    {
      es: 'Carreras y eventos deportivos: en la guía del participante o en la zona de llegada, para unirse al club del evento.',
      en: 'Races and sporting events: in the participant guide or at the finish area, to join the event’s club.',
      pt: 'Corridas e eventos esportivos: no guia do participante ou na área de chegada, para entrar no clube do evento.',
      fr: 'Courses et événements sportifs : dans le guide du participant ou dans la zone d’arrivée, pour rejoindre le club de l’événement.',
      it: 'Gare ed eventi sportivi: nella guida del partecipante o nell’area di arrivo, per unirsi al club dell’evento.',
    },
    {
      es: 'Entrenadores y tiendas de deporte: en tarjetas y escaparates, para que sigan sus actividades.',
      en: 'Coaches and sports shops: on cards and shop windows, so people can follow their activities.',
      pt: 'Treinadores e lojas de esporte: em cartões e vitrines, para que acompanhem as suas atividades.',
      fr: 'Entraîneurs et magasins de sport : sur des cartes et en vitrine, pour que l’on suive leurs activités.',
      it: 'Allenatori e negozi sportivi: su biglietti e vetrine, per far seguire le loro attività.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Dónde encuentro mi número de atleta?',
        en: 'Where do I find my athlete number?',
        pt: 'Onde encontro o meu número de atleta?',
        fr: 'Où trouver mon numéro d’athlète ?',
        it: 'Dove trovo il mio numero di atleta?',
      },
      a: {
        es: 'Inicia sesión en strava.com desde un navegador, abre tu perfil y mira la dirección: es el número que aparece después de /athletes/. En un club, es lo que aparece después de /clubs/, que puede ser un nombre o un número.',
        en: 'Sign in to strava.com in a browser, open your profile and look at the address: it is the number that appears after /athletes/. For a club, it is what appears after /clubs/, which may be a name or a number.',
        pt: 'Entre em strava.com pelo navegador, abra o seu perfil e veja o endereço: é o número que aparece depois de /athletes/. No caso de um clube, é o que aparece depois de /clubs/, que pode ser um nome ou um número.',
        fr: 'Connectez-vous à strava.com depuis un navigateur, ouvrez votre profil et regardez l’adresse : c’est le numéro qui suit /athletes/. Pour un club, c’est ce qui suit /clubs/, un nom ou un numéro.',
        it: 'Accedi a strava.com da un browser, apri il tuo profilo e guarda l’indirizzo: è il numero che compare dopo /athletes/. Per un club è ciò che compare dopo /clubs/, che può essere un nome o un numero.',
      },
    },
    {
      q: {
        es: '¿Hace falta una cuenta de Strava para abrir el enlace?',
        en: 'Is a Strava account needed to open the link?',
        pt: 'É preciso ter conta no Strava para abrir o link?',
        fr: 'Faut-il un compte Strava pour ouvrir le lien ?',
        it: 'Serve un account Strava per aprire il link?',
      },
      a: {
        es: 'Para ver el perfil completo o unirse a un club, sí. Sin iniciar sesión, Strava muestra una vista limitada e invita a registrarse. Si la app está instalada, el enlace suele abrirse en ella.',
        en: 'To see the full profile or join a club, yes. Without signing in, Strava shows a limited view and invites people to register. If the app is installed, the link usually opens in it.',
        pt: 'Para ver o perfil completo ou entrar em um clube, sim. Sem fazer login, o Strava mostra uma visualização limitada e convida a pessoa a se cadastrar. Se o app estiver instalado, o link costuma abrir nele.',
        fr: 'Pour voir le profil complet ou rejoindre un club, oui. Sans connexion, Strava affiche une vue limitée et invite à s’inscrire. Si l’application est installée, le lien s’y ouvre le plus souvent.',
        it: 'Per vedere il profilo completo o unirsi a un club, sì. Senza accedere, Strava mostra una vista limitata e invita a registrarsi. Se l’app è installata, di solito il link si apre lì.',
      },
    },
  ],
};

export default content;
