import Image, { type StaticImageData } from 'next/image';
import { useRef } from 'react';
import AprendizImg from '@public/AprendizDigital.png';
import FormulaImg from '@public/FormulaSAE.png';
import LdemImg from '@public/LDEM.jpg';
import LetrusImg from '@public/letrus.png';
import MeuColegioImg from '@public/MeuColegio.png';
import NubankImg from '@public/Nubank.jpg';
import ObjectEdgeLogo from '@public/object-edge-squarelogo.png';
import SiemensImg from '@public/Siemens.jpg';
import useInView from '../../utils/intersectionMethod';

interface ExperienceEntry {
  period: string;
  company: string;
  description: string;
  image: StaticImageData;
  imageAlt: string;
}

const experiences: ExperienceEntry[] = [
  {
    period: '1 - De 2009 a 2010',
    company: 'Fórmula SAE Unicamp',
    description:
      'Fiz parte da divisão de freios, onde projetamos todo o sistema de freios do carro F-2009. Nos classificamos em 5º lugar.',
    image: FormulaImg,
    imageAlt: 'Fórmula SAE Unicamp',
  },
  {
    period: '2 - De 2011 a 2013',
    company: 'Iniciação científica no antigo LDEM Unicamp',
    description:
      'Iniciação científica na área de vibrações mecânicas com bolsa do CNPq. Estudei fenômenos vibratórios em engrenagens planetárias de transmissões automáticas.',
    image: LdemImg,
    imageAlt: 'LDEM',
  },
  {
    period: '3 - 2º semestre de 2013',
    company: 'Meu Colégio',
    description: 'Trabalhei como professor do colégio técnico noturno.',
    image: MeuColegioImg,
    imageAlt: 'Meu Colégio',
  },
  {
    period: '4 - De junho a dezembro de 2014',
    company: 'Siemens Industry Software',
    description:
      'Estágio na área de softwares LMS, atual Simcenter, que atuam na simulação e nos testes de projetos.',
    image: SiemensImg,
    imageAlt: 'Siemens',
  },
  {
    period: '5 - De janeiro de 2015 a março de 2016',
    company: 'Siemens Industry Software',
    description:
      'Trabalhei com pré e pós-venda técnica do software Preactor, que cuida da programação e do planejamento do processo de produção de indústrias.',
    image: SiemensImg,
    imageAlt: 'Siemens',
  },
  {
    period: '6 - De março a junho de 2017',
    company: 'Nubank',
    description:
      'Atuei como analista de relacionamento ao cliente nos setores de Bills e Chargeback.',
    image: NubankImg,
    imageAlt: 'Nubank',
  },
  {
    period: '7 - De junho de 2016 até outubro de 2019',
    company: 'Aprendiz Digital',
    description:
      'Fui fundador desta startup da área da educação. Ela oferecia serviços de aulas particulares de exatas e programação.',
    image: AprendizImg,
    imageAlt: 'Aprendiz Digital',
  },
  {
    period: '8 - De janeiro a setembro de 2020',
    company: 'Letrus',
    description:
      'Atuei como desenvolvedor frontend nos diversos projetos da empresa, com design system, integração com HubSpot, resolução de bugs, manutenção e atualização do código e participação na criação de um backoffice.',
    image: LetrusImg,
    imageAlt: 'Letrus',
  },
  {
    period: '9 - Desde fevereiro de 2021',
    company: 'Object Edge',
    description:
      'Desenvolvedor frontend React em projetos internacionais, lidando com clientes e colegas de trabalho espalhados pelo mundo, com foco no desenvolvimento e na manutenção de plataformas de e-commerce.',
    image: ObjectEdgeLogo,
    imageAlt: 'Object Edge',
  },
];

function TimelineEntry({
  experience,
  index,
}: {
  experience: ExperienceEntry;
  index: number;
}) {
  const entryRef = useRef<HTMLLIElement>(null);
  const inView = useInView(entryRef, '-10% 0px');
  const isEven = index % 2 === 1;

  return (
    <li
      ref={entryRef}
      className="relative mb-14 last:mb-0 md:grid md:grid-cols-2 md:gap-48"
    >
      <div
        className={`absolute top-0 left-0 z-10 flex h-[130px] w-[130px] items-center justify-center overflow-hidden rounded-full border-[9px] bg-white transition-all duration-500 sm:h-[150px] sm:w-[150px] md:left-1/2 md:-translate-x-1/2 lg:h-[170px] lg:w-[170px] ${
          inView
            ? 'blur-0 border-cyan-400 grayscale-0'
            : 'border-slate-500 dark:blur-[2px] dark:grayscale'
        }`}
      >
        <Image
          src={experience.image}
          alt={experience.imageAlt}
          className="h-full w-full object-contain"
        />
      </div>
      <div
        className={`ml-36 rounded-xl border border-slate-300/60 bg-white/65 p-5 shadow-sm transition-all duration-500 sm:ml-40 md:ml-0 md:p-6 dark:border-cyan-900 dark:bg-white/5 ${
          isEven ? 'md:col-start-2' : 'md:col-start-1 md:text-right'
        } ${
          inView
            ? 'translate-y-0 opacity-100'
            : 'translate-y-4 opacity-70 md:opacity-100'
        }`}
      >
        <p className="text-xs font-bold tracking-wide text-[var(--muted)] uppercase sm:text-sm">
          {experience.period}
        </p>
        <h3 className="font-display mt-2 text-lg leading-7 font-bold sm:text-xl">
          {experience.company}
        </h3>
        <p className="font-body mt-4 text-base leading-7 text-slate-700 dark:text-slate-200">
          {experience.description}
        </p>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <section
      id="section-experiencia"
      className="bg-[var(--section-background)] px-5 py-24 text-[var(--text)] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">
            Experiência Profissional
          </h2>
          <p className="font-body mt-5 text-lg text-[var(--muted)] italic">
            Etapas da carreira profissional
          </p>
        </header>
        <ol className="relative mx-auto mt-16 max-w-6xl before:absolute before:top-0 before:bottom-0 before:left-[65px] before:w-0.5 before:bg-slate-400 before:content-[''] sm:before:left-[75px] md:before:left-1/2 dark:before:bg-cyan-400">
          {experiences.map((experience, index) => (
            <TimelineEntry
              key={`${experience.period}-${experience.company}`}
              experience={experience}
              index={index}
            />
          ))}
        </ol>
        <div className="mt-16 h-1 w-full bg-slate-300 dark:bg-cyan-300 dark:shadow-[0_0_16px_#03e9f4]" />
      </div>
    </section>
  );
}
