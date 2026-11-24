import type { Guide } from '../types';

const guide: Guide = {
  id: 'qr-with-logo',
  slug: {
    es: 'codigo-qr-con-logo',
    en: 'qr-code-with-logo',
    pt: 'qr-code-com-logo',
    fr: 'qr-code-avec-logo',
    it: 'codice-qr-con-logo',
  },
  title: {
    es: 'Código QR con logo gratis: cómo crearlo y que se escanee',
    en: 'QR code with logo, free: how to make one that scans',
    pt: 'QR Code com logo grátis: como criar sem perder a leitura',
    fr: 'QR code avec logo gratuit : le créer sans gêner le scan',
    it: 'Codice QR con logo gratis: come crearlo e farlo leggere',
  },
  description: {
    es: 'Crea gratis un código QR con logo en el centro: por qué se sigue escaneando, cómo subir tu logo paso a paso y qué archivo y tamaño funcionan mejor.',
    en: 'Make a free QR code with a logo in the centre: why it still scans, how to upload your own logo step by step, and which file and print size work best.',
    pt: 'Crie grátis um QR Code com logo no centro: por que ele continua sendo lido, como enviar o seu logo passo a passo e que arquivo e tamanho funcionam melhor.',
    fr: 'Créez gratuitement un QR code avec logo au centre : pourquoi il reste lisible, comment importer votre logo pas à pas, quel fichier et quelle taille choisir.',
    it: 'Crea gratis un codice QR con logo al centro: perché si legge comunque, come caricare il tuo logo passo per passo e quale file e dimensione scegliere.',
  },
  intro: {
    es: 'Un logo en el centro de un código QR le dice a la gente adónde lleva el código antes de escanearlo. Aquí puedes añadirlo gratis y sin registrarte: las plantillas de redes sociales y servicios ya traen el logo de la marca, y la plantilla de URL personalizada te deja subir el tuyo. Esta guía explica cómo funciona y qué cuidar para que el código se siga leyendo a la primera.',
    en: 'A logo in the centre of a QR code tells people where the code leads before they scan it. You can add one here for free and without signing up: the social network and service templates already carry the brand logo, and the Custom URL template lets you upload your own. This guide explains how it works and what to watch so that the code still scans first time.',
    pt: 'Um logo no centro de um código QR mostra às pessoas para onde o código leva antes mesmo da leitura. Aqui você pode adicioná-lo grátis e sem cadastro: os modelos de redes sociais e serviços já trazem o logo da marca, e o modelo de URL personalizada permite enviar o seu. Este guia explica como funciona e o que cuidar para que o código continue sendo lido de primeira.',
    fr: 'Un logo au centre d’un code QR indique où mène le code avant même qu’on le scanne. Vous pouvez l’ajouter ici gratuitement et sans inscription : les modèles de réseaux sociaux et de services portent déjà le logo de la marque, et le modèle URL personnalisée vous permet d’importer le vôtre. Ce guide explique comment cela fonctionne et ce qu’il faut surveiller pour que le code se scanne toujours du premier coup.',
    it: 'Un logo al centro di un codice QR fa capire dove porta il codice prima ancora di scansionarlo. Qui puoi aggiungerlo gratis e senza registrarti: i modelli dei social network e dei servizi hanno già il logo del marchio, e il modello URL personalizzato ti permette di caricare il tuo. Questa guida spiega come funziona e a che cosa fare attenzione perché il codice si legga comunque al primo colpo.',
  },
  sections: [
    {
      h: {
        es: 'Para qué sirve un logo en el código',
        en: 'What a logo in the code is for',
        pt: 'Para que serve um logo no código',
        fr: 'À quoi sert un logo dans le code',
        it: 'A cosa serve un logo nel codice',
      },
      p: [
        {
          es: 'Un código QR sin más no dice nada sobre su destino, y mucha gente desconfía, con razón, de escanear un código desconocido. El logo responde a esa pregunta de un vistazo: el ícono de WhatsApp anuncia que se abrirá un chat, el de Instagram que se verá un perfil, y el logo de tu negocio deja claro que el código es tuyo.',
          en: 'A bare QR code says nothing about its destination, and many people are rightly wary of scanning an unknown code. A logo answers that question at a glance: the WhatsApp icon says a chat will open, the Instagram one says a profile will appear, and your business logo makes it clear the code is yours.',
          pt: 'Um código QR puro não diz nada sobre o destino, e muita gente desconfia, com razão, de escanear um código desconhecido. O logo responde a essa pergunta de relance: o ícone do WhatsApp avisa que uma conversa vai abrir, o do Instagram que um perfil vai aparecer, e o logo do seu negócio deixa claro que o código é seu.',
          fr: 'Un code QR seul ne dit rien de sa destination, et beaucoup de gens hésitent, à juste titre, à scanner un code inconnu. Le logo répond à cette question d’un coup d’œil : l’icône WhatsApp annonce qu’une discussion va s’ouvrir, celle d’Instagram qu’un profil va s’afficher, et le logo de votre entreprise montre que le code est bien le vôtre.',
          it: 'Un codice QR da solo non dice nulla sulla destinazione, e molte persone diffidano, a ragione, di un codice sconosciuto. Il logo risponde a questa domanda a colpo d’occhio: l’icona di WhatsApp annuncia che si aprirà una chat, quella di Instagram che apparirà un profilo, e il logo della tua attività chiarisce che il codice è tuo.',
        },
      ],
    },
    {
      h: {
        es: 'Por qué se escanea aunque el centro esté tapado',
        en: 'Why it still scans with the centre covered',
        pt: 'Por que ele é lido mesmo com o centro coberto',
        fr: 'Pourquoi il se scanne malgré le centre masqué',
        it: 'Perché si legge anche con il centro coperto',
      },
      p: [
        {
          es: 'Los códigos QR incluyen corrección de errores: además del enlace, guardan información repetida que permite reconstruir las partes que faltan cuando el código está sucio, rayado o tapado. Hay cuatro niveles, y el más alto puede recuperar hasta cerca del 30 % del código.',
          en: 'QR codes include error correction: besides the link, they store redundant information that lets the reader rebuild the missing parts when the code is dirty, scratched or covered. There are four levels, and the highest can recover up to roughly 30% of the code.',
          pt: 'Os códigos QR incluem correção de erros: além do link, guardam informação repetida que permite reconstruir as partes que faltam quando o código está sujo, riscado ou coberto. Há quatro níveis, e o mais alto consegue recuperar até cerca de 30% do código.',
          fr: 'Les codes QR intègrent une correction d’erreurs : en plus du lien, ils contiennent des informations redondantes qui permettent de reconstituer les parties manquantes quand le code est sale, rayé ou masqué. Il existe quatre niveaux, et le plus élevé peut récupérer jusqu’à environ 30 % du code.',
          it: 'I codici QR includono la correzione degli errori: oltre al link, contengono informazioni ridondanti che permettono di ricostruire le parti mancanti quando il codice è sporco, graffiato o coperto. Esistono quattro livelli, e il più alto può recuperare fino a circa il 30% del codice.',
        },
        {
          es: 'Todos los códigos que se generan aquí usan ese nivel más alto, lleven logo o no. El logo ocupa más o menos una quinta parte del ancho del código y, contando el espacio libre que lo rodea, cerca de una décima parte de su superficie: muy por debajo de lo que la corrección puede compensar. Los tres cuadrados grandes de las esquinas, que la cámara usa para ubicar el código, nunca se tocan.',
          en: 'Every code generated here uses that highest level, with or without a logo. The logo takes up roughly a fifth of the width of the code and, counting the clear space around it, about a tenth of its area: well below what the correction can make up for. The three large squares in the corners, which the camera uses to locate the code, are never touched.',
          pt: 'Todos os códigos gerados aqui usam esse nível mais alto, com ou sem logo. O logo ocupa mais ou menos um quinto da largura do código e, contando o espaço livre ao redor, cerca de um décimo da área: bem abaixo do que a correção consegue compensar. Os três quadrados grandes dos cantos, que a câmera usa para localizar o código, nunca são tocados.',
          fr: 'Tous les codes générés ici utilisent ce niveau le plus élevé, avec ou sans logo. Le logo occupe à peu près un cinquième de la largeur du code et, en comptant l’espace dégagé autour de lui, environ un dixième de sa surface : bien moins que ce que la correction peut compenser. Les trois grands carrés des angles, qui servent à l’appareil photo pour repérer le code, ne sont jamais touchés.',
          it: 'Tutti i codici generati qui usano questo livello più alto, con o senza logo. Il logo occupa più o meno un quinto della larghezza del codice e, contando lo spazio libero che lo circonda, circa un decimo della superficie: molto meno di quanto la correzione riesca a compensare. I tre quadrati grandi negli angoli, che la fotocamera usa per individuare il codice, non vengono mai toccati.',
        },
      ],
    },
    {
      h: {
        es: 'Cómo crear un código QR con logo en este sitio',
        en: 'How to make a QR code with a logo on this site',
        pt: 'Como criar um QR Code com logo neste site',
        fr: 'Comment créer un QR code avec logo sur ce site',
        it: 'Come creare un codice QR con logo su questo sito',
      },
      p: [
        {
          es: 'Si el código lleva a una red social o a un servicio, no tienes que subir nada. Elige su plantilla (Instagram, WhatsApp, Facebook, TikTok y las demás), escribe tu usuario o tu número y el código aparece con el logo de la marca en el centro, dentro de un círculo de su color.',
          en: 'If the code leads to a social network or a service, there is nothing to upload. Pick its template (Instagram, WhatsApp, Facebook, TikTok and the rest), type your username or number and the code appears with the brand logo in the centre, inside a circle in the brand colour.',
          pt: 'Se o código leva a uma rede social ou a um serviço, você não precisa enviar nada. Escolha o modelo correspondente (Instagram, WhatsApp, Facebook, TikTok e os demais), digite o seu usuário ou número e o código aparece com o logo da marca no centro, dentro de um círculo na cor dela.',
          fr: 'Si le code mène à un réseau social ou à un service, vous n’avez rien à importer. Choisissez son modèle (Instagram, WhatsApp, Facebook, TikTok et les autres), saisissez votre nom d’utilisateur ou votre numéro, et le code apparaît avec le logo de la marque au centre, dans un cercle à sa couleur.',
          it: 'Se il codice porta a un social network o a un servizio, non devi caricare nulla. Scegli il suo modello (Instagram, WhatsApp, Facebook, TikTok e gli altri), scrivi il tuo nome utente o il tuo numero e il codice appare con il logo del marchio al centro, dentro un cerchio del suo colore.',
        },
        {
          es: 'Para usar tu propio logo, la opción está en la plantilla de URL personalizada. Se aceptan archivos PNG y SVG de hasta 5 MB; un JPG hay que convertirlo antes a PNG. El archivo se procesa en tu navegador y no se envía a ningún servidor. Los pasos son estos.',
          en: 'To use your own logo, the option is in the Custom URL template. PNG and SVG files of up to 5 MB are accepted; a JPG has to be converted to PNG first. The file is processed in your browser and is not sent to any server. These are the steps.',
          pt: 'Para usar o seu próprio logo, a opção fica no modelo de URL personalizada. São aceitos arquivos PNG e SVG de até 5 MB; um JPG precisa ser convertido para PNG antes. O arquivo é processado no seu navegador e não é enviado a nenhum servidor. Os passos são estes.',
          fr: 'Pour utiliser votre propre logo, l’option se trouve dans le modèle URL personnalisée. Les fichiers PNG et SVG jusqu’à 5 Mo sont acceptés ; un JPG doit d’abord être converti en PNG. Le fichier est traité dans votre navigateur et n’est envoyé à aucun serveur. Voici les étapes.',
          it: 'Per usare il tuo logo, l’opzione si trova nel modello URL personalizzato. Sono accettati file PNG e SVG fino a 5 MB; un JPG va prima convertito in PNG. Il file viene elaborato nel tuo browser e non viene inviato a nessun server. I passaggi sono questi.',
        },
      ],
      list: [
        {
          es: 'Abre la plantilla de URL personalizada y pega tu enlace.',
          en: 'Open the Custom URL template and paste your link.',
          pt: 'Abra o modelo de URL personalizada e cole o seu link.',
          fr: 'Ouvrez le modèle URL personnalisée et collez votre lien.',
          it: 'Apri il modello URL personalizzato e incolla il tuo link.',
        },
        {
          es: 'En “Logo en el centro”, pulsa “Elegir archivo” y selecciona tu logo en PNG o SVG.',
          en: 'Under “Logo in the center”, press “Choose file” and select your logo as a PNG or SVG.',
          pt: 'Em “Logo no centro”, clique em “Escolher arquivo” e selecione o seu logo em PNG ou SVG.',
          fr: 'Sous « Logo au centre », cliquez sur « Choisir un fichier » et sélectionnez votre logo en PNG ou en SVG.',
          it: 'In “Logo al centro”, premi “Scegli file” e seleziona il tuo logo in PNG o SVG.',
        },
        {
          es: 'Mira la vista previa: el logo aparece en el centro al instante. Con “Quitar” lo eliminas para probar otro.',
          en: 'Look at the preview: the logo appears in the centre straight away. “Remove” takes it off so you can try another.',
          pt: 'Olhe a pré-visualização: o logo aparece no centro na hora. Com “Remover” você o tira para testar outro.',
          fr: 'Regardez l’aperçu : le logo apparaît aussitôt au centre. « Retirer » l’enlève pour en essayer un autre.',
          it: 'Guarda l’anteprima: il logo appare subito al centro. Con “Rimuovi” lo togli per provarne un altro.',
        },
        {
          es: 'Descarga el código en PNG, o en SVG si lo vas a imprimir.',
          en: 'Download the code as a PNG, or as an SVG if you are going to print it.',
          pt: 'Baixe o código em PNG, ou em SVG se for imprimir.',
          fr: 'Téléchargez le code en PNG, ou en SVG si vous comptez l’imprimer.',
          it: 'Scarica il codice in PNG, oppure in SVG se devi stamparlo.',
        },
      ],
    },
    {
      h: {
        es: 'Cómo preparar el archivo del logo',
        en: 'How to prepare the logo file',
        pt: 'Como preparar o arquivo do logo',
        fr: 'Comment préparer le fichier du logo',
        it: 'Come preparare il file del logo',
      },
      p: [
        {
          es: 'El logo se muestra pequeño, siempre centrado y con un tamaño fijo, así que no hay riesgo de tapar demasiado. Lo que sí depende de ti es que se reconozca a ese tamaño.',
          en: 'The logo is shown small, always centred and at a fixed size, so there is no risk of covering too much. What does depend on you is whether it can be recognised at that size.',
          pt: 'O logo aparece pequeno, sempre centralizado e com tamanho fixo, então não há risco de cobrir demais. O que depende de você é que ele seja reconhecível nesse tamanho.',
          fr: 'Le logo s’affiche en petit, toujours centré et à taille fixe : il n’y a donc aucun risque de trop masquer le code. Ce qui dépend de vous, c’est qu’il reste reconnaissable à cette taille.',
          it: 'Il logo viene mostrato piccolo, sempre centrato e a dimensione fissa, quindi non c’è il rischio di coprire troppo. Quello che dipende da te è che sia riconoscibile a quella dimensione.',
        },
      ],
      list: [
        {
          es: 'Simple: usa el símbolo o las iniciales, no el logo completo con eslogan. El texto pequeño no se lee.',
          en: 'Simple: use the symbol or the initials, not the full logo with a strapline. Small text is unreadable.',
          pt: 'Simples: use o símbolo ou as iniciais, não o logo completo com slogan. Texto pequeno não dá para ler.',
          fr: 'Simple : utilisez le symbole ou les initiales, pas le logo complet avec slogan. Le petit texte est illisible.',
          it: 'Semplice: usa il simbolo o le iniziali, non il logo completo con slogan. Il testo piccolo non si legge.',
        },
        {
          es: 'Cuadrado o redondo: un logo muy ancho se ajusta al espacio sin deformarse, pero queda diminuto.',
          en: 'Square or round: a very wide logo is fitted into the space without distortion, but ends up tiny.',
          pt: 'Quadrado ou redondo: um logo muito largo é ajustado ao espaço sem deformar, mas fica minúsculo.',
          fr: 'Carré ou rond : un logo très large est ajusté à l’espace sans être déformé, mais il devient minuscule.',
          it: 'Quadrato o rotondo: un logo molto largo viene adattato allo spazio senza deformarsi, ma risulta minuscolo.',
        },
        {
          es: 'Fondo transparente o blanco: el centro del código es blanco. Un logo sobre un cuadro de color se verá como un cuadro de color.',
          en: 'Transparent or white background: the centre of the code is white. A logo on a coloured box will show as a coloured box.',
          pt: 'Fundo transparente ou branco: o centro do código é branco. Um logo sobre um quadro colorido vai aparecer como um quadro colorido.',
          fr: 'Fond transparent ou blanc : le centre du code est blanc. Un logo posé sur un carré de couleur apparaîtra comme un carré de couleur.',
          it: 'Sfondo trasparente o bianco: il centro del codice è bianco. Un logo su un riquadro colorato apparirà come un riquadro colorato.',
        },
        {
          es: 'Buen contraste: un logo blanco o muy claro desaparece sobre el fondo blanco. Usa la versión oscura o a color.',
          en: 'Good contrast: a white or very pale logo disappears against the white background. Use the dark or full-colour version.',
          pt: 'Bom contraste: um logo branco ou muito claro some no fundo branco. Use a versão escura ou colorida.',
          fr: 'Bon contraste : un logo blanc ou très clair disparaît sur le fond blanc. Utilisez la version sombre ou en couleur.',
          it: 'Buon contrasto: un logo bianco o molto chiaro sparisce sullo sfondo bianco. Usa la versione scura o a colori.',
        },
        {
          es: 'SVG si lo tienes: se mantiene nítido a cualquier tamaño. Un PNG grande se reduce a 512 píxeles de lado, suficiente para impresiones normales.',
          en: 'SVG if you have it: it stays sharp at any size. A large PNG is reduced to 512 pixels per side, which is enough for normal prints.',
          pt: 'SVG se você tiver: ele se mantém nítido em qualquer tamanho. Um PNG grande é reduzido para 512 pixels de lado, o suficiente para impressões comuns.',
          fr: 'En SVG si vous l’avez : il reste net à toutes les tailles. Un grand PNG est réduit à 512 pixels de côté, ce qui suffit pour les impressions courantes.',
          it: 'SVG se lo hai: resta nitido a qualsiasi dimensione. Un PNG grande viene ridotto a 512 pixel di lato, sufficienti per le stampe normali.',
        },
      ],
    },
    {
      h: {
        es: 'No lo imprimas demasiado pequeño',
        en: 'Do not print it too small',
        pt: 'Não imprima pequeno demais',
        fr: 'Ne l’imprimez pas trop petit',
        it: 'Non stamparlo troppo piccolo',
      },
      p: [
        {
          es: 'Un código con logo tiene menos margen de sobra: parte de la corrección de errores ya se gasta en el logo y queda menos para la suciedad, el desgaste o un reflejo. Además, el nivel alto de corrección hace que el dibujo sea más denso que el de un código básico con el mismo enlace.',
          en: 'A code with a logo has less to spare: part of the error correction is already spent on the logo, leaving less for dirt, wear or a reflection. The high correction level also makes the pattern denser than that of a basic code holding the same link.',
          pt: 'Um código com logo tem menos folga: parte da correção de erros já é gasta com o logo, e sobra menos para a sujeira, o desgaste ou um reflexo. Além disso, o nível alto de correção deixa o desenho mais denso do que o de um código básico com o mesmo link.',
          fr: 'Un code avec logo dispose de moins de réserve : une partie de la correction d’erreurs est déjà consommée par le logo, et il en reste moins pour la saleté, l’usure ou un reflet. Le niveau de correction élevé rend aussi le motif plus dense que celui d’un code simple contenant le même lien.',
          it: 'Un codice con logo ha meno margine di riserva: una parte della correzione degli errori è già spesa per il logo e ne resta meno per lo sporco, l’usura o un riflesso. Inoltre il livello alto di correzione rende il disegno più fitto rispetto a un codice semplice con lo stesso link.',
        },
        {
          es: 'Por eso conviene ser generoso con el tamaño: al menos 2 cm de lado para escanear de cerca, mejor 2,5 o 3 cm, y alrededor de una décima parte de la distancia cuando se lee desde lejos. Ten en cuenta que en un código de 2 cm el logo mide unos 4 mm, y a ese tamaño solo se reconoce una forma simple. Mantén el enlace corto, respeta el margen blanco y no cambies el código oscuro sobre fondo claro.',
          en: 'So be generous with the size: at least 2 cm (0.8 in) per side for close scanning, preferably 2.5 or 3 cm, and about one tenth of the distance when it is read from further away. Bear in mind that on a 2 cm code the logo is about 4 mm wide, and at that size only a simple shape is recognisable. Keep the link short, respect the white margin and leave the code dark on a light background.',
          pt: 'Por isso vale ser generoso com o tamanho: pelo menos 2 cm de lado para ler de perto, melhor 2,5 ou 3 cm, e cerca de um décimo da distância quando a leitura é de longe. Lembre que em um código de 2 cm o logo tem uns 4 mm, e nesse tamanho só uma forma simples é reconhecível. Mantenha o link curto, respeite a margem branca e não mude o código escuro sobre fundo claro.',
          fr: 'Soyez donc généreux sur la taille : au moins 2 cm de côté pour un scan de près, de préférence 2,5 ou 3 cm, et environ un dixième de la distance quand le code est lu de loin. Gardez en tête que sur un code de 2 cm le logo mesure environ 4 mm, et qu’à cette taille seule une forme simple reste reconnaissable. Gardez un lien court, respectez la marge blanche et laissez le code sombre sur fond clair.',
          it: 'Per questo conviene essere generosi con la dimensione: almeno 2 cm di lato per la lettura da vicino, meglio 2,5 o 3 cm, e circa un decimo della distanza quando si legge da lontano. Tieni presente che su un codice di 2 cm il logo misura circa 4 mm, e a quella dimensione si riconosce solo una forma semplice. Mantieni il link breve, rispetta il margine bianco e lascia il codice scuro su sfondo chiaro.',
        },
      ],
    },
    {
      h: {
        es: 'Pruébalo antes de imprimir',
        en: 'Test it before printing',
        pt: 'Teste antes de imprimir',
        fr: 'Testez-le avant d’imprimer',
        it: 'Provalo prima di stampare',
      },
      p: [
        {
          es: 'El código es estático: el enlace queda guardado en el dibujo y no se puede editar después. A cambio, no caduca, y puedes generar gratis todas las versiones que necesites hasta dar con la definitiva. Antes de mandar a imprimir, haz esta comprobación.',
          en: 'The code is static: the link is stored in the pattern and cannot be edited afterwards. In return it never expires, and you can generate as many versions as you need for free until you get the final one. Before sending anything to print, run this check.',
          pt: 'O código é estático: o link fica guardado no desenho e não pode ser editado depois. Em compensação, ele não expira, e você pode gerar grátis quantas versões precisar até chegar à definitiva. Antes de mandar imprimir, faça esta verificação.',
          fr: 'Le code est statique : le lien est enregistré dans le motif et ne peut plus être modifié ensuite. En contrepartie, il n’expire jamais, et vous pouvez générer gratuitement autant de versions que nécessaire jusqu’à obtenir la bonne. Avant d’envoyer à l’impression, faites cette vérification.',
          it: 'Il codice è statico: il link è memorizzato nel disegno e non si può modificare in seguito. In compenso non scade mai, e puoi generare gratis tutte le versioni che ti servono fino a quella definitiva. Prima di mandare in stampa, fai questo controllo.',
        },
      ],
      list: [
        {
          es: 'Escanea el código con dos teléfonos distintos y comprueba que se abre la página correcta.',
          en: 'Scan the code with two different phones and check that the right page opens.',
          pt: 'Leia o código com dois celulares diferentes e confira se a página certa abre.',
          fr: 'Scannez le code avec deux téléphones différents et vérifiez que la bonne page s’ouvre.',
          it: 'Scansiona il codice con due telefoni diversi e controlla che si apra la pagina giusta.',
        },
        {
          es: 'Haz la prueba sobre una copia impresa al tamaño final, no solo en la pantalla.',
          en: 'Test on a copy printed at the final size, not only on screen.',
          pt: 'Faça o teste em uma cópia impressa no tamanho final, não só na tela.',
          fr: 'Faites le test sur un exemplaire imprimé à la taille finale, pas seulement à l’écran.',
          it: 'Fai la prova su una copia stampata nella dimensione finale, non solo sullo schermo.',
        },
        {
          es: 'Si el código tarda en leerse, agrándalo o acorta el enlace y vuelve a probar.',
          en: 'If the code is slow to scan, enlarge it or shorten the link and try again.',
          pt: 'Se o código demorar para ser lido, aumente o tamanho ou encurte o link e teste de novo.',
          fr: 'Si le code tarde à se lire, agrandissez-le ou raccourcissez le lien, puis réessayez.',
          it: 'Se il codice è lento da leggere, ingrandiscilo o accorcia il link e riprova.',
        },
      ],
    },
  ],
  templates: ['url', 'instagram', 'whatsapp', 'facebook', 'tiktok'],
  faq: [
    {
      q: {
        es: '¿Es gratis de verdad poner un logo en el código QR?',
        en: 'Is it really free to put a logo in the QR code?',
        pt: 'É mesmo grátis colocar um logo no QR Code?',
        fr: 'Ajouter un logo au QR code est-il vraiment gratuit ?',
        it: 'Mettere un logo nel codice QR è davvero gratis?',
      },
      a: {
        es: 'Sí. No hay que registrarse ni pagar, y el código se descarga en PNG o SVG con el logo incluido. Es un código estático, así que no caduca; lo único que no ofrece son estadísticas de escaneos ni la posibilidad de cambiar el enlace después.',
        en: 'Yes. There is no sign-up and nothing to pay, and the code downloads as PNG or SVG with the logo included. It is a static code, so it never expires; what it does not offer is scan statistics or the option to change the link later.',
        pt: 'Sim. Não é preciso cadastro nem pagamento, e o código é baixado em PNG ou SVG com o logo incluído. É um código estático, então não expira; o que ele não oferece são estatísticas de leitura nem a possibilidade de mudar o link depois.',
        fr: 'Oui. Il n’y a ni inscription ni paiement, et le code se télécharge en PNG ou en SVG avec le logo inclus. C’est un code statique, il n’expire donc jamais ; il ne propose en revanche ni statistiques de scan ni modification du lien par la suite.',
        it: 'Sì. Non serve registrarsi né pagare, e il codice si scarica in PNG o SVG con il logo incluso. È un codice statico, quindi non scade mai; non offre invece statistiche di scansione né la possibilità di cambiare il link in seguito.',
      },
    },
    {
      q: {
        es: '¿El logo puede hacer que el código no se escanee?',
        en: 'Can the logo stop the code from scanning?',
        pt: 'O logo pode impedir a leitura do código?',
        fr: 'Le logo peut-il empêcher le code de se scanner ?',
        it: 'Il logo può impedire la lettura del codice?',
      },
      a: {
        es: 'Aquí es poco probable: el tamaño del logo es fijo y el código usa el nivel más alto de corrección de errores. Los fallos suelen venir de imprimirlo demasiado pequeño, de un enlace muy largo o de poco contraste. Pruébalo con dos teléfonos antes de imprimir.',
        en: 'Here it is unlikely: the logo size is fixed and the code uses the highest error correction level. Failures usually come from printing it too small, from a very long link or from poor contrast. Test it with two phones before printing.',
        pt: 'Aqui é pouco provável: o tamanho do logo é fixo e o código usa o nível mais alto de correção de erros. As falhas costumam vir de imprimir pequeno demais, de um link muito longo ou de pouco contraste. Teste com dois celulares antes de imprimir.',
        fr: 'Ici, c’est peu probable : la taille du logo est fixe et le code utilise le niveau de correction d’erreurs le plus élevé. Les échecs viennent en général d’une impression trop petite, d’un lien très long ou d’un contraste insuffisant. Testez avec deux téléphones avant d’imprimer.',
        it: 'Qui è poco probabile: la dimensione del logo è fissa e il codice usa il livello più alto di correzione degli errori. I problemi nascono di solito da una stampa troppo piccola, da un link molto lungo o da poco contrasto. Provalo con due telefoni prima di stampare.',
      },
    },
    {
      q: {
        es: '¿Puedo poner mi propio logo en un código de Instagram o de WhatsApp?',
        en: 'Can I put my own logo on an Instagram or WhatsApp code?',
        pt: 'Posso colocar o meu próprio logo em um código do Instagram ou do WhatsApp?',
        fr: 'Puis-je mettre mon propre logo sur un code Instagram ou WhatsApp ?',
        it: 'Posso mettere il mio logo su un codice di Instagram o di WhatsApp?',
      },
      a: {
        es: 'Sí, con un paso más. Las plantillas de cada red muestran el logo de la marca y no permiten cambiarlo. Copia el enlace que aparece debajo del código en esa plantilla, pégalo en la plantilla de URL personalizada y sube allí tu logo.',
        en: 'Yes, with one extra step. Each network template shows the brand logo and does not let you change it. Copy the link shown under the code in that template, paste it into the Custom URL template and upload your logo there.',
        pt: 'Sim, com um passo a mais. Os modelos de cada rede mostram o logo da marca e não permitem trocá-lo. Copie o link que aparece abaixo do código nesse modelo, cole no modelo de URL personalizada e envie o seu logo ali.',
        fr: 'Oui, avec une étape de plus. Les modèles de chaque réseau affichent le logo de la marque et ne permettent pas de le changer. Copiez le lien affiché sous le code dans ce modèle, collez-le dans le modèle URL personnalisée et importez-y votre logo.',
        it: 'Sì, con un passaggio in più. I modelli di ogni rete mostrano il logo del marchio e non permettono di cambiarlo. Copia il link che appare sotto il codice in quel modello, incollalo nel modello URL personalizzato e carica lì il tuo logo.',
      },
    },
  ],
};

export default guide;
