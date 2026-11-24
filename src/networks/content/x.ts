import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de X (Twitter)',
    en: 'What an X (Twitter) QR code is for',
    pt: 'Para que serve um código QR do X (Twitter)',
    fr: 'À quoi sert un code QR X (Twitter)',
    it: 'A cosa serve un codice QR di X (Twitter)',
  },
  about: {
    es: 'El código puede hacer dos cosas: abrir tu perfil de X para que te sigan, o abrir una publicación nueva con el texto ya escrito y, si quieres, un enlace al final. La segunda opción sirve para eventos y campañas: quien escanea publica desde su propia cuenta con tu etiqueta o tu mención ya puestas.',
    en: 'The code can do two things: open your X profile so people can follow you, or open a new post with the text already written and, if you like, a link at the end. The second option suits events and campaigns: whoever scans it posts from their own account with your hashtag or mention already in place.',
    pt: 'O código pode fazer duas coisas: abrir o seu perfil do X para que sigam você, ou abrir um novo post com o texto já escrito e, se quiser, um link no final. A segunda opção serve para eventos e campanhas: quem lê o código publica na própria conta com a sua hashtag ou menção já incluída.',
    fr: 'Le code peut faire deux choses : ouvrir votre profil X pour que l’on vous suive, ou ouvrir une nouvelle publication avec le texte déjà rédigé et, si vous le souhaitez, un lien à la fin. La seconde option convient aux événements et aux campagnes : la personne qui scanne publie depuis son propre compte avec votre hashtag ou votre mention déjà en place.',
    it: 'Il codice può fare due cose: aprire il tuo profilo X per farti seguire, oppure aprire un nuovo post con il testo già scritto e, se vuoi, un link alla fine. La seconda opzione è adatta a eventi e campagne: chi scansiona pubblica dal proprio account con il tuo hashtag o la tua menzione già inseriti.',
  },
  uses: [
    {
      es: 'Conferencias y charlas: en la última diapositiva o en la credencial, para que el público siga a quien expone.',
      en: 'Conferences and talks: on the last slide or the badge, so the audience can follow the speaker.',
      pt: 'Conferências e palestras: no último slide ou no crachá, para que o público siga quem está apresentando.',
      fr: 'Conférences et présentations : sur la dernière diapositive ou le badge, pour que le public suive l’intervenant.',
      it: 'Conferenze e interventi: sull’ultima slide o sul badge, perché il pubblico possa seguire chi parla.',
    },
    {
      es: 'Eventos y campañas: un código de publicación nueva con la etiqueta lista, para que los asistentes hablen del evento.',
      en: 'Events and campaigns: a new-post code with the hashtag ready, so attendees talk about the event.',
      pt: 'Eventos e campanhas: um código de novo post com a hashtag pronta, para que os participantes falem do evento.',
      fr: 'Événements et campagnes : un code de nouvelle publication avec le hashtag prêt, pour que les participants parlent de l’événement.',
      it: 'Eventi e campagne: un codice per un nuovo post con l’hashtag pronto, perché i partecipanti parlino dell’evento.',
    },
    {
      es: 'Periodistas, medios y pódcast: en tarjetas de presentación, ediciones impresas o en pantalla durante una emisión.',
      en: 'Journalists, media outlets and podcasts: on business cards, in print editions or on screen during a broadcast.',
      pt: 'Jornalistas, veículos de mídia e podcasts: em cartões de visita, edições impressas ou na tela durante uma transmissão.',
      fr: 'Journalistes, médias et podcasts : sur des cartes de visite, dans les éditions imprimées ou à l’écran pendant une émission.',
      it: 'Giornalisti, testate e podcast: su biglietti da visita, edizioni stampate o sullo schermo durante una trasmissione.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿La publicación se envía sola al escanear el código?',
        en: 'Is the post published automatically when the code is scanned?',
        pt: 'O post é publicado sozinho ao ler o código?',
        fr: 'La publication est-elle envoyée automatiquement quand on scanne le code ?',
        it: 'Il post viene pubblicato da solo quando si scansiona il codice?',
      },
      a: {
        es: 'No. X abre el cuadro de publicación con tu texto ya escrito. La persona tiene que haber iniciado sesión, puede cambiar el texto y decide si lo publica.',
        en: 'No. X opens the post composer with your text already written. The person has to be signed in, can change the text and decides whether to post it.',
        pt: 'Não. O X abre a caixa de publicação com o seu texto já escrito. A pessoa precisa estar conectada à conta, pode alterar o texto e decide se publica.',
        fr: 'Non. X ouvre la fenêtre de rédaction avec votre texte déjà saisi. La personne doit être connectée, peut modifier le texte et décide de le publier ou non.',
        it: 'No. X apre la finestra di composizione con il tuo testo già scritto. La persona deve aver effettuato l’accesso, può modificare il testo e decide se pubblicarlo.',
      },
    },
    {
      q: {
        es: '¿El código usa la dirección x.com o twitter.com?',
        en: 'Does the code use the x.com or the twitter.com address?',
        pt: 'O código usa o endereço x.com ou twitter.com?',
        fr: 'Le code utilise-t-il l’adresse x.com ou twitter.com ?',
        it: 'Il codice usa l’indirizzo x.com o twitter.com?',
      },
      a: {
        es: 'Usa x.com, la dirección actual de la plataforma. Ten en cuenta que el enlace del perfil incluye tu usuario: si lo cambias, el código impreso deja de llevar a tu cuenta y tienes que generar uno nuevo.',
        en: 'It uses x.com, the platform’s current address. Bear in mind that the profile link contains your username: if you change it, the printed code no longer leads to your account and you need to create a new one.',
        pt: 'Usa x.com, o endereço atual da plataforma. Lembre-se de que o link do perfil inclui o seu nome de usuário: se você mudá-lo, o código impresso deixa de levar à sua conta e é preciso gerar um novo.',
        fr: 'Il utilise x.com, l’adresse actuelle de la plateforme. Notez que le lien du profil contient votre nom d’utilisateur : si vous le changez, le code imprimé ne mène plus à votre compte et il faut en générer un nouveau.',
        it: 'Usa x.com, l’indirizzo attuale della piattaforma. Tieni presente che il link del profilo contiene il tuo nome utente: se lo cambi, il codice stampato non porta più al tuo account e devi crearne uno nuovo.',
      },
    },
  ],
};

export default content;
