export const dataAbout = [
  {
    title: "Intranet PUC-Campinas",
    paragraph:
      "Desenvolvimento de uma nova interface para o sistema web interno, uma plataforma robusta que contém todos os microsserviços utilizados por docentes e funcionários",
    arraySkills: ["Bootstrap 4 CSS", "Javascript", "jQuery", "ASP.Net", "Microsserviços"],
    image: "intranet-1.png",
    sizeImg: {
      width: 668,
      height: 401,
    },
    moreDetails: {
      image: "intranet-2.png",
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "Plataforma anteriormente desenvolvida em 2008, sem acessibilidade, navegação complicada, travamento frente no carregameto",
        "Desenvolvi toda interface, os serviços são carregados dentro da interface somente com a interação do usuário",
        "Organização na plataforma, ferramenta para criação de assinatura de e-mail, modo escuro, CRUD com publicação de comunicados",
      ],
    },
  },
  {
    title: "App dos alunos PUC-Campinas",
    paragraph:
      "Desenvolvimento de uma nova interface para o sistema web interno, uma plataforma robusta que contém todos os microsserviços utilizados por docentes e funcionários",
    arraySkills: ["React Native", "Expo", "Typescript", "Styled-Components", "Maps", "Push Notification", "Game"],
    image: [
      "app-puc/app-do-aluno-1.jpg",
      "app-puc/app-do-aluno-2.jpg",
      "app-puc/app-do-aluno-4.jpg",
      "app-puc/app-do-aluno-5.jpg",
      "app-puc/app-do-aluno-6.jpg",
      "app-puc/app-do-aluno-7.jpg",
    ],
    sizeImg: {
      width: 248,
      height: 544,
    },
    moreDetails: {
      image: ["app-puc/app-do-aluno-3.jpg", "app-puc/app-do-aluno-8.jpg"],
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "O app anterior havia sido desenvolvido em 2014 por um aluno, já estava incompátivel com os novos OS.",
        "Responsável por todo desenvolvimento com React, trabalhei junto a desenvolvedores back-end, no modelo Scrum, que me forneciam APIs, entre outros recursos do sistema interno.",
        "O app conta com consulta de notas, disciplinas, notificações push, acesso ao portal, biometria, geolocalização para indicar as salas de aula do aluno, modo escuro e um game",
      ],
    },
  },
  {
    title: "Portal de notícias Konkero",
    paragraph:
      "Trabalhando como Front-end na finanzero, migramos um portal de notícias financeiras, de Wordpress para um front-end em NextJS.",
    arraySkills: ["NextJS", "Typescript", "Apollo", "GraphQL", "Wordpress", "SASS", "AMP"],
    image: "konkero-1.png",
    sizeImg: {
      width: 668,
      height: 457,
    },
    moreDetails: {
      image: "konkero-2.png",
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "Site Wordpress como back-end e um front com PHP separado do WP, todas as páginas criadas, eram adicionadas em seu .htaccess, então estava inviável continuar com o projeto desta forma.",
        "Trabalhei nesse projeto do protótipo até a entrega, onde criei componentes ReactJS, paginas server side, paginas estáticas e queries do GraphQL.",
        "Esse site 'Konkero', foi comprado pela Finanzero para que seu alto fluxo orgânico trouxesse mais acessos ao nosso site e também, possíveis conversões e contratos. Logo após a implementação, o ranqueamento melhorou muito, o fluxo de acessos ao site aumentou consideravelmente e a finanzero também se beneficiou destes acessos.",
      ],
    },
  },
  {
    title: "Blog Finanzero",
    paragraph:
      "Migração do blog WordPress da Finanzero para NextJS. Criando template AMP no NextJS, revalidador de cache no CloudFront e NextJS, quando temos um novo post no WordPress e interpretador de blocos Gutenberg para componentes React",
    arraySkills: ["NextJS", "Typescript", "Apollo", "GraphQL", "Wordpress", "SASS", "AMP", "Leitor de texto"],
    image: "finanzero-blog-1.png",
    sizeImg: {
      width: 668,
      height: 490,
    },
    moreDetails: {
      image: "finanzero-blog-2.png",
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "O blog da FinanZero dependia o Wordpress para seu carregamento, o SEO estava sendo penalizado",
        "Criação de componentes ReactJS, paginas server side, queries do GraphQL e analisador de blocos Gutenberg para ReactJS.",
        "Aumento no rankiamento dos posts, acessos ao blog e publicação de stories no Google",
      ],
    },
  },
];
