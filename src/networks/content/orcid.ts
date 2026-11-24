import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR con tu ORCID iD',
    en: 'What a QR code with your ORCID iD is for',
    pt: 'Para que serve um código QR com o seu ORCID iD',
    fr: 'À quoi sert un code QR avec votre ORCID iD',
    it: 'A cosa serve un codice QR con il tuo ORCID iD',
  },
  about: {
    es: 'El ORCID iD es un identificador gratuito, único y permanente para personas que investigan: 16 caracteres que te distinguen de otros autores con un nombre parecido. El código abre tu registro público en orcid.org, con tus publicaciones, afiliaciones y financiación. Como el identificador no cambia aunque cambies de institución o de apellido, es un enlace especialmente adecuado para imprimir.',
    en: 'An ORCID iD is a free, unique and persistent identifier for researchers: 16 characters that set you apart from other authors with a similar name. The code opens your public record on orcid.org, with your publications, affiliations and funding. Because the identifier stays the same even if you change institution or surname, it is a link particularly well suited to print.',
    pt: 'O ORCID iD é um identificador gratuito, único e permanente para quem pesquisa: 16 caracteres que distinguem você de outros autores com nome parecido. O código abre o seu registro público em orcid.org, com as suas publicações, afiliações e financiamentos. Como o identificador não muda mesmo que você troque de instituição ou de sobrenome, é um link especialmente adequado para imprimir.',
    fr: 'L’ORCID iD est un identifiant gratuit, unique et pérenne destiné aux chercheurs : 16 caractères qui vous distinguent des auteurs portant un nom proche. Le code ouvre votre dossier public sur orcid.org, avec vos publications, vos affiliations et vos financements. Comme l’identifiant ne change pas, même si vous changez d’établissement ou de nom, c’est un lien particulièrement adapté à l’impression.',
    it: 'L’ORCID iD è un identificativo gratuito, unico e permanente per chi fa ricerca: 16 caratteri che ti distinguono da altri autori con un nome simile. Il codice apre il tuo record pubblico su orcid.org, con pubblicazioni, affiliazioni e finanziamenti. Poiché l’identificativo non cambia anche se cambi istituzione o cognome, è un link particolarmente adatto alla stampa.',
  },
  uses: [
    {
      es: 'Pósteres de congresos: junto al nombre de cada autor, para identificar sin dudas quién firma el trabajo.',
      en: 'Conference posters: next to each author’s name, to identify without doubt who signs the work.',
      pt: 'Pôsteres de congressos: ao lado do nome de cada autor, para identificar sem dúvida quem assina o trabalho.',
      fr: 'Posters de congrès : à côté du nom de chaque auteur, pour identifier sans ambiguïté qui signe le travail.',
      it: 'Poster di congressi: accanto al nome di ogni autore, per identificare senza dubbi chi firma il lavoro.',
    },
    {
      es: 'Tesis, artículos impresos y separatas: en la página de autoría, como referencia que seguirá siendo válida con los años.',
      en: 'Theses, printed papers and offprints: on the author page, as a reference that will remain valid over the years.',
      pt: 'Teses, artigos impressos e separatas: na página de autoria, como referência que continuará válida com o passar dos anos.',
      fr: 'Thèses, articles imprimés et tirés à part : sur la page des auteurs, comme référence qui restera valable au fil des ans.',
      it: 'Tesi, articoli stampati ed estratti: nella pagina degli autori, come riferimento che resterà valido negli anni.',
    },
    {
      es: 'Tarjetas de presentación y credenciales de investigadores: un solo código que reúne toda tu trayectoria.',
      en: 'Researchers’ business cards and badges: a single code that brings together your whole career.',
      pt: 'Cartões de visita e crachás de pesquisadores: um único código que reúne toda a sua trajetória.',
      fr: 'Cartes de visite et badges de chercheurs : un seul code qui rassemble tout votre parcours.',
      it: 'Biglietti da visita e badge per ricercatori: un solo codice che riunisce tutto il tuo percorso.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Cómo escribo mi ORCID iD?',
        en: 'How do I enter my ORCID iD?',
        pt: 'Como escrevo o meu ORCID iD?',
        fr: 'Comment saisir mon ORCID iD ?',
        it: 'Come scrivo il mio ORCID iD?',
      },
      a: {
        es: 'Con sus cuatro grupos de cuatro caracteres separados por guiones, por ejemplo 0000-0002-1825-0097. El último carácter puede ser una X mayúscula, que funciona como dígito de control. Lo ves debajo de tu nombre al iniciar sesión en orcid.org.',
        en: 'With its four groups of four characters separated by hyphens, for example 0000-0002-1825-0097. The last character can be a capital X, which acts as a check digit. You can see it below your name when you sign in to orcid.org.',
        pt: 'Com os seus quatro grupos de quatro caracteres separados por hífens, por exemplo 0000-0002-1825-0097. O último caractere pode ser um X maiúsculo, que funciona como dígito verificador. Você o vê abaixo do seu nome ao entrar em orcid.org.',
        fr: 'Avec ses quatre groupes de quatre caractères séparés par des tirets, par exemple 0000-0002-1825-0097. Le dernier caractère peut être un X majuscule, qui sert de clé de contrôle. Vous le voyez sous votre nom en vous connectant à orcid.org.',
        it: 'Con i suoi quattro gruppi di quattro caratteri separati da trattini, ad esempio 0000-0002-1825-0097. L’ultimo carattere può essere una X maiuscola, che funziona da cifra di controllo. Lo vedi sotto il tuo nome quando accedi a orcid.org.',
      },
    },
    {
      q: {
        es: '¿Por qué mi registro aparece casi vacío al escanear el código?',
        en: 'Why does my record look almost empty when the code is scanned?',
        pt: 'Por que o meu registro aparece quase vazio ao escanear o código?',
        fr: 'Pourquoi mon dossier paraît-il presque vide quand on scanne le code ?',
        it: 'Perché il mio record appare quasi vuoto quando si scansiona il codice?',
      },
      a: {
        es: 'En ORCID cada dato tiene su propia configuración de visibilidad. Quien escanea el código solo ve lo que marcaste como visible para todos. Revisa esa configuración en tu registro y comprueba el resultado en una ventana privada del navegador.',
        en: 'In ORCID every item has its own visibility setting. Whoever scans the code only sees what you have set as visible to everyone. Review those settings in your record and check the result in a private browser window.',
        pt: 'No ORCID cada informação tem a sua própria configuração de visibilidade. Quem escaneia o código só vê o que você marcou como visível para todos. Revise essa configuração no seu registro e confira o resultado em uma janela anônima do navegador.',
        fr: 'Dans ORCID, chaque élément possède son propre réglage de visibilité. La personne qui scanne le code ne voit que ce que vous avez rendu visible par tous. Vérifiez ces réglages dans votre dossier et contrôlez le résultat dans une fenêtre privée du navigateur.',
        it: 'In ORCID ogni dato ha la propria impostazione di visibilità. Chi scansiona il codice vede solo ciò che hai reso visibile a tutti. Controlla queste impostazioni nel tuo record e verifica il risultato in una finestra privata del browser.',
      },
    },
  ],
};

export default content;
