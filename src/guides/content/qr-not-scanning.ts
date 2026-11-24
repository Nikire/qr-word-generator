import type { Guide } from '../types';

const guide: Guide = {
  id: 'qr-not-scanning',
  slug: {
    es: 'codigo-qr-no-funciona',
    en: 'qr-code-not-scanning',
    pt: 'qr-code-nao-funciona',
    fr: 'code-qr-ne-fonctionne-pas',
    it: 'codice-qr-non-funziona',
  },
  title: {
    es: 'Mi código QR no funciona: causas y cómo solucionarlo',
    en: 'QR code not scanning? Causes and how to fix it',
    pt: 'QR Code não funciona: causas e como resolver',
    fr: 'Mon code QR ne fonctionne pas : causes et solutions',
    it: 'Il codice QR non funziona: cause e soluzioni',
  },
  description: {
    es: 'Por qué un código QR no se escanea y cómo arreglarlo: tamaño, contraste, margen, imagen borrosa, reflejos o un enlace roto. Con lista de control final.',
    en: 'Why a QR code will not scan and how to fix it: size, contrast, margin, blurry image, reflections or a broken link. With a checklist to run before printing.',
    pt: 'Por que um código QR não é lido e como resolver: tamanho, contraste, margem, imagem borrada, reflexos ou link quebrado. Com lista de verificação final.',
    fr: 'Pourquoi un code QR ne se scanne pas et comment y remédier : taille, contraste, marge, image floue, reflets ou lien cassé. Avec une liste de contrôle.',
    it: 'Perché un codice QR non si legge e come rimediare: dimensioni, contrasto, margine, immagine sfocata, riflessi o link errato. Con lista di controllo.',
  },
  intro: {
    es: 'Cuando un código QR no se escanea, la causa casi siempre es una de unas pocas: es demasiado pequeño para la distancia, tiene poco contraste, le falta el margen blanco, la imagen está borrosa o la superficie refleja la luz. Si el código se lee pero no se abre nada útil, el problema está en el enlace y no en el código. Esta guía repasa cada causa y cómo resolverla.',
    en: 'When a QR code does not scan, the cause is almost always one of a few: it is too small for the distance, the contrast is poor, the white margin is missing, the image is blurry or the surface reflects light. If the code reads but nothing useful opens, the problem is the link, not the code. This guide goes through each cause and how to fix it.',
    pt: 'Quando um código QR não é lido, a causa quase sempre é uma entre poucas: ele é pequeno demais para a distância, tem pouco contraste, está sem a margem branca, a imagem está borrada ou a superfície reflete a luz. Se o código é lido mas nada útil se abre, o problema está no link, não no código. Este guia passa por cada causa e mostra como resolver.',
    fr: 'Quand un code QR ne se scanne pas, la cause est presque toujours l’une des suivantes : il est trop petit pour la distance, le contraste est insuffisant, la marge blanche manque, l’image est floue ou la surface reflète la lumière. Si le code est lu mais que rien d’utile ne s’ouvre, le problème vient du lien et non du code. Ce guide passe en revue chaque cause et la façon d’y remédier.',
    it: 'Quando un codice QR non si legge, la causa è quasi sempre una di queste: è troppo piccolo per la distanza, ha poco contrasto, manca il margine bianco, l’immagine è sfocata o la superficie riflette la luce. Se il codice viene letto ma non si apre nulla di utile, il problema è nel link e non nel codice. Questa guida passa in rassegna ogni causa e spiega come risolverla.',
  },
  sections: [
    {
      h: {
        es: 'Primero, descarta el teléfono',
        en: 'First, rule out the phone',
        pt: 'Primeiro, descarte o celular',
        fr: 'D’abord, écartez le téléphone',
        it: 'Per prima cosa, escludi il telefono',
      },
      p: [
        {
          es: 'Prueba el código con un segundo teléfono antes de cambiar nada. Si se lee en uno y no en el otro, lo más probable es que el código esté bien y el problema esté del lado del teléfono.',
          en: 'Try the code with a second phone before changing anything. If it reads on one and not on the other, the code is probably fine and the problem is on the phone side.',
          pt: 'Teste o código com um segundo celular antes de mudar qualquer coisa. Se ele é lido em um e não no outro, o mais provável é que o código esteja bom e o problema esteja no celular.',
          fr: 'Essayez le code avec un deuxième téléphone avant de modifier quoi que ce soit. S’il est lu par l’un et pas par l’autre, le code est sans doute correct et le problème vient du téléphone.',
          it: 'Prova il codice con un secondo telefono prima di cambiare qualsiasi cosa. Se si legge con uno e non con l’altro, molto probabilmente il codice va bene e il problema è nel telefono.',
        },
      ],
      list: [
        {
          es: 'Limpia la lente de la cámara: una lente con marcas de dedos impide enfocar.',
          en: 'Wipe the camera lens: a lens with fingerprints on it cannot focus properly.',
          pt: 'Limpe a lente da câmera: uma lente com marcas de dedo não consegue focar.',
          fr: 'Essuyez l’objectif : un objectif couvert de traces de doigts empêche la mise au point.',
          it: 'Pulisci l’obiettivo della fotocamera: un obiettivo con le ditate non riesce a mettere a fuoco.',
        },
        {
          es: 'Busca más luz y evita hacer sombra sobre el código con el propio teléfono.',
          en: 'Add light and avoid casting a shadow over the code with the phone itself.',
          pt: 'Procure mais luz e evite fazer sombra sobre o código com o próprio celular.',
          fr: 'Ajoutez de la lumière et évitez de faire de l’ombre sur le code avec le téléphone.',
          it: 'Cerca più luce ed evita di fare ombra sul codice con il telefono stesso.',
        },
        {
          es: 'Sostén el teléfono quieto, de modo que todo el código entre en la pantalla, y dale un segundo para enfocar. Si está muy cerca, aléjalo un poco.',
          en: 'Hold the phone still, with the whole code inside the frame, and give it a second to focus. If it is very close, move it back a little.',
          pt: 'Segure o celular parado, com o código inteiro dentro da tela, e dê um segundo para ele focar. Se estiver perto demais, afaste um pouco.',
          fr: 'Tenez le téléphone immobile, le code entier dans le cadre, et laissez-lui une seconde pour faire la mise au point. S’il est très près, reculez-le un peu.',
          it: 'Tieni fermo il telefono, con tutto il codice dentro l’inquadratura, e dagli un secondo per mettere a fuoco. Se è molto vicino, allontanalo un po’.',
        },
        {
          es: 'En teléfonos antiguos cuya cámara no lee códigos, usa Google Lens o una aplicación de escaneo. En iPhone, revisa que la lectura de códigos QR esté activada en los ajustes de la cámara.',
          en: 'On older phones whose camera does not read codes, use Google Lens or a scanner app. On an iPhone, check that QR code scanning is turned on in the camera settings.',
          pt: 'Em celulares antigos cuja câmera não lê códigos, use o Google Lens ou um aplicativo de leitura. No iPhone, confira se a leitura de códigos QR está ativada nos ajustes da câmera.',
          fr: 'Sur les téléphones anciens dont l’appareil photo ne lit pas les codes, utilisez Google Lens ou une application de scan. Sur iPhone, vérifiez que la lecture des codes QR est activée dans les réglages de l’appareil photo.',
          it: 'Sui telefoni più vecchi la cui fotocamera non legge i codici, usa Google Lens o un’app di scansione. Su iPhone, controlla che la scansione dei codici QR sia attiva nelle impostazioni della fotocamera.',
        },
      ],
    },
    {
      h: {
        es: 'Demasiado pequeño, demasiado lejos o sobre una superficie difícil',
        en: 'Too small, too far away or on a difficult surface',
        pt: 'Pequeno demais, longe demais ou em uma superfície difícil',
        fr: 'Trop petit, trop loin ou sur une surface difficile',
        it: 'Troppo piccolo, troppo lontano o su una superficie difficile',
      },
      p: [
        {
          es: 'Para escanear de cerca, como en una tarjeta de presentación o un menú de mesa, un código necesita al menos unos 2 cm de lado. Para todo lo que se lee desde más lejos, calcula un lado de aproximadamente una décima parte de la distancia de escaneo: 10 cm para un metro, 30 cm para tres metros. Los enlaces largos producen códigos más densos, que necesitan todavía más tamaño.',
          en: 'For close-up scanning, as on a business card or a table menu, a code needs at least about 2 cm per side. For anything read from further away, make the side roughly one tenth of the scanning distance: 10 cm for one metre, 30 cm for three metres. Long links produce denser codes, which need to be larger still.',
          pt: 'Para leitura de perto, como em um cartão de visita ou em um cardápio de mesa, um código precisa de pelo menos uns 2 cm de lado. Para tudo o que é lido de mais longe, calcule um lado de aproximadamente um décimo da distância de leitura: 10 cm para um metro, 30 cm para três metros. Links longos geram códigos mais densos, que precisam de ainda mais tamanho.',
          fr: 'Pour un scan de près, comme sur une carte de visite ou un menu de table, un code a besoin d’au moins 2 cm de côté environ. Pour tout ce qui se lit de plus loin, prévoyez un côté d’à peu près un dixième de la distance de scan : 10 cm pour un mètre, 30 cm pour trois mètres. Les liens longs donnent des codes plus denses, qui demandent encore plus de place.',
          it: 'Per la scansione da vicino, come su un biglietto da visita o un menu da tavolo, un codice ha bisogno di almeno 2 cm circa di lato. Per tutto ciò che si legge da più lontano, calcola un lato pari a circa un decimo della distanza di scansione: 10 cm per un metro, 30 cm per tre metri. I link lunghi producono codici più densi, che richiedono ancora più spazio.',
        },
        {
          es: 'La superficie importa tanto como el tamaño. El plastificado brillante, el vidrio y las pantallas producen reflejos que tapan parte del código; un acabado mate o un ángulo distinto lo resuelven. En botellas y otros objetos curvos, mantén el código lo bastante pequeño para que quede en una zona casi plana. Los dobleces, las arrugas, la suciedad y los rayones sobre el dibujo también pueden impedir la lectura, así que no coloques un código sobre una línea de plegado.',
          en: 'The surface matters as much as the size. Glossy lamination, glass and screens produce reflections that hide part of the code; a matt finish or a different angle solves it. On bottles and other curved objects, keep the code small enough to sit on a nearly flat area. Folds, creases, dirt and scratches across the pattern can also prevent reading, so do not place a code on a fold line.',
          pt: 'A superfície importa tanto quanto o tamanho. A plastificação brilhante, o vidro e as telas produzem reflexos que escondem parte do código; um acabamento fosco ou um ângulo diferente resolvem. Em garrafas e outros objetos curvos, mantenha o código pequeno o bastante para ficar em uma área quase plana. Dobras, amassados, sujeira e riscos sobre o desenho também podem impedir a leitura, então não coloque um código sobre uma linha de dobra.',
          fr: 'La surface compte autant que la taille. Le pelliculage brillant, le verre et les écrans produisent des reflets qui masquent une partie du code ; une finition mate ou un autre angle règlent le problème. Sur les bouteilles et autres objets courbes, gardez le code assez petit pour qu’il tienne sur une zone presque plane. Les plis, les froissures, la saleté et les rayures sur le motif peuvent aussi empêcher la lecture : ne placez donc pas un code sur une ligne de pliage.',
          it: 'La superficie conta quanto le dimensioni. La plastificazione lucida, il vetro e gli schermi producono riflessi che nascondono parte del codice; una finitura opaca o un’angolazione diversa risolvono il problema. Su bottiglie e altri oggetti curvi, mantieni il codice abbastanza piccolo da stare su una zona quasi piana. Pieghe, grinze, sporco e graffi sul disegno possono impedire la lettura, quindi non mettere un codice su una linea di piegatura.',
        },
      ],
    },
    {
      h: {
        es: 'Poco contraste, colores invertidos o falta de margen',
        en: 'Low contrast, inverted colours or no margin',
        pt: 'Pouco contraste, cores invertidas ou falta de margem',
        fr: 'Contraste faible, couleurs inversées ou marge absente',
        it: 'Poco contrasto, colori invertiti o margine mancante',
      },
      p: [
        {
          es: 'Los lectores buscan módulos oscuros sobre un fondo claro. Los colores pálidos sobre blanco, lo oscuro sobre oscuro o un código colocado encima de una foto le dan a la cámara muy poca diferencia con la que trabajar. Los códigos invertidos, claros sobre fondo oscuro, fallan en algunos teléfonos y aplicaciones. Negro o un color muy oscuro sobre blanco es la opción confiable.',
          en: 'Scanners look for dark modules on a light background. Pale colours on white, dark on dark, or a code laid over a photo give the camera too little difference to work with. Inverted codes, light on a dark background, fail on some phones and apps. Black or a very dark colour on white is the reliable choice.',
          pt: 'Os leitores procuram módulos escuros sobre um fundo claro. Cores pálidas sobre branco, escuro sobre escuro ou um código colocado em cima de uma foto dão à câmera pouca diferença para trabalhar. Os códigos invertidos, claros sobre fundo escuro, falham em alguns celulares e aplicativos. Preto ou uma cor bem escura sobre branco é a opção confiável.',
          fr: 'Les lecteurs cherchent des modules sombres sur un fond clair. Des couleurs pâles sur du blanc, du sombre sur du sombre ou un code posé sur une photo laissent trop peu de différence à l’appareil photo. Les codes inversés, clairs sur fond sombre, échouent sur certains téléphones et certaines applications. Du noir ou une couleur très sombre sur du blanc reste le choix fiable.',
          it: 'I lettori cercano moduli scuri su uno sfondo chiaro. Colori pallidi su bianco, scuro su scuro o un codice appoggiato sopra una foto lasciano alla fotocamera troppa poca differenza su cui lavorare. I codici invertiti, chiari su sfondo scuro, non vengono letti da alcuni telefoni e da alcune app. Nero o un colore molto scuro su bianco è la scelta affidabile.',
        },
        {
          es: 'El borde en blanco que rodea al código, llamado zona de silencio, forma parte del código. Debe medir al menos cuatro módulos de ancho (un módulo es cada uno de los cuadraditos). Cuando en el diseño se recorta ese borde o se pegan al dibujo un texto, un marco o un fondo recargado, muchos teléfonos dejan de detectar el código. Los códigos que descargas de este generador son oscuros sobre blanco y ya incluyen el margen: no lo recortes.',
          en: 'The blank border around the code, called the quiet zone, is part of the code. It should be at least four modules wide (a module is one of the small squares). When that border is cropped in the design, or text, a frame or a busy background is pushed right up against the pattern, many phones stop detecting the code. Codes downloaded from this generator are dark on white and already include the margin: do not crop it.',
          pt: 'A borda em branco ao redor do código, chamada zona de silêncio, faz parte do código. Ela deve ter pelo menos quatro módulos de largura (um módulo é cada um dos quadradinhos). Quando essa borda é cortada no layout, ou quando um texto, uma moldura ou um fundo carregado ficam colados ao desenho, muitos celulares deixam de detectar o código. Os códigos baixados deste gerador são escuros sobre branco e já incluem a margem: não a corte.',
          fr: 'La bordure vierge qui entoure le code, appelée zone de silence, fait partie du code. Elle doit mesurer au moins quatre modules de large (un module est l’un des petits carrés). Quand cette bordure est rognée dans la maquette, ou qu’un texte, un cadre ou un fond chargé viennent se coller au motif, beaucoup de téléphones ne détectent plus le code. Les codes téléchargés depuis ce générateur sont sombres sur blanc et comprennent déjà la marge : ne la rognez pas.',
          it: 'Il bordo vuoto che circonda il codice, chiamato zona di quiete, fa parte del codice. Deve essere largo almeno quattro moduli (un modulo è ciascuno dei quadratini). Quando nel layout quel bordo viene ritagliato, oppure un testo, una cornice o uno sfondo carico finiscono a ridosso del disegno, molti telefoni non rilevano più il codice. I codici scaricati da questo generatore sono scuri su bianco e includono già il margine: non ritagliarlo.',
        },
      ],
    },
    {
      h: {
        es: 'Imagen borrosa, código muy denso o logo demasiado grande',
        en: 'Blurry image, dense code or oversized logo',
        pt: 'Imagem borrada, código muito denso ou logo grande demais',
        fr: 'Image floue, code trop dense ou logo trop grand',
        it: 'Immagine sfocata, codice troppo denso o logo troppo grande',
      },
      p: [
        {
          es: 'Un PNG tiene una cantidad fija de píxeles. Si lo agrandas más allá de su tamaño, o si pasó por una aplicación de mensajería o una captura de pantalla, queda con los bordes difusos y a los lectores les cuesta. El PNG de este generador mide 1200 píxeles de lado, suficiente para unos 10 cm impresos; para tamaños mayores o para imprenta, usa el SVG, que se mantiene nítido a cualquier tamaño.',
          en: 'A PNG has a fixed number of pixels. Enlarged beyond its size, or passed through a messaging app or a screenshot, it ends up with soft edges that scanners struggle with. The PNG from this generator is 1200 pixels per side, enough for about 10 cm in print; for larger sizes or professional printing, use the SVG, which stays sharp at any size.',
          pt: 'Um PNG tem uma quantidade fixa de pixels. Se você o amplia além do tamanho dele, ou se ele passou por um aplicativo de mensagens ou por uma captura de tela, fica com as bordas difusas e os leitores têm dificuldade. O PNG deste gerador tem 1200 pixels de lado, o suficiente para uns 10 cm impressos; para tamanhos maiores ou para gráfica, use o SVG, que continua nítido em qualquer tamanho.',
          fr: 'Un PNG a un nombre fixe de pixels. Agrandi au-delà de sa taille, ou passé par une messagerie ou une capture d’écran, il présente des bords flous que les lecteurs déchiffrent mal. Le PNG de ce générateur mesure 1200 pixels de côté, ce qui suffit pour environ 10 cm à l’impression ; pour des tailles supérieures ou chez un imprimeur, utilisez le SVG, qui reste net à toutes les tailles.',
          it: 'Un PNG ha un numero fisso di pixel. Se lo ingrandisci oltre la sua dimensione, o se è passato da un’app di messaggistica o da uno screenshot, i bordi diventano sfumati e i lettori faticano. Il PNG di questo generatore misura 1200 pixel di lato, sufficienti per circa 10 cm in stampa; per dimensioni maggiori o per la tipografia usa l’SVG, che resta nitido a qualsiasi dimensione.',
        },
        {
          es: 'Cuantos más caracteres guarda un código, más cuadraditos tiene y más pequeños son. Una dirección larga, llena de parámetros de seguimiento, puede dar un código difícil de leer cuando se imprime pequeño. Acórtala: quita lo que no haga falta después del signo de interrogación o enlaza a una página con una dirección más corta.',
          en: 'The more characters a code holds, the more squares it has and the smaller they are. A long address full of tracking parameters can produce a code that is hard to read when printed small. Shorten it: remove whatever is not needed after the question mark, or link to a page with a shorter address.',
          pt: 'Quanto mais caracteres um código guarda, mais quadradinhos ele tem e menores eles são. Um endereço longo, cheio de parâmetros de rastreamento, pode gerar um código difícil de ler quando impresso em tamanho pequeno. Encurte-o: tire o que não for necessário depois do ponto de interrogação ou aponte para uma página com um endereço mais curto.',
          fr: 'Plus un code contient de caractères, plus ses carrés sont nombreux et petits. Une adresse longue, remplie de paramètres de suivi, peut donner un code difficile à lire une fois imprimé en petit. Raccourcissez-la : supprimez ce qui n’est pas nécessaire après le point d’interrogation ou pointez vers une page dont l’adresse est plus courte.',
          it: 'Più caratteri contiene un codice, più quadratini ha e più sono piccoli. Un indirizzo lungo, pieno di parametri di tracciamento, può produrre un codice difficile da leggere quando viene stampato in piccolo. Accorcialo: togli ciò che non serve dopo il punto interrogativo oppure punta a una pagina con un indirizzo più breve.',
        },
        {
          es: 'Un logo en el centro tapa parte de los datos, y el código sigue leyéndose solo porque lleva información repetida. Aquí el tamaño del logo es fijo para no pasar ese límite. Si agregas o agrandas un logo en un programa de diseño, mantenlo pequeño y vuelve a probar el código.',
          en: 'A logo in the centre covers part of the data, and the code still reads only because it carries redundant information. Here the logo size is fixed so that it stays within that limit. If you add or enlarge a logo in a design program, keep it small and test the code again.',
          pt: 'Um logo no centro cobre parte dos dados, e o código continua sendo lido só porque carrega informação repetida. Aqui o tamanho do logo é fixo para não passar desse limite. Se você adicionar ou ampliar um logo em um programa de design, mantenha-o pequeno e teste o código de novo.',
          fr: 'Un logo au centre recouvre une partie des données, et le code ne reste lisible que parce qu’il contient des informations redondantes. Ici, la taille du logo est fixe pour ne pas dépasser cette limite. Si vous ajoutez ou agrandissez un logo dans un logiciel de mise en page, gardez-le petit et testez de nouveau le code.',
          it: 'Un logo al centro copre una parte dei dati, e il codice continua a leggersi solo perché contiene informazioni ridondanti. Qui la dimensione del logo è fissa per non superare quel limite. Se aggiungi o ingrandisci un logo in un programma di grafica, tienilo piccolo e prova di nuovo il codice.',
        },
      ],
    },
    {
      h: {
        es: 'El código se escanea, pero el enlace no abre',
        en: 'The code scans but the link does not open',
        pt: 'O código é lido, mas o link não abre',
        fr: 'Le code se scanne, mais le lien ne s’ouvre pas',
        it: 'Il codice si legge, ma il link non si apre',
      },
      p: [
        {
          es: 'Si el teléfono lee el código y muestra una dirección, el código está cumpliendo su función. Lo que falla es el destino. Para confirmarlo, abre el mismo enlace escribiéndolo en un navegador y después busca la causa.',
          en: 'If the phone reads the code and shows an address, the code is doing its job. What fails is the destination. To confirm it, open the same link by typing it into a browser, then look for the cause.',
          pt: 'Se o celular lê o código e mostra um endereço, o código está cumprindo a sua função. O que falha é o destino. Para confirmar, abra o mesmo link digitando-o em um navegador e depois procure a causa.',
          fr: 'Si le téléphone lit le code et affiche une adresse, le code remplit son rôle. C’est la destination qui est en cause. Pour le confirmer, ouvrez le même lien en le saisissant dans un navigateur, puis cherchez la cause.',
          it: 'Se il telefono legge il codice e mostra un indirizzo, il codice sta facendo il suo lavoro. A non funzionare è la destinazione. Per averne conferma, apri lo stesso link scrivendolo in un browser e poi cerca la causa.',
        },
        {
          es: 'Un código estático no se puede corregir, así que en casi todos estos casos la solución es reparar el destino o generar un código nuevo con el enlace correcto.',
          en: 'A static code cannot be corrected, so in most of these cases the fix is to repair the destination or to generate a new code with the right link.',
          pt: 'Um código estático não pode ser corrigido, então em quase todos estes casos a solução é consertar o destino ou gerar um código novo com o link certo.',
          fr: 'Un code statique ne peut pas être corrigé : dans la plupart de ces cas, la solution consiste à réparer la destination ou à générer un nouveau code avec le bon lien.',
          it: 'Un codice statico non si può correggere, quindi in quasi tutti questi casi la soluzione è sistemare la destinazione oppure generare un nuovo codice con il link giusto.',
        },
      ],
      list: [
        {
          es: 'Un error al escribir el enlace: una letra de menos, un espacio de más o una terminación de dominio equivocada.',
          en: 'A typo in the link: a missing letter, an extra space or the wrong domain ending.',
          pt: 'Um erro de digitação no link: uma letra a menos, um espaço a mais ou a terminação de domínio errada.',
          fr: 'Une faute de frappe dans le lien : une lettre manquante, un espace en trop ou une mauvaise extension de domaine.',
          it: 'Un errore di battitura nel link: una lettera mancante, uno spazio in più o l’estensione del dominio sbagliata.',
        },
        {
          es: 'La página es privada, fue eliminada o pide iniciar sesión con una cuenta que los visitantes no tienen.',
          en: 'The page is private, has been deleted or asks for a login that visitors do not have.',
          pt: 'A página é privada, foi excluída ou pede login com uma conta que os visitantes não têm.',
          fr: 'La page est privée, a été supprimée ou exige une connexion dont les visiteurs ne disposent pas.',
          it: 'La pagina è privata, è stata eliminata o richiede un accesso che i visitatori non hanno.',
        },
        {
          es: 'Un enlace de invitación a un grupo venció o fue restablecido.',
          en: 'An invite link to a group has expired or been reset.',
          pt: 'Um link de convite para um grupo expirou ou foi redefinido.',
          fr: 'Un lien d’invitation à un groupe a expiré ou a été réinitialisé.',
          it: 'Un link di invito a un gruppo è scaduto o è stato reimpostato.',
        },
        {
          es: 'Cambió un nombre de usuario, así que la dirección anterior del perfil ya no existe.',
          en: 'A username has changed, so the old profile address no longer exists.',
          pt: 'Um nome de usuário mudou, então o endereço antigo do perfil não existe mais.',
          fr: 'Un nom d’utilisateur a changé, et l’ancienne adresse du profil n’existe plus.',
          it: 'È cambiato un nome utente, quindi il vecchio indirizzo del profilo non esiste più.',
        },
        {
          es: 'El código es dinámico, de otro servicio, y terminó la prueba o la suscripción de la que dependía.',
          en: 'The code is a dynamic one from another service, and the trial or subscription it depended on has ended.',
          pt: 'O código é dinâmico, de outro serviço, e o teste ou a assinatura de que ele dependia terminou.',
          fr: 'Le code est un code dynamique d’un autre service, et l’essai ou l’abonnement dont il dépendait a pris fin.',
          it: 'Il codice è dinamico, di un altro servizio, ed è finita la prova o l’abbonamento da cui dipendeva.',
        },
      ],
    },
    {
      h: {
        es: 'Lista de control antes de imprimir',
        en: 'Checklist before you print',
        pt: 'Lista de verificação antes de imprimir',
        fr: 'Liste de contrôle avant d’imprimer',
        it: 'Lista di controllo prima di stampare',
      },
      p: [
        {
          es: 'Reimprimir cuesta más que probar. Repasa esta lista con el archivo final, no con la vista previa de la pantalla.',
          en: 'Reprinting costs more than testing. Go through this list with the final file, not with the preview on screen.',
          pt: 'Reimprimir custa mais do que testar. Percorra esta lista com o arquivo final, não com a prévia na tela.',
          fr: 'Réimprimer coûte plus cher que tester. Parcourez cette liste avec le fichier final, et non avec l’aperçu à l’écran.',
          it: 'Ristampare costa più che provare. Scorri questa lista con il file definitivo, non con l’anteprima sullo schermo.',
        },
      ],
      list: [
        {
          es: 'Imprime una copia al tamaño real y en el material real.',
          en: 'Print one copy at the real size and on the real material.',
          pt: 'Imprima uma cópia no tamanho real e no material real.',
          fr: 'Imprimez un exemplaire à la taille réelle et sur le support réel.',
          it: 'Stampa una copia nella dimensione reale e sul materiale reale.',
        },
        {
          es: 'Escanéala con al menos dos teléfonos, mejor si son un iPhone y un Android, desde la distancia a la que estará la gente.',
          en: 'Scan it with at least two phones, ideally an iPhone and an Android, from the distance people will actually be at.',
          pt: 'Escaneie-a com pelo menos dois celulares, de preferência um iPhone e um Android, da distância em que as pessoas vão estar.',
          fr: 'Scannez-le avec au moins deux téléphones, idéalement un iPhone et un Android, à la distance où se trouveront les gens.',
          it: 'Scansionala con almeno due telefoni, meglio se un iPhone e un Android, dalla distanza a cui si troveranno le persone.',
        },
        {
          es: 'Comprueba que el enlace abra la página correcta con datos móviles, y no solo con tu Wi-Fi o con tu sesión iniciada.',
          en: 'Check that the link opens the right page on mobile data, not only on your own Wi-Fi or while logged in to your account.',
          pt: 'Confira se o link abre a página certa com dados móveis, e não só no seu Wi-Fi ou com a sua conta conectada.',
          fr: 'Vérifiez que le lien ouvre la bonne page en données mobiles, et pas seulement sur votre Wi-Fi ou en étant connecté à votre compte.',
          it: 'Controlla che il link apra la pagina giusta con i dati mobili, e non solo con il tuo Wi-Fi o con il tuo account collegato.',
        },
        {
          es: 'Confirma que el margen blanco esté completo y que nada se superponga al dibujo.',
          en: 'Confirm that the white margin is intact and that nothing overlaps the pattern.',
          pt: 'Confirme que a margem branca está inteira e que nada se sobrepõe ao desenho.',
          fr: 'Assurez-vous que la marge blanche est intacte et que rien ne chevauche le motif.',
          it: 'Verifica che il margine bianco sia intero e che nulla si sovrapponga al disegno.',
        },
        {
          es: 'Usa el archivo SVG para imprimir y deja el código oscuro sobre un fondo claro.',
          en: 'Use the SVG file for print and keep the code dark on a light background.',
          pt: 'Use o arquivo SVG para imprimir e mantenha o código escuro sobre um fundo claro.',
          fr: 'Utilisez le fichier SVG pour l’impression et gardez le code sombre sur un fond clair.',
          it: 'Usa il file SVG per la stampa e lascia il codice scuro su uno sfondo chiaro.',
        },
        {
          es: 'Colócalo lejos de dobleces, costuras y zonas que reflejen mucho la luz.',
          en: 'Place it away from folds, seams and strongly reflective areas.',
          pt: 'Coloque-o longe de dobras, costuras e áreas que refletem muita luz.',
          fr: 'Placez-le à l’écart des plis, des coutures et des zones très réfléchissantes.',
          it: 'Mettilo lontano da pieghe, cuciture e zone molto riflettenti.',
        },
      ],
    },
  ],
  templates: ['url', 'whatsapp', 'instagram', 'facebook'],
  faq: [
    {
      q: {
        es: '¿Por qué mi código QR funciona en un teléfono y en otro no?',
        en: 'Why does my QR code work on one phone but not on another?',
        pt: 'Por que o meu código QR funciona em um celular e não em outro?',
        fr: 'Pourquoi mon code QR fonctionne-t-il sur un téléphone et pas sur un autre ?',
        it: 'Perché il mio codice QR funziona su un telefono e non su un altro?',
      },
      a: {
        es: 'Las cámaras y los programas de lectura no son iguales. Los teléfonos nuevos leen códigos pequeños, densos o con poco contraste que los más antiguos no pueden leer. Si solo fallan algunos teléfonos, el código está cerca del límite: hazlo más grande, aumenta el contraste y acorta el enlace.',
        en: 'Cameras and scanning software differ. Newer phones cope with small, dense or low-contrast codes that older ones cannot read. If only some phones fail, the code is close to the limit: make it larger, increase the contrast and shorten the link.',
        pt: 'As câmeras e os programas de leitura não são iguais. Os celulares novos leem códigos pequenos, densos ou com pouco contraste que os mais antigos não conseguem ler. Se só alguns celulares falham, o código está perto do limite: aumente o tamanho, aumente o contraste e encurte o link.',
        fr: 'Les appareils photo et les logiciels de lecture diffèrent. Les téléphones récents lisent des codes petits, denses ou peu contrastés que les plus anciens ne déchiffrent pas. Si seuls certains téléphones échouent, le code est proche de la limite : agrandissez-le, augmentez le contraste et raccourcissez le lien.',
        it: 'Le fotocamere e i software di lettura non sono tutti uguali. I telefoni recenti leggono codici piccoli, densi o poco contrastati che quelli più vecchi non riescono a leggere. Se solo alcuni telefoni non ci riescono, il codice è vicino al limite: ingrandiscilo, aumenta il contrasto e accorcia il link.',
      },
    },
    {
      q: {
        es: 'Mi código QR funcionaba y dejó de funcionar. ¿Por qué?',
        en: 'My QR code used to work and has stopped. Why?',
        pt: 'O meu código QR funcionava e parou de funcionar. Por quê?',
        fr: 'Mon code QR fonctionnait et ne fonctionne plus. Pourquoi ?',
        it: 'Il mio codice QR funzionava e ha smesso. Perché?',
      },
      a: {
        es: 'Un código estático impreso no cambia, así que revisa el destino: la página pudo haberse movido, el nombre de usuario pudo haber cambiado o un enlace de invitación pudo haber vencido. Si el código se creó en un servicio de códigos dinámicos, es posible que haya terminado el plan. Revisa también el desgaste: tinta desteñida, rayones o suciedad.',
        en: 'A printed static code does not change, so look at the destination: the page may have moved, the username may have changed or an invite link may have expired. If the code was created with a service that makes dynamic codes, the plan behind it may have ended. Check for physical wear too: fading, scratches or dirt.',
        pt: 'Um código estático impresso não muda, então verifique o destino: a página pode ter sido movida, o nome de usuário pode ter mudado ou um link de convite pode ter expirado. Se o código foi criado em um serviço de códigos dinâmicos, é possível que o plano tenha terminado. Verifique também o desgaste: tinta desbotada, riscos ou sujeira.',
        fr: 'Un code statique imprimé ne change pas : regardez donc la destination. La page a pu être déplacée, le nom d’utilisateur a pu changer ou un lien d’invitation a pu expirer. Si le code a été créé avec un service de codes dynamiques, la formule a peut-être pris fin. Vérifiez aussi l’usure : encre passée, rayures ou saleté.',
        it: 'Un codice statico stampato non cambia, quindi controlla la destinazione: la pagina può essere stata spostata, il nome utente può essere cambiato o un link di invito può essere scaduto. Se il codice è stato creato con un servizio di codici dinamici, può darsi che il piano sia terminato. Controlla anche l’usura: inchiostro sbiadito, graffi o sporco.',
      },
    },
    {
      q: {
        es: '¿Se puede escanear un código QR desde una pantalla?',
        en: 'Can a QR code be scanned from a screen?',
        pt: 'Dá para ler um código QR em uma tela?',
        fr: 'Peut-on scanner un code QR affiché sur un écran ?',
        it: 'Si può scansionare un codice QR da uno schermo?',
      },
      a: {
        es: 'Sí. Sube el brillo de la pantalla, muestra el código a un tamaño que ocupe buena parte de ella e inclínala un poco si hay reflejos. Una pantalla rota o con muy poco brillo puede impedir la lectura.',
        en: 'Yes. Raise the screen brightness, show the code large enough to fill a good part of the display and tilt it slightly if there are reflections. A cracked or very dim screen can prevent reading.',
        pt: 'Sim. Aumente o brilho da tela, mostre o código em um tamanho que ocupe boa parte dela e incline um pouco se houver reflexos. Uma tela quebrada ou com pouco brilho pode impedir a leitura.',
        fr: 'Oui. Augmentez la luminosité de l’écran, affichez le code assez grand pour qu’il en occupe une bonne partie et inclinez-le légèrement en cas de reflets. Un écran fissuré ou très peu lumineux peut empêcher la lecture.',
        it: 'Sì. Aumenta la luminosità dello schermo, mostra il codice abbastanza grande da occuparne una buona parte e inclinalo leggermente se ci sono riflessi. Uno schermo rotto o poco luminoso può impedire la lettura.',
      },
    },
  ],
};

export default guide;
