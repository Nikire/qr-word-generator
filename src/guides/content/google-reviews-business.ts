import type { Guide } from '../types';

const guide: Guide = {
  id: 'google-reviews-business',
  slug: {
    es: 'codigo-qr-para-resenas-de-google',
    en: 'qr-code-for-google-reviews',
    pt: 'qr-code-para-avaliacoes-do-google',
    fr: 'qr-code-avis-google',
    it: 'codice-qr-recensioni-google',
  },
  title: {
    es: 'Código QR para reseñas de Google: guía para tu negocio',
    en: 'QR code for Google reviews: a guide for local businesses',
    pt: 'QR code para avaliações do Google: guia para o seu negócio',
    fr: 'QR code avis Google : le guide pour votre établissement',
    it: 'Codice QR per le recensioni Google: guida per la tua attività',
  },
  description: {
    es: 'Consigue más reseñas de Google con un código QR: cómo obtener el enlace, dónde colocarlo, cuándo pedir la opinión y qué prohíben las políticas de Google.',
    en: 'Get more Google reviews with a QR code: how to find your review link, where to place the code, when to ask customers and what Google’s policies forbid.',
    pt: 'Consiga mais avaliações no Google com um QR code: como obter o link, onde colocar o código, quando pedir a opinião e o que as políticas do Google proíbem.',
    fr: 'Obtenez plus d’avis Google grâce à un QR code : où trouver le lien, où placer le code, quand solliciter vos clients et ce que les règles de Google interdisent.',
    it: 'Ottieni più recensioni su Google con un codice QR: come trovare il link, dove mettere il codice, quando chiederle e cosa vietano le norme di Google.',
  },
  intro: {
    es: 'La mayoría de los clientes satisfechos no deja una reseña porque nadie se lo pide o porque llegar al formulario lleva demasiados pasos. Un código QR impreso en el lugar adecuado abre directamente la pantalla de las estrellas. Esta guía explica cómo crearlo, dónde ponerlo, cuándo pedir la reseña y qué prácticas prohíbe Google.',
    en: 'Most satisfied customers never leave a review because nobody asks them, or because reaching the form takes too many steps. A QR code printed in the right spot opens the star rating screen directly. This guide explains how to create one, where to put it, when to ask for the review and which practices Google prohibits.',
    pt: 'A maioria dos clientes satisfeitos não deixa uma avaliação porque ninguém pede ou porque chegar ao formulário exige passos demais. Um código QR impresso no lugar certo abre direto a tela das estrelas. Este guia explica como criá-lo, onde colocá-lo, quando pedir a avaliação e quais práticas o Google proíbe.',
    fr: 'La plupart des clients satisfaits ne laissent pas d’avis parce que personne ne le leur demande, ou parce qu’atteindre le formulaire prend trop d’étapes. Un code QR imprimé au bon endroit ouvre directement l’écran des étoiles. Ce guide explique comment le créer, où le placer, quand demander l’avis et quelles pratiques Google interdit.',
    it: 'La maggior parte dei clienti soddisfatti non lascia una recensione perché nessuno glielo chiede, o perché arrivare al modulo richiede troppi passaggi. Un codice QR stampato nel punto giusto apre direttamente la schermata delle stelle. Questa guida spiega come crearlo, dove metterlo, quando chiedere la recensione e quali pratiche Google vieta.',
  },
  sections: [
    {
      h: {
        es: 'Por qué importan las reseñas en la búsqueda local',
        en: 'Why reviews matter in local search',
        pt: 'Por que as avaliações importam na busca local',
        fr: 'Pourquoi les avis comptent dans la recherche locale',
        it: 'Perché le recensioni contano nella ricerca locale',
      },
      p: [
        {
          es: 'Google explica que ordena los resultados locales según tres factores: relevancia, distancia y prominencia. La cantidad de reseñas y la puntuación forman parte de la prominencia, así que un perfil con opiniones recientes tiene más posibilidades de aparecer en el mapa cuando alguien busca cerca lo que ofreces.',
          en: 'Google says it ranks local results on three factors: relevance, distance and prominence. Review count and rating feed into prominence, so a profile with recent reviews stands a better chance of appearing on the map when someone nearby searches for what you offer.',
          pt: 'O Google explica que ordena os resultados locais com base em três fatores: relevância, distância e destaque. A quantidade de avaliações e a nota fazem parte do destaque, então um perfil com opiniões recentes tem mais chance de aparecer no mapa quando alguém procura por perto o que você oferece.',
          fr: 'Google indique classer les résultats locaux selon trois critères : la pertinence, la distance et la notoriété. Le nombre d’avis et la note entrent dans la notoriété : une fiche qui reçoit des avis récents a donc plus de chances d’apparaître sur la carte lorsqu’une personne cherche à proximité ce que vous proposez.',
          it: 'Google spiega di ordinare i risultati locali in base a tre fattori: pertinenza, distanza ed evidenza. Il numero di recensioni e il punteggio rientrano nell’evidenza, quindi un profilo con recensioni recenti ha più probabilità di comparire sulla mappa quando qualcuno cerca nelle vicinanze ciò che offri.',
        },
        {
          es: 'También pesan en la decisión: quien compara dos negocios parecidos suele leer las últimas opiniones antes de elegir.',
          en: 'They also weigh on the decision itself: people comparing two similar businesses tend to read the latest reviews before choosing.',
          pt: 'Elas também pesam na decisão: quem compara dois negócios parecidos costuma ler as últimas opiniões antes de escolher.',
          fr: 'Ils pèsent aussi sur la décision : une personne qui hésite entre deux établissements comparables lit généralement les derniers avis avant de choisir.',
          it: 'Pesano anche sulla scelta: chi confronta due attività simili di solito legge le ultime recensioni prima di decidere.',
        },
      ],
    },
    {
      h: {
        es: 'Cómo conseguir el enlace o el identificador',
        en: 'How to get the link or the ID',
        pt: 'Como conseguir o link ou o identificador',
        fr: 'Comment obtenir le lien ou l’identifiant',
        it: 'Come ottenere il link o l’identificativo',
      },
      p: [
        {
          es: 'La plantilla de Google Reviews tiene dos modos. El primero usa el enlace corto de reseñas de tu Perfil de Empresa, que tiene la forma g.page/r/CÓDIGO/review; el segundo usa el Place ID, el identificador de tu negocio en Google Maps. Los dos abren el mismo formulario.',
          en: 'The Google Reviews template has two modes. The first uses the short review link from your Business Profile, which looks like g.page/r/CODE/review; the second uses the Place ID, your business’s identifier on Google Maps. Both open the same form.',
          pt: 'O modelo do Google Reviews tem dois modos. O primeiro usa o link curto de avaliações do seu Perfil da Empresa, no formato g.page/r/CÓDIGO/review; o segundo usa o Place ID, o identificador do seu negócio no Google Maps. Os dois abrem o mesmo formulário.',
          fr: 'Le modèle Google Reviews propose deux modes. Le premier utilise le lien d’avis court de votre fiche d’établissement, de la forme g.page/r/CODE/review ; le second utilise le Place ID, l’identifiant de votre établissement dans Google Maps. Les deux ouvrent le même formulaire.',
          it: 'Il modello Google Reviews ha due modalità. La prima usa il link breve per le recensioni del tuo Profilo dell’attività, nella forma g.page/r/CODICE/review; la seconda usa il Place ID, l’identificativo della tua attività su Google Maps. Entrambe aprono lo stesso modulo.',
        },
        {
          es: 'El código sale con el logo de Google en el centro, que ayuda a entender de un vistazo para qué sirve. Si prefieres el logo de tu negocio, pega el enlace de reseñas completo en la plantilla de URL personalizada y sube tu imagen.',
          en: 'The code comes with the Google logo in the centre, which helps people see at a glance what it is for. If you would rather show your own logo, paste the full review link into the custom URL template and upload your image.',
          pt: 'O código sai com o logo do Google no centro, o que ajuda a entender de imediato para que ele serve. Se preferir o logo do seu negócio, cole o link de avaliações completo no modelo de URL personalizada e envie a sua imagem.',
          fr: 'Le code est généré avec le logo Google au centre, ce qui aide à comprendre d’un coup d’œil à quoi il sert. Si vous préférez le logo de votre établissement, collez le lien d’avis complet dans le modèle URL personnalisée et importez votre image.',
          it: 'Il codice viene generato con il logo di Google al centro, che aiuta a capire a colpo d’occhio a cosa serve. Se preferisci il logo della tua attività, incolla il link completo delle recensioni nel modello URL personalizzato e carica la tua immagine.',
        },
      ],
      list: [
        {
          es: 'Inicia sesión con la cuenta que administra el negocio y busca su nombre en Google, o ábrelo en la aplicación de Google Maps.',
          en: 'Sign in with the account that manages the business and search for its name on Google, or open it in the Google Maps app.',
          pt: 'Entre com a conta que administra o negócio e pesquise o nome dele no Google, ou abra-o no aplicativo do Google Maps.',
          fr: 'Connectez-vous avec le compte qui gère l’établissement et recherchez son nom sur Google, ou ouvrez-le dans l’application Google Maps.',
          it: 'Accedi con l’account che gestisce l’attività e cerca il suo nome su Google, oppure aprila nell’app Google Maps.',
        },
        {
          es: 'En el panel del perfil, elige Pedir reseñas y copia el enlace que aparece.',
          en: 'In the profile panel, choose Ask for reviews and copy the link shown.',
          pt: 'No painel do perfil, escolha Pedir avaliações e copie o link exibido.',
          fr: 'Dans le panneau de la fiche, choisissez Demander des avis et copiez le lien affiché.',
          it: 'Nel pannello del profilo, scegli Chiedi recensioni e copia il link mostrato.',
        },
        {
          es: 'En la plantilla, pega solo la parte que está entre g.page/r/ y /review.',
          en: 'In the template, paste only the part between g.page/r/ and /review.',
          pt: 'No modelo, cole apenas a parte que fica entre g.page/r/ e /review.',
          fr: 'Dans le modèle, collez uniquement la partie située entre g.page/r/ et /review.',
          it: 'Nel modello, incolla solo la parte compresa tra g.page/r/ e /review.',
        },
        {
          es: 'Si no encuentras esa opción, busca tu negocio en el Place ID Finder de Google, copia el identificador y usa el modo Place ID.',
          en: 'If you cannot find that option, look your business up in Google’s Place ID Finder, copy the ID and use the Place ID mode.',
          pt: 'Se não encontrar essa opção, procure o seu negócio no Place ID Finder do Google, copie o identificador e use o modo Place ID.',
          fr: 'Si vous ne trouvez pas cette option, recherchez votre établissement dans le Place ID Finder de Google, copiez l’identifiant et utilisez le mode Place ID.',
          it: 'Se non trovi questa opzione, cerca la tua attività nel Place ID Finder di Google, copia l’identificativo e usa la modalità Place ID.',
        },
        {
          es: 'Escanea el resultado con tu teléfono y descarga el código en SVG para imprimir o en PNG para pantallas.',
          en: 'Scan the result with your phone, then download the code as SVG for print or as PNG for screens.',
          pt: 'Leia o resultado com o seu celular e baixe o código em SVG para imprimir ou em PNG para telas.',
          fr: 'Scannez le résultat avec votre téléphone, puis téléchargez le code en SVG pour l’impression ou en PNG pour les écrans.',
          it: 'Scansiona il risultato con il telefono e scarica il codice in SVG per la stampa o in PNG per gli schermi.',
        },
      ],
    },
    {
      h: {
        es: 'Dónde colocar el código',
        en: 'Where to place the code',
        pt: 'Onde colocar o código',
        fr: 'Où placer le code',
        it: 'Dove mettere il codice',
      },
      p: [
        {
          es: 'Ponlo donde el cliente tenga el teléfono a mano y un momento libre. Acompáñalo siempre con una frase que diga qué va a pasar, por ejemplo «Cuéntanos cómo te fue en Google».',
          en: 'Put it where customers have their phone to hand and a moment to spare. Always add a line saying what will happen, for example “Tell us how we did on Google”.',
          pt: 'Coloque-o onde o cliente esteja com o celular à mão e tenha um momento livre. Inclua sempre uma frase dizendo o que vai acontecer, por exemplo “Conte como foi a sua experiência no Google”.',
          fr: 'Placez-le là où le client a son téléphone à portée de main et un instant devant lui. Ajoutez toujours une phrase qui annonce ce qui va se passer, par exemple « Donnez-nous votre avis sur Google ».',
          it: 'Mettilo dove il cliente ha il telefono a portata di mano e un momento libero. Aggiungi sempre una frase che dica che cosa succederà, per esempio «Raccontaci com’è andata su Google».',
        },
        {
          es: 'Para escanear de cerca alcanza con unos 2 cm de lado; en un cartel, calcula una décima parte de la distancia de lectura, es decir, unos 10 cm para un metro. En la misma tarjeta puedes sumar un segundo código hacia tu Instagram, tu Facebook o tu WhatsApp, cada uno con su rótulo, pero no más de dos.',
          en: 'For close-up scanning about 2 cm (0.8 in) per side is enough; on a sign, allow one tenth of the scanning distance, which means about 10 cm for one metre. On the same card you can add a second code for your Instagram, Facebook or WhatsApp, each with its own label, but no more than two.',
          pt: 'Para leitura de perto, cerca de 2 cm de lado é suficiente; em um cartaz, calcule um décimo da distância de leitura, ou seja, uns 10 cm para um metro. No mesmo cartão você pode incluir um segundo código para o seu Instagram, Facebook ou WhatsApp, cada um com a sua legenda, mas não mais de dois.',
          fr: 'Pour un scan de près, environ 2 cm de côté suffisent ; sur une affiche, comptez un dixième de la distance de lecture, soit environ 10 cm pour un mètre. Sur la même carte, vous pouvez ajouter un second code vers votre Instagram, votre Facebook ou votre WhatsApp, chacun avec sa légende, mais pas plus de deux.',
          it: 'Per la scansione da vicino bastano circa 2 cm di lato; su un cartello calcola un decimo della distanza di lettura, cioè circa 10 cm per un metro. Sullo stesso biglietto puoi aggiungere un secondo codice verso il tuo Instagram, Facebook o WhatsApp, ognuno con la sua didascalia, ma non più di due.',
        },
      ],
      list: [
        {
          es: 'Mostrador o caja, en un soporte a la altura de la vista.',
          en: 'Counter or till, on a stand at eye level.',
          pt: 'Balcão ou caixa, em um display na altura dos olhos.',
          fr: 'Comptoir ou caisse, sur un présentoir à hauteur des yeux.',
          it: 'Bancone o cassa, su un espositore all’altezza degli occhi.',
        },
        {
          es: 'Recibo o cuenta, impreso al pie.',
          en: 'Receipt or bill, printed at the bottom.',
          pt: 'Recibo ou conta, impresso no rodapé.',
          fr: 'Reçu ou addition, imprimé en bas.',
          it: 'Scontrino o conto, stampato in fondo.',
        },
        {
          es: 'Empaque o bolsa, con una etiqueta adhesiva.',
          en: 'Packaging or bag, on a sticker.',
          pt: 'Embalagem ou sacola, com uma etiqueta adesiva.',
          fr: 'Emballage ou sac, sur une étiquette adhésive.',
          it: 'Confezione o sacchetto, con un’etichetta adesiva.',
        },
        {
          es: 'Mesa, en un soporte pequeño o en la carta.',
          en: 'Table, on a small stand or on the menu.',
          pt: 'Mesa, em um display pequeno ou no cardápio.',
          fr: 'Table, sur un petit chevalet ou sur la carte.',
          it: 'Tavolo, su un piccolo espositore o sul menu.',
        },
        {
          es: 'Tarjeta de presentación, en el reverso.',
          en: 'Business card, on the back.',
          pt: 'Cartão de visita, no verso.',
          fr: 'Carte de visite, au verso.',
          it: 'Biglietto da visita, sul retro.',
        },
        {
          es: 'Tarjeta de agradecimiento dentro de los pedidos en línea.',
          en: 'Thank-you card inside online orders.',
          pt: 'Cartão de agradecimento dentro dos pedidos online.',
          fr: 'Carte de remerciement glissée dans les commandes en ligne.',
          it: 'Biglietto di ringraziamento dentro gli ordini online.',
        },
      ],
    },
    {
      h: {
        es: 'Cuándo pedir la reseña',
        en: 'When to ask for the review',
        pt: 'Quando pedir a avaliação',
        fr: 'Quand demander l’avis',
        it: 'Quando chiedere la recensione',
      },
      p: [
        {
          es: 'El mejor momento es justo después de una buena experiencia: al entregar el trabajo terminado, al cobrar, cuando el cliente agradece o hace un comentario positivo. Pedirlo en persona funciona mejor que dejar el cartel y esperar: basta con una frase como «Si tienes un minuto, nos ayuda mucho tu opinión en Google» y señalar el código.',
          en: 'The best moment is right after a good experience: when you hand over the finished job, at payment, when the customer says thanks or makes a positive remark. Asking in person works better than leaving a sign and waiting: a sentence such as “If you have a minute, your review on Google really helps us” and a gesture towards the code is enough.',
          pt: 'O melhor momento é logo depois de uma boa experiência: na entrega do trabalho pronto, na hora do pagamento, quando o cliente agradece ou faz um comentário positivo. Pedir pessoalmente funciona melhor do que deixar a placa e esperar: basta uma frase como “Se tiver um minuto, a sua opinião no Google nos ajuda muito” e apontar para o código.',
          fr: 'Le meilleur moment se situe juste après une bonne expérience : à la remise du travail terminé, au moment du paiement, lorsque le client remercie ou fait une remarque positive. Demander de vive voix fonctionne mieux que poser l’affiche et attendre : une phrase comme « Si vous avez une minute, votre avis sur Google nous aide beaucoup », en montrant le code, suffit.',
          it: 'Il momento migliore è subito dopo una buona esperienza: alla consegna del lavoro finito, al pagamento, quando il cliente ringrazia o fa un commento positivo. Chiederlo di persona funziona meglio che lasciare il cartello e aspettare: basta una frase come «Se hai un minuto, la tua opinione su Google ci aiuta molto» e indicare il codice.',
        },
      ],
    },
    {
      h: {
        es: 'Lo que prohíben las políticas de Google',
        en: 'What Google’s policies forbid',
        pt: 'O que as políticas do Google proíbem',
        fr: 'Ce que les règles de Google interdisent',
        it: 'Che cosa vietano le norme di Google',
      },
      p: [
        {
          es: 'Google permite pedir reseñas, pero exige que reflejen una experiencia real y que no estén condicionadas. Incumplir estas reglas puede llevar a que eliminen reseñas o restrinjan el perfil, y en muchos países las reseñas falsas también infringen las leyes de protección al consumidor.',
          en: 'Google allows you to ask for reviews, but requires them to reflect a genuine experience and to come with no strings attached. Breaking these rules can lead to reviews being removed or the profile being restricted, and in many countries fake reviews also breach consumer protection law.',
          pt: 'O Google permite pedir avaliações, mas exige que elas reflitam uma experiência real e que não sejam condicionadas. Descumprir essas regras pode levar à remoção de avaliações ou a restrições no perfil, e em muitos países avaliações falsas também violam as leis de defesa do consumidor.',
          fr: 'Google autorise à demander des avis, mais exige qu’ils reflètent une expérience réelle et ne soient soumis à aucune condition. Enfreindre ces règles peut entraîner la suppression d’avis ou des restrictions sur la fiche, et dans de nombreux pays les faux avis sont aussi contraires au droit de la consommation.',
          it: 'Google consente di chiedere recensioni, ma esige che riflettano un’esperienza reale e che non siano condizionate. Violare queste regole può portare alla rimozione di recensioni o a limitazioni del profilo, e in molti paesi le recensioni false violano anche le leggi a tutela dei consumatori.',
        },
      ],
      list: [
        {
          es: 'Ofrecer incentivos: descuentos, regalos, sorteos o dinero a cambio de una reseña, o a cambio de modificar o retirar una negativa.',
          en: 'Offering incentives: discounts, gifts, prize draws or money in exchange for a review, or for changing or removing a negative one.',
          pt: 'Oferecer incentivos: descontos, brindes, sorteios ou dinheiro em troca de uma avaliação, ou em troca de alterar ou remover uma negativa.',
          fr: 'Offrir une contrepartie : réductions, cadeaux, tirages au sort ou argent en échange d’un avis, ou pour faire modifier ou retirer un avis négatif.',
          it: 'Offrire incentivi: sconti, omaggi, estrazioni a premi o denaro in cambio di una recensione, oppure per far modificare o rimuovere una recensione negativa.',
        },
        {
          es: 'Filtrar a quién se le pide: invitar solo a los clientes contentos, o desalentar a los insatisfechos para que no opinen en público.',
          en: 'Review gating: inviting only happy customers, or discouraging unhappy ones from posting publicly.',
          pt: 'Filtrar a quem se pede: convidar apenas os clientes satisfeitos, ou desencorajar os insatisfeitos de opinar publicamente.',
          fr: 'Trier les clients sollicités : n’inviter que les clients satisfaits, ou dissuader les mécontents de s’exprimer publiquement.',
          it: 'Selezionare a chi chiederla: invitare solo i clienti soddisfatti, o scoraggiare quelli scontenti dal pubblicare la loro opinione.',
        },
        {
          es: 'Reseñas falsas: las que escriben el dueño, los empleados o conocidos que no fueron clientes, y las compradas a terceros.',
          en: 'Fake reviews: those written by the owner, by staff or by acquaintances who were never customers, and those bought from third parties.',
          pt: 'Avaliações falsas: as escritas pelo dono, por funcionários ou por conhecidos que não foram clientes, e as compradas de terceiros.',
          fr: 'Faux avis : ceux rédigés par le gérant, par les employés ou par des proches qui n’ont jamais été clients, et ceux achetés à des tiers.',
          it: 'Recensioni false: quelle scritte dal titolare, dai dipendenti o da conoscenti che non sono mai stati clienti, e quelle comprate da terzi.',
        },
      ],
    },
    {
      h: {
        es: 'Responde a las reseñas',
        en: 'Reply to your reviews',
        pt: 'Responda às avaliações',
        fr: 'Répondez aux avis',
        it: 'Rispondi alle recensioni',
      },
      p: [
        {
          es: 'Con el perfil verificado puedes responder a cada opinión, y Google recomienda hacerlo. Agradece las positivas en una o dos líneas, sin copiar siempre el mismo texto. En las negativas, responde con calma, reconoce el problema si existió, explica qué hiciste para resolverlo y ofrece un contacto directo. No incluyas datos personales del cliente.',
          en: 'With a verified profile you can reply to every review, and Google recommends doing so. Thank positive reviewers in a line or two, without pasting the same text each time. With negative ones, answer calmly, acknowledge the problem if there was one, explain what you did to put it right and offer a direct contact. Do not include the customer’s personal details.',
          pt: 'Com o perfil verificado você pode responder a cada opinião, e o Google recomenda fazer isso. Agradeça as positivas em uma ou duas linhas, sem copiar sempre o mesmo texto. Nas negativas, responda com calma, reconheça o problema se ele existiu, explique o que fez para resolver e ofereça um contato direto. Não inclua dados pessoais do cliente.',
          fr: 'Avec une fiche validée, vous pouvez répondre à chaque avis, et Google recommande de le faire. Remerciez les avis positifs en une ou deux lignes, sans recopier toujours le même texte. Face à un avis négatif, répondez calmement, reconnaissez le problème s’il a existé, expliquez ce que vous avez fait pour le résoudre et proposez un contact direct. N’indiquez aucune donnée personnelle du client.',
          it: 'Con il profilo verificato puoi rispondere a ogni recensione, e Google consiglia di farlo. Ringrazia per quelle positive in una o due righe, senza copiare sempre lo stesso testo. A quelle negative rispondi con calma, riconosci il problema se c’è stato, spiega che cosa hai fatto per risolverlo e offri un contatto diretto. Non inserire dati personali del cliente.',
        },
      ],
    },
  ],
  templates: ['googlereviews', 'url', 'whatsapp', 'instagram', 'facebook'],
  faq: [
    {
      q: {
        es: '¿El cliente necesita una cuenta de Google para dejar una reseña?',
        en: 'Does the customer need a Google account to leave a review?',
        pt: 'O cliente precisa de uma conta do Google para deixar uma avaliação?',
        fr: 'Le client a-t-il besoin d’un compte Google pour laisser un avis ?',
        it: 'Il cliente ha bisogno di un account Google per lasciare una recensione?',
      },
      a: {
        es: 'Sí. Al escanear el código, Google pide iniciar sesión si el teléfono no tiene una cuenta activa. La reseña se publica con el nombre y la foto de esa cuenta; no existe la opción de opinar de forma anónima.',
        en: 'Yes. After scanning the code, Google asks the customer to sign in if the phone has no active account. The review is published under that account’s name and photo; there is no option to post anonymously.',
        pt: 'Sim. Ao ler o código, o Google pede o login se o celular não tiver uma conta ativa. A avaliação é publicada com o nome e a foto dessa conta; não existe a opção de opinar de forma anônima.',
        fr: 'Oui. Après le scan, Google demande de se connecter si aucun compte n’est actif sur le téléphone. L’avis est publié avec le nom et la photo de ce compte ; il n’est pas possible de publier anonymement.',
        it: 'Sì. Dopo la scansione, Google chiede di accedere se sul telefono non c’è un account attivo. La recensione viene pubblicata con il nome e la foto di quell’account; non è possibile pubblicarla in forma anonima.',
      },
    },
    {
      q: {
        es: '¿El código deja de funcionar con el tiempo?',
        en: 'Does the code stop working over time?',
        pt: 'O código deixa de funcionar com o tempo?',
        fr: 'Le code cesse-t-il de fonctionner avec le temps ?',
        it: 'Il codice smette di funzionare con il tempo?',
      },
      a: {
        es: 'No vence ni tiene límite de escaneos, porque es un código estático que solo guarda el enlace. Seguirá funcionando mientras exista tu perfil.',
        en: 'It does not expire and has no scan limit, because it is a static code that only stores the link. It will keep working for as long as your profile exists.',
        pt: 'Ele não expira nem tem limite de leituras, porque é um código estático que só guarda o link. Vai continuar funcionando enquanto o seu perfil existir.',
        fr: 'Il n’expire pas et n’a aucune limite de scans, car c’est un code statique qui ne contient que le lien. Il fonctionnera tant que votre fiche existera.',
        it: 'Non scade e non ha limiti di scansioni, perché è un codice statico che contiene solo il link. Continuerà a funzionare finché esisterà il tuo profilo.',
      },
    },
    {
      q: {
        es: '¿Puedo eliminar una reseña negativa?',
        en: 'Can I remove a negative review?',
        pt: 'Posso remover uma avaliação negativa?',
        fr: 'Puis-je supprimer un avis négatif ?',
        it: 'Posso eliminare una recensione negativa?',
      },
      a: {
        es: 'No directamente. Solo Google puede retirarla, y lo hace si incumple sus políticas; para eso existe la opción de denunciar la reseña. Si es una opinión legítima, lo mejor es responder con educación y resolver el problema: el cliente puede editarla después.',
        en: 'Not directly. Only Google can take it down, and it does so when the review breaks its policies; that is what the option to report a review is for. If it is a legitimate opinion, the best course is to reply politely and fix the problem: the customer can edit the review afterwards.',
        pt: 'Não diretamente. Só o Google pode retirá-la, e faz isso se ela descumprir as políticas; para isso existe a opção de denunciar a avaliação. Se for uma opinião legítima, o melhor é responder com educação e resolver o problema: o cliente pode editá-la depois.',
        fr: 'Pas directement. Seul Google peut le retirer, et il le fait lorsque l’avis enfreint ses règles ; l’option de signalement sert à cela. S’il s’agit d’une opinion légitime, le mieux est de répondre poliment et de régler le problème : le client pourra modifier son avis par la suite.',
        it: 'Non direttamente. Solo Google può rimuoverla, e lo fa se viola le sue norme; a questo serve l’opzione per segnalare la recensione. Se è un’opinione legittima, la cosa migliore è rispondere con cortesia e risolvere il problema: il cliente potrà modificarla in seguito.',
      },
    },
  ],
};

export default guide;
