import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Código QR de Codeberg: para qué se usa',
    en: 'Codeberg QR code: what it is used for',
    pt: 'Código QR do Codeberg: para que é usado',
    fr: 'Code QR Codeberg : à quoi il sert',
    it: 'Codice QR di Codeberg: a cosa serve',
  },
  about: {
    es: 'Codeberg es una plataforma para alojar repositorios Git gestionada por una asociación sin fines de lucro y orientada al software libre. El código abre tu perfil o el de tu organización, con la lista de tus repositorios públicos. Como es un servicio menos conocido que otros, el código evita explicar la dirección y asegura que la gente llegue al sitio correcto.',
    en: 'Codeberg is a Git hosting platform run by a non-profit association and focused on free software. The code opens your profile or your organisation’s, with the list of your public repositories. As the service is less well known than others, the code saves you explaining the address and makes sure people land in the right place.',
    pt: 'O Codeberg é uma plataforma de hospedagem de repositórios Git mantida por uma associação sem fins lucrativos e voltada ao software livre. O código abre o seu perfil ou o da sua organização, com a lista dos seus repositórios públicos. Como o serviço é menos conhecido que outros, o código evita explicar o endereço e garante que as pessoas cheguem ao lugar certo.',
    fr: 'Codeberg est une plateforme d’hébergement de dépôts Git gérée par une association à but non lucratif et tournée vers le logiciel libre. Le code ouvre votre profil ou celui de votre organisation, avec la liste de vos dépôts publics. Le service étant moins connu que d’autres, le code vous évite d’expliquer l’adresse et garantit que l’on arrive au bon endroit.',
    it: 'Codeberg è una piattaforma di hosting per repository Git gestita da un’associazione senza scopo di lucro e orientata al software libero. Il codice apre il tuo profilo o quello della tua organizzazione, con l’elenco dei tuoi repository pubblici. Poiché il servizio è meno conosciuto di altri, il codice evita di spiegare l’indirizzo e assicura che le persone arrivino nel posto giusto.',
  },
  uses: [
    {
      es: 'Encuentros de software libre: en la mesa de tu proyecto, junto a los adhesivos y la información para colaborar.',
      en: 'Free-software events: on your project’s table, next to the stickers and the contributor information.',
      pt: 'Encontros de software livre: na mesa do seu projeto, ao lado dos adesivos e das informações para colaborar.',
      fr: 'Rencontres du logiciel libre : sur la table de votre projet, à côté des autocollants et des informations pour contribuer.',
      it: 'Eventi di software libero: sul tavolo del tuo progetto, accanto agli adesivi e alle informazioni per contribuire.',
    },
    {
      es: 'Proyectos que se mudaron de otra plataforma: en charlas y documentación impresa, para indicar el nuevo hogar del código.',
      en: 'Projects that moved from another platform: in talks and printed documentation, to point to the code’s new home.',
      pt: 'Projetos que migraram de outra plataforma: em palestras e documentação impressa, para indicar a nova casa do código.',
      fr: 'Projets migrés depuis une autre plateforme : dans les présentations et la documentation imprimée, pour indiquer le nouvel emplacement du code.',
      it: 'Progetti migrati da un’altra piattaforma: nei talk e nella documentazione stampata, per indicare la nuova casa del codice.',
    },
    {
      es: 'Asociaciones y colectivos: en folletos y carteles, para que cualquiera pueda revisar el código que usan.',
      en: 'Associations and collectives: on leaflets and posters, so anyone can inspect the code they use.',
      pt: 'Associações e coletivos: em folhetos e cartazes, para que qualquer pessoa possa conferir o código que usam.',
      fr: 'Associations et collectifs : sur des dépliants et des affiches, pour que chacun puisse consulter le code qu’ils utilisent.',
      it: 'Associazioni e collettivi: su volantini e manifesti, perché chiunque possa esaminare il codice che usano.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Puedo usar el nombre de una organización en lugar de un usuario?',
        en: 'Can I use an organisation name instead of a user?',
        pt: 'Posso usar o nome de uma organização em vez de um usuário?',
        fr: 'Puis-je utiliser le nom d’une organisation à la place d’un utilisateur ?',
        it: 'Posso usare il nome di un’organizzazione invece di un utente?',
      },
      a: {
        es: 'Sí. En Codeberg los usuarios y las organizaciones comparten el mismo formato, codeberg.org/nombre. Escribe el nombre de la organización en el campo y el código abrirá su página con todos sus repositorios.',
        en: 'Yes. On Codeberg, users and organisations share the same format, codeberg.org/name. Type the organisation name in the field and the code will open its page with all its repositories.',
        pt: 'Sim. No Codeberg, usuários e organizações têm o mesmo formato, codeberg.org/nome. Digite o nome da organização no campo e o código abrirá a página dela com todos os repositórios.',
        fr: 'Oui. Sur Codeberg, utilisateurs et organisations partagent le même format, codeberg.org/nom. Saisissez le nom de l’organisation dans le champ et le code ouvrira sa page avec tous ses dépôts.',
        it: 'Sì. Su Codeberg utenti e organizzazioni condividono lo stesso formato, codeberg.org/nome. Scrivi il nome dell’organizzazione nel campo e il codice aprirà la sua pagina con tutti i repository.',
      },
    },
    {
      q: {
        es: '¿Quien escanea el código necesita una cuenta en Codeberg?',
        en: 'Does the person scanning need a Codeberg account?',
        pt: 'Quem escaneia o código precisa de uma conta no Codeberg?',
        fr: 'La personne qui scanne le code a-t-elle besoin d’un compte Codeberg ?',
        it: 'Chi scansiona il codice ha bisogno di un account Codeberg?',
      },
      a: {
        es: 'No. El perfil y los repositorios públicos se abren en el navegador del teléfono sin iniciar sesión. Solo hace falta una cuenta para participar: abrir incidencias, comentar o enviar cambios.',
        en: 'No. The profile and public repositories open in the phone’s browser without signing in. An account is only needed to take part: opening issues, commenting or submitting changes.',
        pt: 'Não. O perfil e os repositórios públicos abrem no navegador do celular sem fazer login. A conta só é necessária para participar: abrir issues, comentar ou enviar alterações.',
        fr: 'Non. Le profil et les dépôts publics s’ouvrent dans le navigateur du téléphone sans connexion. Un compte n’est nécessaire que pour participer : ouvrir des tickets, commenter ou proposer des modifications.',
        it: 'No. Il profilo e i repository pubblici si aprono nel browser del telefono senza effettuare il login. L’account serve solo per partecipare: aprire segnalazioni, commentare o inviare modifiche.',
      },
    },
  ],
};

export default content;
