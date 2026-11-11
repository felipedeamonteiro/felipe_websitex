import { FiBriefcase, FiGithub, FiHome, FiMail, FiUser } from 'react-icons/fi';
import { profile } from '../../content/profile';
import useT from '../../i18n/useT';

/** Vertical icon rail on wide screens (Design 1 / 3). */
export default function SideRail() {
  const t = useT();
  const items = [
    { href: '#home', icon: FiHome, label: t.nav.home },
    { href: '#about', icon: FiUser, label: t.nav.about },
    { href: '#projects', icon: FiBriefcase, label: t.nav.projects },
    { href: '#contact', icon: FiMail, label: t.nav.contact },
  ];

  return (
    <nav
      aria-label={t.nav.social}
      className="fixed top-1/2 left-5 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 2xl:flex"
    >
      <span
        aria-hidden="true"
        className="h-16 w-px bg-linear-to-b from-transparent to-[var(--g-accent-2)]"
      />
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          aria-label={item.label}
          title={item.label}
          className="glass flex h-10 w-10 items-center justify-center rounded-xl text-[var(--g-muted)] transition hover:text-[var(--g-accent-2)] hover:shadow-[0_0_18px_-4px_var(--g-accent-2)] focus-visible:outline-2 focus-visible:outline-[var(--g-accent-3)]"
        >
          <item.icon aria-hidden="true" />
        </a>
      ))}
      <a
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="glass flex h-10 w-10 items-center justify-center rounded-xl text-[var(--g-muted)] transition hover:text-[var(--g-accent-3)] hover:shadow-[0_0_18px_-4px_var(--g-accent-3)] focus-visible:outline-2 focus-visible:outline-[var(--g-accent-3)]"
      >
        <FiGithub aria-hidden="true" />
      </a>
      <span
        aria-hidden="true"
        className="h-16 w-px bg-linear-to-b from-[var(--g-accent-3)] to-transparent"
      />
    </nav>
  );
}
