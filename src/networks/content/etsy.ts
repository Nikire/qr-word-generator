import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Código QR para tu tienda de Etsy: para qué sirve',
    en: 'QR code for your Etsy shop: what it is for',
    pt: 'Código QR para a sua loja na Etsy: para que serve',
    fr: 'Code QR pour votre boutique Etsy : à quoi il sert',
    it: 'Codice QR per il tuo negozio Etsy: a cosa serve',
  },
  about: {
    es: 'El código abre tu tienda de Etsy con todos tus productos. Está pensado para artesanos y pequeñas marcas que venden piezas hechas a mano, vintage o personalizadas: quien te conoce en una feria o recibe un pedido puede volver a tu tienda más tarde, aunque no recuerde cómo se escribe el nombre.',
    en: 'The code opens your Etsy shop with all your products. It is meant for makers and small brands selling handmade, vintage or personalised pieces: someone who meets you at a fair or receives an order can come back to your shop later, even if they do not remember how the name is spelled.',
    pt: 'O código abre a sua loja na Etsy com todos os seus produtos. É pensado para artesãos e pequenas marcas que vendem peças feitas à mão, vintage ou personalizadas: quem conhece você em uma feira ou recebe um pedido pode voltar à sua loja depois, mesmo sem lembrar como se escreve o nome.',
    fr: 'Le code ouvre votre boutique Etsy avec tous vos produits. Il est pensé pour les artisans et les petites marques qui vendent des pièces faites main, vintage ou personnalisées : la personne qui vous rencontre sur un marché ou reçoit une commande peut revenir plus tard dans votre boutique, même sans se souvenir de l’orthographe du nom.',
    it: 'Il codice apre il tuo negozio Etsy con tutti i tuoi prodotti. È pensato per artigiani e piccoli marchi che vendono pezzi fatti a mano, vintage o personalizzati: chi ti conosce a un mercatino o riceve un ordine può tornare nel tuo negozio più tardi, anche se non ricorda come si scrive il nome.',
  },
  uses: [
    {
      es: 'Ferias de artesanía y mercados: en el puesto, para quien no compra en el momento o busca otro color o tamaño.',
      en: 'Craft fairs and markets: on the stand, for people who do not buy on the spot or want another colour or size.',
      pt: 'Feiras de artesanato e mercados: no estande, para quem não compra na hora ou procura outra cor ou tamanho.',
      fr: 'Salons d’artisanat et marchés : sur le stand, pour ceux qui n’achètent pas sur place ou cherchent une autre couleur ou taille.',
      it: 'Fiere dell’artigianato e mercatini: sul banco, per chi non compra subito o cerca un altro colore o un’altra misura.',
    },
    {
      es: 'Etiquetas colgantes y tarjetas de agradecimiento dentro del paquete, para repetir la compra o hacer un regalo.',
      en: 'Hang tags and thank-you cards inside the parcel, for a repeat purchase or a gift.',
      pt: 'Etiquetas penduradas e cartões de agradecimento dentro do pacote, para repetir a compra ou dar um presente.',
      fr: 'Étiquettes volantes et cartes de remerciement dans le colis, pour une nouvelle commande ou un cadeau.',
      it: 'Cartellini e biglietti di ringraziamento dentro il pacco, per un nuovo acquisto o un regalo.',
    },
    {
      es: 'Piezas en consignación en tiendas o cafés: una tarjeta junto al producto lleva al catálogo completo.',
      en: 'Pieces on consignment in shops or cafés: a card next to the product leads to the full catalogue.',
      pt: 'Peças em consignação em lojas ou cafés: um cartão ao lado do produto leva ao catálogo completo.',
      fr: 'Pièces en dépôt-vente dans des boutiques ou des cafés : une carte à côté du produit mène au catalogue complet.',
      it: 'Pezzi in conto vendita in negozi o caffè: un cartoncino accanto al prodotto porta al catalogo completo.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Qué pasa si cambio el nombre de mi tienda?',
        en: 'What happens if I change my shop name?',
        pt: 'O que acontece se eu mudar o nome da minha loja?',
        fr: 'Que se passe-t-il si je change le nom de ma boutique ?',
        it: 'Cosa succede se cambio il nome del mio negozio?',
      },
      a: {
        es: 'La dirección de la tienda incluye el nombre, y el código guarda la dirección que tenías al generarlo. Tras un cambio de nombre, no cuentes con que el enlace anterior siga funcionando: genera un código nuevo y actualiza etiquetas y tarjetas.',
        en: 'The shop address includes the name, and the code stores the address you had when you generated it. After a name change, do not count on the old link still working: generate a new code and update your tags and cards.',
        pt: 'O endereço da loja inclui o nome, e o código guarda o endereço que você tinha ao gerá-lo. Depois de mudar o nome, não conte com o link antigo continuar funcionando: gere um código novo e atualize etiquetas e cartões.',
        fr: 'L’adresse de la boutique contient le nom, et le code conserve l’adresse que vous aviez au moment de le générer. Après un changement de nom, ne comptez pas sur l’ancien lien : générez un nouveau code et mettez à jour étiquettes et cartes.',
        it: 'L’indirizzo del negozio contiene il nome, e il codice conserva l’indirizzo che avevi quando l’hai generato. Dopo un cambio di nome, non contare sul fatto che il vecchio link funzioni ancora: genera un nuovo codice e aggiorna cartellini e biglietti.',
      },
    },
    {
      q: {
        es: '¿El comprador necesita tener la app de Etsy?',
        en: 'Does the buyer need the Etsy app?',
        pt: 'O comprador precisa ter o app da Etsy?',
        fr: 'L’acheteur doit-il avoir l’application Etsy ?',
        it: 'L’acquirente deve avere l’app di Etsy?',
      },
      a: {
        es: 'No. El código contiene un enlace web normal, que se abre en el navegador del teléfono. Si la persona tiene la app instalada, el teléfono puede ofrecerle abrir la tienda allí.',
        en: 'No. The code contains an ordinary web link, which opens in the phone’s browser. If the person has the app installed, the phone may offer to open the shop there.',
        pt: 'Não. O código contém um link comum, que abre no navegador do celular. Se a pessoa tiver o app instalado, o celular pode oferecer abrir a loja nele.',
        fr: 'Non. Le code contient un lien web ordinaire, qui s’ouvre dans le navigateur du téléphone. Si la personne a installé l’application, le téléphone peut proposer d’y ouvrir la boutique.',
        it: 'No. Il codice contiene un normale link web, che si apre nel browser del telefono. Se la persona ha l’app installata, il telefono può proporre di aprire lì il negozio.',
      },
    },
  ],
};

export default content;
