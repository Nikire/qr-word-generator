import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Bluesky',
    en: 'What a Bluesky QR code is for',
    pt: 'Para que serve um código QR do Bluesky',
    fr: 'À quoi sert un code QR Bluesky',
    it: 'A cosa serve un codice QR di Bluesky',
  },
  about: {
    es: 'El código abre tu perfil de Bluesky para que te sigan sin tener que escribir tu identificador, que suele ser largo porque incluye .bsky.social o tu propio dominio. También puedes crear un código que abre una publicación nueva con el texto ya escrito, útil para que el público de un evento te mencione o comparta un enlace.',
    en: 'The code opens your Bluesky profile so people can follow you without typing your handle, which tends to be long because it includes .bsky.social or your own domain. You can also create a code that opens a new post with the text already written, useful when you want an event audience to mention you or share a link.',
    pt: 'O código abre o seu perfil do Bluesky para que sigam você sem precisar digitar o seu identificador, que costuma ser longo porque inclui .bsky.social ou o seu próprio domínio. Você também pode criar um código que abre uma nova publicação com o texto já escrito, útil para que o público de um evento mencione você ou compartilhe um link.',
    fr: 'Le code ouvre votre profil Bluesky pour que l’on vous suive sans saisir votre identifiant, souvent long puisqu’il comprend .bsky.social ou votre propre domaine. Vous pouvez aussi créer un code qui ouvre une nouvelle publication avec un texte déjà rédigé, pratique pour que le public d’un événement vous mentionne ou partage un lien.',
    it: 'Il codice apre il tuo profilo Bluesky, così le persone possono seguirti senza digitare il tuo handle, che di solito è lungo perché include .bsky.social o il tuo dominio. Puoi anche creare un codice che apre un nuovo post con il testo già scritto, utile quando vuoi che il pubblico di un evento ti menzioni o condivida un link.',
  },
  uses: [
    {
      es: 'Periodistas, investigadores y divulgadores: en la última diapositiva de una charla o en un póster académico.',
      en: 'Journalists, researchers and science communicators: on the last slide of a talk or on an academic poster.',
      pt: 'Jornalistas, pesquisadores e divulgadores: no último slide de uma palestra ou em um pôster acadêmico.',
      fr: 'Journalistes, chercheurs et vulgarisateurs : sur la dernière diapositive d’une conférence ou sur un poster scientifique.',
      it: 'Giornalisti, ricercatori e divulgatori: sull’ultima slide di un intervento o su un poster accademico.',
    },
    {
      es: 'Ilustradores y autores: en tarjetas, fanzines y mesas de feria, para que el público siga su trabajo.',
      en: 'Illustrators and authors: on cards, zines and fair tables, so visitors can keep up with their work.',
      pt: 'Ilustradores e autores: em cartões, fanzines e mesas de feira, para que o público acompanhe o trabalho.',
      fr: 'Illustrateurs et auteurs : sur des cartes, des fanzines et des stands de salon, pour que le public suive leur travail.',
      it: 'Illustratori e autori: su biglietti, fanzine e banchi delle fiere, per far seguire il proprio lavoro al pubblico.',
    },
    {
      es: 'Eventos y conferencias: un código de publicación nueva con la etiqueta del evento ya escrita.',
      en: 'Events and conferences: a new-post code with the event hashtag already typed in.',
      pt: 'Eventos e conferências: um código de nova publicação com a hashtag do evento já escrita.',
      fr: 'Événements et conférences : un code de nouvelle publication avec le hashtag de l’événement déjà saisi.',
      it: 'Eventi e conferenze: un codice per un nuovo post con l’hashtag dell’evento già scritto.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Qué identificador tengo que escribir?',
        en: 'Which handle should I enter?',
        pt: 'Qual identificador devo escrever?',
        fr: 'Quel identifiant faut-il saisir ?',
        it: 'Quale handle devo scrivere?',
      },
      a: {
        es: 'El identificador completo, con el dominio: por ejemplo, minegocio.bsky.social o, si usas un dominio propio, minegocio.com. Si más adelante lo cambias, el enlace del código deja de apuntar a tu perfil y conviene generar uno nuevo.',
        en: 'The full handle, including the domain: for example mystore.bsky.social or, if you use a custom domain, mystore.com. If you change it later, the link in the code no longer points to your profile and you should create a new one.',
        pt: 'O identificador completo, com o domínio: por exemplo, minhaloja.bsky.social ou, se você usa um domínio próprio, minhaloja.com. Se você mudar depois, o link do código deixa de apontar para o seu perfil e é melhor gerar um novo.',
        fr: 'L’identifiant complet, avec le domaine : par exemple maboutique.bsky.social ou, si vous utilisez votre propre domaine, maboutique.com. Si vous le modifiez par la suite, le lien du code ne mène plus à votre profil et il vaut mieux en générer un nouveau.',
        it: 'L’handle completo, con il dominio: per esempio mionegozio.bsky.social oppure, se usi un dominio personale, mionegozio.com. Se in seguito lo cambi, il link del codice non porta più al tuo profilo ed è meglio crearne uno nuovo.',
      },
    },
    {
      q: {
        es: '¿El código de publicación nueva publica algo de forma automática?',
        en: 'Does the new-post code publish anything automatically?',
        pt: 'O código de nova publicação publica algo automaticamente?',
        fr: 'Le code de nouvelle publication publie-t-il quelque chose automatiquement ?',
        it: 'Il codice per un nuovo post pubblica qualcosa in automatico?',
      },
      a: {
        es: 'No. Solo abre el editor de Bluesky con tu texto ya cargado. Quien escanea necesita haber iniciado sesión, puede modificar el texto y decide si lo publica.',
        en: 'No. It only opens the Bluesky composer with your text loaded. The person scanning needs to be signed in, can edit the text and decides whether to post it.',
        pt: 'Não. Ele apenas abre o editor do Bluesky com o seu texto já carregado. Quem lê o código precisa estar conectado, pode alterar o texto e decide se publica.',
        fr: 'Non. Il ouvre seulement l’éditeur de Bluesky avec votre texte déjà saisi. La personne qui scanne doit être connectée, peut modifier le texte et décide de le publier ou non.',
        it: 'No. Apre soltanto l’editor di Bluesky con il tuo testo già inserito. Chi scansiona deve aver effettuato l’accesso, può modificare il testo e decide se pubblicarlo.',
      },
    },
  ],
};

export default content;
