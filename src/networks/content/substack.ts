import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Substack',
    en: 'What a Substack QR code is for',
    pt: 'Para que serve um código QR do Substack',
    fr: 'À quoi sert un code QR Substack',
    it: 'A cosa serve un codice QR di Substack',
  },
  about: {
    es: 'El código puede abrir tu publicación, es decir, la página de tu boletín en Substack, o tu perfil de autor. La página de la publicación muestra tus textos y el formulario para suscribirse con un correo electrónico. Así conviertes en lectores a personas que te conocieron fuera de internet: en una presentación, en una librería o en una feria.',
    en: 'The code can open your publication, that is, your newsletter’s page on Substack, or your author profile. The publication page shows your posts and the form to subscribe with an email address. That way you turn people who met you offline into readers: at a book launch, in a bookshop or at a fair.',
    pt: 'O código pode abrir a sua publicação, ou seja, a página da sua newsletter no Substack, ou o seu perfil de autor. A página da publicação mostra os seus textos e o formulário para assinar com um e-mail. Assim você transforma em leitores as pessoas que conheceram você fora da internet: em um lançamento, em uma livraria ou em uma feira.',
    fr: 'Le code peut ouvrir votre publication, c’est-à-dire la page de votre newsletter sur Substack, ou votre profil d’auteur. La page de la publication présente vos textes et le formulaire d’abonnement par e-mail. Vous transformez ainsi en lecteurs les personnes rencontrées hors ligne : lors d’une présentation, en librairie ou sur un salon.',
    it: 'Il codice può aprire la tua pubblicazione, cioè la pagina della tua newsletter su Substack, oppure il tuo profilo d’autore. La pagina della pubblicazione mostra i tuoi testi e il modulo per iscriversi con un indirizzo e-mail. Così trasformi in lettori le persone che ti hanno conosciuto fuori da internet: a una presentazione, in libreria o a una fiera.',
  },
  uses: [
    {
      es: 'Libros y fanzines: en la contraportada o la solapa, para que quien terminó de leer siga recibiendo tus textos.',
      en: 'Books and zines: on the back cover or the flap, so anyone who has finished reading keeps receiving your writing.',
      pt: 'Livros e zines: na quarta capa ou na orelha, para que quem terminou de ler continue recebendo os seus textos.',
      fr: 'Livres et fanzines : en quatrième de couverture ou sur le rabat, pour que le lecteur qui a terminé continue de recevoir vos textes.',
      it: 'Libri e fanzine: in quarta di copertina o sul risvolto, perché chi ha finito di leggere continui a ricevere i tuoi testi.',
    },
    {
      es: 'Charlas, mesas redondas y pódcast en vivo: en pantalla al terminar, cuando el público todavía tiene el teléfono en la mano.',
      en: 'Talks, panels and live podcasts: on screen at the end, while the audience still has their phones in hand.',
      pt: 'Palestras, mesas-redondas e podcasts ao vivo: na tela ao terminar, quando o público ainda está com o celular na mão.',
      fr: 'Conférences, tables rondes et podcasts en public : à l’écran à la fin, quand le public a encore son téléphone en main.',
      it: 'Talk, tavole rotonde e podcast dal vivo: sullo schermo alla fine, quando il pubblico ha ancora il telefono in mano.',
    },
    {
      es: 'Ferias del libro y mercados de autoedición: en la mesa, para sumar suscriptores entre quienes miran sin comprar.',
      en: 'Book fairs and self-publishing markets: on your table, to gain subscribers among those who browse without buying.',
      pt: 'Feiras do livro e de publicações independentes: na mesa, para ganhar assinantes entre quem olha sem comprar.',
      fr: 'Salons du livre et marchés de l’autoédition : sur votre table, pour gagner des abonnés parmi ceux qui regardent sans acheter.',
      it: 'Fiere del libro e mercati dell’autoeditoria: sul tavolo, per guadagnare iscritti tra chi guarda senza comprare.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Cuál es la diferencia entre la publicación y el perfil?',
        en: 'What is the difference between the publication and the profile?',
        pt: 'Qual é a diferença entre a publicação e o perfil?',
        fr: 'Quelle est la différence entre la publication et le profil ?',
        it: 'Qual è la differenza tra la pubblicazione e il profilo?',
      },
      a: {
        es: 'La publicación es tu boletín y tiene una dirección del tipo nombre.substack.com; es la mejor opción para conseguir suscriptores. El perfil, en substack.com/@usuario, te presenta como persona y reúne tus publicaciones y notas. Si escribes en varios boletines, el perfil los muestra juntos.',
        en: 'The publication is your newsletter and has an address like name.substack.com; it is the best option for gaining subscribers. The profile, at substack.com/@handle, presents you as a person and gathers your publications and notes. If you write for several newsletters, the profile shows them together.',
        pt: 'A publicação é a sua newsletter e tem um endereço do tipo nome.substack.com; é a melhor opção para conseguir assinantes. O perfil, em substack.com/@usuario, apresenta você como pessoa e reúne as suas publicações e notas. Se você escreve em várias newsletters, o perfil mostra todas juntas.',
        fr: 'La publication est votre newsletter et son adresse est du type nom.substack.com ; c’est la meilleure option pour gagner des abonnés. Le profil, à l’adresse substack.com/@identifiant, vous présente en tant que personne et réunit vos publications et vos notes. Si vous écrivez dans plusieurs newsletters, le profil les affiche ensemble.',
        it: 'La pubblicazione è la tua newsletter e ha un indirizzo del tipo nome.substack.com; è la scelta migliore per ottenere iscritti. Il profilo, su substack.com/@utente, ti presenta come persona e riunisce le tue pubblicazioni e le tue note. Se scrivi su più newsletter, il profilo le mostra insieme.',
      },
    },
    {
      q: {
        es: '¿Qué hago si mi boletín usa un dominio propio?',
        en: 'What if my newsletter uses its own domain?',
        pt: 'O que fazer se a minha newsletter usa um domínio próprio?',
        fr: 'Que faire si ma newsletter utilise son propre domaine ?',
        it: 'Cosa faccio se la mia newsletter usa un dominio proprio?',
      },
      a: {
        es: 'Tienes dos caminos. Puedes escribir el subdominio original de Substack y comprobar con el teléfono que lleva a tu boletín, o usar la plantilla URL personalizada con tu dominio. La segunda opción tiene la ventaja de mostrar tu propia dirección al escanear.',
        en: 'You have two routes. You can enter the original Substack subdomain and check with your phone that it leads to your newsletter, or use the Custom URL template with your domain. The second option has the advantage of showing your own address when scanned.',
        pt: 'Você tem dois caminhos. Pode digitar o subdomínio original do Substack e conferir com o celular se ele leva à sua newsletter, ou usar o modelo URL personalizada com o seu domínio. A segunda opção tem a vantagem de mostrar o seu próprio endereço ao escanear.',
        fr: 'Deux possibilités s’offrent à vous. Vous pouvez saisir le sous-domaine Substack d’origine et vérifier avec votre téléphone qu’il mène bien à votre newsletter, ou utiliser le modèle URL personnalisée avec votre domaine. La seconde option a l’avantage d’afficher votre propre adresse lors du scan.',
        it: 'Hai due strade. Puoi scrivere il sottodominio originale di Substack e verificare con il telefono che porti alla tua newsletter, oppure usare il modello URL personalizzato con il tuo dominio. La seconda opzione ha il vantaggio di mostrare il tuo indirizzo quando si scansiona.',
      },
    },
  ],
};

export default content;
