import Image from 'next/image';
import { useRef } from 'react';
import FotoFelipe from '@public/Foto_felipe2.png';
import LogoUnicamp from '@public/unicamp.png';
import useInView from '../../utils/intersectionMethod';

const skills = [
  { name: 'CSS', level: 95 },
  { name: 'HTML', level: 95 },
  { name: 'JavaScript', level: 85 },
  { name: 'React', level: 85 },
  { name: 'React Native', level: 75 },
  { name: 'Node.js', level: 70 },
  { name: 'Python', level: 60 },
];

const degrees = [
  'Graduação em Engenharia Mecânica - UNICAMP - Concluído em 2014',
  'Mestrado em Ciência da Computação - Inteligência Artificial e Robótica - UNICAMP - Interrompido em 2019',
  'Graduação em Engenharia Elétrica - Desenvolvimento de software e Inteligência Artificial - UNICAMP - Em curso desde 2021',
];

export default function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, '-10% 0px');

  return (
    <section
      ref={sectionRef}
      id="section-sobreMim"
      className="overflow-hidden bg-[var(--section-background)] px-5 py-24 text-[var(--text)] sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">
          Sobre mim
        </h2>
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:text-left">
            <Image
              src={FotoFelipe}
              alt="Foto de Felipe"
              width={250}
              height={250}
              className="h-56 w-56 rounded-full border-4 border-cyan-400 object-cover sm:h-64 sm:w-64"
            />
            <h3 className="font-display mt-6 text-2xl">Quem sou eu?</h3>
            <div className="font-body mt-5 max-w-xl text-lg leading-8">
              <p>Sou engenheiro full-stack.</p>
              <p className="mt-2">
                Tenho paixão por tecnologia e por construir!
              </p>
              <p className="mt-4 font-bold text-purple-700 dark:text-fuchsia-400">
                Mas construir o quê?
              </p>
              <p className="mt-2">
                Soluções inteligentes para problemas diversos.
              </p>
              <a
                href="#section-contato"
                className="mt-4 inline-block rounded-sm font-bold text-cyan-700 underline decoration-2 underline-offset-4 dark:text-cyan-300"
              >
                Quer saber mais? Entre em contato e vamos tomar um café.
              </a>
            </div>
          </div>

          <div className="space-y-5" aria-label="Nível de habilidades">
            {skills.map((skill) => (
              <div
                key={skill.name}
                role="progressbar"
                aria-label={skill.name}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={skill.level}
                className="flex h-9 overflow-hidden rounded-sm bg-[#edeef5] text-xs font-bold text-white shadow-sm sm:text-sm"
              >
                <span className="flex w-1/4 shrink-0 items-center justify-center bg-cyan-500 px-2 text-center">
                  {skill.name}
                </span>
                <div className="h-full w-3/4 shrink-0 overflow-hidden bg-[#edeef5]">
                  <div
                    className="flex h-full shrink-0 items-center justify-end overflow-hidden bg-gradient-to-b from-[#70008c] to-[#7100d1] pr-2 transition-[width] duration-1000 ease-out"
                    style={{ width: inView ? `${skill.level}%` : '0%' }}
                  >
                    <span className="whitespace-nowrap">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <header className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              FORMAÇÃO ACADÊMICA
            </h2>
            <p className="font-body mt-4 text-lg text-[var(--muted)] italic">
              Formação acadêmica sólida em instituição de ensino superior de
              renome no Brasil
            </p>
          </header>
          <div className="mx-auto mt-10 max-w-5xl space-y-5">
            {degrees.map((degree) => (
              <div
                key={degree}
                className="flex flex-col items-center gap-4 rounded-xl bg-white p-5 text-center text-black shadow-sm sm:flex-row sm:text-left dark:shadow-[0_0_16px_#f73e69]"
              >
                <Image
                  alt="Logo da Unicamp"
                  src={LogoUnicamp}
                  width={72}
                  height={72}
                  className="h-16 w-16 shrink-0 object-contain"
                />
                <h3 className="text-base leading-7 sm:text-lg">{degree}</h3>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 h-1 w-full bg-slate-300 dark:bg-white dark:shadow-[0_0_16px_#f73e69]" />
      </div>
    </section>
  );
}
