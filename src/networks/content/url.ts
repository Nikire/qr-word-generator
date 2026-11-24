import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Un código QR para cualquier enlace',
    en: 'A QR code for any link',
    pt: 'Um código QR para qualquer link',
    fr: 'Un code QR pour n’importe quel lien',
    it: 'Un codice QR per qualsiasi link',
  },
  about: {
    es: 'Pega la dirección de tu sitio web, tu menú, un formulario, un video o cualquier otra página y conviértela en un código QR que se abre con la cámara del teléfono. Puedes subir tu propio logo para que quede en el centro del código y descargarlo en PNG o en SVG.',
    en: 'Paste the address of your website, menu, form, video or any other page and turn it into a QR code that opens with a phone camera. You can upload your own logo to sit in the centre of the code and download it as PNG or SVG.',
    pt: 'Cole o endereço do seu site, cardápio, formulário, vídeo ou qualquer outra página e transforme-o em um código QR que abre com a câmera do celular. Você pode enviar o seu próprio logo para ficar no centro do código e baixá-lo em PNG ou SVG.',
    fr: 'Collez l’adresse de votre site, de votre menu, d’un formulaire, d’une vidéo ou de toute autre page et transformez-la en un code QR qui s’ouvre avec l’appareil photo du téléphone. Vous pouvez importer votre logo pour le placer au centre du code et le télécharger en PNG ou en SVG.',
    it: 'Incolla l’indirizzo del tuo sito, del menu, di un modulo, di un video o di qualsiasi altra pagina e trasformalo in un codice QR che si apre con la fotocamera del telefono. Puoi caricare il tuo logo da mettere al centro del codice e scaricarlo in PNG o SVG.',
  },
  uses: [
    {
      es: 'Menús de restaurantes y bares, sin tener que reimprimir la carta cada vez que cambia.',
      en: 'Restaurant and bar menus, without reprinting the menu every time it changes.',
      pt: 'Cardápios de restaurantes e bares, sem reimprimir o cardápio a cada mudança.',
      fr: 'Menus de restaurants et de bars, sans réimprimer la carte à chaque changement.',
      it: 'Menu di ristoranti e bar, senza ristampare il menu a ogni modifica.',
    },
    {
      es: 'Folletos, carteles y empaques que llevan a tu tienda en línea o a una promoción.',
      en: 'Flyers, posters and packaging that lead to your online shop or a promotion.',
      pt: 'Folhetos, cartazes e embalagens que levam à sua loja online ou a uma promoção.',
      fr: 'Flyers, affiches et emballages qui mènent à votre boutique en ligne ou à une promotion.',
      it: 'Volantini, manifesti e confezioni che portano al tuo negozio online o a una promozione.',
    },
    {
      es: 'Tarjetas de presentación, invitaciones y formularios de inscripción a eventos.',
      en: 'Business cards, invitations and event sign-up forms.',
      pt: 'Cartões de visita, convites e formulários de inscrição em eventos.',
      fr: 'Cartes de visite, invitations et formulaires d’inscription à des événements.',
      it: 'Biglietti da visita, inviti e moduli di iscrizione agli eventi.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Puedo cambiar el enlace después de imprimir el código?',
        en: 'Can I change the link after printing the code?',
        pt: 'Posso mudar o link depois de imprimir o código?',
        fr: 'Puis-je changer le lien après avoir imprimé le code ?',
        it: 'Posso cambiare il link dopo aver stampato il codice?',
      },
      a: {
        es: 'No. El código guarda el enlace tal cual lo escribiste, así que para otro destino hay que generar un código nuevo. Si necesitas cambiarlo seguido, apunta el código a una página tuya y cambia el contenido de esa página.',
        en: 'No. The code stores the link exactly as you typed it, so a different destination needs a new code. If you expect to change it often, point the code to a page you control and update that page instead.',
        pt: 'Não. O código guarda o link exatamente como você digitou, então outro destino exige um código novo. Se precisar mudar com frequência, aponte o código para uma página sua e altere o conteúdo dessa página.',
        fr: 'Non. Le code contient le lien tel que vous l’avez saisi : pour une autre destination, il faut générer un nouveau code. Si vous devez le modifier souvent, faites pointer le code vers une page que vous gérez et modifiez cette page.',
        it: 'No. Il codice contiene il link così come lo hai scritto, quindi per un’altra destinazione serve un nuovo codice. Se devi cambiarlo spesso, punta il codice a una pagina tua e modifica il contenuto di quella pagina.',
      },
    },
    {
      q: {
        es: '¿De qué tamaño conviene imprimirlo?',
        en: 'What size should I print it?',
        pt: 'Em que tamanho devo imprimir?',
        fr: 'À quelle taille faut-il l’imprimer ?',
        it: 'In che dimensione conviene stamparlo?',
      },
      a: {
        es: 'Para escanearlo de cerca, como en una tarjeta o un menú, alcanza con unos 2 cm de lado. Para carteles, calcula alrededor de una décima parte de la distancia de lectura: unos 10 cm si se va a escanear a un metro. Usa el SVG para imprimir, porque no pierde nitidez al agrandarlo.',
        en: 'For close-up scanning, such as a card or a menu, about 2 cm (0.8 in) per side is enough. For posters, allow roughly one tenth of the scanning distance: about 10 cm if it will be scanned from one metre away. Use the SVG for print, because it stays sharp at any size.',
        pt: 'Para ler de perto, como em um cartão ou cardápio, cerca de 2 cm de lado é suficiente. Para cartazes, calcule aproximadamente um décimo da distância de leitura: uns 10 cm se for lido a um metro. Use o SVG para imprimir, porque ele não perde nitidez ao ser ampliado.',
        fr: 'Pour un scan de près, comme sur une carte ou un menu, environ 2 cm de côté suffisent. Pour une affiche, comptez à peu près un dixième de la distance de lecture : environ 10 cm pour un scan à un mètre. Utilisez le SVG pour l’impression, car il reste net à toutes les tailles.',
        it: 'Per la scansione da vicino, come su un biglietto o un menu, bastano circa 2 cm di lato. Per i manifesti calcola circa un decimo della distanza di lettura: circa 10 cm se verrà scansionato da un metro. Usa l’SVG per la stampa, perché resta nitido a qualsiasi dimensione.',
      },
    },
  ],
};

export default content;
