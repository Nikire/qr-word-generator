import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de tu perfil de Stack Overflow',
    en: 'What a QR code for your Stack Overflow profile is for',
    pt: 'Para que serve um código QR do seu perfil no Stack Overflow',
    fr: 'À quoi sert un code QR de votre profil Stack Overflow',
    it: 'A cosa serve un codice QR del tuo profilo Stack Overflow',
  },
  about: {
    es: 'El código abre tu perfil de Stack Overflow, con tu reputación, tus insignias y las etiquetas en las que más respondes. Es una referencia que otros programadores entienden de inmediato: muestra en qué tecnologías ayudas y cómo explicas una solución. El enlace usa tu número de usuario, no tu nombre.',
    en: 'The code opens your Stack Overflow profile, with your reputation, your badges and the tags you answer most. It is a reference other programmers understand at once: it shows which technologies you help with and how you explain a solution. The link uses your user number, not your name.',
    pt: 'O código abre o seu perfil no Stack Overflow, com a sua reputação, as suas medalhas e as tags em que você mais responde. É uma referência que outros programadores entendem na hora: mostra em quais tecnologias você ajuda e como explica uma solução. O link usa o seu número de usuário, não o seu nome.',
    fr: 'Le code ouvre votre profil Stack Overflow, avec votre réputation, vos badges et les tags sur lesquels vous répondez le plus. C’est une référence que les autres développeurs comprennent aussitôt : elle montre sur quelles technologies vous aidez et comment vous expliquez une solution. Le lien utilise votre numéro d’utilisateur, pas votre nom.',
    it: 'Il codice apre il tuo profilo Stack Overflow, con la tua reputazione, i tuoi badge e i tag a cui rispondi di più. È un riferimento che gli altri programmatori capiscono subito: mostra su quali tecnologie aiuti e come spieghi una soluzione. Il link usa il tuo numero utente, non il tuo nome.',
  },
  uses: [
    {
      es: 'Currículums técnicos: al lado de tus datos de contacto, como respaldo de los conocimientos que mencionas.',
      en: 'Technical résumés: beside your contact details, to back up the skills you mention.',
      pt: 'Currículos técnicos: ao lado dos seus dados de contato, como respaldo dos conhecimentos que você menciona.',
      fr: 'CV techniques : à côté de vos coordonnées, pour appuyer les compétences que vous mentionnez.',
      it: 'Curriculum tecnici: accanto ai tuoi contatti, a sostegno delle competenze che indichi.',
    },
    {
      es: 'Charlas sobre una tecnología concreta: en tu diapositiva de presentación, para mostrar tu trayectoria respondiendo sobre el tema.',
      en: 'Talks on a specific technology: on your introduction slide, to show your track record answering questions on the subject.',
      pt: 'Palestras sobre uma tecnologia específica: no seu slide de apresentação, para mostrar o seu histórico de respostas sobre o tema.',
      fr: 'Conférences sur une technologie précise : sur votre diapositive de présentation, pour montrer votre historique de réponses sur le sujet.',
      it: 'Talk su una tecnologia specifica: sulla slide di presentazione, per mostrare la tua esperienza nel rispondere sull’argomento.',
    },
    {
      es: 'Libros y cursos de programación: en la página sobre el autor o en el material del curso.',
      en: 'Programming books and courses: on the about-the-author page or in the course material.',
      pt: 'Livros e cursos de programação: na página sobre o autor ou no material do curso.',
      fr: 'Livres et cours de programmation : sur la page consacrée à l’auteur ou dans les supports du cours.',
      it: 'Libri e corsi di programmazione: nella pagina sull’autore o nel materiale del corso.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Por qué se pide un número y no mi nombre de usuario?',
        en: 'Why does it ask for a number instead of my username?',
        pt: 'Por que é pedido um número e não o meu nome de usuário?',
        fr: 'Pourquoi demande-t-on un numéro et non mon nom d’utilisateur ?',
        it: 'Perché viene chiesto un numero e non il mio nome utente?',
      },
      a: {
        es: 'En Stack Overflow varias personas pueden usar el mismo nombre visible, así que cada perfil se identifica con un número. Lo encuentras en la dirección de tu perfil, justo después de /users/. La ventaja es que el código sigue funcionando aunque cambies tu nombre visible.',
        en: 'On Stack Overflow several people can use the same display name, so each profile is identified by a number. You will find it in your profile address, right after /users/. The advantage is that the code keeps working even if you change your display name.',
        pt: 'No Stack Overflow várias pessoas podem usar o mesmo nome de exibição, então cada perfil é identificado por um número. Você o encontra no endereço do seu perfil, logo depois de /users/. A vantagem é que o código continua funcionando mesmo que você mude o nome de exibição.',
        fr: 'Sur Stack Overflow, plusieurs personnes peuvent utiliser le même nom affiché ; chaque profil est donc identifié par un numéro. Vous le trouverez dans l’adresse de votre profil, juste après /users/. L’avantage : le code continue de fonctionner même si vous changez de nom affiché.',
        it: 'Su Stack Overflow più persone possono usare lo stesso nome visualizzato, quindi ogni profilo è identificato da un numero. Lo trovi nell’indirizzo del tuo profilo, subito dopo /users/. Il vantaggio è che il codice continua a funzionare anche se cambi il nome visualizzato.',
      },
    },
    {
      q: {
        es: '¿Sirve para mi perfil en otros sitios de Stack Exchange?',
        en: 'Does it work for my profile on other Stack Exchange sites?',
        pt: 'Funciona para o meu perfil em outros sites do Stack Exchange?',
        fr: 'Est-ce que cela fonctionne pour mon profil sur d’autres sites Stack Exchange ?',
        it: 'Funziona per il mio profilo su altri siti Stack Exchange?',
      },
      a: {
        es: 'Esta plantilla arma enlaces de stackoverflow.com. En los demás sitios de la red, y en las versiones de Stack Overflow en otros idiomas, tu número de usuario es distinto. Para esos perfiles, copia la dirección completa y usa la plantilla URL personalizada.',
        en: 'This template builds stackoverflow.com links. On the other sites in the network, and on the versions of Stack Overflow in other languages, your user number is different. For those profiles, copy the full address and use the Custom URL template.',
        pt: 'Este modelo monta links do stackoverflow.com. Nos outros sites da rede, e nas versões do Stack Overflow em outros idiomas, o seu número de usuário é diferente. Para esses perfis, copie o endereço completo e use o modelo URL personalizada.',
        fr: 'Ce modèle crée des liens stackoverflow.com. Sur les autres sites du réseau, et sur les versions de Stack Overflow dans d’autres langues, votre numéro d’utilisateur est différent. Pour ces profils, copiez l’adresse complète et utilisez le modèle URL personnalisée.',
        it: 'Questo modello crea link di stackoverflow.com. Sugli altri siti della rete, e nelle versioni di Stack Overflow in altre lingue, il tuo numero utente è diverso. Per quei profili, copia l’indirizzo completo e usa il modello URL personalizzato.',
      },
    },
  ],
};

export default content;
