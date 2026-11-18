import { useRef, type CSSProperties } from 'react';
import { FiMove } from 'react-icons/fi';
import { tools } from '../../content/profile';
import useT from '../../i18n/useT';
import useOnceInView from '../../utils/useOnceInView';
import { ComputersCanvas } from '../cyber/canvas';
import SectionHeading from '../shared/SectionHeading';

interface WorkstationSectionProps {
  /** null while checking, false when the browser has no WebGL. */
  webgl: boolean | null;
}

/**
 * 3D desktop PC (from /cyber) on an always-dark stage, next to the tech stack.
 * The canvas (and the three.js chunk) only mounts when the section is near.
 */
export default function WorkstationSection({ webgl }: WorkstationSectionProps) {
  const t = useT();
  const stageRef = useRef<HTMLElement>(null);
  const near = useOnceInView(stageRef);

  return (
    <section
      id="workstation"
      aria-labelledby="workstation-title"
      className="px-5 py-24 sm:px-8"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
        <figure
          ref={stageRef}
          className="hud-corners relative isolate h-[21rem] overflow-hidden rounded-3xl border border-white/10 bg-[#07061a] bg-[radial-gradient(60%_55%_at_50%_100%,rgb(168_85_247/0.32),transparent_70%),radial-gradient(40%_40%_at_85%_10%,rgb(34_211_238/0.18),transparent_70%)] shadow-[0_30px_80px_-30px_rgb(46_16_101/0.75)] [--hud-color:var(--color-neon-cyan)] sm:h-[27rem] lg:h-[34rem]"
        >
          <figcaption className="sr-only">
            {t.workstation.stageLabel}
          </figcaption>
          {webgl && near && <ComputersCanvas loadingLabel={t.cyber.loading} />}
          {webgl === false && (
            <p className="absolute inset-0 flex items-center justify-center p-8 text-center font-mono text-sm text-[#a9a4cc]">
              {t.cyber.noWebgl}
            </p>
          )}
          {webgl && (
            <p
              aria-hidden="true"
              className="pointer-events-none absolute right-4 bottom-4 hidden items-center gap-2 rounded-full border border-white/10 bg-[#07061a]/70 px-3 py-1.5 font-mono text-[0.7rem] tracking-[0.2em] text-[#d9d4f5] uppercase backdrop-blur-md sm:flex"
            >
              <FiMove className="text-(--color-neon-cyan)" />
              {t.cyber.drag}
            </p>
          )}
        </figure>

        <div>
          <SectionHeading
            id="workstation-title"
            label={t.workstation.label}
            title={t.workstation.title}
          />
          <p className="font-body mt-5 max-w-xl text-base leading-relaxed text-pretty text-(--g-muted) sm:text-lg">
            {t.workstation.text}
          </p>
          <h3 className="sr-only">{t.tools.title}</h3>
          <ul className="mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4">
            {tools.map((tool) => (
              <li
                key={tool.name}
                style={{ '--tool': tool.color } as CSSProperties}
                className="glass group flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_-8px_var(--tool)]"
              >
                <tool.icon
                  aria-hidden="true"
                  className="text-2xl text-(--tool) dark:[filter:drop-shadow(0_0_8px_color-mix(in_oklab,var(--tool)_45%,transparent))]"
                />
                <span className="font-mono text-[0.68rem] leading-tight text-(--g-muted)">
                  {tool.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
