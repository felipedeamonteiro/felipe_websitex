import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import useT from '../../i18n/useT';
import BulbSwitch from '../BulbSwitch';
import NeonButtonReal from '../Buttons/NeonButtonReal';
import LanguageSwitcher from '../shared/LanguageSwitcher';

interface GlassNavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export const glassSections = [
  { id: 'about', key: 'about', color: '#22d3ee' },
  { id: 'services', key: 'services', color: '#4f7cff' },
  { id: 'experience', key: 'experience', color: '#8b5cf6' },
  { id: 'projects', key: 'projects', color: '#c084fc' },
  { id: 'contact', key: 'contact', color: '#0ef462' },
] as const;

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        'font-display text-lg font-bold tracking-wider sm:text-xl',
        className,
      )}
    >
      <span className="text-[var(--g-accent-2)]">&lt;</span>
      <span className="text-[var(--g-text)]"> FELIPE</span>
      <span className="text-[var(--g-accent-3)]">/</span>
      <span className="text-[var(--g-accent-2)]"> &gt;</span>
    </span>
  );
}

export default function GlassNavbar({
  darkMode,
  onToggleTheme,
}: GlassNavbarProps) {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const bulbLabels = { toLight: t.nav.toLight, toDark: t.nav.toDark };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <nav
          aria-label={t.nav.primary}
          className={clsx(
            'mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 transition-all duration-500 sm:px-6',
            scrolled || menuOpen
              ? 'glass'
              : 'border border-transparent bg-transparent',
          )}
        >
          <a
            href="#home"
            className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--g-accent-3)]"
          >
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 xl:flex">
            {glassSections.map((section) => (
              <li key={section.id}>
                <span className="hidden dark:inline-flex">
                  <NeonButtonReal
                    href={`#${section.id}`}
                    buttonColorHex={section.color}
                  >
                    {t.nav[section.key]}
                  </NeonButtonReal>
                </span>
                <a
                  href={`#${section.id}`}
                  className="relative inline-flex px-4 py-2.5 font-mono text-sm tracking-wider uppercase transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-linear-to-r after:from-[var(--g-accent-2)] after:to-[var(--g-accent)] after:transition-transform hover:text-[var(--g-accent)] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-[var(--g-accent)] dark:hidden"
                >
                  {t.nav[section.key]}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden sm:block" />
            <BulbSwitch
              onToggle={onToggleTheme}
              darkMode={darkMode}
              labels={bulbLabels}
            />
            <a
              href="#contact"
              className="group hidden items-center gap-2 rounded-lg border border-[var(--g-accent-2)] px-4 py-2 font-mono text-xs tracking-wider text-[var(--g-text)] uppercase shadow-[0_0_18px_-6px_var(--g-accent-2),inset_0_0_14px_-8px_var(--g-accent-2)] transition hover:bg-[var(--g-accent-2)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)] 2xl:inline-flex"
            >
              {t.nav.connect}
              <FiArrowUpRight
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="glass-mobile-menu"
              aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--g-border)] text-xl transition hover:border-[var(--g-accent-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)] xl:hidden"
            >
              {menuOpen ? (
                <FiX aria-hidden="true" />
              ) : (
                <FiMenu aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="glass-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.mobileMenu}
        inert={!menuOpen}
        className={clsx(
          'fixed inset-0 z-40 flex flex-col bg-[var(--g-bg)]/80 px-6 pt-28 pb-24 backdrop-blur-2xl transition-all duration-300 xl:hidden',
          menuOpen
            ? 'visible opacity-100'
            : 'invisible -translate-y-4 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-2">
          {[{ id: 'home', key: 'home' } as const, ...glassSections].map(
            (section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={() => setMenuOpen(false)}
                  className="font-display flex items-baseline gap-4 rounded-lg py-3 text-2xl font-bold uppercase transition hover:text-[var(--g-accent-2)] focus-visible:outline-2 focus-visible:outline-[var(--g-accent-3)] sm:text-3xl"
                >
                  <span className="font-mono text-sm text-[var(--g-accent-3)]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {t.nav[section.key]}
                </a>
              </li>
            ),
          )}
        </ul>
        <LanguageSwitcher inline className="mt-8" />
      </div>
    </>
  );
}
