import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Código QR de Goodreads para autores y lectores',
    en: 'Goodreads QR code for authors and readers',
    pt: 'Código QR do Goodreads para autores e leitores',
    fr: 'Code QR Goodreads pour les auteurs et les lecteurs',
    it: 'Codice QR di Goodreads per autori e lettori',
  },
  about: {
    es: 'Hay dos opciones: abrir una página de autor, con sus libros y valoraciones, o un perfil de lector, con sus estantes y reseñas. Para quien escribe es una forma directa de que el lector, con el libro todavía en la mano, lo valore o lo agregue a su lista de pendientes.',
    en: 'There are two options: open an author page, with its books and ratings, or a reader profile, with its shelves and reviews. For writers it is a direct way for readers, with the book still in their hands, to rate it or add it to their to-read list.',
    pt: 'Há duas opções: abrir uma página de autor, com os livros e as avaliações, ou um perfil de leitor, com as estantes e as resenhas. Para quem escreve, é um jeito direto de o leitor, ainda com o livro na mão, avaliá-lo ou adicioná-lo à lista de leituras.',
    fr: 'Deux options sont possibles : ouvrir une page d’auteur, avec ses livres et ses notes, ou un profil de lecteur, avec ses étagères et ses critiques. Pour un écrivain, c’est un moyen direct pour que le lecteur, le livre encore en main, le note ou l’ajoute à sa liste de lectures.',
    it: 'Ci sono due opzioni: aprire una pagina autore, con i libri e le valutazioni, oppure un profilo lettore, con gli scaffali e le recensioni. Per chi scrive è un modo diretto perché il lettore, con il libro ancora in mano, lo valuti o lo aggiunga alla lista delle letture.',
  },
  uses: [
    {
      es: 'Autores: en la última página o la solapa del libro, en marcapáginas y en firmas de ejemplares.',
      en: 'Authors: on the last page or the flap of the book, on bookmarks and at signings.',
      pt: 'Autores: na última página ou na orelha do livro, em marcadores de página e em sessões de autógrafos.',
      fr: 'Auteurs : sur la dernière page ou le rabat du livre, sur des marque-pages et lors des séances de dédicaces.',
      it: 'Autori: sull’ultima pagina o sul risvolto del libro, sui segnalibri e ai firmacopie.',
    },
    {
      es: 'Editoriales y librerías: en stands de ferias del libro y en mesas de novedades.',
      en: 'Publishers and bookshops: on book fair stands and new-release tables.',
      pt: 'Editoras e livrarias: em estandes de feiras do livro e em mesas de lançamentos.',
      fr: 'Éditeurs et librairies : sur les stands des salons du livre et les tables de nouveautés.',
      it: 'Editori e librerie: sugli stand delle fiere del libro e sui tavoli delle novità.',
    },
    {
      es: 'Clubes de lectura y reseñadores: el perfil de lector en las tarjetas o en el material de cada encuentro.',
      en: 'Book clubs and reviewers: the reader profile on cards or on the material for each meeting.',
      pt: 'Clubes de leitura e resenhistas: o perfil de leitor nos cartões ou no material de cada encontro.',
      fr: 'Clubs de lecture et chroniqueurs : le profil de lecteur sur des cartes ou sur les supports de chaque rencontre.',
      it: 'Gruppi di lettura e recensori: il profilo lettore sui biglietti o sul materiale di ogni incontro.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Dónde encuentro el número de autor o de usuario?',
        en: 'Where do I find the author or user number?',
        pt: 'Onde encontro o número de autor ou de usuário?',
        fr: 'Où trouver le numéro d’auteur ou d’utilisateur ?',
        it: 'Dove trovo il numero di autore o di utente?',
      },
      a: {
        es: 'Abre la página en el sitio de Goodreads y mira la dirección: después de /author/show/ o de /user/show/ hay un número, normalmente seguido del nombre. Copia ese número o pega la dirección completa.',
        en: 'Open the page on the Goodreads website and look at the address: after /author/show/ or /user/show/ there is a number, usually followed by the name. Copy that number or paste the full address.',
        pt: 'Abra a página no site do Goodreads e veja o endereço: depois de /author/show/ ou de /user/show/ há um número, normalmente seguido do nome. Copie esse número ou cole o endereço completo.',
        fr: 'Ouvrez la page sur le site de Goodreads et regardez l’adresse : après /author/show/ ou /user/show/ figure un numéro, généralement suivi du nom. Copiez ce numéro ou collez l’adresse complète.',
        it: 'Apri la pagina sul sito di Goodreads e guarda l’indirizzo: dopo /author/show/ o /user/show/ c’è un numero, di solito seguito dal nome. Copia quel numero o incolla l’indirizzo completo.',
      },
    },
    {
      q: {
        es: '¿Cualquiera puede ver mi perfil de lector?',
        en: 'Can anyone see my reader profile?',
        pt: 'Qualquer pessoa pode ver o meu perfil de leitor?',
        fr: 'Tout le monde peut-il voir mon profil de lecteur ?',
        it: 'Chiunque può vedere il mio profilo lettore?',
      },
      a: {
        es: 'Depende de tu configuración de privacidad: Goodreads permite limitar el perfil a miembros que han iniciado sesión o solo a tus amigos. Revísalo antes de imprimir. Las páginas de autor son públicas.',
        en: 'It depends on your privacy settings: Goodreads lets you limit the profile to signed-in members or to your friends only. Check this before printing. Author pages are public.',
        pt: 'Depende das suas configurações de privacidade: o Goodreads permite limitar o perfil a membros conectados ou apenas aos seus amigos. Confira antes de imprimir. As páginas de autor são públicas.',
        fr: 'Cela dépend de vos paramètres de confidentialité : Goodreads permet de limiter le profil aux membres connectés ou à vos seuls amis. Vérifiez-le avant d’imprimer. Les pages d’auteur sont publiques.',
        it: 'Dipende dalle tue impostazioni sulla privacy: Goodreads permette di limitare il profilo agli iscritti che hanno effettuato l’accesso o solo ai tuoi amici. Controlla prima di stampare. Le pagine autore sono pubbliche.',
      },
    },
  ],
};

export default content;
