import Image from 'next/image';
import {
  FiArrowRight,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiLayers,
} from 'react-icons/fi';
import FotoFelipe from '@public/Foto_felipe2.png';
import NightSky from '@public/blue_night_sky.jpg';
import { getStats, profile, skills } from '../../content/profile';
import useT from '../../i18n/useT';
import NeonButtonReal from '../Buttons/NeonButtonReal';
import ShootingStars from '../shared/ShootingStars';

export default function GlassHero() {
  const t = useT();
  const stats = getStats();

  const statItems = [
    { icon: FiCode, value: `${stats.devYears}+`, label: t.stats.devYears },
    { icon: FiBriefcase, value: stats.companies, label: t.stats.companies },
    { icon: FiLayers, value: stats.projects, label: t.stats.projects },
    { icon: FiCpu, value: stats.technologies, label: t.stats.technologies },
  ];

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden px-5 pt-32 pb-16 sm:px-8 lg:pt-36"
    >
      {/* Night sky photo, only in dark mode, faded into the page. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden [mask-image:linear-gradient(180deg,#000_0%,#000_55%,transparent_100%)] dark:block"
      >
        <Image
          src={NightSky}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 mix-blend-screen"
        />
      </div>
      <ShootingStars className="-z-10 hidden dark:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="glass inline-flex items-center gap-2 rounded-md px-3 py-1.5 font-mono text-[0.7rem] tracking-[0.25em] text-[var(--g-accent-3)] uppercase sm:text-xs">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rotate-45 bg-[var(--g-accent-2)] shadow-[0_0_10px_var(--g-accent-2)]"
            />
            {t.hero.kicker}
          </p>

          <h1
            id="hero-title"
            className="font-display mt-6 text-[clamp(3rem,11vw,8rem)] leading-[0.88] font-black tracking-tight uppercase"
          >
            <span className="text-chrome block drop-shadow-[0_6px_24px_rgb(0_0_0/0.25)]">
              {profile.firstName}
            </span>
            <span className="text-neon-gradient block pb-2 drop-shadow-[0_0_28px_var(--g-glow)]">
              {profile.lastName}
            </span>
          </h1>

          <p className="font-body mt-6 max-w-xl text-lg leading-relaxed text-pretty text-[var(--g-muted)] sm:text-xl">
            {t.hero.taglineStart}{' '}
            <span className="whitespace-nowrap">
              <span className="font-semibold text-[var(--g-accent-3)]">
                {t.hero.taglineCode}
              </span>{' '}
              {t.hero.taglineJoin}{' '}
              <span className="font-semibold text-[var(--g-accent-2)]">
                {t.hero.taglineDesign}
              </span>
              {t.hero.taglineEnd}
            </span>
          </p>
          <p className="mt-3 font-mono text-sm tracking-wider text-[var(--g-muted)]">
            {t.hero.stack}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <span className="hidden dark:inline-flex">
              <NeonButtonReal href="#projects" buttonColorHex="#ff2bd6">
                {t.hero.viewProjects}
                <FiArrowRight aria-hidden="true" className="ml-2" />
              </NeonButtonReal>
            </span>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[var(--g-accent-2)] to-[var(--g-accent)] px-6 py-3 text-sm font-bold tracking-wider text-white uppercase shadow-[0_12px_30px_-10px_var(--g-accent-2)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--g-accent)] dark:hidden"
            >
              {t.hero.viewProjects}
              <FiArrowRight aria-hidden="true" />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-lg border border-[var(--g-border)] px-6 py-3 text-sm font-bold tracking-wider uppercase transition hover:border-[var(--g-accent-3)] hover:text-[var(--g-accent-3)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--g-accent-3)]"
            >
              {t.hero.aboutMe}
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-3 rounded-md border border-dashed border-[var(--g-border)] px-3 py-1.5 font-mono text-xs tracking-widest text-[var(--g-muted)] uppercase">
            <span>
              {'// '}
              {t.hero.statusLabel}
            </span>
            <span className="flex items-center gap-1.5 text-[var(--g-text)]">
              <span
                aria-hidden="true"
                className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
              />
              {t.hero.statusValue}
            </span>
          </p>
        </div>

        {/* Portrait in a neon ring + HUD skills panel (Design 3). */}
        <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[24rem] lg:max-w-[26rem]">
          <div className="relative aspect-square">
            <div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,var(--g-glow),transparent_68%)] blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-[spin-slow_14s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,var(--g-accent-2),var(--g-accent),var(--g-accent-3),transparent_70%,var(--g-accent-2))] p-[3px] [mask:linear-gradient(#000_0_0)_content-box_exclude,linear-gradient(#000_0_0)]"
            />
            <div className="absolute inset-3 overflow-hidden rounded-full border border-[var(--g-border)] shadow-[0_0_60px_-10px_var(--g-accent-2)]">
              <Image
                src={FotoFelipe}
                alt={t.hero.photoAlt}
                fill
                priority
                sizes="(min-width: 1024px) 400px, 80vw"
                className="object-cover saturate-[0.85]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-tr from-[var(--g-accent)]/30 via-transparent to-[var(--g-accent-2)]/25 mix-blend-color dark:from-[var(--g-accent)]/45 dark:to-[var(--g-accent-2)]/35"
              />
            </div>
          </div>

          <div className="glass hud-corners absolute -right-2 -bottom-16 w-60 rounded-lg p-4 font-mono text-xs [--hud-color:var(--g-accent-3)] sm:-right-10 sm:w-64">
            <p className="mb-3 tracking-[0.2em] text-[var(--g-accent-3)] uppercase">
              {t.hero.skillsPanel}
            </p>
            <ul className="space-y-2">
              {skills.slice(0, 5).map((skill) => (
                <li key={skill.name} className="flex items-center gap-2">
                  <span className="w-28 shrink-0 truncate text-[var(--g-text)]">
                    &gt; {skill.name}
                  </span>
                  <span className="h-1 flex-1 overflow-hidden rounded-full bg-[var(--g-border)]">
                    <span
                      className="block h-full rounded-full bg-linear-to-r from-[var(--g-accent-3)] to-[var(--g-accent-2)] shadow-[0_0_8px_var(--g-accent-3)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Stats bar (Design 1). Every number is derived from content/profile.ts. */}
      <dl className="glass glass-border mx-auto mt-24 grid max-w-6xl grid-cols-2 rounded-2xl md:grid-cols-4">
        {statItems.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center gap-4 p-5 sm:p-6 ${
              index > 0 ? 'md:border-l md:border-[var(--g-border)]' : ''
            } ${index % 2 === 1 ? 'border-l border-[var(--g-border)] md:border-l' : ''} ${
              index > 1 ? 'border-t border-[var(--g-border)] md:border-t-0' : ''
            }`}
          >
            <item.icon
              aria-hidden="true"
              className="shrink-0 text-3xl text-[var(--g-accent-3)] drop-shadow-[0_0_10px_var(--g-accent-3)]"
            />
            <div className="flex flex-col-reverse">
              <dt className="font-mono text-[0.68rem] tracking-[0.18em] text-[var(--g-muted)] uppercase sm:text-xs">
                {item.label}
              </dt>
              <dd className="font-display text-3xl font-bold sm:text-4xl">
                {item.value}
              </dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
