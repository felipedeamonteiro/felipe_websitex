import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { FiArrowUpRight, FiInfo, FiRotateCcw } from 'react-icons/fi';
import { projects, type ProjectData } from '../../content/profile';
import type { Dictionary } from '../../i18n/dictionaries/pt-BR';
import useT from '../../i18n/useT';
import SectionHeading from '../shared/SectionHeading';

interface ProjectCardProps {
  data: ProjectData;
  text: Dictionary['projects']['items'][number];
}

/** Glass project card that keeps the original Card3D flip. */
function ProjectCard({ data, text }: ProjectCardProps) {
  const t = useT();
  const [flipped, setFlipped] = useState(false);

  return (
    <li className="h-[25rem] [perspective:1200px]">
      <div
        className={clsx(
          'relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]',
          flipped && '[transform:rotateY(180deg)]',
        )}
      >
        {/* Front */}
        <article
          inert={flipped}
          className="glass group absolute inset-0 flex flex-col overflow-hidden rounded-2xl [backface-visibility:hidden]"
        >
          <div className="relative h-56 shrink-0 overflow-hidden">
            <Image
              src={data.image}
              alt={text.alt}
              fill
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[var(--g-bg)]/70 to-transparent"
            />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-base font-bold">
                  {text.title}
                </h3>
                <p className="mt-1 font-mono text-[0.7rem] tracking-[0.18em] text-[var(--g-muted)] uppercase">
                  {text.role}
                </p>
              </div>
              {data.href ? (
                <a
                  href={data.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.projects.open}: ${text.title}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--g-border)] text-lg transition hover:border-[var(--g-accent-2)] hover:bg-[var(--g-accent-2)] hover:text-white hover:shadow-[0_0_20px_var(--g-accent-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)]"
                >
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <span className="shrink-0 rounded-md border border-dashed border-[var(--g-border)] px-2 py-1 font-mono text-[0.65rem] tracking-wider text-[var(--g-muted)] uppercase">
                  {t.projects.inProgress}
                </span>
              )}
            </div>
            <ul className="mt-4 flex flex-wrap gap-2">
              {data.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded border border-[var(--g-accent-2)]/40 px-2 py-0.5 font-mono text-[0.68rem] tracking-wider text-[var(--g-accent-2)] uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setFlipped(true)}
              aria-label={`${t.projects.detailsOf} ${text.title}`}
              className="mt-auto inline-flex items-center gap-2 self-start pt-4 font-mono text-xs tracking-wider text-[var(--g-accent-3)] uppercase transition hover:text-[var(--g-accent-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)]"
            >
              <FiInfo aria-hidden="true" />
              {t.projects.details}
            </button>
          </div>
        </article>

        {/* Back */}
        <article
          inert={!flipped}
          className="glass glass-border absolute inset-0 flex [transform:rotateY(180deg)] flex-col overflow-hidden rounded-2xl p-6 [backface-visibility:hidden]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,var(--g-glow),transparent_60%)]"
          />
          <p className="font-mono text-[0.7rem] tracking-[0.18em] text-[var(--g-accent-3)] uppercase">
            {text.role}
          </p>
          <h3 className="font-display mt-2 text-2xl font-black uppercase">
            {text.title}
          </h3>
          <p className="font-body mt-4 min-h-0 flex-1 overflow-y-auto text-sm leading-relaxed text-[var(--g-muted)]">
            {text.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {data.href && (
              <a
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[var(--g-accent-2)] to-[var(--g-accent)] px-4 py-2 text-sm font-bold text-white shadow-[0_8px_24px_-8px_var(--g-accent-2)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)]"
              >
                {t.projects.open}
                <FiArrowUpRight aria-hidden="true" />
              </a>
            )}
            <button
              type="button"
              onClick={() => setFlipped(false)}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--g-border)] px-4 py-2 text-sm transition hover:border-[var(--g-accent-3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)]"
            >
              <FiRotateCcw aria-hidden="true" />
              {t.projects.back}
            </button>
          </div>
        </article>
      </div>
    </li>
  );
}

export default function ProjectsSection() {
  const t = useT();

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="projects-title"
          label={t.projects.label}
          title={t.projects.title}
          subtitle={t.projects.subtitle}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={t.projects.items[index].title}
              data={project}
              text={t.projects.items[index]}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
