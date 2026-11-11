/**
 * Source-of-truth dictionary. Other locales must match this shape
 * (`satisfies Dictionary`). Array items line up with src/content/profile.ts.
 */
const ptBR = {
  meta: {
    glassTitle: 'Felipe Monteiro | Engenheiro Full-Stack',
    glassDescription:
      'Portfólio de Felipe de Alcântara Monteiro, engenheiro full-stack especializado em React, Node e React Native.',
    cyberTitle: 'Felipe Monteiro | Portfólio 3D',
    parallaxTitle: 'Felipe Monteiro | Cidade Neon',
  },
  nav: {
    primary: 'Navegação principal',
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    experience: 'Experiência',
    projects: 'Projetos',
    tools: 'Ferramentas',
    process: 'Processo',
    contact: 'Contato',
    connect: 'Vamos conversar',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    mobileMenu: 'Menu de navegação',
    language: 'Idioma',
    toLight: 'Ativar tema claro',
    toDark: 'Ativar tema escuro',
    social: 'Redes sociais',
    backToTop: 'Voltar ao topo',
  },
  switcher: {
    label: 'Comparar versões do design',
    original: 'Original',
    glass: 'Glass',
    cyber: '3D',
    parallax: 'Parallax',
  },
  hero: {
    kicker: 'Engenheiro Full-Stack',
    taglineStart: 'Construo experiências web e mobile na interseção de',
    taglineCode: 'código',
    taglineJoin: '+',
    taglineDesign: 'design',
    taglineEnd: '.',
    stack: 'React · Node · React Native',
    viewProjects: 'Ver projetos',
    aboutMe: 'Sobre mim',
    statusLabel: 'Status',
    statusValue: 'Online',
    skillsPanel: 'Habilidades',
    scroll: 'Role',
    photoAlt: 'Foto de Felipe Monteiro',
  },
  stats: {
    devYears: 'Anos como dev',
    companies: 'Empresas',
    projects: 'Projetos',
    technologies: 'Tecnologias',
  },
  about: {
    label: 'Sobre mim',
    titleStart: 'Transformo ideias em',
    titleHighlight: 'soluções digitais.',
    paragraphs: [
      'Sou engenheiro full-stack, com formação em Engenharia Mecânica pela Unicamp e uma longa estrada entre indústria, educação e software.',
      'Tenho paixão por tecnologia e por construir. Mas construir o quê? Soluções inteligentes para problemas diversos.',
    ],
    cta: 'Quer saber mais? Vamos tomar um café',
    terminalTitle: 'whoami.ts',
    educationTitle: 'Formação acadêmica',
    educationSubtitle:
      'Formação sólida em uma das principais universidades do Brasil',
    degrees: [
      {
        course: 'Graduação em Engenharia Mecânica',
        detail: 'UNICAMP',
        status: 'Concluído em 2014',
      },
      {
        course: 'Mestrado em Ciência da Computação',
        detail: 'Inteligência Artificial e Robótica · UNICAMP',
        status: 'Interrompido em 2019',
      },
      {
        course: 'Graduação em Engenharia Elétrica',
        detail: 'Desenvolvimento de software e IA · UNICAMP',
        status: 'Em curso desde 2021',
      },
    ],
    unicampAlt: 'Logo da Unicamp',
  },
  services: {
    label: 'Serviços',
    title: 'O que eu faço',
    items: [
      {
        title: 'Front-end web',
        description:
          'Interfaces rápidas, acessíveis e responsivas com React e Next.js.',
      },
      {
        title: 'Apps mobile',
        description:
          'Aplicativos multiplataforma com React Native e a mesma base de código.',
      },
      {
        title: 'Back-end e APIs',
        description:
          'APIs e integrações com Node.js e Python, do banco de dados ao deploy.',
      },
      {
        title: 'E-commerce',
        description:
          'Desenvolvimento e manutenção de plataformas de e-commerce internacionais.',
      },
    ],
  },
  experience: {
    label: 'Experiência',
    title: 'Trajetória profissional',
    subtitle: 'Etapas da carreira, da engenharia ao software',
    items: [
      {
        period: '2009 – 2010',
        description:
          'Fiz parte da divisão de freios, onde projetamos todo o sistema de freios do carro F-2009. Nos classificamos em 5º lugar.',
      },
      {
        period: '2011 – 2013',
        description:
          'Iniciação científica na área de vibrações mecânicas com bolsa do CNPq. Estudei fenômenos vibratórios em engrenagens planetárias de transmissões automáticas.',
      },
      {
        period: '2º semestre de 2013',
        description: 'Trabalhei como professor do colégio técnico noturno.',
      },
      {
        period: 'Jun – Dez 2014',
        description:
          'Estágio na área de softwares LMS, atual Simcenter, que atuam na simulação e nos testes de projetos.',
      },
      {
        period: 'Jan 2015 – Mar 2016',
        description:
          'Pré e pós-venda técnica do software Preactor, que cuida da programação e do planejamento da produção de indústrias.',
      },
      {
        period: 'Mar – Jun 2017',
        description:
          'Analista de relacionamento com o cliente nos setores de Bills e Chargeback.',
      },
      {
        period: 'Jun 2016 – Out 2019',
        description:
          'Fundador desta startup de educação, que oferecia aulas particulares de exatas e programação.',
      },
      {
        period: 'Jan – Set 2020',
        description:
          'Desenvolvedor front-end nos diversos projetos da empresa: design system, integração com HubSpot, correção de bugs, manutenção do código e criação de um backoffice.',
      },
      {
        period: 'Desde fev 2021',
        description:
          'Desenvolvedor front-end React em projetos internacionais, com clientes e colegas pelo mundo, focado no desenvolvimento e na manutenção de plataformas de e-commerce.',
      },
    ],
    academic: 'Acadêmico',
    current: 'Atual',
  },
  projects: {
    label: 'Projetos',
    title: 'Projetos em destaque',
    subtitle: 'Desafios técnicos de processos seletivos',
    items: [
      {
        title: 'Caos Focado',
        role: 'Dev Front-end',
        description:
          'Listagem de clínicas e formulário para cadastrar novas, seguindo o layout, integrando a API dos Correios e implementando ordenação.',
        alt: 'Tela do teste Caos Focado',
      },
      {
        title: 'Credere',
        role: 'Dev Back-end',
        description:
          'Projeto full-stack com back-end na Digital Ocean e front-end na Vercel. A aplicação controla uma sonda que se move em um plano 2D.',
        alt: 'Tela do teste Credere',
      },
      {
        title: 'Venturus',
        role: 'Dev Front-end',
        description:
          'Dashboard inspirada no Cartola FC para montar times de futebol usando uma API externa. Um dos layouts mais desafiadores que desenvolvi.',
        alt: 'Tela do teste Venturus',
      },
      {
        title: 'Code Miner',
        role: 'Dev Full-Stack',
        description: 'Ainda em construção.',
        alt: 'Tela do teste Code Miner',
      },
      {
        title: 'Conta Simples',
        role: 'Dev Full-Stack',
        description: 'Back-end pronto, com o front-end ainda em construção.',
        alt: 'Tela do teste Conta Simples',
      },
    ],
    open: 'Abrir projeto',
    inProgress: 'Em construção',
    details: 'Detalhes',
    back: 'Voltar',
    detailsOf: 'Ver detalhes de',
  },
  tools: {
    label: 'Ferramentas',
    title: 'Ferramentas que uso',
  },
  process: {
    label: 'Processo',
    title: 'Como eu trabalho',
    steps: [
      {
        title: 'Descoberta',
        description: 'Entender objetivos, público e o problema real.',
      },
      {
        title: 'Planejamento',
        description: 'Arquitetura, escopo e prioridades bem definidos.',
      },
      {
        title: 'Design',
        description: 'Interfaces claras, acessíveis e consistentes.',
      },
      {
        title: 'Desenvolvimento',
        description: 'Código limpo, tipado e testado.',
      },
      {
        title: 'Entrega',
        description: 'Deploy, monitoramento e melhorias contínuas.',
      },
    ],
  },
  contact: {
    label: 'Contato',
    titleStart: 'Vamos construir algo',
    titleHighlight: 'extraordinário',
    subtitle: 'Deixe sua mensagem para batermos um papo.',
    locationLabel: 'Localização',
    locationValue: 'Brasil',
    githubLabel: 'GitHub',
    formLabel: 'Formulário de contato',
    fields: {
      name: 'Nome',
      email: 'E-mail',
      subject: 'Assunto',
      message: 'Mensagem',
    },
    send: 'Enviar mensagem',
    sending: 'Enviando...',
    success: 'Mensagem enviada com sucesso!',
    error: 'Não foi possível enviar a mensagem. Tente novamente.',
    errors: {
      nameMin: 'Informe seu nome.',
      nameMax: 'O nome deve ter no máximo 100 caracteres.',
      emailInvalid: 'Informe um e-mail válido.',
      emailMax: 'O e-mail deve ter no máximo 254 caracteres.',
      subjectMin: 'Informe o assunto.',
      subjectMax: 'O assunto deve ter no máximo 120 caracteres.',
      messageMin: 'A mensagem deve ter pelo menos 10 caracteres.',
      messageMax: 'A mensagem deve ter no máximo 5000 caracteres.',
    },
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    builtWith: 'Desenhado e desenvolvido com Next.js e Tailwind CSS',
    modelCredits: 'Modelos 3D (CC BY 4.0):',
  },
  cyber: {
    kicker: 'Olá, eu sou',
    role: 'Engenheiro full-stack construindo interfaces 3D, web e mobile.',
    introLabel: 'Introdução',
    introTitle: 'Visão geral',
    techLabel: 'Stack',
    techTitle: 'Tecnologias',
    loading: 'Carregando',
    contactTitle: 'Entre em contato',
    drag: 'Arraste para girar',
    noWebgl: 'Seu navegador não suporta WebGL, então a cena 3D foi ocultada.',
  },
  parallax: {
    kicker: 'Bem-vindo à cidade neon',
    title: 'Código que brilha no escuro',
    subtitle: 'Role para atravessar a cidade.',
    scroll: 'Role',
    signA: '未来',
    signB: 'CODE',
    chapters: [
      {
        label: '01 · Origem',
        title: 'Da engenharia ao software',
        text: 'Engenharia mecânica na Unicamp, freios de Fórmula SAE, vibrações e simulação industrial. A base analítica que hoje vira código.',
      },
      {
        label: '02 · Construção',
        title: 'Front-end com propósito',
        text: 'React, Next.js e React Native para criar produtos rápidos, acessíveis e agradáveis de usar.',
      },
      {
        label: '03 · Hoje',
        title: 'E-commerce pelo mundo',
        text: 'Plataformas internacionais de e-commerce com times distribuídos, cuidando de performance e qualidade.',
      },
    ],
    ctaTitle: 'Gostou do passeio?',
    ctaText: 'Veja a versão completa do portfólio ou fale comigo.',
    ctaGlass: 'Ver portfólio',
    ctaContact: 'Contato',
  },
};

export type Dictionary = typeof ptBR;

export default ptBR;
