import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de SoundCloud',
    en: 'What a SoundCloud QR code is for',
    pt: 'Para que serve um código QR do SoundCloud',
    fr: 'À quoi sert un code QR SoundCloud',
    it: 'A cosa serve un codice QR di SoundCloud',
  },
  about: {
    es: 'El código abre tu perfil de SoundCloud, con tus canciones, demos, remixes y sets. Muchos productores y bandas publican allí lo que todavía no está en las tiendas digitales, y la mayoría de las pistas se pueden escuchar gratis. Eso lo convierte en una buena carta de presentación para repartir en persona.',
    en: 'The code opens your SoundCloud profile, with your tracks, demos, remixes and sets. Many producers and bands publish there what is not yet in the digital stores, and most tracks can be played for free. That makes it a good introduction to hand out in person.',
    pt: 'O código abre o seu perfil no SoundCloud, com suas faixas, demos, remixes e sets. Muitos produtores e bandas publicam ali o que ainda não está nas lojas digitais, e a maioria das faixas pode ser ouvida de graça. Isso faz dele um bom cartão de apresentação para entregar pessoalmente.',
    fr: 'Le code ouvre votre profil SoundCloud, avec vos titres, démos, remix et sets. Beaucoup de producteurs et de groupes y publient ce qui n’est pas encore sur les plateformes de vente, et la plupart des titres s’écoutent gratuitement. Cela en fait une bonne carte de visite à remettre en personne.',
    it: 'Il codice apre il tuo profilo SoundCloud, con i tuoi brani, demo, remix e set. Molti produttori e band pubblicano lì ciò che non è ancora nei negozi digitali, e la maggior parte delle tracce si ascolta gratis. Questo lo rende un buon biglietto da visita da consegnare di persona.',
  },
  uses: [
    {
      es: 'Productores y beatmakers: en la tarjeta que entregas a otros artistas, sellos o promotores.',
      en: 'Producers and beatmakers: on the card you hand to other artists, labels or promoters.',
      pt: 'Produtores e beatmakers: no cartão que você entrega a outros artistas, selos ou promotores.',
      fr: 'Producteurs et beatmakers : sur la carte que vous remettez à d’autres artistes, labels ou organisateurs.',
      it: 'Produttori e beatmaker: sul biglietto che consegni ad altri artisti, etichette o promoter.',
    },
    {
      es: 'Bandas nuevas: en carteles de ensayo abierto, adhesivos y demos en CD o casete.',
      en: 'New bands: on open rehearsal posters, stickers and demos on CD or cassette.',
      pt: 'Bandas novas: em cartazes de ensaio aberto, adesivos e demos em CD ou fita cassete.',
      fr: 'Jeunes groupes : sur des affiches de répétition ouverte, des autocollants et des démos sur CD ou cassette.',
      it: 'Band emergenti: su manifesti di prove aperte, adesivi e demo su CD o cassetta.',
    },
    {
      es: 'Escuelas de música y estudios de grabación: los trabajos de alumnos y clientes, en la recepción o en un folleto.',
      en: 'Music schools and recording studios: work by students and clients, at reception or in a leaflet.',
      pt: 'Escolas de música e estúdios de gravação: os trabalhos de alunos e clientes, na recepção ou em um folheto.',
      fr: 'Écoles de musique et studios d’enregistrement : les travaux des élèves et des clients, à l’accueil ou dans une brochure.',
      it: 'Scuole di musica e studi di registrazione: i lavori di allievi e clienti, in reception o in un pieghevole.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Por qué no sirve el enlace corto on.soundcloud.com?',
        en: 'Why does the on.soundcloud.com short link not work?',
        pt: 'Por que o link curto on.soundcloud.com não serve?',
        fr: 'Pourquoi le lien court on.soundcloud.com ne convient-il pas ?',
        it: 'Perché il link breve on.soundcloud.com non va bene?',
      },
      a: {
        es: 'El botón Compartir de la app entrega un enlace corto que no contiene tu nombre de usuario, y el formulario necesita ese nombre para armar la dirección. Abre tu perfil en el navegador y copia lo que aparece después de soundcloud.com/.',
        en: 'The app’s Share button gives a short link that does not contain your username, and the form needs that name to build the address. Open your profile in the browser and copy what appears after soundcloud.com/.',
        pt: 'O botão Compartilhar do app entrega um link curto que não contém o seu nome de usuário, e o formulário precisa desse nome para montar o endereço. Abra o seu perfil no navegador e copie o que aparece depois de soundcloud.com/.',
        fr: 'Le bouton Partager de l’application fournit un lien court qui ne contient pas votre nom d’utilisateur, et le formulaire a besoin de ce nom pour construire l’adresse. Ouvrez votre profil dans le navigateur et copiez ce qui apparaît après soundcloud.com/.',
        it: 'Il pulsante Condividi dell’app fornisce un link breve che non contiene il tuo nome utente, e il modulo ha bisogno di quel nome per costruire l’indirizzo. Apri il tuo profilo nel browser e copia ciò che compare dopo soundcloud.com/.',
      },
    },
    {
      q: {
        es: '¿El código sigue funcionando si cambio la URL de mi perfil?',
        en: 'Does the code still work if I change my profile URL?',
        pt: 'O código continua funcionando se eu mudar a URL do meu perfil?',
        fr: 'Le code fonctionne-t-il encore si je change l’URL de mon profil ?',
        it: 'Il codice funziona ancora se cambio l’URL del mio profilo?',
      },
      a: {
        es: 'No. SoundCloud permite cambiar la URL del perfil en los ajustes, pero la dirección anterior deja de llevar a tu página. Como el código es estático, tendrás que generar otro con la dirección nueva. El nombre visible, en cambio, se puede modificar sin afectar al código.',
        en: 'No. SoundCloud lets you change the profile URL in the settings, but the previous address stops leading to your page. As the code is static, you will need to generate another with the new address. The display name, on the other hand, can be changed without affecting the code.',
        pt: 'Não. O SoundCloud permite mudar a URL do perfil nas configurações, mas o endereço anterior deixa de levar à sua página. Como o código é estático, será preciso gerar outro com o endereço novo. Já o nome de exibição pode ser alterado sem afetar o código.',
        fr: 'Non. SoundCloud permet de modifier l’URL du profil dans les réglages, mais l’ancienne adresse ne mène plus à votre page. Le code étant statique, il faudra en générer un autre avec la nouvelle adresse. Le nom affiché, lui, peut être modifié sans incidence sur le code.',
        it: 'No. SoundCloud permette di cambiare l’URL del profilo nelle impostazioni, ma l’indirizzo precedente smette di portare alla tua pagina. Poiché il codice è statico, dovrai generarne un altro con il nuovo indirizzo. Il nome visualizzato, invece, si può modificare senza effetti sul codice.',
      },
    },
  ],
};

export default content;
