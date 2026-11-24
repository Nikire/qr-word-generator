import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de eBay',
    en: 'What an eBay QR code is for',
    pt: 'Para que serve um código QR do eBay',
    fr: 'À quoi sert un code QR eBay',
    it: 'A cosa serve un codice QR di eBay',
  },
  about: {
    es: 'El código abre tu tienda de eBay o tu perfil de vendedor, con todos tus artículos en venta y tus valoraciones. Es una forma sencilla de que un comprador vuelva a encontrarte: en lugar de buscar tu nombre entre miles de vendedores, escanea el código que venía en el paquete o que vio en tu puesto.',
    en: 'The code opens your eBay store or your seller profile, with all your items for sale and your feedback. It is a simple way for a buyer to find you again: instead of searching for your name among thousands of sellers, they scan the code that came in the parcel or that they saw on your stall.',
    pt: 'O código abre a sua loja do eBay ou o seu perfil de vendedor, com todos os seus itens à venda e as suas avaliações. É uma forma simples de um comprador encontrar você de novo: em vez de procurar o seu nome entre milhares de vendedores, ele escaneia o código que veio no pacote ou que viu no seu estande.',
    fr: 'Le code ouvre votre boutique eBay ou votre profil vendeur, avec tous vos objets en vente et vos évaluations. C’est un moyen simple pour un acheteur de vous retrouver : au lieu de chercher votre pseudo parmi des milliers de vendeurs, il scanne le code glissé dans le colis ou vu sur votre stand.',
    it: 'Il codice apre il tuo negozio eBay o il tuo profilo venditore, con tutti i tuoi oggetti in vendita e i tuoi feedback. È un modo semplice perché un acquirente ti ritrovi: invece di cercare il tuo nome tra migliaia di venditori, scansiona il codice che era nel pacco o che ha visto sul tuo banco.',
  },
  uses: [
    {
      es: 'Tarjetas dentro de cada paquete, para que el comprador vea el resto de tu catálogo y vuelva a comprarte.',
      en: 'Cards inside each parcel, so the buyer sees the rest of your catalogue and buys from you again.',
      pt: 'Cartões dentro de cada pacote, para que o comprador veja o restante do seu catálogo e compre de novo.',
      fr: 'Cartes glissées dans chaque colis, pour que l’acheteur voie le reste de votre catalogue et commande à nouveau.',
      it: 'Cartoncini dentro ogni pacco, perché l’acquirente veda il resto del tuo catalogo e torni a comprare.',
    },
    {
      es: 'Mercados de segunda mano, ferias de coleccionismo y de antigüedades: lo que no llevaste al puesto está en la tienda.',
      en: 'Flea markets, collectors’ fairs and antiques fairs: whatever you did not bring to the stall is in the store.',
      pt: 'Mercados de usados, feiras de colecionismo e de antiguidades: o que você não levou ao estande está na loja.',
      fr: 'Brocantes, salons de collectionneurs et d’antiquités : ce que vous n’avez pas apporté sur le stand se trouve dans la boutique.',
      it: 'Mercatini dell’usato, fiere del collezionismo e dell’antiquariato: ciò che non hai portato al banco è nel negozio.',
    },
    {
      es: 'Tiendas físicas que también venden en eBay: junto a la caja o en el escaparate, para comprar fuera de horario.',
      en: 'Physical shops that also sell on eBay: by the till or in the window, for buying outside opening hours.',
      pt: 'Lojas físicas que também vendem no eBay: junto ao caixa ou na vitrine, para comprar fora do horário.',
      fr: 'Boutiques physiques qui vendent aussi sur eBay : près de la caisse ou en vitrine, pour acheter en dehors des horaires d’ouverture.',
      it: 'Negozi fisici che vendono anche su eBay: vicino alla cassa o in vetrina, per comprare fuori orario.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Elijo la opción de tienda o la de perfil de vendedor?',
        en: 'Should I choose the store option or the seller profile?',
        pt: 'Escolho a opção de loja ou a de perfil de vendedor?',
        fr: 'Faut-il choisir l’option boutique ou le profil vendeur ?',
        it: 'Scelgo l’opzione negozio o il profilo venditore?',
      },
      a: {
        es: 'La de tienda es para quienes tienen una Tienda eBay, con dirección propia del tipo ebay.com/str/nombre. Si vendes sin tienda, usa el perfil de vendedor: se arma con tu ID de usuario y muestra tus valoraciones y tus artículos en venta.',
        en: 'The store option is for sellers with an eBay Store, which has its own address of the form ebay.com/str/name. If you sell without a store, use the seller profile: it is built from your user ID and shows your feedback and your items for sale.',
        pt: 'A de loja é para quem tem uma Loja eBay, com endereço próprio do tipo ebay.com/str/nome. Se você vende sem loja, use o perfil de vendedor: ele é montado com o seu ID de usuário e mostra as suas avaliações e os seus itens à venda.',
        fr: 'L’option boutique s’adresse aux vendeurs qui ont une Boutique eBay, avec sa propre adresse du type ebay.com/str/nom. Si vous vendez sans boutique, utilisez le profil vendeur : il se construit avec votre pseudo et affiche vos évaluations et vos objets en vente.',
        it: 'L’opzione negozio è per chi ha un Negozio eBay, con un indirizzo proprio del tipo ebay.com/str/nome. Se vendi senza negozio, usa il profilo venditore: si costruisce con il tuo ID utente e mostra i tuoi feedback e i tuoi oggetti in vendita.',
      },
    },
    {
      q: {
        es: '¿Puedo hacer un código para un solo anuncio?',
        en: 'Can I make a code for a single listing?',
        pt: 'Posso fazer um código para um único anúncio?',
        fr: 'Puis-je créer un code pour une seule annonce ?',
        it: 'Posso creare un codice per una sola inserzione?',
      },
      a: {
        es: 'Con esta plantilla no: abre la tienda o el perfil. Para un anuncio concreto, copia su enlace y usa la plantilla de URL personalizada. Ten en cuenta que los anuncios terminan, mientras que el enlace a tu tienda o perfil sigue siendo válido.',
        en: 'Not with this template: it opens the store or the profile. For one specific listing, copy its link and use the Custom URL template. Bear in mind that listings end, whereas the link to your store or profile stays valid.',
        pt: 'Com este modelo, não: ele abre a loja ou o perfil. Para um anúncio específico, copie o link e use o modelo de URL personalizada. Lembre-se de que os anúncios terminam, enquanto o link da sua loja ou perfil continua válido.',
        fr: 'Pas avec ce modèle : il ouvre la boutique ou le profil. Pour une annonce précise, copiez son lien et utilisez le modèle URL personnalisée. Gardez à l’esprit que les annonces prennent fin, alors que le lien vers votre boutique ou votre profil reste valable.',
        it: 'Con questo modello no: apre il negozio o il profilo. Per un’inserzione specifica, copia il suo link e usa il modello URL personalizzato. Tieni presente che le inserzioni scadono, mentre il link al tuo negozio o profilo resta valido.',
      },
    },
  ],
};

export default content;
