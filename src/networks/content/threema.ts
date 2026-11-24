import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Threema',
    en: 'What a Threema QR code is for',
    pt: 'Para que serve um código QR do Threema',
    fr: 'À quoi sert un code QR Threema',
    it: 'A cosa serve un codice QR di Threema',
  },
  about: {
    es: 'Threema es una app de mensajería privada muy usada en Suiza, Alemania y Austria, en la que cada persona se identifica con un ID de ocho caracteres en lugar de un número de teléfono. El código abre un chat con tu ID, con un mensaje ya escrito si lo deseas. Así te contactan sin copiar el ID letra por letra y sin que tengas que dar tu número.',
    en: 'Threema is a private messaging app widely used in Switzerland, Germany and Austria, where each person is identified by an eight-character ID instead of a phone number. The code opens a chat with your ID, with a pre-written message if you want one. People reach you without copying the ID character by character, and you do not have to give out your number.',
    pt: 'O Threema é um aplicativo de mensagens privado muito usado na Suíça, na Alemanha e na Áustria, em que cada pessoa é identificada por um ID de oito caracteres em vez de um número de telefone. O código abre uma conversa com o seu ID, com uma mensagem já escrita, se você quiser. Assim entram em contato sem copiar o ID letra por letra e sem que você precise informar o seu número.',
    fr: 'Threema est une application de messagerie privée très utilisée en Suisse, en Allemagne et en Autriche, où chaque personne est identifiée par un ID de huit caractères au lieu d’un numéro de téléphone. Le code ouvre une discussion avec votre ID, avec un message déjà rédigé si vous le souhaitez. On vous contacte ainsi sans recopier l’ID caractère par caractère, et vous n’avez pas à donner votre numéro.',
    it: 'Threema è un’app di messaggistica privata molto usata in Svizzera, Germania e Austria, in cui ogni persona è identificata da un ID di otto caratteri invece che da un numero di telefono. Il codice apre una chat con il tuo ID, con un messaggio già scritto se lo desideri. Così ti contattano senza copiare l’ID carattere per carattere e senza che tu debba dare il tuo numero.',
  },
  uses: [
    {
      es: 'Consultorios, estudios jurídicos y asesores: en la tarjeta o en la sala de espera, como canal de contacto reservado.',
      en: 'Medical practices, law firms and advisers: on a card or in the waiting room, as a discreet contact channel.',
      pt: 'Consultórios, escritórios de advocacia e consultores: no cartão ou na sala de espera, como canal de contato reservado.',
      fr: 'Cabinets médicaux, cabinets d’avocats et conseillers : sur la carte ou en salle d’attente, comme canal de contact discret.',
      it: 'Studi medici, studi legali e consulenti: sul biglietto o in sala d’attesa, come canale di contatto riservato.',
    },
    {
      es: 'Negocios y profesionales de países de habla alemana: en anuncios, folletos y rótulos, junto al teléfono y el correo.',
      en: 'Businesses and professionals in German-speaking countries: on adverts, leaflets and signs, next to the phone number and email.',
      pt: 'Negócios e profissionais de países de língua alemã: em anúncios, folhetos e letreiros, ao lado do telefone e do e-mail.',
      fr: 'Commerces et professionnels des pays germanophones : sur les annonces, les dépliants et les enseignes, à côté du téléphone et de l’e-mail.',
      it: 'Attività e professionisti dei paesi di lingua tedesca: su annunci, pieghevoli e insegne, accanto a telefono ed email.',
    },
    {
      es: 'Anuncios clasificados y carteles vecinales: con un mensaje inicial que indique por qué anuncio te escriben.',
      en: 'Classified ads and neighbourhood notices: with an opening message that says which advert the person is writing about.',
      pt: 'Anúncios classificados e avisos de bairro: com uma mensagem inicial que indique sobre qual anúncio estão escrevendo.',
      fr: 'Petites annonces et affichettes de quartier : avec un premier message indiquant l’annonce concernée.',
      it: 'Annunci e avvisi di quartiere: con un messaggio iniziale che indichi per quale annuncio ti scrivono.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Dónde encuentro mi ID de Threema y puede cambiar?',
        en: 'Where do I find my Threema ID, and can it change?',
        pt: 'Onde encontro o meu ID do Threema e ele pode mudar?',
        fr: 'Où trouver mon ID Threema, et peut-il changer ?',
        it: 'Dove trovo il mio ID Threema e può cambiare?',
      },
      a: {
        es: 'Aparece en la sección Mi perfil de la app: son ocho caracteres, letras mayúsculas y números. El ID se asigna al crear la cuenta y no se puede modificar, así que el código sigue sirviendo mientras conserves ese ID.',
        en: 'It is shown in the My Profile section of the app: eight characters, capital letters and digits. The ID is assigned when the account is created and cannot be edited, so the code keeps working for as long as you keep that ID.',
        pt: 'Ele aparece na seção Meu perfil do app: são oito caracteres, letras maiúsculas e números. O ID é atribuído ao criar a conta e não pode ser alterado, então o código continua funcionando enquanto você mantiver esse ID.',
        fr: 'Il figure dans la section Mon profil de l’application : huit caractères, lettres majuscules et chiffres. L’ID est attribué à la création du compte et ne peut pas être modifié : le code reste donc valable tant que vous conservez cet ID.',
        it: 'Si trova nella sezione Il mio profilo dell’app: otto caratteri, lettere maiuscole e numeri. L’ID viene assegnato alla creazione dell’account e non si può modificare, quindi il codice continua a funzionare finché mantieni quell’ID.',
      },
    },
    {
      q: {
        es: '¿Es el mismo código QR que muestra la app de Threema?',
        en: 'Is it the same QR code that the Threema app shows?',
        pt: 'É o mesmo código QR que o app do Threema mostra?',
        fr: 'Est-ce le même code QR que celui affiché dans l’application Threema ?',
        it: 'È lo stesso codice QR mostrato dall’app Threema?',
      },
      a: {
        es: 'No. El código de la app sirve para que dos personas verifiquen su contacto escaneándose dentro de Threema. Este contiene un enlace threema.id que se lee con la cámara del teléfono y abre el chat; quien escanea necesita tener Threema instalado.',
        en: 'No. The code in the app lets two people verify each other as contacts by scanning inside Threema. This one holds a threema.id link that the phone camera reads to open the chat; the person scanning needs Threema installed.',
        pt: 'Não. O código do app serve para que duas pessoas verifiquem o contato uma da outra fazendo a leitura dentro do Threema. Este contém um link threema.id que é lido com a câmera do celular e abre a conversa; quem lê o código precisa ter o Threema instalado.',
        fr: 'Non. Le code de l’application permet à deux personnes de vérifier leur contact en se scannant dans Threema. Celui-ci contient un lien threema.id qui se lit avec l’appareil photo du téléphone et ouvre la discussion ; la personne qui scanne doit avoir Threema installé.',
        it: 'No. Il codice dell’app serve a due persone per verificare il contatto scansionandosi all’interno di Threema. Questo contiene un link threema.id che si legge con la fotocamera del telefono e apre la chat; chi scansiona deve avere Threema installato.',
      },
    },
  ],
};

export default content;
