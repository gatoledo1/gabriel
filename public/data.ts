export const dataAbout = [
  {
    title: "Intranet PUC-Campinas",
    paragraph:
      "Desenvolvimento de uma nova interface para o sistema web interno, uma plataforma robusta que contém todos os microsserviços utilizados por docentes e funcionários",
    arraySkills: ["Bootstrap 4 CSS", "Javascript", "jQuery", "ASP.Net", "Microsserviços"],
    image: "intranet-1.png",
    link: "",
    sizeImg: {
      width: 668,
      height: 401,
    },
    moreDetails: {
      image: "intranet-2.png",
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "Plataforma anteriormente desenvolvida em 2008, sem acessibilidade, navegação complicada e travamento frente no carregameto.",
        "Desenvolvi toda interface, os serviços são carregados dentro da interface somente com a interação do usuário.",
        "Organização na plataforma, ferramenta para criação de assinatura de e-mail, publicação de comunicados (CRUD de posts), o modo escuro melhorou o trabalho de colaboradores que passavam suas noites nesse sistema.",
      ],
    },
  },
  {
    title: "App dos alunos PUC-Campinas",
    paragraph:
      "Desenvolvimento do novo App dos Alunos PUC-Campinas.",
    arraySkills: ["React Native", "Expo", "Typescript", "Styled-Components", "Maps", "Push Notification", "Game"],
    image: [
      "app-puc/app-do-aluno-1.jpg",
      "app-puc/app-do-aluno-2.jpg",
      "app-puc/app-do-aluno-4.jpg",
      "app-puc/app-do-aluno-5.jpg",
      "app-puc/app-do-aluno-6.jpg",
      "app-puc/app-do-aluno-7.jpg",
    ],
    link: "https://play.google.com/store/apps/details?id=br.edu.puccampinas.appalunopuc",
    sizeImg: {
      width: 248,
      height: 544,
    },
    moreDetails: {
      image: ["app-puc/app-do-aluno-3.jpg", "app-puc/app-do-aluno-8.jpg"],
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "O app anterior havia sido desenvolvido em 2014 e já não estava compátivel com os novos OS.",
        "Responsável por todo desenvolvimento com React, trabalhei junto aos desenvolvedores back-end, que me forneciam APIs, entre outros recursos do sistema interno.",
        "A adesão ao app foi enorme, passou a ser um diferencial durante a pandemia. O app conta com consulta de notas, disciplinas, notificações push, acesso ao portal, biometria, geolocalização para indicar as salas de aula do aluno, modo escuro e um game.",
      ],
    },
  },
  {
    title: "Portal de notícias Konkero",
    paragraph:
      "Migração do portal de notícias financeiras 'Konkero', de Wordpress para um front-end em NextJS.",
    arraySkills: ["NextJS", "ReactJS", "Typescript", "Apollo", "GraphQL", "Wordpress", "SASS", "AMP"],
    image: "konkero-1.png",
    link: "https://konkero.com.br/",
    sizeImg: {
      width: 668,
      height: 457,
    },
    moreDetails: {
      image: "konkero-2.png",
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "Era um site Wordpress como back-end e um front com PHP separado do WP, todas as páginas criadas eram adicionadas em seu .htaccess, então estava inviável continuar com o projeto desta forma.",
        "Trabalhei nesse projeto desde a criação dos protótipos até a entrega final, onde criei componentes ReactJS, paginas server side, paginas estáticas e queries do GraphQL.",
        "Esse site foi comprado pela FinanZero para aumentar o peso da marca com fluxo orgânico. Logo após a implementação, o ranqueamento e os acessos melhoraram consideravelmente, com isso, a FinanZero também se beneficiou.",
      ],
    },
  },
  {
    title: "Blog FinanZero",
    paragraph:
      "Migração do blog WordPress da FinanZero para NextJS. Criado template AMP no NextJS, desenvolvido um revalidador de cache no CloudFront/NextJS, para atualizar o cache após a publicação de um novo post no WordPress, implementação de um interpretador de blocos Gutenberg para componentes React.",
    arraySkills: ["NextJS", "ReactJS", "Typescript", "Apollo", "GraphQL", "Wordpress", "SASS", "AMP"],
    image: "finanzero-blog-1.png",
    link: "https://finanzero.com.br/blog/",
    sizeImg: {
      width: 668,
      height: 490,
    },
    moreDetails: {
      image: "finanzero-blog-2.png",
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "O blog da FinanZero dependia do Wordpress para seu carregamento, com isso, o SEO e performance estavam sendo penalizados.",
        "Criação de componentes ReactJS, paginas server side, queries GraphQL e Sintetizador de voz para a leitura dos textos, como forma de acessibilidade.",
        "Aumento no ranqueamento dos posts, maior acesso ao blog pelo público alvo e a possibilidade de publicação de Stories",
      ],
    },
  },
];
