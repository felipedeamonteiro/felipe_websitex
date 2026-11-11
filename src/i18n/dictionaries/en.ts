import type { Dictionary } from './pt-BR';

const en = {
  meta: {
    glassTitle: 'Felipe Monteiro | Full-Stack Engineer',
    glassDescription:
      'Portfolio of Felipe de Alcântara Monteiro, a full-stack engineer specializing in React, Node and React Native.',
    cyberTitle: 'Felipe Monteiro | 3D Portfolio',
    parallaxTitle: 'Felipe Monteiro | Neon City',
  },
  nav: {
    primary: 'Main navigation',
    home: 'Home',
    about: 'About',
    services: 'Services',
    experience: 'Experience',
    projects: 'Projects',
    tools: 'Tools',
    process: 'Process',
    contact: 'Contact',
    connect: "Let's talk",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mobileMenu: 'Navigation menu',
    language: 'Language',
    toLight: 'Switch to light theme',
    toDark: 'Switch to dark theme',
    social: 'Social media',
    backToTop: 'Back to top',
  },
  switcher: {
    label: 'Compare design versions',
    original: 'Original',
    glass: 'Glass',
    cyber: '3D',
    parallax: 'Parallax',
  },
  hero: {
    kicker: 'Full-Stack Engineer',
    taglineStart: 'I build web and mobile experiences at the intersection of',
    taglineCode: 'code',
    taglineJoin: '+',
    taglineDesign: 'design',
    taglineEnd: '.',
    stack: 'React · Node · React Native',
    viewProjects: 'View projects',
    aboutMe: 'About me',
    statusLabel: 'Status',
    statusValue: 'Online',
    skillsPanel: 'Skills',
    scroll: 'Scroll',
    photoAlt: 'Photo of Felipe Monteiro',
  },
  stats: {
    devYears: 'Years as a dev',
    companies: 'Companies',
    projects: 'Projects',
    technologies: 'Technologies',
  },
  about: {
    label: 'About me',
    titleStart: 'I turn ideas into',
    titleHighlight: 'digital solutions.',
    paragraphs: [
      "I'm a full-stack engineer with a degree in Mechanical Engineering from Unicamp and a long road through industry, education and software.",
      "I'm passionate about technology and about building. But building what? Smart solutions to all kinds of problems.",
    ],
    cta: "Want to know more? Let's grab a coffee",
    terminalTitle: 'whoami.ts',
    educationTitle: 'Education',
    educationSubtitle: "A solid foundation at one of Brazil's top universities",
    degrees: [
      {
        course: "Bachelor's in Mechanical Engineering",
        detail: 'UNICAMP',
        status: 'Completed in 2014',
      },
      {
        course: "Master's in Computer Science",
        detail: 'Artificial Intelligence and Robotics · UNICAMP',
        status: 'Discontinued in 2019',
      },
      {
        course: "Bachelor's in Electrical Engineering",
        detail: 'Software development and AI · UNICAMP',
        status: 'In progress since 2021',
      },
    ],
    unicampAlt: 'Unicamp logo',
  },
  services: {
    label: 'Services',
    title: 'What I do',
    items: [
      {
        title: 'Web front-end',
        description:
          'Fast, accessible and responsive interfaces with React and Next.js.',
      },
      {
        title: 'Mobile apps',
        description:
          'Cross-platform apps with React Native from a single codebase.',
      },
      {
        title: 'Back-end & APIs',
        description:
          'APIs and integrations with Node.js and Python, from database to deploy.',
      },
      {
        title: 'E-commerce',
        description:
          'Building and maintaining international e-commerce platforms.',
      },
    ],
  },
  experience: {
    label: 'Experience',
    title: 'Career path',
    subtitle: 'Career milestones, from engineering to software',
    items: [
      {
        period: '2009 – 2010',
        description:
          'Member of the brakes division, where we designed the entire brake system of the F-2009 car. We finished in 5th place.',
      },
      {
        period: '2011 – 2013',
        description:
          'Undergraduate research in mechanical vibrations with a CNPq scholarship. I studied vibration phenomena in planetary gears of automatic transmissions.',
      },
      {
        period: '2nd half of 2013',
        description: 'Worked as a teacher at an evening technical school.',
      },
      {
        period: 'Jun – Dec 2014',
        description:
          'Internship in LMS software, now Simcenter, used for simulation and testing in engineering projects.',
      },
      {
        period: 'Jan 2015 – Mar 2016',
        description:
          'Technical pre- and post-sales for Preactor, a software for production scheduling and planning in industry.',
      },
      {
        period: 'Mar – Jun 2017',
        description:
          'Customer relationship analyst in the Bills and Chargeback departments.',
      },
      {
        period: 'Jun 2016 – Oct 2019',
        description:
          'Founder of this education startup, offering private tutoring in math, science and programming.',
      },
      {
        period: 'Jan – Sep 2020',
        description:
          "Front-end developer across the company's projects: design system, HubSpot integration, bug fixing, code maintenance and building a back office.",
      },
      {
        period: 'Since Feb 2021',
        description:
          'React front-end developer on international projects, with clients and teammates around the world, focused on building and maintaining e-commerce platforms.',
      },
    ],
    academic: 'Academic',
    current: 'Current',
  },
  projects: {
    label: 'Projects',
    title: 'Featured projects',
    subtitle: 'Technical challenges from hiring processes',
    items: [
      {
        title: 'Caos Focado',
        role: 'Front-end Dev',
        description:
          'Clinic listing and a form to register new ones, following the layout, integrating the Correios API and implementing sorting.',
        alt: 'Screenshot of the Caos Focado challenge',
      },
      {
        title: 'Credere',
        role: 'Back-end Dev',
        description:
          'Full-stack project with the back end on Digital Ocean and the front end on Vercel. The app controls a probe moving on a 2D plane.',
        alt: 'Screenshot of the Credere challenge',
      },
      {
        title: 'Venturus',
        role: 'Front-end Dev',
        description:
          'Dashboard inspired by Cartola FC for building soccer teams using an external API. One of the most challenging layouts I have built.',
        alt: 'Screenshot of the Venturus challenge',
      },
      {
        title: 'Code Miner',
        role: 'Full-Stack Dev',
        description: 'Still under construction.',
        alt: 'Screenshot of the Code Miner challenge',
      },
      {
        title: 'Conta Simples',
        role: 'Full-Stack Dev',
        description: 'Back end done, front end still under construction.',
        alt: 'Screenshot of the Conta Simples challenge',
      },
    ],
    open: 'Open project',
    inProgress: 'In progress',
    details: 'Details',
    back: 'Back',
    detailsOf: 'View details of',
  },
  tools: {
    label: 'Tools',
    title: 'Tools I use',
  },
  process: {
    label: 'Process',
    title: 'How I work',
    steps: [
      {
        title: 'Discovery',
        description: 'Understand the goals, the audience and the real problem.',
      },
      {
        title: 'Planning',
        description: 'Well-defined architecture, scope and priorities.',
      },
      {
        title: 'Design',
        description: 'Clear, accessible and consistent interfaces.',
      },
      {
        title: 'Development',
        description: 'Clean, typed and tested code.',
      },
      {
        title: 'Delivery',
        description: 'Deploy, monitoring and continuous improvement.',
      },
    ],
  },
  contact: {
    label: 'Contact',
    titleStart: "Let's build something",
    titleHighlight: 'extraordinary',
    subtitle: "Leave a message and let's have a chat.",
    locationLabel: 'Location',
    locationValue: 'Brazil',
    githubLabel: 'GitHub',
    formLabel: 'Contact form',
    fields: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
    },
    send: 'Send message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Could not send your message. Please try again.',
    errors: {
      nameMin: 'Please enter your name.',
      nameMax: 'Name must be at most 100 characters.',
      emailInvalid: 'Please enter a valid email.',
      emailMax: 'Email must be at most 254 characters.',
      subjectMin: 'Please enter a subject.',
      subjectMax: 'Subject must be at most 120 characters.',
      messageMin: 'Message must be at least 10 characters.',
      messageMax: 'Message must be at most 5000 characters.',
    },
  },
  footer: {
    rights: 'All rights reserved.',
    builtWith: 'Designed and built with Next.js and Tailwind CSS',
    modelCredits: '3D models (CC BY 4.0):',
  },
  cyber: {
    kicker: "Hi, I'm",
    role: 'Full-stack engineer building 3D, web and mobile interfaces.',
    introLabel: 'Introduction',
    introTitle: 'Overview',
    techLabel: 'Stack',
    techTitle: 'Technologies',
    loading: 'Loading',
    contactTitle: 'Get in touch',
    drag: 'Drag to rotate',
    noWebgl: "Your browser doesn't support WebGL, so the 3D scene was hidden.",
  },
  parallax: {
    kicker: 'Welcome to the neon city',
    title: 'Code that glows in the dark',
    subtitle: 'Scroll to cross the city.',
    scroll: 'Scroll',
    signA: '未来',
    signB: 'CODE',
    chapters: [
      {
        label: '01 · Origin',
        title: 'From engineering to software',
        text: 'Mechanical engineering at Unicamp, Fórmula SAE brakes, vibrations and industrial simulation. The analytical foundation that now turns into code.',
      },
      {
        label: '02 · Build',
        title: 'Front-end with purpose',
        text: 'React, Next.js and React Native to create fast, accessible products that are a pleasure to use.',
      },
      {
        label: '03 · Today',
        title: 'E-commerce worldwide',
        text: 'International e-commerce platforms with distributed teams, focused on performance and quality.',
      },
    ],
    ctaTitle: 'Enjoyed the ride?',
    ctaText: 'Check out the full portfolio or get in touch.',
    ctaGlass: 'View portfolio',
    ctaContact: 'Contact',
  },
} satisfies Dictionary;

export default en;
