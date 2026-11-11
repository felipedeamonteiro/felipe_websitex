import type { CSSProperties } from 'react';
import { tools } from '../../content/profile';
import useT from '../../i18n/useT';
import SectionHeading from '../shared/SectionHeading';

export function ToolsSection() {
  const t = useT();

  return (
    <section
      id="tools"
      aria-labelledby="tools-title"
      className="px-5 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="tools-title"
          label={t.tools.label}
          title={t.tools.title}
        />
        <ul className="glass mt-10 grid grid-cols-3 gap-y-6 rounded-2xl px-4 py-6 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-11">
          {tools.map((tool) => (
            <li
              key={tool.name}
              style={{ '--tool': tool.color } as CSSProperties}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl text-[var(--tool)] transition duration-300 group-hover:-translate-y-1 group-hover:bg-[var(--tool)]/10 group-hover:shadow-[0_0_26px_-4px_var(--tool)] dark:[filter:drop-shadow(0_0_8px_color-mix(in_oklab,var(--tool)_45%,transparent))]">
                <tool.icon aria-hidden="true" />
              </span>
              <span className="font-mono text-[0.68rem] tracking-wide text-[var(--g-muted)]">
                {tool.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const t = useT();

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="px-5 py-16 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="process-title"
          label={t.process.label}
          title={t.process.title}
        />
        <ol className="glass glass-border mt-10 grid gap-8 rounded-2xl p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-5 lg:gap-6">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="font-display text-neon-gradient text-4xl font-black">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {index < t.process.steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-px flex-1 bg-linear-to-r from-[var(--g-accent-2)] to-transparent lg:block"
                  >
                    <span className="float-right -mt-[3px] block h-[7px] w-[7px] rotate-45 border-t border-r border-[var(--g-accent-2)]" />
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-mono text-sm font-bold tracking-[0.15em] uppercase">
                {step.title}
              </h3>
              <p className="font-body mt-2 text-sm leading-relaxed text-[var(--g-muted)]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
