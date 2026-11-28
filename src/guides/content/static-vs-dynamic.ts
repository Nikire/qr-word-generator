import type { Guide } from '../types';

const guide: Guide = {
  id: 'static-vs-dynamic',
  slug: {
    es: 'los-codigos-qr-caducan',
    en: 'do-qr-codes-expire',
    pt: 'qr-code-expira',
    fr: 'code-qr-gratuit-sans-expiration',
    it: 'i-codici-qr-scadono',
  },
  title: {
    es: '¿Los códigos QR caducan? Estáticos y dinámicos',
    en: 'Do QR codes expire? Static vs dynamic QR codes',
    pt: 'QR Code expira? Códigos estáticos e dinâmicos',
    fr: 'Un code QR gratuit expire-t-il ? Statique ou dynamique',
    it: 'I codici QR scadono? Statici e dinamici a confronto',
  },
  description: {
    es: 'Un código QR estático no caduca nunca; uno dinámico puede dejar de funcionar si termina la suscripción. Diferencias, ventajas y cuál te conviene usar.',
    en: 'A static QR code never expires; a dynamic one can stop working when the subscription ends. The differences, the trade-offs and which one to choose.',
    pt: 'Um código QR estático nunca expira; um dinâmico pode parar de funcionar quando a assinatura termina. Veja as diferenças, as vantagens e qual escolher.',
    fr: 'Un code QR statique n’expire jamais ; un code dynamique peut cesser de fonctionner à la fin de l’abonnement. Différences, avantages et lequel choisir.',
    it: 'Un codice QR statico non scade mai; uno dinamico può smettere di funzionare quando finisce l’abbonamento. Differenze, vantaggi e quale scegliere.',
  },
  intro: {
    es: 'Un código QR no caduca por sí mismo: es solo un dibujo que guarda un texto, casi siempre un enlace. Lo que puede dejar de funcionar es el servicio que hay detrás. Los códigos estáticos guardan tu enlace directamente y funcionan mientras ese enlace exista; los dinámicos dependen de un proveedor y pueden desactivarse cuando termina una prueba o una suscripción.',
    en: 'A QR code never expires by itself: it is just a pattern that stores some text, usually a link. What can stop working is the service behind it. Static codes store your link directly and keep working for as long as that link exists; dynamic codes depend on a provider and can be switched off when a trial or a subscription ends.',
    pt: 'Um código QR não expira por si só: é apenas um desenho que guarda um texto, quase sempre um link. O que pode parar de funcionar é o serviço que está por trás dele. Os códigos estáticos guardam o seu link diretamente e funcionam enquanto esse link existir; os dinâmicos dependem de um provedor e podem ser desativados quando termina um período de teste ou uma assinatura.',
    fr: 'Un code QR n’expire pas en lui-même : ce n’est qu’un motif qui contient un texte, le plus souvent un lien. Ce qui peut cesser de fonctionner, c’est le service qui se trouve derrière. Les codes statiques contiennent directement votre lien et fonctionnent tant que ce lien existe ; les codes dynamiques dépendent d’un prestataire et peuvent être désactivés à la fin d’un essai ou d’un abonnement.',
    it: 'Un codice QR di per sé non scade: è solo un disegno che contiene un testo, quasi sempre un link. A smettere di funzionare può essere il servizio che c’è dietro. I codici statici contengono direttamente il tuo link e funzionano finché quel link esiste; quelli dinamici dipendono da un fornitore e possono essere disattivati quando finisce una prova o un abbonamento.',
  },
  sections: [
    {
      h: {
        es: 'Qué es un código QR estático',
        en: 'What a static QR code is',
        pt: 'O que é um código QR estático',
        fr: 'Qu’est-ce qu’un code QR statique',
        it: 'Che cos’è un codice QR statico',
      },
      p: [
        {
          es: 'En un código estático, el enlace que escribiste queda grabado en el propio dibujo. Cuando alguien lo escanea, el teléfono lee la dirección y la abre directamente; no hay ninguna empresa en el medio y nada tiene que seguir encendido para que el código funcione.',
          en: 'In a static code, the link you typed is written into the pattern itself. When someone scans it, the phone reads the address and opens it directly; no company sits in between and nothing has to stay switched on for the code to work.',
          pt: 'Em um código estático, o link que você digitou fica gravado no próprio desenho. Quando alguém o escaneia, o celular lê o endereço e o abre diretamente; não há nenhuma empresa no meio e nada precisa continuar ligado para que o código funcione.',
          fr: 'Dans un code statique, le lien que vous avez saisi est inscrit dans le motif lui-même. Quand quelqu’un le scanne, le téléphone lit l’adresse et l’ouvre directement ; aucune entreprise ne s’intercale et rien n’a besoin de rester en service pour que le code fonctionne.',
          it: 'In un codice statico, il link che hai scritto è inciso nel disegno stesso. Quando qualcuno lo scansiona, il telefono legge l’indirizzo e lo apre direttamente; non c’è nessuna azienda di mezzo e niente deve restare acceso perché il codice funzioni.',
        },
        {
          es: 'Por eso un código estático no tiene fecha de vencimiento ni límite de escaneos. Un código impreso hoy se leerá igual dentro de diez años. La contrapartida es que el contenido es fijo: para llevar a la gente a otro destino hace falta un código nuevo y, como ningún servidor ve los escaneos, no hay nada que contar.',
          en: 'That is why a static code has no expiry date and no scan limit. A code printed today will read the same in ten years. The trade-off is that the content is fixed: to send people somewhere else you need a new code and, since no server sees the scans, there is nothing to count.',
          pt: 'Por isso um código estático não tem data de validade nem limite de leituras. Um código impresso hoje será lido da mesma forma daqui a dez anos. A contrapartida é que o conteúdo é fixo: para levar as pessoas a outro destino é preciso um código novo e, como nenhum servidor vê as leituras, não há o que contar.',
          fr: 'C’est pourquoi un code statique n’a ni date d’expiration ni limite de scans. Un code imprimé aujourd’hui se lira de la même façon dans dix ans. En contrepartie, le contenu est figé : pour envoyer les gens ailleurs, il faut un nouveau code et, comme aucun serveur ne voit les scans, il n’y a rien à compter.',
          it: 'Per questo un codice statico non ha data di scadenza né limite di scansioni. Un codice stampato oggi si leggerà allo stesso modo fra dieci anni. In cambio il contenuto è fisso: per mandare le persone altrove serve un nuovo codice e, poiché nessun server vede le scansioni, non c’è nulla da contare.',
        },
      ],
    },
    {
      h: {
        es: 'Qué es un código QR dinámico y por qué algunos dejan de funcionar',
        en: 'What a dynamic QR code is, and why some stop working',
        pt: 'O que é um código QR dinâmico e por que alguns param de funcionar',
        fr: 'Qu’est-ce qu’un code QR dynamique, et pourquoi certains cessent de fonctionner',
        it: 'Che cos’è un codice QR dinamico e perché alcuni smettono di funzionare',
      },
      p: [
        {
          es: 'Un código dinámico no contiene tu enlace. Contiene una dirección corta que pertenece al proveedor, y el servidor del proveedor redirige cada escaneo al destino que configuraste en tu cuenta. Como todos los escaneos pasan por ese servidor, puedes cambiar el destino sin reimprimir y ver cuántos escaneos hubo, cuándo y aproximadamente desde dónde.',
          en: 'A dynamic code does not contain your link. It contains a short address that belongs to the provider, and the provider’s server redirects each scan to the destination you set in your account. Because every scan passes through that server, you can change the destination without reprinting and see how many scans there were, when and roughly where from.',
          pt: 'Um código dinâmico não contém o seu link. Ele contém um endereço curto que pertence ao provedor, e o servidor do provedor redireciona cada leitura para o destino que você configurou na sua conta. Como todas as leituras passam por esse servidor, você pode mudar o destino sem reimprimir e ver quantas leituras houve, quando e aproximadamente de onde.',
          fr: 'Un code dynamique ne contient pas votre lien. Il contient une adresse courte qui appartient au prestataire, et le serveur de ce dernier redirige chaque scan vers la destination définie dans votre compte. Comme tous les scans passent par ce serveur, vous pouvez changer la destination sans réimprimer et savoir combien de scans ont eu lieu, quand et à peu près d’où.',
          it: 'Un codice dinamico non contiene il tuo link. Contiene un indirizzo breve che appartiene al fornitore, e il server del fornitore reindirizza ogni scansione alla destinazione che hai impostato nel tuo account. Poiché tutte le scansioni passano da quel server, puoi cambiare la destinazione senza ristampare e vedere quante scansioni ci sono state, quando e più o meno da dove.',
        },
        {
          es: 'Ese mismo diseño es su punto débil. La redirección solo funciona mientras la cuenta esté activa y el proveedor siga existiendo. Si termina una prueba gratuita, se interrumpe un pago, se alcanza el límite de escaneos del plan o la empresa cierra, el código impreso lleva a un error o a una página de aviso. Es lo que suele pasar cuando un código anunciado como gratuito deja de funcionar a los pocos días o semanas: el código no caducó, se desactivó la redirección que tenía detrás.',
          en: 'The same design is its weak point. The redirect only works while the account is active and the provider is still in business. If a free trial ends, a payment lapses, the plan’s scan limit is reached or the company closes, the printed code leads to an error or a notice page. This is what usually happens when a code advertised as free stops working after a few days or weeks: the code did not expire, the redirect behind it was switched off.',
          pt: 'Esse mesmo desenho é o seu ponto fraco. O redirecionamento só funciona enquanto a conta estiver ativa e o provedor continuar existindo. Se um teste gratuito termina, um pagamento é interrompido, o limite de leituras do plano é atingido ou a empresa fecha, o código impresso leva a um erro ou a uma página de aviso. É o que costuma acontecer quando um código anunciado como gratuito para de funcionar depois de alguns dias ou semanas: o código não expirou, o redirecionamento por trás dele foi desativado.',
          fr: 'Cette même conception est son point faible. La redirection ne fonctionne que tant que le compte est actif et que le prestataire existe. Si un essai gratuit se termine, si un paiement est interrompu, si la limite de scans de la formule est atteinte ou si l’entreprise ferme, le code imprimé mène à une erreur ou à une page d’avertissement. C’est ce qui se passe en général quand un code présenté comme gratuit cesse de fonctionner après quelques jours ou quelques semaines : le code n’a pas expiré, c’est la redirection qui a été désactivée.',
          it: 'Questa stessa struttura è il suo punto debole. Il reindirizzamento funziona solo finché l’account è attivo e il fornitore esiste. Se finisce una prova gratuita, si interrompe un pagamento, si raggiunge il limite di scansioni del piano o l’azienda chiude, il codice stampato porta a un errore o a una pagina di avviso. È quello che succede di solito quando un codice presentato come gratuito smette di funzionare dopo qualche giorno o settimana: il codice non è scaduto, è stato disattivato il reindirizzamento che aveva dietro.',
        },
      ],
    },
    {
      h: {
        es: 'Qué tipo de códigos crea este generador',
        en: 'What kind of codes this generator makes',
        pt: 'Que tipo de código este gerador cria',
        fr: 'Quel type de codes crée ce générateur',
        it: 'Che tipo di codici crea questo generatore',
      },
      p: [
        {
          es: 'Este sitio solo crea códigos estáticos. Se generan en tu navegador, los datos que escribes no se envían a ningún servidor y el enlace va directamente dentro del código. Eso tiene consecuencias claras, a favor y en contra.',
          en: 'This site only makes static codes. They are generated in your browser, the data you type is not sent to a server, and the link goes straight into the code. That has clear consequences in both directions.',
          pt: 'Este site só cria códigos estáticos. Eles são gerados no seu navegador, os dados que você digita não são enviados a nenhum servidor e o link vai diretamente dentro do código. Isso tem consequências claras, a favor e contra.',
          fr: 'Ce site ne crée que des codes statiques. Ils sont générés dans votre navigateur, les données que vous saisissez ne sont envoyées à aucun serveur et le lien est inscrit directement dans le code. Cela a des conséquences claires, dans un sens comme dans l’autre.',
          it: 'Questo sito crea solo codici statici. Vengono generati nel tuo browser, i dati che scrivi non vengono inviati a nessun server e il link finisce direttamente dentro il codice. Questo ha conseguenze chiare, a favore e contro.',
        },
      ],
      list: [
        {
          es: 'Son gratis y sin período de prueba.',
          en: 'They are free, with no trial period.',
          pt: 'São gratuitos e sem período de teste.',
          fr: 'Ils sont gratuits et sans période d’essai.',
          it: 'Sono gratuiti e senza periodo di prova.',
        },
        {
          es: 'No tienen fecha de vencimiento ni límite de escaneos.',
          en: 'They have no expiry date and no limit on the number of scans.',
          pt: 'Não têm data de validade nem limite de leituras.',
          fr: 'Ils n’ont ni date d’expiration ni limite de scans.',
          it: 'Non hanno data di scadenza né limite di scansioni.',
        },
        {
          es: 'Siguen funcionando aunque este sitio dejara de existir, porque no dependen de él.',
          en: 'They would keep working even if this site ceased to exist, because they do not depend on it.',
          pt: 'Continuam funcionando mesmo que este site deixasse de existir, porque não dependem dele.',
          fr: 'Ils continueraient de fonctionner même si ce site disparaissait, car ils n’en dépendent pas.',
          it: 'Continuerebbero a funzionare anche se questo sito non esistesse più, perché non dipendono da esso.',
        },
        {
          es: 'El enlace no se puede editar después de descargar el código: un destino nuevo requiere un código nuevo.',
          en: 'The link cannot be edited once the code is downloaded: a new destination means a new code.',
          pt: 'O link não pode ser editado depois de baixar o código: um destino novo exige um código novo.',
          fr: 'Le lien ne peut pas être modifié une fois le code téléchargé : une nouvelle destination demande un nouveau code.',
          it: 'Il link non si può modificare dopo aver scaricato il codice: una nuova destinazione richiede un nuovo codice.',
        },
        {
          es: 'No hay estadísticas de escaneos, porque los escaneos no pasan por nosotros.',
          en: 'There are no scan statistics, because scans do not pass through us.',
          pt: 'Não há estatísticas de leitura, porque as leituras não passam por nós.',
          fr: 'Il n’y a pas de statistiques de scans, car les scans ne passent pas par nous.',
          it: 'Non ci sono statistiche di scansione, perché le scansioni non passano da noi.',
        },
      ],
    },
    {
      h: {
        es: 'Cuándo conviene cada tipo',
        en: 'When each kind makes sense',
        pt: 'Quando cada tipo vale a pena',
        fr: 'Quand choisir l’un ou l’autre',
        it: 'Quando conviene l’uno o l’altro',
      },
      p: [
        {
          es: 'Un código estático es la opción adecuada cuando el destino es estable: tu sitio web, un perfil en una red social, un chat de WhatsApp, la página de un menú, un formulario. También es la opción más segura para todo lo que debe durar años, como empaques, letreros, placas o tarjetas de presentación, porque no depende de que nadie renueve nada.',
          en: 'A static code is the right choice when the destination is stable: your website, a social media profile, a WhatsApp chat, a menu page, a form. It is also the safer option for anything meant to last for years, such as packaging, signs, plaques or business cards, because it does not depend on anyone renewing anything.',
          pt: 'Um código estático é a escolha certa quando o destino é estável: o seu site, um perfil em rede social, uma conversa no WhatsApp, a página de um cardápio, um formulário. Também é a opção mais segura para tudo o que precisa durar anos, como embalagens, placas ou cartões de visita, porque não depende de ninguém renovar nada.',
          fr: 'Un code statique est le bon choix quand la destination est stable : votre site, un profil sur un réseau social, une discussion WhatsApp, la page d’un menu, un formulaire. C’est aussi l’option la plus sûre pour tout ce qui doit durer des années, comme les emballages, les enseignes, les plaques ou les cartes de visite, car elle ne dépend d’aucun renouvellement.',
          it: 'Un codice statico è la scelta giusta quando la destinazione è stabile: il tuo sito, un profilo social, una chat WhatsApp, la pagina di un menu, un modulo. È anche l’opzione più sicura per tutto ciò che deve durare anni, come confezioni, insegne, targhe o biglietti da visita, perché non dipende da alcun rinnovo.',
        },
        {
          es: 'Un código dinámico vale lo que cuesta cuando necesitas medir los escaneos de una campaña, cuando hay que redirigir muchos códigos impresos a la vez o cuando el destino va a cambiar y no tienes una página propia que puedas actualizar. Si eliges uno, lee qué pasa con tus códigos cuando termina el plan y cuenta la suscripción como un gasto durante todo el tiempo que el material impreso siga en circulación.',
          en: 'A dynamic code is worth paying for when you need to measure the scans of a campaign, when many printed codes have to be redirected at once, or when the destination will change and you have no page of your own to update. If you choose one, read what happens to your codes when the plan ends, and count the subscription as a cost for as long as the printed material stays in circulation.',
          pt: 'Um código dinâmico vale o que custa quando você precisa medir as leituras de uma campanha, quando é preciso redirecionar muitos códigos impressos de uma vez ou quando o destino vai mudar e você não tem uma página própria para atualizar. Se escolher um, leia o que acontece com os seus códigos quando o plano termina e conte a assinatura como um custo durante todo o tempo em que o material impresso continuar em circulação.',
          fr: 'Un code dynamique vaut son prix quand vous devez mesurer les scans d’une campagne, quand il faut rediriger de nombreux codes imprimés en une fois ou quand la destination va changer et que vous n’avez pas de page à vous à mettre à jour. Si vous en choisissez un, lisez ce qu’il advient de vos codes à la fin de la formule et comptez l’abonnement comme un coût pendant toute la durée de circulation des supports imprimés.',
          it: 'Un codice dinamico vale la spesa quando devi misurare le scansioni di una campagna, quando bisogna reindirizzare molti codici stampati in una volta o quando la destinazione cambierà e non hai una pagina tua da aggiornare. Se ne scegli uno, leggi che cosa succede ai tuoi codici quando il piano finisce e considera l’abbonamento un costo per tutto il tempo in cui il materiale stampato resta in circolazione.',
        },
      ],
    },
    {
      h: {
        es: 'Cómo cambiar el destino sin un código dinámico',
        en: 'How to change the destination without a dynamic code',
        pt: 'Como mudar o destino sem um código dinâmico',
        fr: 'Comment changer la destination sans code dynamique',
        it: 'Come cambiare la destinazione senza un codice dinamico',
      },
      p: [
        {
          es: 'Puedes conseguir casi todo el comportamiento de un código editable con uno estático si el código apunta a algo que tú controlas. El código sigue siendo el mismo; lo que cambia es lo que la gente encuentra al llegar.',
          en: 'You can get most of the behaviour of an editable code with a static one if the code points to something you control. The code stays the same; what changes is what people find when they arrive.',
          pt: 'Você consegue quase todo o comportamento de um código editável com um estático se o código apontar para algo que você controla. O código continua o mesmo; o que muda é o que as pessoas encontram ao chegar.',
          fr: 'Vous pouvez obtenir l’essentiel du comportement d’un code modifiable avec un code statique s’il pointe vers quelque chose que vous maîtrisez. Le code reste le même ; ce qui change, c’est ce que les gens trouvent en arrivant.',
          it: 'Puoi ottenere quasi tutto il comportamento di un codice modificabile con uno statico se il codice punta a qualcosa che controlli tu. Il codice resta lo stesso; cambia quello che le persone trovano quando arrivano.',
        },
      ],
      list: [
        {
          es: 'Apunta el código a una página tuya, como tusitio.com/menu, y actualiza el contenido de esa página cada vez que lo necesites.',
          en: 'Point the code to a page of your own, such as yoursite.com/menu, and update the content of that page whenever you need to.',
          pt: 'Aponte o código para uma página sua, como seusite.com/cardapio, e atualize o conteúdo dessa página sempre que precisar.',
          fr: 'Faites pointer le code vers une page à vous, par exemple votresite.com/menu, et mettez à jour le contenu de cette page quand il le faut.',
          it: 'Punta il codice a una pagina tua, per esempio iltuosito.com/menu, e aggiorna il contenuto di quella pagina ogni volta che serve.',
        },
        {
          es: 'Usa una página de enlaces, como las que se ponen en la biografía de las redes sociales: su dirección no cambia y tú modificas los enlaces que muestra.',
          en: 'Use a links page, like the ones placed in social media bios: its address stays the same while you change the links it shows.',
          pt: 'Use uma página de links, como as que ficam na bio das redes sociais: o endereço dela não muda e você altera os links que ela mostra.',
          fr: 'Utilisez une page de liens, comme celles que l’on place dans la bio des réseaux sociaux : son adresse ne change pas et vous modifiez les liens qu’elle affiche.',
          it: 'Usa una pagina di link, come quelle che si mettono nella bio dei social: il suo indirizzo non cambia e tu modifichi i link che mostra.',
        },
        {
          es: 'Si tienes un dominio propio, crea una redirección como tusitio.com/promo y cambia adónde lleva desde el panel de tu hosting o de tu dominio.',
          en: 'If you have your own domain, create a redirect such as yoursite.com/promo and change where it leads from your hosting or domain panel.',
          pt: 'Se você tem um domínio próprio, crie um redirecionamento como seusite.com/promo e mude para onde ele leva no painel da sua hospedagem ou do seu domínio.',
          fr: 'Si vous avez votre propre domaine, créez une redirection du type votresite.com/promo et changez sa destination depuis l’interface de votre hébergeur ou de votre nom de domaine.',
          it: 'Se hai un dominio tuo, crea un reindirizzamento come iltuosito.com/promo e cambia dove porta dal pannello del tuo hosting o del tuo dominio.',
        },
        {
          es: 'Para saber cuántas visitas llegan, usa las estadísticas de la página o del sitio de destino en lugar de las del código.',
          en: 'To know how many visits arrive, use the statistics of the destination page or site rather than those of the code.',
          pt: 'Para saber quantas visitas chegam, use as estatísticas da página ou do site de destino em vez das do código.',
          fr: 'Pour connaître le nombre de visites, utilisez les statistiques de la page ou du site de destination plutôt que celles du code.',
          it: 'Per sapere quante visite arrivano, usa le statistiche della pagina o del sito di destinazione invece di quelle del codice.',
        },
      ],
    },
    {
      h: {
        es: 'Qué puede hacer que un código estático deje de funcionar',
        en: 'What can still break a static code',
        pt: 'O que ainda pode fazer um código estático parar de funcionar',
        fr: 'Ce qui peut malgré tout rendre un code statique inutilisable',
        it: 'Che cosa può comunque far smettere di funzionare un codice statico',
      },
      p: [
        {
          es: 'Un código estático dura lo mismo que la dirección que lleva dentro. El código siempre se leerá bien, pero el destino puede dejar de responder. Antes de imprimir una tirada grande, comprueba que el enlace sea uno que piensas conservar.',
          en: 'A static code is only as durable as the address inside it. The code will always read correctly, but the destination can stop responding. Before a large print run, check that the link is one you expect to keep.',
          pt: 'Um código estático dura tanto quanto o endereço que leva dentro. O código sempre será lido corretamente, mas o destino pode parar de responder. Antes de imprimir uma tiragem grande, confira se o link é um que você pretende manter.',
          fr: 'Un code statique dure aussi longtemps que l’adresse qu’il contient. Le code se lira toujours correctement, mais la destination peut cesser de répondre. Avant un gros tirage, vérifiez que le lien est bien un lien que vous comptez conserver.',
          it: 'Un codice statico dura quanto l’indirizzo che contiene. Il codice si leggerà sempre correttamente, ma la destinazione può smettere di rispondere. Prima di una tiratura importante, controlla che il link sia uno che intendi mantenere.',
        },
      ],
      list: [
        {
          es: 'La página de destino se elimina, cambia de dirección o pasa a ser privada.',
          en: 'The destination page is deleted, moved to another address or made private.',
          pt: 'A página de destino é excluída, muda de endereço ou passa a ser privada.',
          fr: 'La page de destination est supprimée, change d’adresse ou devient privée.',
          it: 'La pagina di destinazione viene eliminata, cambia indirizzo o diventa privata.',
        },
        {
          es: 'Cambia un nombre de usuario: los enlaces a perfiles de redes sociales incluyen el nombre, así que el enlace anterior deja de funcionar.',
          en: 'A username changes: social media profile links include the username, so the old link stops working.',
          pt: 'Um nome de usuário muda: os links de perfis em redes sociais incluem o nome, então o link antigo para de funcionar.',
          fr: 'Un nom d’utilisateur change : les liens de profil des réseaux sociaux contiennent ce nom, et l’ancien lien ne fonctionne plus.',
          it: 'Cambia un nome utente: i link ai profili social contengono il nome, quindi il vecchio link smette di funzionare.',
        },
        {
          es: 'Un enlace de invitación a un grupo o a una comunidad vence o se restablece.',
          en: 'An invite link to a group or community expires or is reset.',
          pt: 'Um link de convite para um grupo ou comunidade expira ou é redefinido.',
          fr: 'Un lien d’invitation à un groupe ou à une communauté expire ou est réinitialisé.',
          it: 'Un link di invito a un gruppo o a una community scade o viene reimpostato.',
        },
        {
          es: 'Cambias el número de teléfono que usaste en un código de WhatsApp.',
          en: 'You change the phone number used in a WhatsApp code.',
          pt: 'Você troca o número de telefone usado em um código de WhatsApp.',
          fr: 'Vous changez le numéro de téléphone utilisé dans un code WhatsApp.',
          it: 'Cambi il numero di telefono usato in un codice WhatsApp.',
        },
        {
          es: 'El dominio de tu sitio no se renueva.',
          en: 'The domain of your site is not renewed.',
          pt: 'O domínio do seu site não é renovado.',
          fr: 'Le nom de domaine de votre site n’est pas renouvelé.',
          it: 'Il dominio del tuo sito non viene rinnovato.',
        },
      ],
    },
  ],
  templates: ['url', 'whatsapp', 'instagram', 'linktree'],
  faq: [
    {
      q: {
        es: '¿Los códigos QR gratuitos caducan?',
        en: 'Do free QR codes expire?',
        pt: 'Os códigos QR gratuitos expiram?',
        fr: 'Les codes QR gratuits expirent-ils ?',
        it: 'I codici QR gratuiti scadono?',
      },
      a: {
        es: 'Los estáticos no. Un código estático contiene el enlace en sí, así que funciona mientras funcione el enlace, sin importar quién lo haya generado. Los códigos gratuitos que dejan de funcionar son códigos dinámicos creados con una prueba o un plan limitado, en los que el proveedor desactiva la redirección.',
        en: 'Static ones do not. A static code contains the link itself, so it works for as long as the link does, whoever generated it. The free codes that stop working are dynamic codes created under a trial or a limited plan, where the provider switches off the redirect.',
        pt: 'Os estáticos, não. Um código estático contém o próprio link, então funciona enquanto o link funcionar, não importa quem o tenha gerado. Os códigos gratuitos que param de funcionar são códigos dinâmicos criados em um teste ou em um plano limitado, nos quais o provedor desativa o redirecionamento.',
        fr: 'Les codes statiques, non. Un code statique contient le lien lui-même : il fonctionne tant que le lien fonctionne, quel que soit l’outil qui l’a généré. Les codes gratuits qui cessent de fonctionner sont des codes dynamiques créés pendant un essai ou avec une formule limitée, dont le prestataire désactive la redirection.',
        it: 'Quelli statici no. Un codice statico contiene il link stesso, quindi funziona finché funziona il link, chiunque lo abbia generato. I codici gratuiti che smettono di funzionare sono codici dinamici creati con una prova o con un piano limitato, in cui il fornitore disattiva il reindirizzamento.',
      },
    },
    {
      q: {
        es: '¿Cómo sé si un código es estático o dinámico?',
        en: 'How can I tell whether a code is static or dynamic?',
        pt: 'Como saber se um código é estático ou dinâmico?',
        fr: 'Comment savoir si un code est statique ou dynamique ?',
        it: 'Come capisco se un codice è statico o dinamico?',
      },
      a: {
        es: 'Escanéalo y mira la dirección antes de abrirla. Si aparece tu propio enlace, el código es estático. Si aparece una dirección corta de otro dominio que después salta a tu página, es dinámico y depende de ese servicio.',
        en: 'Scan it and look at the address before opening it. If it shows your own link, the code is static. If it shows a short address on a different domain that then jumps to your page, it is dynamic and depends on that service.',
        pt: 'Escaneie o código e olhe o endereço antes de abrir. Se aparecer o seu próprio link, o código é estático. Se aparecer um endereço curto de outro domínio que depois salta para a sua página, ele é dinâmico e depende desse serviço.',
        fr: 'Scannez-le et regardez l’adresse avant de l’ouvrir. Si votre propre lien s’affiche, le code est statique. Si une adresse courte d’un autre domaine s’affiche puis renvoie vers votre page, il est dynamique et dépend de ce service.',
        it: 'Scansionalo e guarda l’indirizzo prima di aprirlo. Se compare il tuo link, il codice è statico. Se compare un indirizzo breve di un altro dominio che poi salta alla tua pagina, è dinamico e dipende da quel servizio.',
      },
    },
    {
      q: {
        es: '¿Hay un límite de veces que se puede escanear un código QR?',
        en: 'Is there a limit on how many times a QR code can be scanned?',
        pt: 'Existe um limite de vezes que um código QR pode ser lido?',
        fr: 'Y a-t-il une limite au nombre de scans d’un code QR ?',
        it: 'C’è un limite al numero di scansioni di un codice QR?',
      },
      a: {
        es: 'En los códigos estáticos, no: leer uno es como leer un texto impreso y nadie lleva la cuenta. Los límites de escaneos solo existen en los códigos dinámicos, donde algunos planes fijan un máximo de redirecciones por mes.',
        en: 'Not for static codes: reading one is like reading printed text, and nobody keeps count. Scan limits exist only on dynamic codes, where some plans cap the number of redirects per month.',
        pt: 'Nos códigos estáticos, não: ler um deles é como ler um texto impresso, e ninguém faz a contagem. Os limites de leitura só existem nos códigos dinâmicos, em que alguns planos fixam um máximo de redirecionamentos por mês.',
        fr: 'Pas pour les codes statiques : en lire un revient à lire un texte imprimé, et personne ne tient le compte. Les limites de scans n’existent que pour les codes dynamiques, où certaines formules plafonnent le nombre de redirections par mois.',
        it: 'Per i codici statici no: leggerne uno è come leggere un testo stampato e nessuno tiene il conto. I limiti di scansione esistono solo per i codici dinamici, dove alcuni piani fissano un massimo di reindirizzamenti al mese.',
      },
    },
  ],
};

export default guide;
