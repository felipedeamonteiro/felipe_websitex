import Image from 'next/image';
import { useRef } from 'react';
import FotoFelipe from '@public/Foto_felipe2.png';
import LogoUnicamp from '@public/unicamp.png';
import { skills } from '../../content/profile';
import useT from '../../i18n/useT';
import useInView from '../../utils/intersectionMethod';

export default function AboutMe() {
  const t = useT();
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
          {t.original.aboutTitle}
        </h2>
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:text-left">
            <Image
              src={FotoFelipe}
              alt={t.original.photoAlt}
              width={250}
              height={250}
              className="h-56 w-56 rounded-full border-4 border-cyan-400 object-cover sm:h-64 sm:w-64"
            />
            <h3 className="font-display mt-6 text-2xl">{t.original.whoAmI}</h3>
            <div className="font-body mt-5 max-w-xl text-lg leading-8">
              <p>{t.original.aboutLines[0]}</p>
              <p className="mt-2">{t.original.aboutLines[1]}</p>
              <p className="mt-4 font-bold text-purple-700 dark:text-fuchsia-400">
                {t.original.aboutQuestion}
              </p>
              <p className="mt-2">{t.original.aboutAnswer}</p>
              <a
                href="#section-contato"
                className="mt-4 inline-block rounded-sm font-bold text-cyan-700 underline decoration-2 underline-offset-4 dark:text-cyan-300"
              >
                {t.original.aboutCta}
              </a>
            </div>
          </div>

          <div className="space-y-5" aria-label={t.original.skillsLabel}>
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
              {t.original.educationTitle}
            </h2>
            <p className="font-body mt-4 text-lg text-[var(--muted)] italic">
              {t.original.educationSubtitle}
            </p>
          </header>
          <div className="mx-auto mt-10 max-w-5xl space-y-5">
            {t.about.degrees.map((item) => {
              const degree = [
                item.course,
                item.detail.replace(' · ', ' - '),
                item.status,
              ].join(' - ');
              return (
                <div
                  key={degree}
                  className="flex flex-col items-center gap-4 rounded-xl bg-white p-5 text-center text-black shadow-sm sm:flex-row sm:text-left dark:shadow-[0_0_16px_#f73e69]"
                >
                  <Image
                    alt={t.about.unicampAlt}
                    src={LogoUnicamp}
                    width={72}
                    height={72}
                    className="h-16 w-16 shrink-0 object-contain"
                  />
                  <h3 className="text-base leading-7 sm:text-lg">{degree}</h3>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-16 h-1 w-full bg-slate-300 dark:bg-white dark:shadow-[0_0_16px_#f73e69]" />
      </div>
    </section>
  );
}
