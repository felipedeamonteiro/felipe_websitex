import Image from 'next/image';
import { useRef } from 'react';
import { experiences, type ExperienceData } from '../../content/profile';
import type { Dictionary } from '../../i18n/dictionaries/pt-BR';
import useT from '../../i18n/useT';
import useInView from '../../utils/intersectionMethod';

/*
 * Entries come from src/content/profile.ts (logos) and
 * src/i18n/dictionaries/* (period + description), shared with /glass and /cyber.
 */

interface ExperienceEntry {
  data: ExperienceData;
  text: Dictionary['experience']['items'][number];
}

function TimelineEntry({
  experience: { data, text },
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
        style={data.logoBg ? { backgroundColor: data.logoBg } : undefined}
      >
        <Image
          src={data.logo}
          alt={data.company}
          sizes="170px"
          className={`object-contain ${
            data.logoInset ? 'h-[72%] w-[72%]' : 'h-full w-full'
          }`}
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
        <p className="text-xs font-bold tracking-wide text-(--muted) uppercase sm:text-sm">
          {index + 1} - {text.period}
        </p>
        <h3 className="font-display mt-2 text-lg leading-7 font-bold sm:text-xl">
          {data.company}
        </h3>
        <p className="font-body mt-4 text-base leading-7 text-slate-700 dark:text-slate-200">
          {text.description}
        </p>
      </div>
    </li>
  );
}

export default function Experience() {
  const t = useT();
  const entries = experiences.map((data, index) => ({
    data,
    text: t.experience.items[index],
  }));

  return (
    <section
      id="section-experiencia"
      className="bg-(--section-background) px-5 py-24 text-(--text) sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="text-center">
          <h2 className="font-display text-3xl leading-tight font-bold sm:text-4xl">
            {t.original.experienceTitle}
          </h2>
          <p className="font-body mt-5 text-lg text-(--muted) italic">
            {t.original.experienceSubtitle}
          </p>
        </header>
        <ol className="relative mx-auto mt-16 max-w-6xl before:absolute before:top-0 before:bottom-0 before:left-16.25 before:w-0.5 before:bg-slate-400 before:content-[''] sm:before:left-18.75 md:before:left-1/2 dark:before:bg-cyan-400">
          {entries.map((experience, index) => (
            <TimelineEntry
              key={`${experience.text.period}-${experience.data.company}`}
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
