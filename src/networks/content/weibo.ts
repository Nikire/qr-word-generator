import type { NetworkContent } from '../types';

const content: NetworkContent = {
  heading: {
    es: 'Para qué sirve un código QR de Weibo',
    en: 'What a Weibo QR code is for',
    pt: 'Para que serve um código QR do Weibo',
    fr: 'À quoi sert un code QR Weibo',
    it: 'A cosa serve un codice QR di Weibo',
  },
  about: {
    es: 'Weibo es una de las grandes redes sociales de China, donde marcas, medios y personalidades publican para un público que en su mayoría no usa las redes occidentales. El código abre tu perfil a partir del identificador numérico de la cuenta. Es una forma sencilla de que visitantes y clientes chinos te sigan en la plataforma que ya utilizan.',
    en: 'Weibo is one of China’s major social networks, where brands, media and public figures post for an audience that mostly does not use Western networks. The code opens your profile from the account’s numeric ID. It is a simple way for Chinese visitors and customers to follow you on the platform they already use.',
    pt: 'O Weibo é uma das grandes redes sociais da China, onde marcas, veículos de imprensa e personalidades publicam para um público que, em sua maioria, não usa as redes ocidentais. O código abre o seu perfil a partir do identificador numérico da conta. É uma forma simples de visitantes e clientes chineses seguirem você na plataforma que já utilizam.',
    fr: 'Weibo est l’un des grands réseaux sociaux chinois, où marques, médias et personnalités publient pour un public qui, pour l’essentiel, n’utilise pas les réseaux occidentaux. Le code ouvre votre profil à partir de l’identifiant numérique du compte. C’est un moyen simple pour que vos visiteurs et clients chinois vous suivent sur la plateforme qu’ils utilisent déjà.',
    it: 'Weibo è uno dei grandi social network cinesi, dove marchi, testate e personaggi pubblici pubblicano per un pubblico che in gran parte non usa i social occidentali. Il codice apre il tuo profilo a partire dall’ID numerico dell’account. È un modo semplice per farti seguire da visitatori e clienti cinesi sulla piattaforma che usano già.',
  },
  uses: [
    {
      es: 'Museos, hoteles, tiendas y destinos turísticos que reciben viajeros chinos: en la señalización y los folletos.',
      en: 'Museums, hotels, shops and tourist destinations that welcome Chinese travellers: on signage and leaflets.',
      pt: 'Museus, hotéis, lojas e destinos turísticos que recebem viajantes chineses: na sinalização e nos folhetos.',
      fr: 'Musées, hôtels, boutiques et destinations touristiques qui accueillent des voyageurs chinois : sur la signalétique et les dépliants.',
      it: 'Musei, hotel, negozi e destinazioni turistiche che accolgono viaggiatori cinesi: sulla segnaletica e sui pieghevoli.',
    },
    {
      es: 'Empresas exportadoras: en stands de ferias comerciales, catálogos y empaques destinados a China.',
      en: 'Exporters: at trade fair stands, in catalogues and on packaging destined for China.',
      pt: 'Empresas exportadoras: em estandes de feiras comerciais, catálogos e embalagens destinados à China.',
      fr: 'Entreprises exportatrices : sur les stands de salons professionnels, dans les catalogues et sur les emballages destinés à la Chine.',
      it: 'Aziende esportatrici: negli stand delle fiere, nei cataloghi e sulle confezioni destinate alla Cina.',
    },
    {
      es: 'Universidades, clubes deportivos y artistas con seguidores en China: en material promocional.',
      en: 'Universities, sports clubs and artists with followers in China: on promotional material.',
      pt: 'Universidades, clubes esportivos e artistas com seguidores na China: em material promocional.',
      fr: 'Universités, clubs sportifs et artistes suivis en Chine : sur les supports promotionnels.',
      it: 'Università, club sportivi e artisti con follower in Cina: sul materiale promozionale.',
    },
  ],
  faq: [
    {
      q: {
        es: '¿Por qué pide un número y no el nombre de la cuenta?',
        en: 'Why does it ask for a number rather than the account name?',
        pt: 'Por que pede um número e não o nome da conta?',
        fr: 'Pourquoi demander un numéro plutôt que le nom du compte ?',
        it: 'Perché chiede un numero e non il nome dell’account?',
      },
      a: {
        es: 'Porque el enlace del perfil se construye con el identificador numérico (UID), que es el que aparece después de weibo.com/u/ en la dirección de tu perfil. Tiene una ventaja: aunque cambies el apodo de la cuenta, ese número se mantiene y el código sigue funcionando.',
        en: 'Because the profile link is built with the numeric user ID (UID), the one shown after weibo.com/u/ in your profile address. This has an advantage: even if you change the account nickname, that number stays the same and the code keeps working.',
        pt: 'Porque o link do perfil é montado com o identificador numérico (UID), que é o que aparece depois de weibo.com/u/ no endereço do seu perfil. Isso tem uma vantagem: mesmo que você mude o apelido da conta, esse número se mantém e o código continua funcionando.',
        fr: 'Parce que le lien du profil est construit avec l’identifiant numérique (UID), celui qui figure après weibo.com/u/ dans l’adresse de votre profil. Cela présente un avantage : même si vous changez le pseudonyme du compte, ce numéro reste le même et le code continue de fonctionner.',
        it: 'Perché il link del profilo si costruisce con l’ID numerico (UID), quello che compare dopo weibo.com/u/ nell’indirizzo del tuo profilo. C’è un vantaggio: anche se cambi il nickname dell’account, quel numero resta lo stesso e il codice continua a funzionare.',
      },
    },
    {
      q: {
        es: '¿Se puede ver el perfil sin tener cuenta en Weibo?',
        en: 'Can the profile be viewed without a Weibo account?',
        pt: 'É possível ver o perfil sem ter conta no Weibo?',
        fr: 'Peut-on voir le profil sans compte Weibo ?',
        it: 'Si può vedere il profilo senza un account Weibo?',
      },
      a: {
        es: 'El enlace se abre en el navegador o en la app si está instalada, pero Weibo suele pedir que se inicie sesión para ver el perfil completo o para seguir la cuenta. Para el público que ya usa Weibo, esto no supone ningún paso extra.',
        en: 'The link opens in the browser, or in the app if it is installed, but Weibo often asks people to sign in to see the full profile or to follow the account. For an audience that already uses Weibo this adds no extra step.',
        pt: 'O link abre no navegador ou no app, se estiver instalado, mas o Weibo costuma pedir login para ver o perfil completo ou para seguir a conta. Para o público que já usa o Weibo, isso não representa nenhuma etapa extra.',
        fr: 'Le lien s’ouvre dans le navigateur, ou dans l’application si elle est installée, mais Weibo demande souvent de se connecter pour voir le profil complet ou suivre le compte. Pour un public qui utilise déjà Weibo, cela n’ajoute aucune étape.',
        it: 'Il link si apre nel browser, o nell’app se è installata, ma Weibo chiede spesso di accedere per vedere il profilo completo o per seguire l’account. Per il pubblico che usa già Weibo non è un passaggio in più.',
      },
    },
  ],
};

export default content;
