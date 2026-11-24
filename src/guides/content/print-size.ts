import type { Guide } from '../types';

const guide: Guide = {
  id: 'print-size',
  slug: {
    es: 'tamano-minimo-codigo-qr',
    en: 'qr-code-minimum-size',
    pt: 'tamanho-minimo-qr-code',
    fr: 'taille-minimale-qr-code',
    it: 'dimensione-minima-codice-qr',
  },
  title: {
    es: 'Tamaño mínimo de un código QR para imprimir: PNG o SVG',
    en: 'QR code minimum size for print, and PNG vs SVG',
    pt: 'Tamanho mínimo de QR Code para impressão: PNG ou SVG',
    fr: 'Taille minimale d’un QR code à l’impression : PNG ou SVG',
    it: 'Dimensione minima di un codice QR da stampare: PNG o SVG',
  },
  description: {
    es: 'Qué tamaño mínimo debe tener un código QR impreso según la distancia de lectura, qué margen y contraste necesita y cuándo usar PNG o SVG para imprimir.',
    en: 'The minimum size for a printed QR code at each scanning distance, the margin and contrast it needs, and when to use PNG or SVG for printing.',
    pt: 'Qual o tamanho mínimo de um QR Code impresso conforme a distância de leitura, que margem e contraste ele precisa e quando usar PNG ou SVG na impressão.',
    fr: 'La taille minimale d’un QR code imprimé selon la distance de lecture, la marge et le contraste nécessaires, et quand choisir le PNG ou le SVG.',
    it: 'La dimensione minima di un codice QR stampato in base alla distanza di lettura, il margine e il contrasto necessari e quando usare PNG o SVG.',
  },
  intro: {
    es: 'Un código QR demasiado pequeño o impreso borroso no se escanea, y lo normal es descubrirlo cuando la tirada ya está hecha. El tamaño correcto depende de la distancia a la que estará la persona cuando apunte con el teléfono. Esta guía da las medidas mínimas para cada caso, explica qué más influye en la lectura y aclara si conviene enviar a la imprenta un PNG o un SVG.',
    en: 'A QR code that is too small or printed blurry does not scan, and you usually find out once the print run is done. The right size depends on how far away people will be when they point their phone at it. This guide gives the minimum sizes for each case, explains what else affects scanning and tells you whether to send the print shop a PNG or an SVG.',
    pt: 'Um código QR pequeno demais ou impresso sem nitidez não é lido, e o normal é descobrir isso quando a tiragem já está pronta. O tamanho certo depende da distância em que a pessoa estará ao apontar o celular. Este guia traz as medidas mínimas para cada caso, explica o que mais influencia a leitura e esclarece se é melhor enviar à gráfica um PNG ou um SVG.',
    fr: 'Un code QR trop petit ou imprimé flou ne se scanne pas, et on s’en aperçoit en général une fois le tirage terminé. La bonne taille dépend de la distance à laquelle se trouvera la personne au moment de viser le code avec son téléphone. Ce guide donne les dimensions minimales pour chaque cas, explique ce qui influence encore la lecture et indique s’il vaut mieux envoyer à l’imprimeur un PNG ou un SVG.',
    it: 'Un codice QR troppo piccolo o stampato sfocato non si legge, e di solito lo scopri quando la tiratura è già fatta. La dimensione giusta dipende dalla distanza a cui si troverà la persona quando inquadra il codice con il telefono. Questa guida indica le misure minime per ogni caso, spiega che cos’altro influisce sulla lettura e chiarisce se conviene mandare in tipografia un PNG o un SVG.',
  },
  sections: [
    {
      h: {
        es: 'El mínimo: unos 2 cm de lado',
        en: 'The minimum: about 2 cm per side',
        pt: 'O mínimo: cerca de 2 cm de lado',
        fr: 'Le minimum : environ 2 cm de côté',
        it: 'Il minimo: circa 2 cm di lato',
      },
      p: [
        {
          es: 'Para todo lo que se escanea con el teléfono en la mano y de cerca, como una tarjeta de presentación, un menú, una etiqueta o un empaque, el código debe medir al menos 2 cm × 2 cm. Esa medida es la del código en sí, sin contar el margen blanco. El archivo que descargas aquí ya incluye ese margen, así que coloca la imagen completa a unos 2,5 o 3 cm de lado para que el código quede en 2 cm.',
          en: 'For anything scanned up close with the phone in hand, such as a business card, a menu, a label or a package, the code should measure at least 2 cm × 2 cm (0.8 in). That is the size of the code itself, not counting the white margin. The file you download here already includes that margin, so place the whole image at about 2.5 to 3 cm (1 to 1.2 in) per side to end up with 2 cm of code.',
          pt: 'Para tudo o que é lido de perto, com o celular na mão, como um cartão de visita, um cardápio, uma etiqueta ou uma embalagem, o código deve ter pelo menos 2 cm × 2 cm. Essa é a medida do código em si, sem contar a margem branca. O arquivo que você baixa aqui já inclui essa margem, então coloque a imagem inteira com cerca de 2,5 a 3 cm de lado para que o código fique com 2 cm.',
          fr: 'Pour tout ce qui se scanne de près, téléphone en main, comme une carte de visite, un menu, une étiquette ou un emballage, le code doit mesurer au moins 2 cm × 2 cm. Cette mesure est celle du code lui-même, sans la marge blanche. Le fichier que vous téléchargez ici contient déjà cette marge : placez donc l’image entière à environ 2,5 ou 3 cm de côté pour obtenir 2 cm de code.',
          it: 'Per tutto ciò che si scansiona da vicino, con il telefono in mano, come un biglietto da visita, un menu, un’etichetta o una confezione, il codice deve misurare almeno 2 cm × 2 cm. Questa è la misura del codice vero e proprio, senza il margine bianco. Il file che scarichi qui include già quel margine, quindi inserisci l’immagine intera a circa 2,5 o 3 cm di lato per ottenere 2 cm di codice.',
        },
      ],
    },
    {
      h: {
        es: 'La regla de la décima parte de la distancia',
        en: 'The one-tenth rule for scanning distance',
        pt: 'A regra de um décimo da distância',
        fr: 'La règle du dixième de la distance',
        it: 'La regola di un decimo della distanza',
      },
      p: [
        {
          es: 'Cuando el código se lee desde más lejos, la regla práctica es que su lado mida alrededor de una décima parte de la distancia entre el código y el teléfono. Piensa en dónde va a estar realmente la persona: en la acera frente al escaparate, sentada a la mesa o al otro lado de la sala.',
          en: 'When the code is read from further away, the practical rule is that its side should be about one tenth of the distance between the code and the phone. Think about where the person will really be: on the pavement in front of the shop window, sitting at the table or on the other side of the room.',
          pt: 'Quando o código é lido de mais longe, a regra prática é que o lado dele tenha cerca de um décimo da distância entre o código e o celular. Pense em onde a pessoa vai estar de verdade: na calçada em frente à vitrine, sentada à mesa ou do outro lado do salão.',
          fr: 'Quand le code est lu de plus loin, la règle pratique veut que son côté mesure environ un dixième de la distance entre le code et le téléphone. Pensez à l’endroit où la personne se trouvera réellement : sur le trottoir devant la vitrine, assise à table ou de l’autre côté de la salle.',
          it: 'Quando il codice viene letto da più lontano, la regola pratica è che il lato misuri circa un decimo della distanza tra il codice e il telefono. Pensa a dove si troverà davvero la persona: sul marciapiede davanti alla vetrina, seduta al tavolo o dall’altra parte della sala.',
        },
      ],
      list: [
        {
          es: 'Tarjeta o menú, leídos a 20–30 cm: de 2 a 3 cm de lado.',
          en: 'Card or menu, read at 20–30 cm: 2 to 3 cm per side (0.8–1.2 in).',
          pt: 'Cartão ou cardápio, lidos a 20–30 cm: de 2 a 3 cm de lado.',
          fr: 'Carte ou menu, lus à 20–30 cm : de 2 à 3 cm de côté.',
          it: 'Biglietto o menu, letti a 20–30 cm: da 2 a 3 cm di lato.',
        },
        {
          es: 'Folleto o soporte de mesa: de 3 a 4 cm.',
          en: 'Flyer or table stand: 3 to 4 cm (1.2–1.6 in).',
          pt: 'Folheto ou display de mesa: de 3 a 4 cm.',
          fr: 'Flyer ou chevalet de table : de 3 à 4 cm.',
          it: 'Volantino o espositore da tavolo: da 3 a 4 cm.',
        },
        {
          es: 'Cartel que se lee a 1 m: 10 cm.',
          en: 'Poster read from 1 m: 10 cm (4 in).',
          pt: 'Cartaz lido a 1 m: 10 cm.',
          fr: 'Affiche lue à 1 m : 10 cm.',
          it: 'Manifesto letto da 1 m: 10 cm.',
        },
        {
          es: 'Escaparate que se lee a 2–3 m: de 20 a 30 cm.',
          en: 'Shop window read from 2–3 m: 20 to 30 cm (8–12 in).',
          pt: 'Vitrine lida a 2–3 m: de 20 a 30 cm.',
          fr: 'Vitrine lue à 2–3 m : de 20 à 30 cm.',
          it: 'Vetrina letta da 2–3 m: da 20 a 30 cm.',
        },
        {
          es: 'Lona o pancarta que se lee a 10 m: alrededor de 1 m.',
          en: 'Banner read from 10 m: about 1 m (40 in).',
          pt: 'Faixa ou banner lido a 10 m: cerca de 1 m.',
          fr: 'Banderole lue à 10 m : environ 1 m.',
          it: 'Striscione letto da 10 m: circa 1 m.',
        },
      ],
    },
    {
      h: {
        es: 'Los enlaces largos piden códigos más grandes',
        en: 'Long links need bigger codes',
        pt: 'Links longos pedem códigos maiores',
        fr: 'Un lien long demande un code plus grand',
        it: 'I link lunghi richiedono codici più grandi',
      },
      p: [
        {
          es: 'Un código QR guarda el enlace carácter por carácter. Cuanto más largo es el enlace, más módulos (los cuadraditos que forman el dibujo) necesita el código, y a igual tamaño impreso cada módulo queda más pequeño y más difícil de leer. Un código con una dirección corta se escanea bien a 2 cm; uno con un enlace muy largo, lleno de parámetros de seguimiento, puede necesitar 3 o 4 cm para leerse con la misma facilidad.',
          en: 'A QR code stores the link character by character. The longer the link, the more modules (the small squares that make up the pattern) the code needs, and at the same printed size each module ends up smaller and harder to read. A code holding a short address scans well at 2 cm; one holding a very long link full of tracking parameters may need 3 or 4 cm to scan as easily.',
          pt: 'Um código QR guarda o link caractere por caractere. Quanto mais longo o link, mais módulos (os quadradinhos que formam o desenho) o código precisa, e no mesmo tamanho impresso cada módulo fica menor e mais difícil de ler. Um código com um endereço curto é lido bem a 2 cm; um com um link muito longo, cheio de parâmetros de rastreamento, pode precisar de 3 ou 4 cm para ser lido com a mesma facilidade.',
          fr: 'Un code QR enregistre le lien caractère par caractère. Plus le lien est long, plus le code a besoin de modules (les petits carrés qui composent le motif), et à taille imprimée égale chaque module devient plus petit et plus difficile à lire. Un code contenant une adresse courte se scanne bien à 2 cm ; un code contenant un lien très long, chargé de paramètres de suivi, peut demander 3 ou 4 cm pour se lire aussi facilement.',
          it: 'Un codice QR memorizza il link carattere per carattere. Più il link è lungo, più moduli (i quadratini che compongono il disegno) servono al codice, e a parità di dimensione stampata ogni modulo diventa più piccolo e più difficile da leggere. Un codice con un indirizzo breve si legge bene a 2 cm; uno con un link molto lungo, pieno di parametri di tracciamento, può aver bisogno di 3 o 4 cm per leggersi con la stessa facilità.',
        },
        {
          es: 'Por eso conviene acortar el enlace: usa la dirección limpia de la página, quita los parámetros que no necesites y mira la vista previa. Si el dibujo se ve muy fino y apretado, acorta el enlace o prevé una impresión más grande. Los códigos que se crean aquí son estáticos: el enlace queda guardado en el propio código y no se puede cambiar después de imprimir, así que comprueba que sea el definitivo.',
          en: 'So keep the link short: use the clean address of the page, remove any parameters you do not need and look at the preview. If the pattern looks very fine and crowded, shorten the link or plan a larger print. The codes made here are static: the link is stored in the code itself and cannot be changed after printing, so check that it is the final one.',
          pt: 'Por isso vale a pena encurtar o link: use o endereço limpo da página, tire os parâmetros que você não precisa e olhe a pré-visualização. Se o desenho parecer muito fino e apertado, encurte o link ou planeje uma impressão maior. Os códigos criados aqui são estáticos: o link fica guardado no próprio código e não pode ser alterado depois de impresso, então confira se é o definitivo.',
          fr: 'Mieux vaut donc raccourcir le lien : utilisez l’adresse simple de la page, retirez les paramètres inutiles et regardez l’aperçu. Si le motif paraît très fin et serré, raccourcissez le lien ou prévoyez une impression plus grande. Les codes créés ici sont statiques : le lien est enregistré dans le code lui-même et ne peut plus être modifié après l’impression, alors vérifiez que c’est bien le lien définitif.',
          it: 'Per questo conviene accorciare il link: usa l’indirizzo pulito della pagina, togli i parametri che non ti servono e guarda l’anteprima. Se il disegno appare molto fitto e sottile, accorcia il link o prevedi una stampa più grande. I codici creati qui sono statici: il link è memorizzato nel codice stesso e non si può cambiare dopo la stampa, quindi controlla che sia quello definitivo.',
        },
      ],
    },
    {
      h: {
        es: 'Margen, contraste y superficie',
        en: 'Margin, contrast and surface',
        pt: 'Margem, contraste e superfície',
        fr: 'Marge, contraste et support',
        it: 'Margine, contrasto e superficie',
      },
      p: [
        {
          es: 'Todo código necesita a su alrededor un margen vacío, la llamada zona de silencio, de al menos cuatro módulos de ancho, para que la cámara distinga dónde termina. Los archivos que descargas de este sitio ya traen ese margen: no lo recortes y no dejes que un texto, una foto o el borde del papel lo invadan.',
          en: 'Every code needs an empty margin around it, known as the quiet zone, at least four modules wide, so that the camera can tell where the code ends. The files you download from this site already include that margin: do not crop it, and do not let text, a photo or the edge of the paper run into it.',
          pt: 'Todo código precisa de uma margem vazia ao redor, a chamada zona de silêncio, com pelo menos quatro módulos de largura, para que a câmera perceba onde ele termina. Os arquivos que você baixa deste site já trazem essa margem: não a recorte e não deixe que um texto, uma foto ou a borda do papel a invadam.',
          fr: 'Tout code a besoin d’une marge vide autour de lui, la zone de silence, large d’au moins quatre modules, pour que l’appareil photo repère où il s’arrête. Les fichiers téléchargés sur ce site contiennent déjà cette marge : ne la rognez pas et ne laissez ni texte, ni photo, ni bord de page empiéter dessus.',
          it: 'Ogni codice ha bisogno di un margine vuoto tutt’intorno, la cosiddetta zona di silenzio, largo almeno quattro moduli, perché la fotocamera capisca dove finisce. I file che scarichi da questo sito includono già quel margine: non ritagliarlo e non lasciare che un testo, una foto o il bordo del foglio lo invadano.',
        },
        {
          es: 'Los lectores esperan un código oscuro sobre un fondo claro. Los que se generan aquí son oscuros sobre blanco y lo mejor es dejarlos así. Si alguien va a retocar el diseño o a elegir el material, repasa esta lista.',
          en: 'Scanners expect a dark code on a light background. The ones generated here are dark on white, and it is best to leave them that way. If someone is going to rework the design or choose the material, go through this checklist.',
          pt: 'Os leitores esperam um código escuro sobre um fundo claro. Os que são gerados aqui são escuros sobre branco, e o melhor é deixá-los assim. Se alguém for mexer no design ou escolher o material, confira esta lista.',
          fr: 'Les lecteurs attendent un code sombre sur un fond clair. Ceux générés ici sont sombres sur blanc, et le mieux est de les laisser ainsi. Si quelqu’un doit retoucher la maquette ou choisir le support, parcourez cette liste.',
          it: 'I lettori si aspettano un codice scuro su uno sfondo chiaro. Quelli generati qui sono scuri su bianco ed è meglio lasciarli così. Se qualcuno deve ritoccare la grafica o scegliere il materiale, scorri questo elenco.',
        },
      ],
      list: [
        {
          es: 'Código oscuro y fondo claro: un código invertido, claro sobre oscuro, falla en muchos teléfonos.',
          en: 'Dark code, light background: an inverted code, light on dark, fails on many phones.',
          pt: 'Código escuro e fundo claro: um código invertido, claro sobre escuro, falha em muitos celulares.',
          fr: 'Code sombre, fond clair : un code inversé, clair sur sombre, échoue sur de nombreux téléphones.',
          it: 'Codice scuro e sfondo chiaro: un codice invertito, chiaro su scuro, fallisce su molti telefoni.',
        },
        {
          es: 'Nada de combinaciones con poco contraste, como amarillo sobre blanco o gris sobre gris.',
          en: 'No low-contrast combinations, such as yellow on white or grey on grey.',
          pt: 'Nada de combinações com pouco contraste, como amarelo sobre branco ou cinza sobre cinza.',
          fr: 'Pas d’associations peu contrastées, comme du jaune sur blanc ou du gris sur gris.',
          it: 'Niente combinazioni con poco contrasto, come giallo su bianco o grigio su grigio.',
        },
        {
          es: 'Papel o laminado mate: el brillo y el vidrio reflejan la luz justo encima del código.',
          en: 'Matt paper or matt lamination: gloss and glass reflect light right on top of the code.',
          pt: 'Papel ou laminação fosca: o brilho e o vidro refletem a luz bem em cima do código.',
          fr: 'Papier ou pelliculage mat : le brillant et le verre renvoient la lumière en plein sur le code.',
          it: 'Carta o plastificazione opaca: il lucido e il vetro riflettono la luce proprio sopra il codice.',
        },
        {
          es: 'Una zona plana: evita la curva de una botella, los pliegues, las costuras y el lomo de un folleto.',
          en: 'A flat area: avoid the curve of a bottle, folds, seams and the spine of a brochure.',
          pt: 'Uma área plana: evite a curva de uma garrafa, dobras, costuras e a lombada de um folheto.',
          fr: 'Une zone plane : évitez la courbe d’une bouteille, les plis, les coutures et le dos d’une brochure.',
          it: 'Una zona piana: evita la curva di una bottiglia, le pieghe, le cuciture e il dorso di un opuscolo.',
        },
      ],
    },
    {
      h: {
        es: 'SVG o PNG para imprimir',
        en: 'SVG or PNG for printing',
        pt: 'SVG ou PNG para imprimir',
        fr: 'SVG ou PNG pour l’impression',
        it: 'SVG o PNG per la stampa',
      },
      p: [
        {
          es: 'El SVG es un archivo vectorial: describe el código con formas y no con píxeles, por lo que se ve igual de nítido a 2 cm que a 2 m. Es el formato que prefieren las imprentas y los diseñadores, y se abre en programas de diseño como Illustrator, Inkscape o Canva.',
          en: 'The SVG is a vector file: it describes the code as shapes rather than pixels, so it is just as sharp at 2 cm as at 2 m. It is the format print shops and designers prefer, and it opens in design software such as Illustrator, Inkscape or Canva.',
          pt: 'O SVG é um arquivo vetorial: descreve o código com formas, e não com pixels, por isso fica igualmente nítido com 2 cm ou com 2 m. É o formato que as gráficas e os designers preferem, e abre em programas de design como Illustrator, Inkscape ou Canva.',
          fr: 'Le SVG est un fichier vectoriel : il décrit le code par des formes et non par des pixels, il reste donc aussi net à 2 cm qu’à 2 m. C’est le format que préfèrent les imprimeurs et les graphistes, et il s’ouvre dans les logiciels de création comme Illustrator, Inkscape ou Canva.',
          it: 'L’SVG è un file vettoriale: descrive il codice con forme e non con pixel, quindi è nitido allo stesso modo a 2 cm e a 2 m. È il formato che preferiscono tipografie e grafici, e si apre nei programmi di grafica come Illustrator, Inkscape o Canva.',
        },
        {
          es: 'El PNG es una imagen hecha de píxeles. El que descargas aquí mide 1200 × 1200 píxeles, suficiente para pantallas, documentos e impresiones de hasta unos 10 cm de lado a calidad de imprenta (300 ppp). No lo amplíes más allá de eso: un PNG estirado pierde definición en los bordes, y los módulos borrosos son justo lo que más les cuesta a los lectores. Para un cartel, un escaparate o una lona, usa siempre el SVG.',
          en: 'The PNG is an image made of pixels. The one you download here measures 1200 × 1200 pixels, which is enough for screens, documents and prints up to about 10 cm (4 in) per side at print quality (300 dpi). Do not enlarge it beyond that: an upscaled PNG loses definition at the edges, and blurry modules are exactly what scanners struggle with. For a poster, a shop window or a banner, always use the SVG.',
          pt: 'O PNG é uma imagem feita de pixels. O que você baixa aqui tem 1200 × 1200 pixels, o suficiente para telas, documentos e impressões de até uns 10 cm de lado em qualidade de gráfica (300 dpi). Não o amplie além disso: um PNG esticado perde definição nas bordas, e módulos borrados são justamente o que mais atrapalha os leitores. Para um cartaz, uma vitrine ou um banner, use sempre o SVG.',
          fr: 'Le PNG est une image composée de pixels. Celui que vous téléchargez ici mesure 1200 × 1200 pixels, ce qui suffit pour les écrans, les documents et les impressions jusqu’à environ 10 cm de côté en qualité d’impression (300 dpi). Ne l’agrandissez pas au-delà : un PNG agrandi perd en netteté sur les bords, et des modules flous sont précisément ce qui gêne le plus les lecteurs. Pour une affiche, une vitrine ou une banderole, utilisez toujours le SVG.',
          it: 'Il PNG è un’immagine fatta di pixel. Quello che scarichi qui misura 1200 × 1200 pixel, sufficienti per schermi, documenti e stampe fino a circa 10 cm di lato in qualità di stampa (300 dpi). Non ingrandirlo oltre: un PNG ingrandito perde definizione sui bordi, e i moduli sfocati sono proprio ciò che mette più in difficoltà i lettori. Per un manifesto, una vetrina o uno striscione usa sempre l’SVG.',
        },
      ],
    },
    {
      h: {
        es: 'Imprime una prueba y escanéala',
        en: 'Print one proof and scan it',
        pt: 'Imprima uma prova e teste a leitura',
        fr: 'Imprimez une épreuve et scannez-la',
        it: 'Stampa una prova e scansionala',
      },
      p: [
        {
          es: 'Antes de encargar toda la tirada, imprime un ejemplar al tamaño final y, si puedes, en el material definitivo. Como un código estático no se puede corregir después, esta prueba es lo que te ahorra una reimpresión.',
          en: 'Before ordering the whole run, print one copy at the final size and, if you can, on the final material. Because a static code cannot be corrected afterwards, this test is what saves you a reprint.',
          pt: 'Antes de encomendar a tiragem inteira, imprima um exemplar no tamanho final e, se puder, no material definitivo. Como um código estático não pode ser corrigido depois, esse teste é o que evita uma reimpressão.',
          fr: 'Avant de commander tout le tirage, imprimez un exemplaire à la taille finale et, si possible, sur le support définitif. Comme un code statique ne peut pas être corrigé ensuite, c’est ce test qui vous évite une réimpression.',
          it: 'Prima di ordinare l’intera tiratura, stampa una copia nella dimensione finale e, se puoi, sul materiale definitivo. Poiché un codice statico non si può correggere in seguito, è questa prova a risparmiarti una ristampa.',
        },
      ],
      list: [
        {
          es: 'Prueba con dos teléfonos distintos, a ser posible un iPhone y un Android, y que uno no sea nuevo.',
          en: 'Test with two different phones, ideally an iPhone and an Android, one of them not new.',
          pt: 'Teste com dois celulares diferentes, de preferência um iPhone e um Android, e que um deles não seja novo.',
          fr: 'Testez avec deux téléphones différents, si possible un iPhone et un Android, dont un qui ne soit pas récent.',
          it: 'Prova con due telefoni diversi, possibilmente un iPhone e un Android, di cui uno non recente.',
        },
        {
          es: 'Escanea desde la distancia real y con la luz del lugar donde va a estar el código.',
          en: 'Scan from the real distance and in the light of the place where the code will be.',
          pt: 'Leia da distância real e com a luz do lugar onde o código vai ficar.',
          fr: 'Scannez à la distance réelle et avec la lumière du lieu où le code sera placé.',
          it: 'Scansiona dalla distanza reale e con la luce del posto in cui si troverà il codice.',
        },
        {
          es: 'Comprueba que se abre la página correcta, no solo que la cámara reacciona.',
          en: 'Check that the right page opens, not just that the camera reacts.',
          pt: 'Confira se a página certa abre, e não apenas se a câmera reage.',
          fr: 'Vérifiez que la bonne page s’ouvre, et pas seulement que l’appareil photo réagit.',
          it: 'Controlla che si apra la pagina giusta, non solo che la fotocamera reagisca.',
        },
        {
          es: 'Si tarda más de un par de segundos, agranda el código o acorta el enlace y repite la prueba.',
          en: 'If it takes more than a couple of seconds, enlarge the code or shorten the link and test again.',
          pt: 'Se demorar mais de dois segundos, aumente o código ou encurte o link e repita o teste.',
          fr: 'S’il faut plus de deux secondes, agrandissez le code ou raccourcissez le lien, puis refaites le test.',
          it: 'Se ci mette più di un paio di secondi, ingrandisci il codice o accorcia il link e ripeti la prova.',
        },
      ],
    },
  ],
  templates: ['url', 'whatsapp', 'instagram', 'googlereviews'],
  faq: [
    {
      q: {
        es: '¿Cuál es el tamaño mínimo de un código QR impreso?',
        en: 'What is the minimum size for a printed QR code?',
        pt: 'Qual é o tamanho mínimo de um QR Code impresso?',
        fr: 'Quelle est la taille minimale d’un QR code imprimé ?',
        it: 'Qual è la dimensione minima di un codice QR stampato?',
      },
      a: {
        es: 'Unos 2 cm × 2 cm, sin contar el margen blanco, si se va a escanear de cerca y el enlace es corto. Con un enlace largo o un teléfono antiguo conviene subir a 3 cm. Para leerlo desde más lejos, calcula una décima parte de la distancia.',
        en: 'About 2 cm × 2 cm (0.8 in), not counting the white margin, if it will be scanned up close and the link is short. With a long link or an older phone it is safer to go up to 3 cm. For reading from further away, allow one tenth of the distance.',
        pt: 'Cerca de 2 cm × 2 cm, sem contar a margem branca, se for lido de perto e o link for curto. Com um link longo ou um celular antigo, é melhor aumentar para 3 cm. Para ler de mais longe, calcule um décimo da distância.',
        fr: 'Environ 2 cm × 2 cm, sans compter la marge blanche, s’il est scanné de près et que le lien est court. Avec un lien long ou un téléphone ancien, mieux vaut passer à 3 cm. Pour une lecture de plus loin, comptez un dixième de la distance.',
        it: 'Circa 2 cm × 2 cm, senza contare il margine bianco, se verrà letto da vicino e il link è breve. Con un link lungo o un telefono vecchio conviene salire a 3 cm. Per leggerlo da più lontano calcola un decimo della distanza.',
      },
    },
    {
      q: {
        es: '¿Un código QR puede ser demasiado grande?',
        en: 'Can a QR code be too big?',
        pt: 'Um QR Code pode ser grande demais?',
        fr: 'Un QR code peut-il être trop grand ?',
        it: 'Un codice QR può essere troppo grande?',
      },
      a: {
        es: 'No hay un máximo, pero el código tiene que caber entero en la pantalla de la cámara. Un código de 1 m en un pasillo estrecho no se puede escanear porque nadie logra alejarse lo suficiente. Ajusta el tamaño a la distancia real.',
        en: 'There is no maximum, but the whole code has to fit in the camera view. A 1 m code in a narrow corridor cannot be scanned because nobody can step back far enough. Match the size to the real distance.',
        pt: 'Não existe um máximo, mas o código precisa caber inteiro na tela da câmera. Um código de 1 m em um corredor estreito não pode ser lido porque ninguém consegue se afastar o suficiente. Ajuste o tamanho à distância real.',
        fr: 'Il n’y a pas de maximum, mais le code doit tenir en entier dans le cadre de l’appareil photo. Un code de 1 m dans un couloir étroit ne peut pas être scanné, car personne ne peut reculer assez. Adaptez la taille à la distance réelle.',
        it: 'Non c’è un massimo, ma il codice deve entrare per intero nell’inquadratura della fotocamera. Un codice di 1 m in un corridoio stretto non si riesce a scansionare perché nessuno può allontanarsi abbastanza. Adatta la dimensione alla distanza reale.',
      },
    },
    {
      q: {
        es: '¿Qué formato le envío a la imprenta, PNG o SVG?',
        en: 'Which format should I send to the print shop, PNG or SVG?',
        pt: 'Que formato envio para a gráfica, PNG ou SVG?',
        fr: 'Quel format envoyer à l’imprimeur, PNG ou SVG ?',
        it: 'Quale formato mando in tipografia, PNG o SVG?',
      },
      a: {
        es: 'El SVG, siempre que la imprenta lo acepte: es vectorial y queda nítido a cualquier tamaño. El PNG de 1200 × 1200 píxeles sirve para impresiones de hasta unos 10 cm de lado, pero no debe ampliarse más.',
        en: 'The SVG, whenever the print shop accepts it: it is a vector file and stays sharp at any size. The 1200 × 1200 pixel PNG works for prints up to about 10 cm (4 in) per side, but should not be enlarged further.',
        pt: 'O SVG, sempre que a gráfica aceitar: é vetorial e fica nítido em qualquer tamanho. O PNG de 1200 × 1200 pixels serve para impressões de até uns 10 cm de lado, mas não deve ser ampliado além disso.',
        fr: 'Le SVG, dès que l’imprimeur l’accepte : il est vectoriel et reste net à toutes les tailles. Le PNG de 1200 × 1200 pixels convient aux impressions jusqu’à environ 10 cm de côté, mais ne doit pas être agrandi davantage.',
        it: 'L’SVG, ogni volta che la tipografia lo accetta: è vettoriale e resta nitido a qualsiasi dimensione. Il PNG da 1200 × 1200 pixel va bene per stampe fino a circa 10 cm di lato, ma non va ingrandito oltre.',
      },
    },
  ],
};

export default guide;
