import { FiArrowUp, FiGithub, FiMapPin } from 'react-icons/fi';
import { profile } from '../../content/profile';
import useT from '../../i18n/useT';
import ContactForm from '../shared/ContactForm';
import { glassSections, Logo } from './GlassNavbar';

export function ContactSection() {
  const t = useT();

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="px-5 py-24 sm:px-8"
    >
      <div className="glass hud-corners mx-auto grid max-w-7xl gap-12 rounded-3xl p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
        <div>
          <p className="font-mono text-xs tracking-[0.25em] text-[var(--g-accent-3)] uppercase sm:text-sm">
            <span className="blink-caret">{t.contact.label}</span>
          </p>
          <h2
            id="contact-title"
            className="font-display mt-4 text-3xl leading-[1.05] font-black uppercase sm:text-5xl"
          >
            {t.contact.titleStart}{' '}
            <span className="text-neon-gradient dark:neon-pulse block [--pulse:color-mix(in_oklab,var(--g-accent-2)_45%,transparent)]">
              {t.contact.titleHighlight}
            </span>
          </h2>
          <p className="font-body mt-5 text-lg text-[var(--g-muted)]">
            {t.contact.subtitle}
          </p>
          <dl className="mt-10 space-y-5">
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--g-border)] text-xl text-[var(--g-accent-2)]">
                <FiMapPin aria-hidden="true" />
              </span>
              <div>
                <dt className="font-mono text-[0.7rem] tracking-[0.18em] text-[var(--g-accent-2)] uppercase">
                  {t.contact.locationLabel}
                </dt>
                <dd>{t.contact.locationValue}</dd>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--g-border)] text-xl text-[var(--g-accent-2)]">
                <FiGithub aria-hidden="true" />
              </span>
              <div>
                <dt className="font-mono text-[0.7rem] tracking-[0.18em] text-[var(--g-accent-2)] uppercase">
                  {t.contact.githubLabel}
                </dt>
                <dd>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[var(--g-accent-2)]/50 underline-offset-4 transition hover:text-[var(--g-accent-2)]"
                  >
                    {profile.github.replace('https://', '')}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function GlassFooter() {
  const t = useT();

  return (
    <footer className="relative z-10 border-t border-[var(--g-border)] px-5 pt-10 pb-24 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <Logo />
          <p className="mt-2 font-mono text-xs text-[var(--g-muted)]">
            © {new Date().getFullYear()} {profile.fullName}. {t.footer.rights}
          </p>
        </div>
        <nav aria-label={t.nav.primary}>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-xs tracking-wider text-[var(--g-muted)] uppercase">
            {glassSections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="transition hover:text-[var(--g-accent-2)]"
                >
                  {t.nav[section.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--g-border)] transition hover:border-[var(--g-accent-2)] hover:text-[var(--g-accent-2)]"
          >
            <FiGithub aria-hidden="true" />
          </a>
          <a
            href="#home"
            aria-label={t.nav.backToTop}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--g-accent-2)] text-[var(--g-accent-2)] shadow-[0_0_16px_-4px_var(--g-accent-2)] transition hover:bg-[var(--g-accent-2)] hover:text-white"
          >
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="mt-8 text-center font-mono text-[0.68rem] tracking-wider text-[var(--g-muted)] uppercase">
        {t.footer.builtWith}
      </p>
    </footer>
  );
}
