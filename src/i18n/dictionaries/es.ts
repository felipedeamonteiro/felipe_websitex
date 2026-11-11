import type { Dictionary } from './pt-BR';

const es = {
  meta: {
    glassTitle: 'Felipe Monteiro | Ingeniero Full-Stack',
    glassDescription:
      'Portafolio de Felipe de Alcântara Monteiro, ingeniero full-stack especializado en React, Node y React Native.',
    cyberTitle: 'Felipe Monteiro | Portafolio 3D',
    parallaxTitle: 'Felipe Monteiro | Ciudad Neón',
  },
  nav: {
    primary: 'Navegación principal',
    home: 'Inicio',
    about: 'Sobre mí',
    services: 'Servicios',
    experience: 'Experiencia',
    projects: 'Proyectos',
    tools: 'Herramientas',
    process: 'Proceso',
    contact: 'Contacto',
    connect: 'Hablemos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    mobileMenu: 'Menú de navegación',
    language: 'Idioma',
    toLight: 'Activar tema claro',
    toDark: 'Activar tema oscuro',
    social: 'Redes sociales',
    backToTop: 'Volver arriba',
  },
  switcher: {
    label: 'Comparar versiones del diseño',
    original: 'Original',
    glass: 'Glass',
    cyber: '3D',
    parallax: 'Parallax',
  },
  hero: {
    kicker: 'Ingeniero Full-Stack',
    taglineStart: 'Creo experiencias web y móviles en la intersección de',
    taglineCode: 'código',
    taglineJoin: '+',
    taglineDesign: 'diseño',
    taglineEnd: '.',
    stack: 'React · Node · React Native',
    viewProjects: 'Ver proyectos',
    aboutMe: 'Sobre mí',
    statusLabel: 'Estado',
    statusValue: 'En línea',
    skillsPanel: 'Habilidades',
    scroll: 'Desliza',
    photoAlt: 'Foto de Felipe Monteiro',
  },
  stats: {
    devYears: 'Años como dev',
    companies: 'Empresas',
    projects: 'Proyectos',
    technologies: 'Tecnologías',
  },
  about: {
    label: 'Sobre mí',
    titleStart: 'Transformo ideas en',
    titleHighlight: 'soluciones digitales.',
    paragraphs: [
      'Soy ingeniero full-stack, con formación en Ingeniería Mecánica por la Unicamp y un largo recorrido entre la industria, la educación y el software.',
      'Me apasiona la tecnología y construir. Pero ¿construir qué? Soluciones inteligentes para problemas diversos.',
    ],
    cta: '¿Quieres saber más? Tomemos un café',
    terminalTitle: 'whoami.ts',
    educationTitle: 'Formación académica',
    educationSubtitle:
      'Una formación sólida en una de las principales universidades de Brasil',
    degrees: [
      {
        course: 'Grado en Ingeniería Mecánica',
        detail: 'UNICAMP',
        status: 'Concluido en 2014',
      },
      {
        course: 'Maestría en Ciencias de la Computación',
        detail: 'Inteligencia Artificial y Robótica · UNICAMP',
        status: 'Interrumpido en 2019',
      },
      {
        course: 'Grado en Ingeniería Eléctrica',
        detail: 'Desarrollo de software e IA · UNICAMP',
        status: 'En curso desde 2021',
      },
    ],
    unicampAlt: 'Logo de la Unicamp',
  },
  services: {
    label: 'Servicios',
    title: 'Lo que hago',
    items: [
      {
        title: 'Front-end web',
        description:
          'Interfaces rápidas, accesibles y responsivas con React y Next.js.',
      },
      {
        title: 'Apps móviles',
        description:
          'Aplicaciones multiplataforma con React Native y una misma base de código.',
      },
      {
        title: 'Back-end y APIs',
        description:
          'APIs e integraciones con Node.js y Python, de la base de datos al deploy.',
      },
      {
        title: 'E-commerce',
        description:
          'Desarrollo y mantenimiento de plataformas de e-commerce internacionales.',
      },
    ],
  },
  experience: {
    label: 'Experiencia',
    title: 'Trayectoria profesional',
    subtitle: 'Etapas de la carrera, de la ingeniería al software',
    items: [
      {
        period: '2009 – 2010',
        description:
          'Formé parte de la división de frenos, donde diseñamos todo el sistema de frenos del auto F-2009. Quedamos en 5.º lugar.',
      },
      {
        period: '2011 – 2013',
        description:
          'Iniciación científica en vibraciones mecánicas con beca del CNPq. Estudié fenómenos vibratorios en engranajes planetarios de transmisiones automáticas.',
      },
      {
        period: '2.º semestre de 2013',
        description: 'Trabajé como profesor en un colegio técnico nocturno.',
      },
      {
        period: 'Jun – Dic 2014',
        description:
          'Pasantía en el área de software LMS, hoy Simcenter, enfocado en la simulación y las pruebas de proyectos.',
      },
      {
        period: 'Ene 2015 – Mar 2016',
        description:
          'Preventa y posventa técnica del software Preactor, dedicado a la programación y planificación de la producción industrial.',
      },
      {
        period: 'Mar – Jun 2017',
        description:
          'Analista de relación con el cliente en los sectores de Bills y Chargeback.',
      },
      {
        period: 'Jun 2016 – Oct 2019',
        description:
          'Fundador de esta startup educativa, que ofrecía clases particulares de ciencias exactas y programación.',
      },
      {
        period: 'Ene – Sep 2020',
        description:
          'Desarrollador front-end en los diversos proyectos de la empresa: design system, integración con HubSpot, corrección de bugs, mantenimiento del código y creación de un backoffice.',
      },
      {
        period: 'Desde feb 2021',
        description:
          'Desarrollador front-end React en proyectos internacionales, con clientes y colegas de todo el mundo, enfocado en el desarrollo y mantenimiento de plataformas de e-commerce.',
      },
    ],
    academic: 'Académico',
    current: 'Actual',
  },
  projects: {
    label: 'Proyectos',
    title: 'Proyectos destacados',
    subtitle: 'Desafíos técnicos de procesos de selección',
    items: [
      {
        title: 'Caos Focado',
        role: 'Dev Front-end',
        description:
          'Listado de clínicas y formulario para registrar nuevas, siguiendo el layout, integrando la API de Correios e implementando ordenamiento.',
        alt: 'Pantalla de la prueba Caos Focado',
      },
      {
        title: 'Credere',
        role: 'Dev Back-end',
        description:
          'Proyecto full-stack con back-end en Digital Ocean y front-end en Vercel. La aplicación controla una sonda que se mueve en un plano 2D.',
        alt: 'Pantalla de la prueba Credere',
      },
      {
        title: 'Venturus',
        role: 'Dev Front-end',
        description:
          'Dashboard inspirado en Cartola FC para armar equipos de fútbol usando una API externa. Uno de los layouts más desafiantes que he desarrollado.',
        alt: 'Pantalla de la prueba Venturus',
      },
      {
        title: 'Code Miner',
        role: 'Dev Full-Stack',
        description: 'Aún en construcción.',
        alt: 'Pantalla de la prueba Code Miner',
      },
      {
        title: 'Conta Simples',
        role: 'Dev Full-Stack',
        description: 'Back-end listo, con el front-end aún en construcción.',
        alt: 'Pantalla de la prueba Conta Simples',
      },
    ],
    open: 'Abrir proyecto',
    inProgress: 'En construcción',
    details: 'Detalles',
    back: 'Volver',
    detailsOf: 'Ver detalles de',
  },
  tools: {
    label: 'Herramientas',
    title: 'Herramientas que uso',
  },
  process: {
    label: 'Proceso',
    title: 'Cómo trabajo',
    steps: [
      {
        title: 'Descubrimiento',
        description: 'Entender los objetivos, el público y el problema real.',
      },
      {
        title: 'Planificación',
        description: 'Arquitectura, alcance y prioridades bien definidos.',
      },
      {
        title: 'Diseño',
        description: 'Interfaces claras, accesibles y consistentes.',
      },
      {
        title: 'Desarrollo',
        description: 'Código limpio, tipado y probado.',
      },
      {
        title: 'Entrega',
        description: 'Deploy, monitoreo y mejora continua.',
      },
    ],
  },
  contact: {
    label: 'Contacto',
    titleStart: 'Construyamos algo',
    titleHighlight: 'extraordinario',
    subtitle: 'Déjame tu mensaje y conversemos.',
    locationLabel: 'Ubicación',
    locationValue: 'Brasil',
    githubLabel: 'GitHub',
    formLabel: 'Formulario de contacto',
    fields: {
      name: 'Nombre',
      email: 'Correo electrónico',
      subject: 'Asunto',
      message: 'Mensaje',
    },
    send: 'Enviar mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado con éxito!',
    error: 'No fue posible enviar el mensaje. Inténtalo de nuevo.',
    errors: {
      nameMin: 'Ingresa tu nombre.',
      nameMax: 'El nombre debe tener como máximo 100 caracteres.',
      emailInvalid: 'Ingresa un correo electrónico válido.',
      emailMax: 'El correo debe tener como máximo 254 caracteres.',
      subjectMin: 'Ingresa el asunto.',
      subjectMax: 'El asunto debe tener como máximo 120 caracteres.',
      messageMin: 'El mensaje debe tener al menos 10 caracteres.',
      messageMax: 'El mensaje debe tener como máximo 5000 caracteres.',
    },
  },
  footer: {
    rights: 'Todos los derechos reservados.',
    builtWith: 'Diseñado y desarrollado con Next.js y Tailwind CSS',
    modelCredits: 'Modelos 3D (CC BY 4.0):',
  },
  cyber: {
    kicker: 'Hola, soy',
    role: 'Ingeniero full-stack que construye interfaces 3D, web y móviles.',
    introLabel: 'Introducción',
    introTitle: 'Visión general',
    techLabel: 'Stack',
    techTitle: 'Tecnologías',
    loading: 'Cargando',
    contactTitle: 'Ponte en contacto',
    drag: 'Arrastra para girar',
    noWebgl:
      'Tu navegador no es compatible con WebGL, así que la escena 3D se ocultó.',
  },
  parallax: {
    kicker: 'Bienvenido a la ciudad neón',
    title: 'Código que brilla en la oscuridad',
    subtitle: 'Desliza para recorrer la ciudad.',
    scroll: 'Desliza',
    signA: '未来',
    signB: 'CODE',
    chapters: [
      {
        label: '01 · Origen',
        title: 'De la ingeniería al software',
        text: 'Ingeniería mecánica en la Unicamp, frenos de Fórmula SAE, vibraciones y simulación industrial. La base analítica que hoy se convierte en código.',
      },
      {
        label: '02 · Construcción',
        title: 'Front-end con propósito',
        text: 'React, Next.js y React Native para crear productos rápidos, accesibles y agradables de usar.',
      },
      {
        label: '03 · Hoy',
        title: 'E-commerce por el mundo',
        text: 'Plataformas internacionales de e-commerce con equipos distribuidos, cuidando el rendimiento y la calidad.',
      },
    ],
    ctaTitle: '¿Te gustó el paseo?',
    ctaText: 'Mira la versión completa del portafolio o escríbeme.',
    ctaGlass: 'Ver portafolio',
    ctaContact: 'Contacto',
  },
} satisfies Dictionary;

export default es;
