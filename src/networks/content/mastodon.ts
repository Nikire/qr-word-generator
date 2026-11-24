import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Mastodon',
    en: 'What a Mastodon QR code is for',
    pt: 'Para que serve um código QR do Mastodon',
    fr: 'À quoi sert un code QR Mastodon',
    it: 'A cosa serve un codice QR di Mastodon',
  },
  about: {
    es: 'En Mastodon tu dirección tiene dos partes, el usuario y el servidor, y quien no conoce la red suele equivocarse al escribirla. El código abre tu perfil en tu servidor con un escaneo, así que nadie tiene que recordar en cuál estás. Desde ahí, cualquier persona con cuenta en Mastodon o en otra plataforma del fediverso puede seguirte.',
    en: 'On Mastodon your address has two parts, the username and the server, and people new to the network often get it wrong when typing it. The code opens your profile on your server with one scan, so nobody has to remember which one you are on. From there, anyone with an account on Mastodon or another fediverse platform can follow you.',
    pt: 'No Mastodon o seu endereço tem duas partes, o usuário e o servidor, e quem não conhece a rede costuma errar ao digitá-lo. O código abre o seu perfil no seu servidor com uma leitura, então ninguém precisa lembrar em qual você está. A partir daí, qualquer pessoa com conta no Mastodon ou em outra plataforma do fediverso pode seguir você.',
    fr: 'Sur Mastodon, votre adresse comporte deux parties, le nom d’utilisateur et le serveur, et les personnes qui découvrent le réseau se trompent souvent en la saisissant. Le code ouvre votre profil sur votre serveur en un scan : personne n’a besoin de retenir sur lequel vous êtes. De là, toute personne ayant un compte sur Mastodon ou sur une autre plateforme du fédivers peut vous suivre.',
    it: 'Su Mastodon il tuo indirizzo ha due parti, il nome utente e il server, e chi non conosce la rete spesso sbaglia a scriverlo. Il codice apre il tuo profilo sul tuo server con una scansione, così nessuno deve ricordare su quale ti trovi. Da lì chiunque abbia un account su Mastodon o su un’altra piattaforma del fediverso può seguirti.',
  },
  uses: [
    {
      es: 'Charlas y congresos: en la diapositiva final, junto a tu nombre, para quienes quieran seguir la conversación.',
      en: 'Talks and conferences: on the closing slide, next to your name, for those who want to continue the conversation.',
      pt: 'Palestras e congressos: no slide final, ao lado do seu nome, para quem quiser continuar a conversa.',
      fr: 'Conférences et congrès : sur la diapositive de fin, à côté de votre nom, pour celles et ceux qui souhaitent poursuivre l’échange.',
      it: 'Interventi e convegni: sull’ultima slide, accanto al tuo nome, per chi vuole proseguire la conversazione.',
    },
    {
      es: 'Medios, instituciones y asociaciones con servidor propio: en publicaciones impresas y cartelería.',
      en: 'Media outlets, institutions and associations with their own server: in print publications and signage.',
      pt: 'Veículos de imprensa, instituições e associações com servidor próprio: em publicações impressas e sinalização.',
      fr: 'Médias, institutions et associations disposant de leur propre serveur : dans les publications imprimées et la signalétique.',
      it: 'Testate, istituzioni e associazioni con un proprio server: nelle pubblicazioni stampate e nella segnaletica.',
    },
    {
      es: 'Artistas y desarrolladores: en adhesivos, fanzines y tarjetas que reparten en ferias y encuentros.',
      en: 'Artists and developers: on stickers, zines and cards handed out at fairs and meetups.',
      pt: 'Artistas e desenvolvedores: em adesivos, fanzines e cartões distribuídos em feiras e encontros.',
      fr: 'Artistes et développeurs : sur des autocollants, des fanzines et des cartes distribués lors de salons et de rencontres.',
      it: 'Artisti e sviluppatori: su adesivi, fanzine e biglietti distribuiti a fiere e incontri.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Qué pongo en el campo del servidor?',
        en: 'What goes in the server field?',
        pt: 'O que coloco no campo do servidor?',
        fr: 'Que faut-il indiquer dans le champ du serveur ?',
        it: 'Cosa devo inserire nel campo del server?',
      },
      a: {
        es: 'El dominio de la instancia donde creaste tu cuenta, por ejemplo mastodon.social. Si tu dirección completa es @ana@mastodon.social, el servidor es mastodon.social y el usuario es ana.',
        en: 'The domain of the instance where you created your account, for example mastodon.social. If your full address is @ana@mastodon.social, the server is mastodon.social and the username is ana.',
        pt: 'O domínio da instância onde você criou a sua conta, por exemplo mastodon.social. Se o seu endereço completo é @ana@mastodon.social, o servidor é mastodon.social e o usuário é ana.',
        fr: 'Le domaine de l’instance sur laquelle vous avez créé votre compte, par exemple mastodon.social. Si votre adresse complète est @ana@mastodon.social, le serveur est mastodon.social et le nom d’utilisateur est ana.',
        it: 'Il dominio dell’istanza su cui hai creato l’account, per esempio mastodon.social. Se il tuo indirizzo completo è @ana@mastodon.social, il server è mastodon.social e il nome utente è ana.',
      },
    },
    {
      q: {
        es: '¿Qué pasa con el código si me mudo a otro servidor?',
        en: 'What happens to the code if I move to another server?',
        pt: 'O que acontece com o código se eu mudar para outro servidor?',
        fr: 'Que devient le code si je migre vers un autre serveur ?',
        it: 'Cosa succede al codice se mi trasferisco su un altro server?',
      },
      a: {
        es: 'El código sigue apuntando al perfil del servidor anterior. Si hiciste la mudanza con la función de Mastodon, ese perfil suele indicar cuál es tu cuenta nueva, pero lo más seguro es generar otro código con el servidor actual.',
        en: 'The code keeps pointing to the profile on the old server. If you moved using Mastodon’s migration feature, that profile usually indicates your new account, but the safest option is to create another code with your current server.',
        pt: 'O código continua apontando para o perfil no servidor antigo. Se você fez a mudança com o recurso do Mastodon, esse perfil costuma indicar qual é a sua nova conta, mas o mais seguro é gerar outro código com o servidor atual.',
        fr: 'Le code continue de pointer vers le profil de l’ancien serveur. Si vous avez utilisé la fonction de migration de Mastodon, ce profil indique généralement votre nouveau compte, mais le plus sûr est de générer un autre code avec votre serveur actuel.',
        it: 'Il codice continua a puntare al profilo sul vecchio server. Se hai usato la funzione di trasferimento di Mastodon, quel profilo di solito indica il tuo nuovo account, ma la scelta più sicura è creare un altro codice con il server attuale.',
      },
    },
  ],
};

export default content;
