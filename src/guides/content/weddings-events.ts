import type { Guide } from '../types';

const guide: Guide = {
  id: 'weddings-events',
  slug: {
    es: 'codigo-qr-para-boda',
    en: 'qr-code-for-wedding',
    pt: 'qr-code-para-casamento',
    fr: 'qr-code-mariage',
    it: 'codice-qr-matrimonio',
  },
  title: {
    es: 'Código QR para boda y eventos: ideas y cómo crearlo gratis',
    en: 'QR code for a wedding or event: ideas and how to make one',
    pt: 'QR code para casamento e eventos: ideias e como criar grátis',
    fr: 'QR code mariage et événements : idées et création gratuite',
    it: 'Codice QR per matrimonio ed eventi: idee e come crearlo',
  },
  description: {
    es: 'Cómo usar un código QR en tu boda o evento: confirmación de asistencia, álbum de fotos, mapa y playlist. Tamaños de impresión y pruebas antes de imprimir.',
    en: 'How to use a QR code at your wedding or event: RSVP form, shared photo album, map and playlist. With print sizes and what to test before going to print.',
    pt: 'Como usar um QR code no casamento ou evento: confirmação de presença, álbum de fotos, mapa e playlist. Tamanhos de impressão e testes antes de imprimir.',
    fr: 'Comment utiliser un QR code pour un mariage ou un événement : réponse des invités, album photo, plan et playlist. Tailles d’impression et tests à faire.',
    it: 'Come usare un codice QR per il matrimonio o un evento: conferma di presenza, album fotografico, mappa e playlist. Dimensioni di stampa e prove da fare.',
  },
  intro: {
    es: 'Un código QR ahorra espacio en la invitación y evita que tus invitados tengan que escribir direcciones largas: con un escaneo confirman asistencia, encuentran el lugar o suben sus fotos. Esta guía explica qué enlaces conviene usar en una boda o en cualquier fiesta, cómo crear cada código gratis y cómo imprimirlo para que funcione el día del evento.',
    en: 'A QR code saves space on the invitation and spares your guests from typing long web addresses: one scan lets them confirm attendance, find the venue or upload their photos. This guide covers which links are worth using at a wedding or any party, how to create each code for free and how to print it so that it works on the day.',
    pt: 'Um código QR economiza espaço no convite e evita que os convidados digitem endereços longos: com uma leitura eles confirmam presença, encontram o local ou enviam as fotos. Este guia explica quais links vale a pena usar em um casamento ou em qualquer festa, como criar cada código de graça e como imprimi-lo para que funcione no dia do evento.',
    fr: 'Un code QR fait gagner de la place sur le faire-part et évite à vos invités de saisir de longues adresses : en un scan, ils confirment leur présence, trouvent le lieu ou envoient leurs photos. Ce guide explique quels liens utiliser pour un mariage ou toute autre fête, comment créer chaque code gratuitement et comment l’imprimer pour qu’il fonctionne le jour J.',
    it: 'Un codice QR fa risparmiare spazio sull’invito ed evita agli ospiti di digitare indirizzi lunghi: con una scansione confermano la presenza, trovano la location o caricano le foto. Questa guida spiega quali link conviene usare per un matrimonio o per qualsiasi festa, come creare ogni codice gratis e come stamparlo perché funzioni il giorno dell’evento.',
  },
  sections: [
    {
      h: {
        es: 'Para qué sirve un código QR en una boda',
        en: 'What a QR code can do at a wedding',
        pt: 'Para que serve um código QR em um casamento',
        fr: 'À quoi sert un code QR pour un mariage',
        it: 'A cosa serve un codice QR a un matrimonio',
      },
      p: [
        {
          es: 'Un código QR es simplemente un enlace que se abre con la cámara del teléfono. Todo lo que tenga una dirección web puede ir en un código, y lo habitual es usar uno distinto para cada cosa, con una línea de texto al lado que diga qué abre.',
          en: 'A QR code is simply a link that opens with a phone camera. Anything with a web address can go into a code, and the usual approach is one code per purpose, each with a line of text beside it saying what it opens.',
          pt: 'Um código QR é simplesmente um link que abre com a câmera do celular. Tudo o que tem um endereço na web pode virar um código, e o mais comum é usar um código diferente para cada coisa, com uma linha de texto ao lado dizendo o que ele abre.',
          fr: 'Un code QR est simplement un lien qui s’ouvre avec l’appareil photo du téléphone. Tout ce qui possède une adresse web peut être placé dans un code, et l’usage est d’en prévoir un par besoin, accompagné d’une ligne de texte indiquant ce qu’il ouvre.',
          it: 'Un codice QR è semplicemente un link che si apre con la fotocamera del telefono. Tutto ciò che ha un indirizzo web può finire in un codice, e di solito se ne usa uno diverso per ogni scopo, con una riga di testo accanto che dice che cosa apre.',
        },
      ],
      list: [
        {
          es: 'Confirmación de asistencia: un formulario, por ejemplo de Google Forms, con nombre, acompañantes y restricciones de comida.',
          en: 'RSVP: a form, for example in Google Forms, asking for names, plus-ones and dietary requirements.',
          pt: 'Confirmação de presença: um formulário, por exemplo do Google Forms, com nome, acompanhantes e restrições alimentares.',
          fr: 'Réponse à l’invitation : un formulaire, par exemple Google Forms, avec le nom, les accompagnants et les régimes alimentaires.',
          it: 'Conferma di presenza: un modulo, per esempio di Google Moduli, con nome, accompagnatori ed esigenze alimentari.',
        },
        {
          es: 'Álbum compartido: un álbum de Google Fotos o una carpeta de Google Drive donde los invitados suben sus fotos.',
          en: 'Shared album: a Google Photos album or a Google Drive folder where guests upload their pictures.',
          pt: 'Álbum compartilhado: um álbum do Google Fotos ou uma pasta do Google Drive onde os convidados enviam as fotos.',
          fr: 'Album partagé : un album Google Photos ou un dossier Google Drive où les invités déposent leurs photos.',
          it: 'Album condiviso: un album di Google Foto o una cartella di Google Drive in cui gli ospiti caricano le foto.',
        },
        {
          es: 'Lista de regalos o sitio web de la boda, con el programa y los detalles.',
          en: 'Gift registry or wedding website, with the schedule and practical details.',
          pt: 'Lista de presentes ou site do casamento, com a programação e os detalhes.',
          fr: 'Liste de mariage ou site des mariés, avec le programme et les informations pratiques.',
          it: 'Lista nozze o sito del matrimonio, con il programma e i dettagli pratici.',
        },
        {
          es: 'Ubicación: el enlace del lugar en Google Maps, para llegar sin escribir la dirección.',
          en: 'Location: the venue’s Google Maps link, so nobody has to type the address.',
          pt: 'Localização: o link do local no Google Maps, para chegar sem digitar o endereço.',
          fr: 'Lieu : le lien Google Maps de la salle, pour s’y rendre sans saisir l’adresse.',
          it: 'Posizione: il link della location su Google Maps, per arrivare senza digitare l’indirizzo.',
        },
        {
          es: 'Playlist de Spotify con la música de la fiesta.',
          en: 'A Spotify playlist with the music for the party.',
          pt: 'Playlist do Spotify com as músicas da festa.',
          fr: 'Playlist Spotify avec la musique de la soirée.',
          it: 'Playlist di Spotify con la musica della festa.',
        },
        {
          es: 'WhatsApp: un chat con la persona que organiza, o el grupo del evento, para resolver dudas.',
          en: 'WhatsApp: a chat with whoever is organising, or the event group, for questions.',
          pt: 'WhatsApp: uma conversa com quem organiza, ou o grupo do evento, para tirar dúvidas.',
          fr: 'WhatsApp : une discussion avec la personne qui organise, ou le groupe de l’événement, pour les questions.',
          it: 'WhatsApp: una chat con chi organizza, oppure il gruppo dell’evento, per le domande.',
        },
      ],
    },
    {
      h: {
        es: 'Cómo crear cada código',
        en: 'How to create each code',
        pt: 'Como criar cada código',
        fr: 'Comment créer chaque code',
        it: 'Come creare ogni codice',
      },
      p: [
        {
          es: 'La plantilla de URL personalizada sirve para cualquier enlace: copia la dirección del formulario, del álbum, de la lista de regalos o del mapa, pégala y descarga el código. Además te deja subir un logo propio para el centro, por ejemplo un monograma con las iniciales, en PNG o SVG.',
          en: 'The custom URL template works for any link: copy the address of the form, album, registry or map, paste it and download the code. It also lets you upload your own logo for the centre, such as a monogram of your initials, as a PNG or SVG.',
          pt: 'O modelo de URL personalizada serve para qualquer link: copie o endereço do formulário, do álbum, da lista de presentes ou do mapa, cole e baixe o código. Ele também permite enviar um logo próprio para o centro, por exemplo um monograma com as iniciais, em PNG ou SVG.',
          fr: 'Le modèle URL personnalisée convient à n’importe quel lien : copiez l’adresse du formulaire, de l’album, de la liste de mariage ou du plan, collez-la et téléchargez le code. Il permet aussi d’importer votre propre logo au centre, par exemple un monogramme avec vos initiales, en PNG ou en SVG.',
          it: 'Il modello URL personalizzato va bene per qualsiasi link: copia l’indirizzo del modulo, dell’album, della lista nozze o della mappa, incollalo e scarica il codice. Ti permette anche di caricare un tuo logo da mettere al centro, per esempio un monogramma con le iniziali, in PNG o SVG.',
        },
        {
          es: 'Para algunos casos hay plantillas específicas. La de Spotify tiene un modo Playlist en el que pegas el enlace que da la aplicación al compartir. La de WhatsApp pide un número y permite dejar un mensaje ya escrito, como «Hola, tengo una duda sobre la boda»; si prefieres un grupo, copia su enlace de invitación y úsalo en la plantilla de URL personalizada. Y si las fotos se van a publicar en una cuenta de Instagram del evento, la plantilla de Instagram solo pide el nombre de usuario.',
          en: 'Some cases have a dedicated template. The Spotify one has a Playlist mode where you paste the link the app gives you when you share. The WhatsApp one asks for a number and lets you add a pre-written message, such as “Hi, I have a question about the wedding”; if you would rather use a group, copy its invite link and use it in the custom URL template. And if the photos will be posted on an Instagram account for the event, the Instagram template only needs the username.',
          pt: 'Para alguns casos há modelos específicos. O do Spotify tem um modo Playlist em que você cola o link que o aplicativo fornece ao compartilhar. O do WhatsApp pede um número e permite deixar uma mensagem já escrita, como “Olá, tenho uma dúvida sobre o casamento”; se preferir um grupo, copie o link de convite dele e use no modelo de URL personalizada. E se as fotos forem publicadas em uma conta do Instagram do evento, o modelo do Instagram só pede o nome de usuário.',
          fr: 'Certains usages disposent d’un modèle dédié. Celui de Spotify propose un mode Playlist où vous collez le lien fourni par l’application lors du partage. Celui de WhatsApp demande un numéro et permet d’ajouter un message déjà rédigé, comme « Bonjour, j’ai une question au sujet du mariage » ; si vous préférez un groupe, copiez son lien d’invitation et utilisez-le dans le modèle URL personnalisée. Et si les photos sont publiées sur un compte Instagram créé pour l’événement, le modèle Instagram ne demande que le nom d’utilisateur.',
          it: 'Per alcuni casi esistono modelli specifici. Quello di Spotify ha una modalità Playlist in cui incolli il link che l’app fornisce quando condividi. Quello di WhatsApp chiede un numero e permette di aggiungere un messaggio già scritto, come «Ciao, ho una domanda sul matrimonio»; se preferisci un gruppo, copia il suo link di invito e usalo nel modello URL personalizzato. E se le foto verranno pubblicate su un account Instagram dell’evento, il modello di Instagram chiede solo il nome utente.',
        },
      ],
    },
    {
      h: {
        es: 'El álbum de fotos compartido: qué revisar',
        en: 'The shared photo album: what to check',
        pt: 'O álbum de fotos compartilhado: o que conferir',
        fr: 'L’album photo partagé : les points à vérifier',
        it: 'L’album fotografico condiviso: che cosa controllare',
      },
      p: [
        {
          es: 'El generador no almacena fotos ni archivos: el código solo guarda el enlace. El álbum lo creas tú en un servicio como Google Fotos o Google Drive, y de su configuración depende que los invitados puedan entrar.',
          en: 'The generator does not store photos or files: the code only holds the link. You create the album yourself in a service such as Google Photos or Google Drive, and its settings decide whether guests can get in.',
          pt: 'O gerador não armazena fotos nem arquivos: o código só guarda o link. O álbum é criado por você em um serviço como o Google Fotos ou o Google Drive, e é a configuração dele que define se os convidados conseguem entrar.',
          fr: 'Le générateur ne stocke ni photos ni fichiers : le code ne contient que le lien. L’album, c’est vous qui le créez dans un service comme Google Photos ou Google Drive, et ce sont ses réglages qui déterminent si les invités peuvent y accéder.',
          it: 'Il generatore non conserva foto né file: il codice contiene solo il link. L’album lo crei tu in un servizio come Google Foto o Google Drive, e dalle sue impostazioni dipende se gli ospiti riescono a entrare.',
        },
        {
          es: 'En Google Fotos, crea un álbum compartido, activa el uso compartido por enlace y la opción que permite a otras personas agregar fotos. En Drive, crea una carpeta y cambia el acceso a «Cualquier persona con el enlace» con permiso de editor. En ambos casos, para subir fotos los invitados tendrán que iniciar sesión con una cuenta de Google, así que conviene avisarlo en el cartel.',
          en: 'In Google Photos, create a shared album, turn on link sharing and enable the option that lets other people add photos. In Drive, create a folder and change access to “Anyone with the link” with the Editor role. In both cases guests will have to sign in with a Google account to upload, so it is worth saying so on the sign.',
          pt: 'No Google Fotos, crie um álbum compartilhado, ative o compartilhamento por link e a opção que permite a outras pessoas adicionar fotos. No Drive, crie uma pasta e mude o acesso para “Qualquer pessoa com o link” com permissão de editor. Nos dois casos, para enviar fotos os convidados precisam entrar com uma conta do Google, então vale avisar isso na placa.',
          fr: 'Dans Google Photos, créez un album partagé, activez le partage par lien ainsi que l’option qui autorise d’autres personnes à ajouter des photos. Dans Drive, créez un dossier et réglez l’accès sur « Tous les utilisateurs disposant du lien » avec le rôle Éditeur. Dans les deux cas, les invités devront se connecter à un compte Google pour envoyer leurs photos : mieux vaut le préciser sur le panneau.',
          it: 'In Google Foto, crea un album condiviso, attiva la condivisione tramite link e l’opzione che consente ad altre persone di aggiungere foto. In Drive, crea una cartella e imposta l’accesso su «Chiunque abbia il link» con il ruolo di editor. In entrambi i casi, per caricare le foto gli ospiti dovranno accedere con un account Google, quindi conviene scriverlo sul cartello.',
        },
      ],
    },
    {
      h: {
        es: 'Dónde imprimirlo y de qué tamaño',
        en: 'Where to print it and at what size',
        pt: 'Onde imprimir e em que tamanho',
        fr: 'Où l’imprimer et à quelle taille',
        it: 'Dove stamparlo e in che dimensione',
      },
      p: [
        {
          es: 'En la invitación y en las tarjetas de mesa el código se escanea de cerca, así que alcanza con unos 2 cm de lado; 2,5 o 3 cm dan más margen si el enlace es largo. En un cartel de bienvenida, calcula una décima parte de la distancia de lectura: unos 15 cm si la gente lo va a escanear a un metro y medio.',
          en: 'On the invitation and on table cards the code is scanned up close, so about 2 cm (0.8 in) per side is enough; 2.5 or 3 cm gives more leeway when the link is long. On a welcome sign, allow one tenth of the scanning distance: about 15 cm if people will scan it from a metre and a half away.',
          pt: 'No convite e nos cartões de mesa o código é lido de perto, então cerca de 2 cm de lado é suficiente; 2,5 ou 3 cm dão mais folga quando o link é longo. Em uma placa de boas-vindas, calcule um décimo da distância de leitura: uns 15 cm se as pessoas forem ler a um metro e meio.',
          fr: 'Sur le faire-part et sur les cartes de table, le code est scanné de près : environ 2 cm de côté suffisent, et 2,5 ou 3 cm offrent plus de marge si le lien est long. Sur un panneau d’accueil, comptez un dixième de la distance de lecture : environ 15 cm si les invités le scannent à un mètre cinquante.',
          it: 'Sull’invito e sui cartoncini dei tavoli il codice viene scansionato da vicino, quindi bastano circa 2 cm di lato; 2,5 o 3 cm danno più margine se il link è lungo. Su un cartello di benvenuto calcola un decimo della distanza di lettura: circa 15 cm se gli ospiti lo scansionano da un metro e mezzo.',
        },
        {
          es: 'Usa el archivo SVG para la imprenta, porque no pierde nitidez al agrandarlo. Conserva el margen blanco que rodea al código, no lo coloques sobre una foto ni sobre papel muy brillante o con textura marcada, y escribe debajo qué abre: «Confirma tu asistencia», «Sube tus fotos aquí».',
          en: 'Use the SVG file for print, because it stays sharp at any size. Keep the white margin around the code, do not place it over a photo or on very glossy or heavily textured paper, and write underneath what it opens: “Confirm your attendance”, “Upload your photos here”.',
          pt: 'Use o arquivo SVG para a gráfica, porque ele não perde nitidez ao ser ampliado. Mantenha a margem branca em volta do código, não o coloque sobre uma foto nem em papel muito brilhante ou com textura forte, e escreva embaixo o que ele abre: “Confirme sua presença”, “Envie suas fotos aqui”.',
          fr: 'Utilisez le fichier SVG pour l’impression, car il reste net à toutes les tailles. Conservez la marge blanche autour du code, ne le placez pas sur une photo ni sur un papier très brillant ou fortement texturé, et indiquez dessous ce qu’il ouvre : « Confirmez votre présence », « Déposez vos photos ici ».',
          it: 'Usa il file SVG per la stampa, perché resta nitido a qualsiasi dimensione. Mantieni il margine bianco intorno al codice, non metterlo sopra una foto né su carta molto lucida o con una trama marcata, e scrivi sotto che cosa apre: «Conferma la tua presenza», «Carica qui le tue foto».',
        },
      ],
    },
    {
      h: {
        es: 'Prueba todo antes de mandar a imprimir',
        en: 'Test everything before sending it to print',
        pt: 'Teste tudo antes de mandar imprimir',
        fr: 'Testez tout avant d’envoyer à l’impression',
        it: 'Prova tutto prima di mandare in stampa',
      },
      p: [
        {
          es: 'Un error en una invitación ya impresa no tiene arreglo barato. Antes de enviar el diseño a la imprenta, imprime una prueba en casa al tamaño final y repasa esta lista.',
          en: 'A mistake on a printed invitation has no cheap fix. Before sending the design to the printer, print a proof at home at the final size and go through this list.',
          pt: 'Um erro em um convite já impresso não tem conserto barato. Antes de enviar a arte para a gráfica, imprima uma prova em casa no tamanho final e siga esta lista.',
          fr: 'Une erreur sur un faire-part déjà imprimé ne se corrige pas à peu de frais. Avant d’envoyer la maquette à l’imprimeur, imprimez un essai chez vous à la taille définitive et parcourez cette liste.',
          it: 'Un errore su un invito già stampato non si corregge a poco prezzo. Prima di inviare il file in tipografia, stampa una prova a casa nella dimensione definitiva e segui questo elenco.',
        },
      ],
      list: [
        {
          es: 'Escanea cada código con al menos dos teléfonos distintos, un iPhone y un Android.',
          en: 'Scan each code with at least two different phones, one iPhone and one Android.',
          pt: 'Leia cada código com pelo menos dois celulares diferentes, um iPhone e um Android.',
          fr: 'Scannez chaque code avec au moins deux téléphones différents, un iPhone et un Android.',
          it: 'Scansiona ogni codice con almeno due telefoni diversi, un iPhone e un Android.',
        },
        {
          es: 'Abre los enlaces en un teléfono que no tenga tu sesión iniciada, o en una ventana privada: así ves lo mismo que verá un invitado.',
          en: 'Open the links on a phone that is not signed in to your account, or in a private window: that shows you what a guest will see.',
          pt: 'Abra os links em um celular que não esteja conectado à sua conta, ou em uma janela anônima: assim você vê o mesmo que um convidado verá.',
          fr: 'Ouvrez les liens sur un téléphone qui n’est pas connecté à votre compte, ou dans une fenêtre de navigation privée : vous verrez ce que verra un invité.',
          it: 'Apri i link su un telefono in cui non hai effettuato l’accesso, oppure in una finestra privata: così vedi ciò che vedrà un ospite.',
        },
        {
          es: 'Comprueba que el formulario acepta respuestas y que al álbum se pueden subir fotos.',
          en: 'Check that the form accepts responses and that photos can be added to the album.',
          pt: 'Confirme que o formulário aceita respostas e que é possível enviar fotos para o álbum.',
          fr: 'Vérifiez que le formulaire accepte les réponses et que l’on peut ajouter des photos à l’album.',
          it: 'Verifica che il modulo accetti risposte e che nell’album si possano caricare foto.',
        },
      ],
    },
    {
      h: {
        es: 'Que siga funcionando el día del evento',
        en: 'Making sure it still works on the day',
        pt: 'Para que continue funcionando no dia do evento',
        fr: 'S’assurer que tout fonctionne encore le jour J',
        it: 'Fare in modo che funzioni ancora il giorno dell’evento',
      },
      p: [
        {
          es: 'Los códigos son estáticos: el enlace queda guardado en el propio código y no se puede cambiar después. No vencen, pero dejan de servir si el destino cambia. Hasta que pase el evento, no borres ni vuelvas a crear el formulario, el álbum o la playlist, y no restablezcas el enlace de invitación del grupo de WhatsApp.',
          en: 'The codes are static: the link is stored in the code itself and cannot be changed afterwards. They never expire, but they stop being useful if the destination changes. Until the event is over, do not delete or recreate the form, the album or the playlist, and do not reset the WhatsApp group’s invite link.',
          pt: 'Os códigos são estáticos: o link fica gravado no próprio código e não pode ser alterado depois. Eles não expiram, mas deixam de servir se o destino mudar. Até o evento passar, não apague nem recrie o formulário, o álbum ou a playlist, e não redefina o link de convite do grupo do WhatsApp.',
          fr: 'Les codes sont statiques : le lien est inscrit dans le code lui-même et ne peut plus être modifié ensuite. Ils n’expirent pas, mais deviennent inutiles si la destination change. Jusqu’à la fin de l’événement, ne supprimez pas et ne recréez pas le formulaire, l’album ou la playlist, et ne réinitialisez pas le lien d’invitation du groupe WhatsApp.',
          it: 'I codici sono statici: il link è scritto nel codice stesso e non si può più cambiare. Non scadono, ma smettono di servire se la destinazione cambia. Finché l’evento non è passato, non eliminare e non ricreare il modulo, l’album o la playlist, e non reimpostare il link di invito del gruppo WhatsApp.',
        },
      ],
    },
  ],
  templates: ['url', 'spotify', 'whatsapp', 'instagram'],
  faq: [
    {
      q: {
        es: '¿El código QR de la invitación tiene fecha de vencimiento?',
        en: 'Does the QR code on the invitation expire?',
        pt: 'O código QR do convite tem prazo de validade?',
        fr: 'Le code QR du faire-part a-t-il une date d’expiration ?',
        it: 'Il codice QR sull’invito ha una scadenza?',
      },
      a: {
        es: 'No. Es un código estático, sin fecha de vencimiento ni límite de escaneos, así que funciona igual aunque envíes las invitaciones con meses de anticipación. Lo único que puede fallar es el destino: si borras el formulario o el álbum, el código abrirá una página de error.',
        en: 'No. It is a static code with no expiry date and no scan limit, so it works just the same if you send the invitations months ahead. The only thing that can fail is the destination: if you delete the form or the album, the code will open an error page.',
        pt: 'Não. É um código estático, sem prazo de validade nem limite de leituras, então funciona do mesmo jeito mesmo que você envie os convites com meses de antecedência. A única coisa que pode falhar é o destino: se você apagar o formulário ou o álbum, o código abrirá uma página de erro.',
        fr: 'Non. C’est un code statique, sans date d’expiration ni limite de scans : il fonctionne de la même façon si vous envoyez les faire-part plusieurs mois à l’avance. Seule la destination peut faire défaut : si vous supprimez le formulaire ou l’album, le code ouvrira une page d’erreur.',
        it: 'No. È un codice statico, senza scadenza né limite di scansioni, quindi funziona allo stesso modo anche se spedisci gli inviti con mesi di anticipo. L’unica cosa che può venire meno è la destinazione: se elimini il modulo o l’album, il codice aprirà una pagina di errore.',
      },
    },
    {
      q: {
        es: '¿Puedo cambiar el enlace después de imprimir las invitaciones?',
        en: 'Can I change the link after the invitations are printed?',
        pt: 'Posso mudar o link depois de imprimir os convites?',
        fr: 'Puis-je changer le lien après l’impression des faire-part ?',
        it: 'Posso cambiare il link dopo aver stampato gli inviti?',
      },
      a: {
        es: 'No. Para otro enlace hace falta un código nuevo. Por eso conviene apuntar a una página que puedas editar, como el sitio web de la boda, y probar todo antes de imprimir.',
        en: 'No. A different link needs a new code. That is why it pays to point to a page you can edit, such as the wedding website, and to test everything before printing.',
        pt: 'Não. Para outro link é preciso um código novo. Por isso vale apontar para uma página que você possa editar, como o site do casamento, e testar tudo antes de imprimir.',
        fr: 'Non. Un autre lien exige un nouveau code. C’est pourquoi il vaut mieux pointer vers une page que vous pouvez modifier, comme le site des mariés, et tout tester avant l’impression.',
        it: 'No. Per un altro link serve un nuovo codice. Per questo conviene puntare a una pagina che puoi modificare, come il sito del matrimonio, e provare tutto prima di stampare.',
      },
    },
    {
      q: {
        es: '¿Los invitados necesitan instalar una aplicación?',
        en: 'Do guests need to install an app?',
        pt: 'Os convidados precisam instalar algum aplicativo?',
        fr: 'Les invités doivent-ils installer une application ?',
        it: 'Gli ospiti devono installare un’app?',
      },
      a: {
        es: 'Para escanear, no: la cámara de casi cualquier teléfono actual lee códigos QR. Lo que pase después depende del enlace: para subir fotos a Google Fotos o a Drive hace falta una cuenta de Google, y la playlist se abre mejor con la aplicación de Spotify instalada.',
        en: 'Not for scanning: the camera on almost any current phone reads QR codes. What happens next depends on the link: uploading photos to Google Photos or Drive requires a Google account, and the playlist opens best with the Spotify app installed.',
        pt: 'Para ler o código, não: a câmera de quase todo celular atual lê códigos QR. O que acontece depois depende do link: para enviar fotos ao Google Fotos ou ao Drive é preciso ter uma conta do Google, e a playlist abre melhor com o aplicativo do Spotify instalado.',
        fr: 'Pas pour scanner : l’appareil photo de presque tous les téléphones récents lit les codes QR. La suite dépend du lien : l’envoi de photos vers Google Photos ou Drive nécessite un compte Google, et la playlist s’ouvre mieux si l’application Spotify est installée.',
        it: 'Per scansionare no: la fotocamera di quasi tutti i telefoni recenti legge i codici QR. Il resto dipende dal link: per caricare foto su Google Foto o su Drive serve un account Google, e la playlist si apre meglio se l’app di Spotify è installata.',
      },
    },
  ],
};

export default guide;
