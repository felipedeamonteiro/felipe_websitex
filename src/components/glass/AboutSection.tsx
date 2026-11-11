import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import LogoUnicamp from '@public/unicamp.png';
import { skills } from '../../content/profile';
import useT from '../../i18n/useT';
import SectionHeading from '../shared/SectionHeading';

function TerminalCard() {
  const t = useT();
  const stack = skills.slice(2, 6).map((skill) => `'${skill.name}'`);

  return (
    <div className="glass hud-corners overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-[var(--g-border)] px-4 py-3">
        <span
          aria-hidden="true"
          className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]"
        />
        <span
          aria-hidden="true"
          className="h-2.5 w-2.5 rounded-full bg-[#febc2e]"
        />
        <span
          aria-hidden="true"
          className="h-2.5 w-2.5 rounded-full bg-[#28c840]"
        />
        <span className="ml-2 font-mono text-xs text-[var(--g-muted)]">
          {t.about.terminalTitle}
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[0.8rem] leading-6 sm:text-sm">
        <code>
          <span className="text-[var(--g-accent-2)]">const</span>{' '}
          <span className="text-[var(--g-accent-3)]">felipe</span> = {'{'}
          {'\n'}
          {'  '}role:{' '}
          <span className="text-emerald-500 dark:text-emerald-300">
            &apos;{t.hero.kicker}&apos;
          </span>
          ,{'\n'}
          {'  '}based:{' '}
          <span className="text-emerald-500 dark:text-emerald-300">
            &apos;{t.contact.locationValue}&apos;
          </span>
          ,{'\n'}
          {'  '}stack: [
          <span className="text-emerald-500 dark:text-emerald-300">
            {stack.join(', ')}
          </span>
          ],
          {'\n'}
          {'  '}coffee: <span className="text-[var(--g-accent)]">true</span>,
          {'\n'}
          {'}'};{'\n\n'}
          <span className="text-[var(--g-muted)]">
            {'// '}
            {t.about.cta}
          </span>
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-[blink_1.1s_steps(1)_infinite] bg-[var(--g-accent-2)]"
          />
        </code>
      </pre>
    </div>
  );
}

export default function AboutSection() {
  const t = useT();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr_0.95fr]">
          <SectionHeading
            id="about-title"
            label={t.about.label}
            title={
              <>
                {t.about.titleStart}{' '}
                <span className="text-neon-gradient">
                  {t.about.titleHighlight}
                </span>
              </>
            }
          />
          <div className="lg:border-l lg:border-[var(--g-border)] lg:pl-10">
            {t.about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-body mb-4 text-base leading-relaxed text-pretty text-[var(--g-muted)] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
            <a
              href="#contact"
              className="group mt-3 inline-flex items-center gap-2 rounded-lg border border-[var(--g-accent-2)] px-5 py-2.5 font-mono text-xs tracking-wider uppercase shadow-[0_0_20px_-8px_var(--g-accent-2)] transition hover:bg-[var(--g-accent-2)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--g-accent-3)]"
            >
              {t.about.cta}
              <FiArrowRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
          <TerminalCard />
        </div>

        <div className="mt-24">
          <h3 className="font-display text-xl font-bold tracking-wide uppercase sm:text-2xl">
            {t.about.educationTitle}
          </h3>
          <p className="font-body mt-2 text-[var(--g-muted)]">
            {t.about.educationSubtitle}
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {t.about.degrees.map((degree) => (
              <li
                key={degree.course}
                className="glass glass-border flex gap-4 rounded-2xl p-5 transition duration-300 [--ring-from:var(--color-neon-pink)] [--ring-to:var(--g-accent)] hover:-translate-y-1 dark:hover:shadow-[0_0_30px_-6px_#f73e69]"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-[0_0_18px_-6px_#f73e69]">
                  <Image
                    src={LogoUnicamp}
                    alt={t.about.unicampAlt}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-display text-sm leading-snug font-bold">
                    {degree.course}
                  </p>
                  <p className="font-body mt-1 text-sm text-[var(--g-muted)]">
                    {degree.detail}
                  </p>
                  <p className="mt-3 font-mono text-[0.7rem] tracking-[0.15em] text-[var(--color-neon-pink)] uppercase">
                    {degree.status}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
