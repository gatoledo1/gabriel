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
    aspectRatio: "5/3",
    moreDetails: {
      image: "intranet-2.png",
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "Plataforma anteriormente desenvolvida em 2008, sem acessibilidade, navegação complicada e travamento frequente no carregamento.",
        "Desenvolvi toda a interface, os serviços são carregados dentro da interface somente com a interação do usuário.",
        "Organização na plataforma, ferramenta para criação de assinatura de e-mail, publicação de comunicados (CRUD de posts), o modo escuro melhorou o trabalho de colaboradores que passavam suas noites nesse sistema.",
      ],
    },
  },
  {
    title: "App dos alunos PUC-Campinas",
    paragraph: "Desenvolvimento do novo App dos Alunos PUC-Campinas.",
    arraySkills: ["React Native", "Expo", "Typescript", "Styled-Components", "API Rest", "Maps", "Push Notification", "Game"],
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
    aspectRatio: "6/10",
    moreDetails: {
      image: ["app-puc/app-do-aluno-3.jpg", "app-puc/app-do-aluno-8.jpg"],
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "O app anterior havia sido desenvolvido em 2014 e já não estava compatível com os novos OS.",
        "Responsável por todo desenvolvimento com React, trabalhei junto aos desenvolvedores back-end, que me forneciam APIs, entre outros recursos do sistema interno.",
        "A adesão ao app foi enorme, passou a ser um diferencial durante a pandemia. O app conta com consulta de notas, disciplinas, notificações push, acesso ao portal, biometria, geolocalização para indicar as salas de aula do aluno, modo escuro e um game.",
      ],
    },
  },
  {
    title: "Portal de notícias Konkero",
    paragraph: "Migração do portal de notícias financeiras 'Konkero', de Wordpress para um front-end em NextJS.",
    arraySkills: ["NextJS", "ReactJS", "Typescript", "Apollo", "GraphQL", "Wordpress", "SASS", "AMP"],
    image: "./konkero-1.png",
    link: "https://konkero.com.br/",
    sizeImg: {
      width: 668,
      height: 457,
    },
    aspectRatio: "5/3",
    moreDetails: {
      image: "./konkero-2.png",
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
    image: "./finanzero-blog-1.png",
    link: "https://finanzero.com.br/blog/",
    sizeImg: {
      width: 668,
      height: 490,
    },
    aspectRatio: "5/3",
    moreDetails: {
      image: "./finanzero-blog-2.png",
      titles: ["Problema a se resolver", "Minha atuação", "Benefícios da implementação"],
      texts: [
        "O blog da FinanZero dependia do Wordpress para seu carregamento, com isso, o SEO e performance estavam sendo penalizados.",
        "Criação de componentes ReactJS, paginas server side, queries GraphQL e Sintetizador de voz para a leitura dos textos, como forma de acessibilidade.",
        "Aumento no ranqueamento dos posts, maior acesso ao blog pelo público alvo e a possibilidade de publicação de Stories",
      ],
    },
  },
  {
    title: "Plataforma FinanZero",
    paragraph:
      "Atuação com a plataforma de marketplace de empréstimos, desenvolvendo mecanismos dinâmicos, estruturas de metadados, back for front, formulários, entre outros. Ambiente contendo projetos React Hooks e React Class Components, NodeJS e GoLang",
    arraySkills: ["ReactJS", "Redux", "Stylus / SASS", "Javascript", "PWA", "Webpack", "Metadados", "API Rest"],
    image: ["./finanzero/finanzero-1.png", "./finanzero/finanzero-2.png", "./finanzero/finanzero-3.png", "./finanzero/finanzero-4.png"],
    link: "https://finanzero.com.br/me/",
    sizeImg: {
      width: 545,
      height: 841,
    },
    aspectRatio: "9/10",
    moreDetails: {
      image: ["./finanzero/finanzero-5.png", "./finanzero/finanzero-6.png", "./finanzero/finanzero-7.png", "./finanzero/finanzero-8.png"],
      titles: ["Minha atuação", "O que trouxe de novo?"],
      texts: [
        "Desenvolvimento de features correspondentes as novas regras de negócios trazidas pelo Product Owner. O time era responsável por 5 projetos",
        "Desenvolvimento de um Service Worker para gerenciamento de cache e atualização imediata dos scripts do SPA, no browser do usuário, a cada novo release ou hotfix da aplicação",
      ],
    },
  },
];

export const dataMyTests = [
  {
    title: "Plataforma de filmes com MicroFrontend",
    paragraph:
      "Aplicação ReactJS para o teste da Kenlo. Representa um site com listagem de filmes de uma API publica. Criado com microfrontend baseado em Webpack, Module Federation",
    arraySkills: ["Webpack", "Module Federation", "Javascript", "Typescript", "Axios", "SASS"],
    image: "./the-movies-1.jpg",
    link: "https://app-movies-microfrontend.vercel.app/",
    sizeImg: {
      width: 1315,
      height: 858,
    },
    aspectRatio: "5/3",
    moreDetails: {
      image: "./the-movies-2.jpg",
      titles: ["Desafio", "Estrutura"],
      texts: [
        "Criar uma aplicação com estilo livre usando Micro-Frontend usando React mais algum framework de sua escolha, onde a parte superior deve ser um menu e a parte inferior o corpo deve consumir uma a API de sua escolha. Desenvolver 1 interface com 2 projetos, utilizar o module federation do webpack",
        "O projeto header-app consiste em uma aplicação react somente com o menu, na configuração do Webpack a aplicação é externalizada em http://localhost:3001/remoteEntry.js. No projeto kenlo-test-movies, onde contém o container da aplicação (sem o menu), é feita a captura da aplicação remota.",
      ],
    },
  },
  {
    title: "Teste técnico: Transfeera",
    paragraph:
      "O objetivo era transformar o design sugerido, em um sistema funcional na web, integrando-o com a biblioteca JSON Server junto com o JSON fornecido.",
    arraySkills: ["Custom Hooks", "Antd (Ant Design)", "Javascript", "Typescript", "Axios", "SASS", "Cypress", "Metadados"],
    image: ["./transfeera-1.png", "./transfeera-2.png"],
    link: "",
    sizeImg: {
      width: 1272,
      height: 936,
    },
    aspectRatio: "5/3",
    moreDetails: {
      image: ["./transfeera-3.png", "./transfeera-4.png"],
      titles: ["Desafio", "Estrutura"],
      texts: [
        "Simular um back-end para a aplicação. O sistema devia incluir funcionalidades de listagem com filtros, inclusão, edição e remoção de Favorecidos de pagamento",
        "Utilização de metadados para construção dos fields e inputs. Os componentes foram criados em nível de micro-componentes para que as variações pudessem ser aplicadas, sem impedir a reutilização de cada componente.",
      ],
    },
  },
];
