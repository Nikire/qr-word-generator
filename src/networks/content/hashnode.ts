import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Qué puedes hacer con un código QR de Hashnode',
    en: 'What you can do with a Hashnode QR code',
    pt: 'O que você pode fazer com um código QR do Hashnode',
    fr: 'Ce que vous pouvez faire avec un code QR Hashnode',
    it: 'Cosa puoi fare con un codice QR di Hashnode',
  },
  about: {
    es: 'Hashnode es una plataforma de blogs pensada para personas que escriben sobre desarrollo de software. El código abre tu perfil público, en hashnode.com/@usuario, donde se reúnen tu biografía, tus artículos y los enlaces a tus otros sitios. Es práctico para presentarte como autor técnico cuando no hay forma de compartir un enlace en pantalla.',
    en: 'Hashnode is a blogging platform designed for people who write about software development. The code opens your public profile, at hashnode.com/@username, which brings together your bio, your articles and links to your other sites. It is handy for introducing yourself as a technical author when there is no way to share a link on screen.',
    pt: 'O Hashnode é uma plataforma de blogs pensada para quem escreve sobre desenvolvimento de software. O código abre o seu perfil público, em hashnode.com/@usuario, que reúne a sua biografia, os seus artigos e os links para os seus outros sites. É prático para se apresentar como autor técnico quando não há como compartilhar um link na tela.',
    fr: 'Hashnode est une plateforme de blogs conçue pour ceux qui écrivent sur le développement logiciel. Le code ouvre votre profil public, à l’adresse hashnode.com/@utilisateur, qui réunit votre biographie, vos articles et les liens vers vos autres sites. C’est pratique pour vous présenter comme auteur technique quand il est impossible de partager un lien à l’écran.',
    it: 'Hashnode è una piattaforma di blog pensata per chi scrive di sviluppo software. Il codice apre il tuo profilo pubblico, su hashnode.com/@utente, che riunisce la tua biografia, i tuoi articoli e i link agli altri tuoi siti. È pratico per presentarti come autore tecnico quando non c’è modo di condividere un link sullo schermo.',
  },
  uses: [
    {
      es: 'Tarjetas de presentación de desarrolladores: junto a tu nombre, para que quien la recibe lea lo que escribes.',
      en: 'Developer business cards: next to your name, so whoever receives it can read what you write.',
      pt: 'Cartões de visita de desenvolvedores: ao lado do seu nome, para que quem recebe leia o que você escreve.',
      fr: 'Cartes de visite de développeurs : à côté de votre nom, pour que la personne qui la reçoit lise ce que vous écrivez.',
      it: 'Biglietti da visita per sviluppatori: accanto al tuo nome, perché chi lo riceve legga ciò che scrivi.',
    },
    {
      es: 'Charlas y talleres: en la diapositiva de presentación, para quienes quieran profundizar en el tema con tus artículos.',
      en: 'Talks and workshops: on your introduction slide, for those who want to go deeper into the topic through your articles.',
      pt: 'Palestras e oficinas: no slide de apresentação, para quem quiser se aprofundar no tema com os seus artigos.',
      fr: 'Conférences et ateliers : sur la diapositive de présentation, pour ceux qui veulent approfondir le sujet grâce à vos articles.',
      it: 'Talk e workshop: sulla slide di presentazione, per chi vuole approfondire l’argomento con i tuoi articoli.',
    },
    {
      es: 'Candidaturas a puestos de divulgación o documentación técnica: en el currículum, como muestra de tu escritura.',
      en: 'Applications for developer advocacy or technical writing roles: on your résumé, as a sample of your writing.',
      pt: 'Candidaturas a vagas de divulgação ou documentação técnica: no currículo, como amostra da sua escrita.',
      fr: 'Candidatures à des postes de developer advocate ou de rédaction technique : sur le CV, comme échantillon de votre écriture.',
      it: 'Candidature per ruoli di divulgazione o documentazione tecnica: nel curriculum, come esempio della tua scrittura.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿El código abre mi blog o mi perfil?',
        en: 'Does the code open my blog or my profile?',
        pt: 'O código abre o meu blog ou o meu perfil?',
        fr: 'Le code ouvre-t-il mon blog ou mon profil ?',
        it: 'Il codice apre il mio blog o il mio profilo?',
      },
      a: {
        es: 'Abre el perfil. En Hashnode el blog tiene su propia dirección, que puede ser un subdominio o un dominio tuyo. Si prefieres que el código lleve directamente al blog, copia esa dirección y usa la plantilla URL personalizada.',
        en: 'It opens the profile. On Hashnode the blog has its own address, which can be a subdomain or a domain you own. If you would rather send people straight to the blog, copy that address and use the Custom URL template.',
        pt: 'Abre o perfil. No Hashnode o blog tem um endereço próprio, que pode ser um subdomínio ou um domínio seu. Se você prefere que o código leve direto ao blog, copie esse endereço e use o modelo URL personalizada.',
        fr: 'Il ouvre le profil. Sur Hashnode, le blog possède sa propre adresse, qui peut être un sous-domaine ou un domaine à vous. Si vous préférez que le code mène directement au blog, copiez cette adresse et utilisez le modèle URL personnalisée.',
        it: 'Apre il profilo. Su Hashnode il blog ha un indirizzo proprio, che può essere un sottodominio o un tuo dominio. Se preferisci che il codice porti direttamente al blog, copia quell’indirizzo e usa il modello URL personalizzato.',
      },
    },
    {
      q: {
        es: '¿Tengo que escribir la @ delante del usuario?',
        en: 'Do I have to type the @ before the username?',
        pt: 'Preciso digitar o @ antes do usuário?',
        fr: 'Dois-je saisir le @ devant le nom d’utilisateur ?',
        it: 'Devo scrivere la @ davanti al nome utente?',
      },
      a: {
        es: 'No hace falta. El generador la agrega al armar el enlace y, si la escribes o pegas la dirección completa del perfil, se queda solo con el usuario. Antes de imprimir, escanea el código con tu teléfono para confirmar que abre tu perfil.',
        en: 'There is no need. The generator adds it when it builds the link and, if you type it or paste the full profile address, it keeps only the username. Before printing, scan the code with your phone to confirm it opens your profile.',
        pt: 'Não precisa. O gerador o adiciona ao montar o link e, se você digitar o símbolo ou colar o endereço completo do perfil, ele fica só com o usuário. Antes de imprimir, escaneie o código com o celular para confirmar que ele abre o seu perfil.',
        fr: 'Ce n’est pas nécessaire. Le générateur l’ajoute en créant le lien et, si vous le saisissez ou collez l’adresse complète du profil, il ne conserve que le nom d’utilisateur. Avant d’imprimer, scannez le code avec votre téléphone pour vérifier qu’il ouvre bien votre profil.',
        it: 'Non serve. Il generatore la aggiunge quando crea il link e, se la scrivi o incolli l’indirizzo completo del profilo, tiene solo il nome utente. Prima di stampare, scansiona il codice con il telefono per verificare che apra il tuo profilo.',
      },
    },
  ],
};

export default content;
