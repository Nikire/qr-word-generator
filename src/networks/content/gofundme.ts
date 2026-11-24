import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Difunde tu campaña con un código QR de GoFundMe',
    en: 'Spread the word about your fundraiser with a GoFundMe QR code',
    pt: 'Divulgue a sua campanha com um código QR do GoFundMe',
    fr: 'Faites connaître votre cagnotte avec un code QR GoFundMe',
    it: 'Fai conoscere la tua raccolta fondi con un codice QR di GoFundMe',
  },
  about: {
    es: 'El código abre tu campaña en GoFundMe, con la historia, el avance de la recaudación y el botón para donar. Una campaña suele difundirse por internet; el código la lleva a los lugares donde no se puede hacer clic en un enlace: carteles, eventos solidarios y comercios del barrio.',
    en: 'The code opens your fundraiser on GoFundMe, with the story, the progress so far and the donate button. A fundraiser usually spreads online; the code takes it to places where nobody can click a link: posters, charity events and local shops.',
    pt: 'O código abre a sua campanha no GoFundMe, com a história, o andamento da arrecadação e o botão para doar. Uma campanha costuma circular pela internet; o código a leva aos lugares onde não dá para clicar em um link: cartazes, eventos beneficentes e comércios do bairro.',
    fr: 'Le code ouvre votre cagnotte sur GoFundMe, avec son histoire, l’avancement de la collecte et le bouton pour donner. Une cagnotte circule surtout en ligne ; le code l’amène là où l’on ne peut pas cliquer sur un lien : affiches, événements solidaires et commerces de quartier.',
    it: 'Il codice apre la tua raccolta fondi su GoFundMe, con la storia, l’andamento della raccolta e il pulsante per donare. Una raccolta di solito si diffonde online; il codice la porta nei luoghi in cui non si può cliccare un link: manifesti, eventi di beneficenza e negozi di quartiere.',
  },
  uses: [
    {
      es: 'Carteles en comercios del barrio, escuelas, clubes y centros comunitarios.',
      en: 'Posters in local shops, schools, clubs and community centres.',
      pt: 'Cartazes em comércios do bairro, escolas, clubes e centros comunitários.',
      fr: 'Affiches dans les commerces de quartier, les écoles, les clubs et les centres associatifs.',
      it: 'Manifesti nei negozi di quartiere, nelle scuole, nei circoli e nei centri civici.',
    },
    {
      es: 'Eventos solidarios como rifas, carreras o conciertos benéficos: en la entrada y en las mesas.',
      en: 'Charity events such as raffles, runs or benefit concerts: at the entrance and on the tables.',
      pt: 'Eventos beneficentes como rifas, corridas ou shows solidários: na entrada e nas mesas.',
      fr: 'Événements solidaires comme des tombolas, des courses ou des concerts caritatifs : à l’entrée et sur les tables.',
      it: 'Eventi di beneficenza come lotterie, corse o concerti solidali: all’ingresso e sui tavoli.',
    },
    {
      es: 'Folletos impresos y avisos en el periódico local o en el boletín de una asociación.',
      en: 'Printed leaflets and notices in the local paper or an association’s newsletter.',
      pt: 'Folhetos impressos e anúncios no jornal local ou no boletim de uma associação.',
      fr: 'Tracts imprimés et annonces dans le journal local ou le bulletin d’une association.',
      it: 'Volantini stampati e annunci sul giornale locale o sul bollettino di un’associazione.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Por qué no puedo usar el enlace corto gofund.me?',
        en: 'Why can’t I use the short gofund.me link?',
        pt: 'Por que não posso usar o link curto gofund.me?',
        fr: 'Pourquoi ne puis-je pas utiliser le lien court gofund.me ?',
        it: 'Perché non posso usare il link breve gofund.me?',
      },
      a: {
        es: 'El generador arma la dirección con el nombre de la campaña, que es lo que aparece después de /f/, y el enlace corto no lo incluye. Abre tu enlace corto en el navegador, copia la dirección completa que aparece y pégala aquí, o pega solo la parte final.',
        en: 'The generator builds the address from the fundraiser’s name, which is what appears after /f/, and the short link does not include it. Open your short link in a browser, copy the full address that appears and paste it here, or paste only the final part.',
        pt: 'O gerador monta o endereço com o nome da campanha, que é o que aparece depois de /f/, e o link curto não o inclui. Abra o seu link curto no navegador, copie o endereço completo que aparece e cole aqui, ou cole apenas a parte final.',
        fr: 'Le générateur construit l’adresse à partir du nom de la cagnotte, c’est-à-dire ce qui suit /f/, et le lien court ne le contient pas. Ouvrez votre lien court dans un navigateur, copiez l’adresse complète qui s’affiche et collez-la ici, ou collez seulement la partie finale.',
        it: 'Il generatore crea l’indirizzo a partire dal nome della raccolta, cioè quello che compare dopo /f/, e il link breve non lo contiene. Apri il tuo link breve nel browser, copia l’indirizzo completo che compare e incollalo qui, oppure incolla solo la parte finale.',
      },
    },
    {
      q: {
        es: '¿Las donaciones pasan por este sitio?',
        en: 'Do donations go through this site?',
        pt: 'As doações passam por este site?',
        fr: 'Les dons transitent-ils par ce site ?',
        it: 'Le donazioni passano da questo sito?',
      },
      a: {
        es: 'No. El código solo guarda la dirección pública de la campaña. Las donaciones se hacen en GoFundMe, que es quien procesa los pagos y entrega los fondos a quien organiza la campaña.',
        en: 'No. The code only stores the public address of the fundraiser. Donations are made on GoFundMe, which processes the payments and passes the funds on to the organiser.',
        pt: 'Não. O código guarda apenas o endereço público da campanha. As doações são feitas no GoFundMe, que processa os pagamentos e repassa os fundos a quem organiza a campanha.',
        fr: 'Non. Le code ne conserve que l’adresse publique de la cagnotte. Les dons se font sur GoFundMe, qui traite les paiements et reverse les fonds à la personne qui organise la collecte.',
        it: 'No. Il codice conserva solo l’indirizzo pubblico della raccolta. Le donazioni si fanno su GoFundMe, che elabora i pagamenti e consegna i fondi a chi organizza la raccolta.',
      },
    },
  ],
};

export default content;
