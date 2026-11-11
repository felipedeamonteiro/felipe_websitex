import clsx from 'clsx';
import Image from 'next/image';
import { useRef } from 'react';
import { experiences, type ExperienceData } from '../../content/profile';
import type { Dictionary } from '../../i18n/dictionaries/pt-BR';
import useT from '../../i18n/useT';
import useInView from '../../utils/intersectionMethod';
import SectionHeading from '../shared/SectionHeading';

interface EntryProps {
  data: ExperienceData;
  text: Dictionary['experience']['items'][number];
  side: 'left' | 'right';
  isCurrent: boolean;
}

function TimelineEntry({ data, text, side, isCurrent }: EntryProps) {
  const t = useT();
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, '-12% 0px');

  return (
    <li
      ref={ref}
      className="relative grid grid-cols-[4.5rem_1fr] gap-5 md:grid-cols-[1fr_6rem_1fr] md:gap-0"
    >
      {/* Logo node on the line; lights up when in view (from the original Experience). */}
      <div
        className={clsx(
          'relative z-10 flex h-[4.5rem] w-[4.5rem] items-center justify-center overflow-hidden rounded-full border-[3px] bg-white p-2 transition-all duration-700 md:col-start-2 md:mx-auto md:h-24 md:w-24',
          inView
            ? 'border-[var(--g-accent-3)] shadow-[0_0_0_6px_color-mix(in_oklab,var(--g-accent-3)_18%,transparent),0_0_30px_var(--g-accent-3)]'
            : 'border-[var(--g-border)] blur-[1.5px] grayscale',
        )}
      >
        <Image
          src={data.logo}
          alt={data.company}
          className="h-full w-full object-contain"
          sizes="96px"
        />
      </div>

      <article
        className={clsx(
          'glass rounded-2xl p-5 transition-all duration-700 sm:p-6',
          side === 'left'
            ? 'md:col-start-1 md:row-start-1 md:text-right'
            : 'md:col-start-3',
          inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-40',
        )}
      >
        <div
          className={clsx(
            'flex flex-wrap items-center gap-2',
            side === 'left' && 'md:justify-end',
          )}
        >
          <span className="rounded-md border border-[var(--g-accent-3)]/40 bg-[var(--g-accent-3)]/10 px-2 py-0.5 font-mono text-[0.7rem] tracking-wider text-[var(--g-accent-3)] uppercase">
            {text.period}
          </span>
          {data.kind === 'academic' && (
            <span className="rounded-md border border-[var(--g-border)] px-2 py-0.5 font-mono text-[0.7rem] tracking-wider text-[var(--g-muted)] uppercase">
              {t.experience.academic}
            </span>
          )}
          {isCurrent && (
            <span className="flex items-center gap-1.5 rounded-md border border-emerald-400/40 bg-emerald-400/10 px-2 py-0.5 font-mono text-[0.7rem] tracking-wider text-emerald-600 uppercase dark:text-emerald-300">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
              />
              {t.experience.current}
            </span>
          )}
        </div>
        <h3 className="font-display mt-3 text-lg leading-snug font-bold sm:text-xl">
          {data.company}
        </h3>
        <p className="font-body mt-3 text-sm leading-relaxed text-pretty text-[var(--g-muted)] sm:text-base">
          {text.description}
        </p>
      </article>
    </li>
  );
}

export default function ExperienceSection() {
  const t = useT();
  // Most recent first.
  const entries = experiences
    .map((data, index) => ({ data, text: t.experience.items[index], index }))
    .reverse();

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="experience-title"
          align="center"
          label={t.experience.label}
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />
        <ol className="relative mt-16 space-y-10 before:absolute before:top-0 before:bottom-0 before:left-[2.25rem] before:w-0.5 before:-translate-x-1/2 before:bg-linear-to-b before:from-[var(--g-accent-2)] before:via-[var(--g-accent)] before:to-[var(--g-accent-3)] before:shadow-[0_0_14px_var(--g-accent)] before:content-[''] md:space-y-4 md:before:left-1/2">
          {entries.map((entry, position) => (
            <TimelineEntry
              key={entry.index}
              data={entry.data}
              text={entry.text}
              side={position % 2 === 0 ? 'left' : 'right'}
              isCurrent={entry.index === experiences.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
