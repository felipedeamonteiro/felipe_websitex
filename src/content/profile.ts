import type { StaticImageData } from 'next/image';
import type { IconType } from 'react-icons';
import {
  SiCss,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import AprendizImg from '@public/AprendizDigital.png';
import CaosImg from '@public/caos_focado_test.png';
import CodeMinerImg from '@public/code_miner.png';
import ContaSimplesImg from '@public/conta_simples.jpeg';
import CredereImg from '@public/credere_test.png';
import FormulaImg from '@public/FormulaSAE.png';
import LdemImg from '@public/LDEM.jpg';
import LetrusImg from '@public/letrus.png';
import MeuColegioImg from '@public/MeuColegio.png';
import NubankImg from '@public/Nubank.jpg';
import ObjectEdgeLogo from '@public/object-edge-squarelogo.png';
import SiemensImg from '@public/Siemens.jpg';
import VenturusImg from '@public/venturus_test.png';

/**
 * Locale-independent profile data. All visible text lives in
 * src/i18n/dictionaries; entries here are matched to it by array index.
 */

export const profile = {
  firstName: 'Felipe',
  lastName: 'Monteiro',
  fullName: 'Felipe de Alcântara Monteiro',
  github: 'https://github.com/felipedeamonteiro',
  /** First professional software-development role (Letrus). */
  devCareerStart: new Date(2020, 0, 1),
} as const;

export type ExperienceKind = 'work' | 'academic';

export interface ExperienceData {
  company: string;
  kind: ExperienceKind;
  logo: StaticImageData;
}

/** Same order as dictionary.experience.items. */
export const experiences: ExperienceData[] = [
  { company: 'Fórmula SAE Unicamp', kind: 'academic', logo: FormulaImg },
  { company: 'LDEM Unicamp', kind: 'academic', logo: LdemImg },
  { company: 'Meu Colégio', kind: 'work', logo: MeuColegioImg },
  { company: 'Siemens Industry Software', kind: 'work', logo: SiemensImg },
  { company: 'Siemens Industry Software', kind: 'work', logo: SiemensImg },
  { company: 'Nubank', kind: 'work', logo: NubankImg },
  { company: 'Aprendiz Digital', kind: 'work', logo: AprendizImg },
  { company: 'Letrus', kind: 'work', logo: LetrusImg },
  { company: 'Object Edge', kind: 'work', logo: ObjectEdgeLogo },
];

export interface ProjectData {
  image: StaticImageData;
  href?: string;
  tags: string[];
}

/** Same order as dictionary.projects.items. */
export const projects: ProjectData[] = [
  {
    image: CaosImg,
    href: 'https://caos-focado-frontend-test-git-master.felipedeamonteiro.vercel.app/',
    tags: ['React', 'API', 'Forms'],
  },
  {
    image: CredereImg,
    href: 'https://credere-frontend-test.vercel.app/',
    tags: ['Full-stack', 'Node', 'React'],
  },
  {
    image: VenturusImg,
    href: 'https://venturus-frontend-test-2020.vercel.app/',
    tags: ['React', 'Dashboard', 'API'],
  },
  {
    image: CodeMinerImg,
    tags: ['Full-stack'],
  },
  {
    image: ContaSimplesImg,
    href: 'https://caos-focado-frontend-test-git-master.felipedeamonteiro.vercel.app/',
    tags: ['Full-stack', 'Back-end'],
  },
];

export interface SkillData {
  name: string;
  level: number;
}

/** Self-assessed levels, same as the original About section. */
export const skills: SkillData[] = [
  { name: 'CSS', level: 95 },
  { name: 'HTML', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'React Native', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Python', level: 60 },
];

export interface ToolData {
  name: string;
  icon: IconType;
  color: string;
  /** Brand colour (any CSS colour, may be a var). */
  /** Image used for the 3D tech balls on /cyber. */
  ball?: string;
}

export const tools: ToolData[] = [
  { name: 'HTML5', icon: SiHtml5, color: '#e34f26', ball: '/tech/html.png' },
  { name: 'CSS', icon: SiCss, color: '#2965f1', ball: '/tech/css.png' },
  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#f7df1e',
    ball: '/tech/javascript.png',
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178c6',
    ball: '/tech/typescript.png',
  },
  { name: 'React', icon: SiReact, color: '#61dafb', ball: '/tech/reactjs.png' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'var(--g-text)' },
  { name: 'React Native', icon: TbBrandReactNative, color: '#61dafb' },
  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#5fa04e',
    ball: '/tech/nodejs.png',
  },
  { name: 'Python', icon: SiPython, color: '#ffd43b' },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#38bdf8',
    ball: '/tech/tailwind.png',
  },
  { name: 'Git', icon: SiGit, color: '#f05032', ball: '/tech/git.png' },
];

const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000;

/** Stats shown in the hero bar, all derived from the data above. */
export function getStats(now: Date = new Date()) {
  const devYears = Math.max(
    1,
    Math.floor(
      (now.getTime() - profile.devCareerStart.getTime()) / MS_PER_YEAR,
    ),
  );
  const companies = new Set(
    experiences
      .filter((item) => item.kind === 'work')
      .map((item) => item.company),
  ).size;

  return {
    devYears,
    companies,
    projects: projects.length,
    technologies: tools.length,
  };
}
