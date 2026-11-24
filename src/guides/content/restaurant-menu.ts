import type { Guide } from '../types';

const guide: Guide = {
  id: 'restaurant-menu',
  slug: {
    es: 'codigo-qr-menu-restaurante',
    en: 'qr-code-restaurant-menu',
    pt: 'qr-code-cardapio-restaurante',
    fr: 'qr-code-menu-restaurant',
    it: 'codice-qr-menu-ristorante',
  },
  title: {
    es: 'Cómo crear un código QR para el menú de tu restaurante',
    en: 'How to make a QR code for a restaurant menu',
    pt: 'Como criar um QR Code para cardápio de restaurante',
    fr: 'Comment créer un QR code pour un menu de restaurant',
    it: 'Come creare un codice QR per il menu del ristorante',
  },
  description: {
    es: 'Crea gratis un código QR para el menú de tu restaurante, bar o café: dónde alojar la carta, qué tamaño imprimir, dónde colocarlo y cómo probarlo.',
    en: 'Make a free QR code for your restaurant, bar or café menu: where to host the menu, what size to print, where to place the code and how to test it.',
    pt: 'Crie grátis um QR Code para o cardápio do seu restaurante, bar ou café: onde hospedar o cardápio, que tamanho imprimir, onde colocar e como testar.',
    fr: 'Créez gratuitement un QR code pour le menu de votre restaurant, bar ou café : où héberger la carte, quelle taille imprimer, où le placer, comment le tester.',
    it: 'Crea gratis un codice QR per il menu del tuo ristorante, bar o caffè: dove pubblicare il menu, che dimensione stampare, dove metterlo e come provarlo.',
  },
  intro: {
    es: 'Un código QR en la mesa permite que cada cliente abra el menú en su propio teléfono y que tú cambies platos o precios sin reimprimir nada. Crear el código lleva un minuto; lo que decide si funciona bien es dónde está alojado el menú, de qué tamaño imprimes el código y dónde lo colocas. Esta guía recorre cada paso.',
    en: 'A QR code on the table lets each customer open the menu on their own phone, and lets you change dishes or prices without reprinting anything. Making the code takes a minute; what decides whether it works well is where the menu is hosted, how large you print the code and where you put it. This guide goes through each step.',
    pt: 'Um código QR na mesa permite que cada cliente abra o cardápio no próprio celular e que você mude pratos ou preços sem reimprimir nada. Criar o código leva um minuto; o que decide se ele funciona bem é onde o cardápio está hospedado, em que tamanho você imprime o código e onde o coloca. Este guia passa por cada etapa.',
    fr: 'Un code QR sur la table permet à chaque client d’ouvrir le menu sur son propre téléphone, et à vous de modifier les plats ou les prix sans rien réimprimer. Créer le code prend une minute ; ce qui détermine s’il fonctionne bien, c’est l’endroit où le menu est hébergé, la taille d’impression du code et son emplacement. Ce guide détaille chaque étape.',
    it: 'Un codice QR sul tavolo permette a ogni cliente di aprire il menu sul proprio telefono e a te di cambiare piatti o prezzi senza ristampare nulla. Creare il codice richiede un minuto; a decidere se funziona bene sono il posto in cui si trova il menu, la dimensione di stampa del codice e il punto in cui lo metti. Questa guida segue ogni passaggio.',
  },
  sections: [
    {
      h: {
        es: 'Decide dónde va a estar el menú',
        en: 'Decide where the menu will live',
        pt: 'Decida onde o cardápio vai ficar',
        fr: 'Choisissez où héberger le menu',
        it: 'Decidi dove pubblicare il menu',
      },
      p: [
        {
          es: 'Un código QR solo guarda un enlace, así que el menú tiene que estar publicado en internet antes de crear el código. Este generador no aloja archivos: necesitas una dirección pública que se abra sin iniciar sesión. Hay tres opciones habituales.',
          en: 'A QR code only stores a link, so the menu has to be online before you create the code. This generator does not host files: you need a public address that opens without signing in. There are three common options.',
          pt: 'Um código QR guarda apenas um link, então o cardápio precisa estar publicado na internet antes de você criar o código. Este gerador não hospeda arquivos: você precisa de um endereço público que abra sem login. Há três opções comuns.',
          fr: 'Un code QR ne contient qu’un lien : le menu doit donc être en ligne avant la création du code. Ce générateur n’héberge pas de fichiers : il vous faut une adresse publique qui s’ouvre sans connexion à un compte. Trois solutions sont courantes.',
          it: 'Un codice QR contiene solo un link, quindi il menu deve essere online prima di creare il codice. Questo generatore non ospita file: ti serve un indirizzo pubblico che si apra senza accedere a un account. Le opzioni più comuni sono tre.',
        },
        {
          es: 'Elijas la que elijas, lo importante es que la dirección no cambie nunca. Los códigos que se crean aquí son estáticos: el enlace queda guardado en el propio dibujo y no se puede editar después de imprimirlo. Si el código apunta a una dirección que tú controlas, actualizas el menú que hay detrás y el código impreso sigue sirviendo.',
          en: 'Whichever you choose, what matters is that the address never changes. The codes made here are static: the link is stored in the pattern itself and cannot be edited after printing. If the code points to an address you control, you update the menu behind it and the printed code keeps working.',
          pt: 'Seja qual for a escolha, o importante é que o endereço nunca mude. Os códigos criados aqui são estáticos: o link fica gravado no próprio desenho e não pode ser editado depois de impresso. Se o código aponta para um endereço que você controla, basta atualizar o cardápio que está por trás e o código impresso continua valendo.',
          fr: 'Quelle que soit la solution retenue, l’essentiel est que l’adresse ne change jamais. Les codes créés ici sont statiques : le lien est inscrit dans le motif lui-même et ne peut plus être modifié après l’impression. Si le code pointe vers une adresse que vous gérez, vous mettez à jour le menu qui se trouve derrière et le code imprimé reste valable.',
          it: 'Qualunque sia la scelta, conta che l’indirizzo non cambi mai. I codici creati qui sono statici: il link è scritto nel disegno stesso e non si può modificare dopo la stampa. Se il codice punta a un indirizzo che controlli tu, aggiorni il menu che c’è dietro e il codice stampato continua a funzionare.',
        },
      ],
      list: [
        {
          es: 'Una página de tu sitio web, por ejemplo turestaurante.com/menu. Es la mejor opción: se lee bien en el teléfono y la editas cuando quieras.',
          en: 'A page on your own website, for example yourrestaurant.com/menu. The best option: it reads well on a phone and you can edit it whenever you like.',
          pt: 'Uma página do seu site, por exemplo seurestaurante.com/cardapio. É a melhor opção: fica fácil de ler no celular e você edita quando quiser.',
          fr: 'Une page de votre site, par exemple votrerestaurant.com/menu. C’est la meilleure solution : elle se lit bien sur un téléphone et vous la modifiez quand vous voulez.',
          it: 'Una pagina del tuo sito, per esempio iltuoristorante.com/menu. È la soluzione migliore: si legge bene sul telefono e la modifichi quando vuoi.',
        },
        {
          es: 'Un PDF subido a tu sitio web. Es rápido si ya tienes la carta diseñada; al reemplazar el archivo, conserva el mismo nombre para que la dirección siga siendo la misma.',
          en: 'A PDF uploaded to your website. Quick if the menu is already designed; when you replace the file, keep the same name so the address stays the same.',
          pt: 'Um PDF enviado para o seu site. É rápido se o cardápio já está diagramado; ao substituir o arquivo, mantenha o mesmo nome para que o endereço continue igual.',
          fr: 'Un PDF déposé sur votre site. C’est rapide si la carte est déjà mise en page ; lorsque vous remplacez le fichier, gardez le même nom pour que l’adresse reste identique.',
          it: 'Un PDF caricato sul tuo sito. È veloce se il menu è già impaginato; quando sostituisci il file, mantieni lo stesso nome così l’indirizzo resta identico.',
        },
        {
          es: 'Un PDF en Google Drive o Dropbox, compartido para que cualquier persona con el enlace pueda verlo. Sirve si no tienes sitio web, aunque se abre en el visor de ese servicio y no en una página tuya.',
          en: 'A PDF in Google Drive or Dropbox, shared so that anyone with the link can view it. It works if you have no website, although it opens in that service’s viewer rather than on a page of your own.',
          pt: 'Um PDF no Google Drive ou no Dropbox, compartilhado para que qualquer pessoa com o link possa ver. Serve se você não tem site, embora abra no visualizador do serviço e não em uma página sua.',
          fr: 'Un PDF sur Google Drive ou Dropbox, partagé de façon que toute personne disposant du lien puisse le consulter. Cela convient si vous n’avez pas de site, même si le fichier s’ouvre dans la visionneuse du service et non sur une page à vous.',
          it: 'Un PDF su Google Drive o Dropbox, condiviso in modo che chiunque abbia il link possa vederlo. Va bene se non hai un sito, anche se si apre nel visualizzatore del servizio e non in una pagina tua.',
        },
      ],
    },
    {
      h: {
        es: 'Prepara un menú que se lea bien en el teléfono',
        en: 'Make the menu easy to read on a phone',
        pt: 'Prepare um cardápio fácil de ler no celular',
        fr: 'Préparez un menu lisible sur téléphone',
        it: 'Prepara un menu che si legga bene sul telefono',
      },
      p: [
        {
          es: 'Un PDF pensado para una hoja A4 obliga a ampliar y a mover la pantalla de un lado a otro. Si vas a usar un PDF, prepara una versión para teléfono: una sola columna, letra grande y un archivo liviano, de 2 o 3 MB como máximo, para que abra rápido con datos móviles.',
          en: 'A PDF designed for an A4 sheet forces people to zoom in and drag the screen from side to side. If you use a PDF, prepare a phone version: a single column, large type and a light file, 2 or 3 MB at most, so that it opens quickly on mobile data.',
          pt: 'Um PDF pensado para uma folha A4 obriga a ampliar e arrastar a tela de um lado para o outro. Se for usar PDF, prepare uma versão para celular: uma única coluna, letra grande e um arquivo leve, de 2 ou 3 MB no máximo, para abrir rápido com dados móveis.',
          fr: 'Un PDF conçu pour une feuille A4 oblige à zoomer et à faire défiler l’écran d’un côté à l’autre. Si vous utilisez un PDF, préparez une version pour téléphone : une seule colonne, de gros caractères et un fichier léger, de 2 ou 3 Mo au maximum, pour qu’il s’ouvre vite avec les données mobiles.',
          it: 'Un PDF pensato per un foglio A4 costringe a ingrandire e a spostare lo schermo da un lato all’altro. Se usi un PDF, prepara una versione per telefono: una sola colonna, caratteri grandi e un file leggero, di 2 o 3 MB al massimo, così si apre in fretta con i dati mobili.',
        },
        {
          es: 'Si el menú es una página web, pon las categorías al principio, los precios a la vista y evita las fotos pesadas. Si dentro del local la señal es mala, deja el nombre y la contraseña del Wi-Fi a la vista, cerca del código.',
          en: 'If the menu is a web page, put the categories at the top, keep prices visible and avoid heavy photos. If mobile signal is poor inside the venue, display the Wi-Fi name and password near the code.',
          pt: 'Se o cardápio for uma página web, coloque as categorias no início, deixe os preços à vista e evite fotos pesadas. Se o sinal for ruim dentro do salão, deixe o nome e a senha do Wi-Fi à vista, perto do código.',
          fr: 'Si le menu est une page web, placez les catégories en haut, laissez les prix bien visibles et évitez les photos lourdes. Si le réseau mobile passe mal dans la salle, affichez le nom et le mot de passe du Wi-Fi près du code.',
          it: 'Se il menu è una pagina web, metti le categorie all’inizio, tieni i prezzi in vista ed evita le foto pesanti. Se nel locale il segnale è scarso, esponi il nome e la password del Wi-Fi vicino al codice.',
        },
      ],
    },
    {
      h: {
        es: 'Crea el código con la plantilla de URL personalizada',
        en: 'Create the code with the Custom URL template',
        pt: 'Crie o código com o modelo de URL personalizada',
        fr: 'Créez le code avec le modèle URL personnalisée',
        it: 'Crea il codice con il modello URL personalizzato',
      },
      p: [
        {
          es: 'Con la dirección del menú lista, el código se crea en cuatro pasos. Es gratis, no pide registro y se genera en tu navegador. El código no caduca ni tiene límite de escaneos: funciona mientras la dirección siga abriendo el menú.',
          en: 'With the menu address ready, the code takes four steps. It is free, needs no sign-up and is generated in your browser. The code never expires and has no scan limit: it works for as long as the address keeps opening the menu.',
          pt: 'Com o endereço do cardápio pronto, o código sai em quatro passos. É grátis, não pede cadastro e é gerado no seu navegador. O código não expira nem tem limite de leituras: funciona enquanto o endereço continuar abrindo o cardápio.',
          fr: 'Une fois l’adresse du menu prête, le code se crée en quatre étapes. C’est gratuit, sans inscription, et le code est généré dans votre navigateur. Il n’expire pas et n’a aucune limite de scans : il fonctionne tant que l’adresse ouvre le menu.',
          it: 'Con l’indirizzo del menu pronto, il codice si crea in quattro passaggi. È gratis, non richiede registrazione e viene generato nel tuo browser. Il codice non scade e non ha limiti di scansioni: funziona finché l’indirizzo continua ad aprire il menu.',
        },
      ],
      list: [
        {
          es: 'Abre la plantilla de URL personalizada y pega la dirección completa del menú, empezando por https://.',
          en: 'Open the Custom URL template and paste the full address of the menu, starting with https://.',
          pt: 'Abra o modelo de URL personalizada e cole o endereço completo do cardápio, começando por https://.',
          fr: 'Ouvrez le modèle URL personnalisée et collez l’adresse complète du menu, en commençant par https://.',
          it: 'Apri il modello URL personalizzato e incolla l’indirizzo completo del menu, iniziando da https://.',
        },
        {
          es: 'Si quieres, sube el logo del local en PNG o SVG para que quede en el centro del código.',
          en: 'If you like, upload the venue’s logo as PNG or SVG so that it sits in the centre of the code.',
          pt: 'Se quiser, envie o logo da casa em PNG ou SVG para que fique no centro do código.',
          fr: 'Si vous le souhaitez, importez le logo de l’établissement en PNG ou en SVG pour le placer au centre du code.',
          it: 'Se vuoi, carica il logo del locale in PNG o SVG per metterlo al centro del codice.',
        },
        {
          es: 'Revisa el enlace que aparece debajo de la vista previa y ábrelo una vez para confirmar que lleva al menú.',
          en: 'Check the link shown below the preview and open it once to confirm that it leads to the menu.',
          pt: 'Confira o link que aparece abaixo da prévia e abra-o uma vez para confirmar que leva ao cardápio.',
          fr: 'Vérifiez le lien affiché sous l’aperçu et ouvrez-le une fois pour confirmer qu’il mène bien au menu.',
          it: 'Controlla il link mostrato sotto l’anteprima e aprilo una volta per confermare che porti al menu.',
        },
        {
          es: 'Descarga el SVG para imprimir, porque no pierde nitidez a ningún tamaño, o el PNG para pantallas y documentos sencillos.',
          en: 'Download the SVG for print, because it stays sharp at any size, or the PNG for screens and simple documents.',
          pt: 'Baixe o SVG para imprimir, porque não perde nitidez em nenhum tamanho, ou o PNG para telas e documentos simples.',
          fr: 'Téléchargez le SVG pour l’impression, car il reste net à toutes les tailles, ou le PNG pour les écrans et les documents simples.',
          it: 'Scarica l’SVG per la stampa, perché resta nitido a qualsiasi dimensione, oppure il PNG per schermi e documenti semplici.',
        },
      ],
    },
    {
      h: {
        es: 'Tamaño y ubicación en el local',
        en: 'Size and placement in the venue',
        pt: 'Tamanho e posição no salão',
        fr: 'Taille et emplacement dans la salle',
        it: 'Dimensione e posizione nel locale',
      },
      p: [
        {
          es: 'En la mesa, el cliente escanea sentado, a unos 30 o 40 cm. El mínimo para leer de cerca es de unos 2 cm de lado, pero en una mesa resultan más cómodos 3 o 4 cm, sobre todo con poca luz. Para un código en la pared, el escaparate o el mostrador, calcula alrededor de una décima parte de la distancia: unos 15 cm de lado si se va a escanear a un metro y medio.',
          en: 'At the table, customers scan while seated, from about 30 to 40 cm. The minimum for close-up reading is about 2 cm per side, but on a table 3 to 4 cm is more comfortable, especially in low light. For a code on a wall, window or counter, allow roughly one tenth of the distance: about 15 cm per side if it will be scanned from a metre and a half away.',
          pt: 'Na mesa, o cliente lê o código sentado, a uns 30 ou 40 cm. O mínimo para leitura de perto é de cerca de 2 cm de lado, mas em uma mesa 3 ou 4 cm são mais confortáveis, principalmente com pouca luz. Para um código na parede, na vitrine ou no balcão, calcule cerca de um décimo da distância: uns 15 cm de lado se for lido a um metro e meio.',
          fr: 'À table, le client scanne assis, à 30 ou 40 cm environ. Le minimum pour une lecture de près est d’environ 2 cm de côté, mais sur une table 3 à 4 cm sont plus confortables, surtout en lumière tamisée. Pour un code sur un mur, une vitrine ou un comptoir, comptez à peu près un dixième de la distance : environ 15 cm de côté pour un scan à un mètre et demi.',
          it: 'Al tavolo il cliente scansiona da seduto, a circa 30 o 40 cm. Il minimo per la lettura da vicino è di circa 2 cm di lato, ma su un tavolo 3 o 4 cm sono più comodi, soprattutto con poca luce. Per un codice su una parete, in vetrina o sul bancone calcola circa un decimo della distanza: circa 15 cm di lato se verrà scansionato da un metro e mezzo.',
        },
        {
          es: 'Conserva el margen blanco con el que se descarga el código: no lo recortes ni lo tapes con adornos. Añade al lado una indicación breve, como «Escanea para ver el menú», y escribe debajo la dirección para quien prefiera teclearla.',
          en: 'Keep the white margin the code is downloaded with: do not crop it or cover it with decoration. Add a short instruction beside it, such as “Scan to see the menu”, and write the address underneath for anyone who would rather type it.',
          pt: 'Mantenha a margem branca com que o código é baixado: não a recorte nem a cubra com enfeites. Coloque ao lado uma instrução curta, como “Aponte a câmera para ver o cardápio”, e escreva o endereço embaixo para quem preferir digitar.',
          fr: 'Conservez la marge blanche avec laquelle le code est téléchargé : ne la rognez pas et ne la couvrez pas d’éléments décoratifs. Ajoutez à côté une courte consigne, par exemple « Scannez pour voir le menu », et inscrivez l’adresse en dessous pour ceux qui préfèrent la saisir.',
          it: 'Mantieni il margine bianco con cui il codice viene scaricato: non ritagliarlo e non coprirlo con decorazioni. Aggiungi accanto una breve indicazione, come «Inquadra per vedere il menu», e scrivi sotto l’indirizzo per chi preferisce digitarlo.',
        },
      ],
      list: [
        {
          es: 'Soporte de mesa: es lo más visible y lo más fácil de reemplazar.',
          en: 'Table stand or tent card: the most visible option and the easiest to replace.',
          pt: 'Display de mesa: é o mais visível e o mais fácil de substituir.',
          fr: 'Chevalet de table : le plus visible et le plus simple à remplacer.',
          it: 'Espositore da tavolo: è il più visibile e il più facile da sostituire.',
        },
        {
          es: 'Adhesivo en la mesa: sobre una superficie plana y lejos del borde, donde se desgasta antes.',
          en: 'Sticker on the table: on a flat surface and away from the edge, where it wears out sooner.',
          pt: 'Adesivo na mesa: em uma superfície plana e longe da borda, onde desgasta mais rápido.',
          fr: 'Autocollant sur la table : sur une surface plane et loin du bord, où il s’use plus vite.',
          it: 'Adesivo sul tavolo: su una superficie piana e lontano dal bordo, dove si consuma prima.',
        },
        {
          es: 'Escaparate o entrada: permite ver el menú antes de entrar; imprímelo más grande.',
          en: 'Window or entrance: lets people see the menu before coming in; print it larger.',
          pt: 'Vitrine ou entrada: permite ver o cardápio antes de entrar; imprima maior.',
          fr: 'Vitrine ou entrée : permet de consulter le menu avant d’entrer ; imprimez-le plus grand.',
          it: 'Vetrina o ingresso: permette di vedere il menu prima di entrare; stampalo più grande.',
        },
        {
          es: 'Bolsas y folletos de comida para llevar: para que vuelvan a pedir desde casa.',
          en: 'Takeaway bags and flyers: so that customers can order again from home.',
          pt: 'Sacolas e folhetos de entrega: para que o cliente volte a pedir de casa.',
          fr: 'Sacs et flyers de vente à emporter : pour que les clients puissent recommander depuis chez eux.',
          it: 'Sacchetti e volantini per l’asporto: così i clienti possono ordinare di nuovo da casa.',
        },
      ],
    },
    {
      h: {
        es: 'Material de impresión y pruebas',
        en: 'Print material and testing',
        pt: 'Material de impressão e testes',
        fr: 'Support d’impression et tests',
        it: 'Materiale di stampa e prove',
      },
      p: [
        {
          es: 'Imprime en papel mate o con plastificado mate. El acabado brillante refleja las lámparas y el sol, y la cámara no logra leer el código. El plastificado o un soporte de acrílico lo protegen de las salpicaduras y de la limpieza diaria. Reemplaza las copias rayadas, manchadas o dobladas.',
          en: 'Print on matte paper or with matte lamination. A glossy finish reflects lamps and sunlight, and the camera cannot read the code. Lamination or an acrylic stand protects it from spills and daily cleaning. Replace copies that are scratched, stained or creased.',
          pt: 'Imprima em papel fosco ou com plastificação fosca. O acabamento brilhante reflete as lâmpadas e o sol, e a câmera não consegue ler o código. A plastificação ou um display de acrílico protege de respingos e da limpeza diária. Substitua as cópias riscadas, manchadas ou dobradas.',
          fr: 'Imprimez sur du papier mat ou avec une plastification mate. Une finition brillante reflète les lampes et le soleil, et l’appareil photo n’arrive plus à lire le code. La plastification ou un support en acrylique le protège des éclaboussures et du nettoyage quotidien. Remplacez les exemplaires rayés, tachés ou pliés.',
          it: 'Stampa su carta opaca o con plastificazione opaca. La finitura lucida riflette le lampade e il sole, e la fotocamera non riesce a leggere il codice. La plastificazione o un supporto in acrilico lo proteggono dagli schizzi e dalla pulizia quotidiana. Sostituisci le copie graffiate, macchiate o piegate.',
        },
        {
          es: 'Antes de imprimir todas las copias, prueba una sola al tamaño definitivo.',
          en: 'Before printing every copy, test a single one at its final size.',
          pt: 'Antes de imprimir todas as cópias, teste uma só no tamanho final.',
          fr: 'Avant d’imprimer tous les exemplaires, testez-en un seul à sa taille définitive.',
          it: 'Prima di stampare tutte le copie, provane una sola nella dimensione definitiva.',
        },
      ],
      list: [
        {
          es: 'Escanéala con un iPhone y con un Android, usando la cámara del teléfono.',
          en: 'Scan it with an iPhone and with an Android phone, using the phone camera.',
          pt: 'Leia o código com um iPhone e com um Android, usando a câmera do celular.',
          fr: 'Scannez-le avec un iPhone et avec un Android, depuis l’appareil photo du téléphone.',
          it: 'Scansionala con un iPhone e con un Android, usando la fotocamera del telefono.',
        },
        {
          es: 'Prueba con datos móviles, no solo con el Wi-Fi del local.',
          en: 'Test on mobile data, not only on the venue’s Wi-Fi.',
          pt: 'Teste com dados móveis, não só com o Wi-Fi da casa.',
          fr: 'Faites l’essai avec les données mobiles, pas seulement avec le Wi-Fi de l’établissement.',
          it: 'Prova con i dati mobili, non solo con il Wi-Fi del locale.',
        },
        {
          es: 'Hazlo sentado a la mesa y con la iluminación de la noche.',
          en: 'Do it seated at the table and in the evening lighting.',
          pt: 'Faça o teste sentado à mesa e com a iluminação da noite.',
          fr: 'Faites-le assis à table et avec l’éclairage du soir.',
          it: 'Fallo seduto al tavolo e con l’illuminazione della sera.',
        },
        {
          es: 'Comprueba que el menú se abre sin pedir que inicies sesión ni que solicites acceso, un error frecuente con los archivos de Drive.',
          en: 'Check that the menu opens without asking you to sign in or request access, a common mistake with Drive files.',
          pt: 'Confirme que o cardápio abre sem pedir login nem solicitação de acesso, um erro comum com arquivos do Drive.',
          fr: 'Vérifiez que le menu s’ouvre sans demander de connexion ni de demande d’accès, une erreur fréquente avec les fichiers Drive.',
          it: 'Verifica che il menu si apra senza chiedere l’accesso a un account né una richiesta di autorizzazione, un errore frequente con i file di Drive.',
        },
      ],
    },
    {
      h: {
        es: 'Conserva algunas cartas impresas y suma otros códigos con cuidado',
        en: 'Keep a few printed menus and add other codes with care',
        pt: 'Mantenha alguns cardápios impressos e some outros códigos com cuidado',
        fr: 'Gardez quelques cartes imprimées et ajoutez d’autres codes avec soin',
        it: 'Tieni qualche menu stampato e aggiungi altri codici con attenzione',
      },
      p: [
        {
          es: 'No todos los clientes pueden o quieren escanear: hay quien se quedó sin batería, quien no tiene datos y quien simplemente prefiere el papel. Ten a mano algunas cartas impresas y ofrécelas sin que tengan que insistir.',
          en: 'Not every customer can or wants to scan: some have a flat battery, some have no data and some simply prefer paper. Keep a few printed menus to hand and offer them without making people insist.',
          pt: 'Nem todo cliente pode ou quer ler o código: há quem esteja sem bateria, quem não tenha dados e quem simplesmente prefira o papel. Tenha alguns cardápios impressos à mão e ofereça-os sem que a pessoa precise insistir.',
          fr: 'Tous les clients ne peuvent pas ou ne veulent pas scanner : certains n’ont plus de batterie, d’autres pas de données, d’autres préfèrent simplement le papier. Gardez quelques cartes imprimées à portée de main et proposez-les sans qu’il faille insister.',
          it: 'Non tutti i clienti possono o vogliono scansionare: c’è chi ha il telefono scarico, chi non ha dati e chi semplicemente preferisce la carta. Tieni a portata di mano qualche menu stampato e offrilo senza che debbano insistere.',
        },
        {
          es: 'También puedes sumar un código para pedir reseñas en Google, otro para tu Instagram o uno de WhatsApp para reservas y pedidos. Cada uno debe ir con su propio rótulo y separado de los demás, para que la cámara no lea el equivocado. El de reseñas rinde más junto a la cuenta o en la caja que en la mesa, al lado del código del menú.',
          en: 'You can also add a code that asks for Google reviews, another for your Instagram or a WhatsApp one for bookings and orders. Each needs its own label and some distance from the others, so that the camera does not read the wrong one. The review code does better with the bill or at the till than on the table next to the menu code.',
          pt: 'Você também pode somar um código para pedir avaliações no Google, outro para o seu Instagram ou um de WhatsApp para reservas e pedidos. Cada um deve ter a sua própria legenda e ficar afastado dos demais, para que a câmera não leia o código errado. O de avaliações rende mais junto com a conta ou no caixa do que na mesa, ao lado do código do cardápio.',
          fr: 'Vous pouvez aussi ajouter un code pour demander des avis Google, un autre pour votre Instagram ou un code WhatsApp pour les réservations et les commandes. Chacun doit avoir sa propre légende et être éloigné des autres, pour que l’appareil photo ne lise pas le mauvais. Le code des avis est plus efficace avec l’addition ou à la caisse que sur la table, à côté du code du menu.',
          it: 'Puoi anche aggiungere un codice per chiedere recensioni su Google, un altro per il tuo Instagram o uno di WhatsApp per prenotazioni e ordini. Ognuno deve avere la propria didascalia e stare lontano dagli altri, così la fotocamera non legge quello sbagliato. Quello delle recensioni rende di più insieme al conto o alla cassa che sul tavolo, accanto al codice del menu.',
        },
      ],
    },
  ],
  templates: ['url', 'googlereviews', 'instagram', 'whatsapp'],
  faq: [
    {
      q: {
        es: '¿Puedo cambiar el menú sin volver a imprimir el código?',
        en: 'Can I change the menu without reprinting the code?',
        pt: 'Posso mudar o cardápio sem reimprimir o código?',
        fr: 'Puis-je modifier le menu sans réimprimer le code ?',
        it: 'Posso cambiare il menu senza ristampare il codice?',
      },
      a: {
        es: 'Sí, siempre que la dirección sea la misma. El código guarda el enlace, no el menú: si editas la página o reemplazas el PDF conservando la misma dirección, el código impreso muestra la versión nueva. Si la dirección cambia, hay que crear e imprimir un código nuevo.',
        en: 'Yes, as long as the address stays the same. The code stores the link, not the menu: if you edit the page or replace the PDF while keeping the same address, the printed code shows the new version. If the address changes, you need to create and print a new code.',
        pt: 'Sim, desde que o endereço seja o mesmo. O código guarda o link, não o cardápio: se você editar a página ou substituir o PDF mantendo o mesmo endereço, o código impresso mostra a versão nova. Se o endereço mudar, é preciso criar e imprimir um código novo.',
        fr: 'Oui, tant que l’adresse reste la même. Le code contient le lien, pas le menu : si vous modifiez la page ou remplacez le PDF en gardant la même adresse, le code imprimé affiche la nouvelle version. Si l’adresse change, il faut créer et imprimer un nouveau code.',
        it: 'Sì, purché l’indirizzo resti lo stesso. Il codice contiene il link, non il menu: se modifichi la pagina o sostituisci il PDF mantenendo lo stesso indirizzo, il codice stampato mostra la nuova versione. Se l’indirizzo cambia, bisogna creare e stampare un nuovo codice.',
      },
    },
    {
      q: {
        es: '¿El código QR del menú caduca o tiene algún costo?',
        en: 'Does a menu QR code expire or cost anything?',
        pt: 'O QR Code do cardápio expira ou tem algum custo?',
        fr: 'Le code QR du menu expire-t-il ou est-il payant ?',
        it: 'Il codice QR del menu scade o ha un costo?',
      },
      a: {
        es: 'No. Es un código estático y gratuito: no caduca, no tiene límite de escaneos y no depende de ninguna suscripción. Deja de funcionar solo si la dirección a la que apunta deja de existir. A cambio, no ofrece estadísticas de escaneos.',
        en: 'No. It is a free, static code: it does not expire, has no scan limit and does not depend on any subscription. It stops working only if the address it points to stops existing. In return, it offers no scan statistics.',
        pt: 'Não. É um código estático e gratuito: não expira, não tem limite de leituras e não depende de nenhuma assinatura. Só deixa de funcionar se o endereço para o qual aponta deixar de existir. Em contrapartida, não oferece estatísticas de leitura.',
        fr: 'Non. C’est un code statique et gratuit : il n’expire pas, n’a pas de limite de scans et ne dépend d’aucun abonnement. Il ne cesse de fonctionner que si l’adresse vers laquelle il pointe disparaît. En contrepartie, il ne fournit pas de statistiques de scans.',
        it: 'No. È un codice statico e gratuito: non scade, non ha limiti di scansioni e non dipende da alcun abbonamento. Smette di funzionare solo se l’indirizzo a cui punta non esiste più. In cambio, non offre statistiche sulle scansioni.',
      },
    },
    {
      q: {
        es: '¿Puedo enlazar directamente un PDF?',
        en: 'Can I link directly to a PDF?',
        pt: 'Posso apontar direto para um PDF?',
        fr: 'Puis-je pointer directement vers un PDF ?',
        it: 'Posso collegare direttamente un PDF?',
      },
      a: {
        es: 'Sí, si el PDF tiene una dirección pública. El generador no almacena archivos, así que primero debes subirlo a tu sitio web, a Google Drive o a Dropbox y copiar su enlace. Comprueba en otro teléfono que se abre sin iniciar sesión.',
        en: 'Yes, if the PDF has a public address. The generator does not store files, so you first need to upload it to your website, Google Drive or Dropbox and copy its link. Check on another phone that it opens without signing in.',
        pt: 'Sim, se o PDF tiver um endereço público. O gerador não armazena arquivos, então primeiro você precisa enviá-lo para o seu site, o Google Drive ou o Dropbox e copiar o link. Confira em outro celular se ele abre sem login.',
        fr: 'Oui, si le PDF dispose d’une adresse publique. Le générateur ne stocke pas de fichiers : vous devez d’abord le déposer sur votre site, sur Google Drive ou sur Dropbox, puis copier son lien. Vérifiez sur un autre téléphone qu’il s’ouvre sans connexion à un compte.',
        it: 'Sì, se il PDF ha un indirizzo pubblico. Il generatore non conserva file, quindi devi prima caricarlo sul tuo sito, su Google Drive o su Dropbox e copiarne il link. Controlla su un altro telefono che si apra senza accedere a un account.',
      },
    },
  ],
};

export default guide;
