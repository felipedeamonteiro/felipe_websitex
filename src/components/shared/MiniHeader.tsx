import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import useT from '../../i18n/useT';
import { Logo } from '../glass/GlassNavbar';
import LanguageSwitcher from './LanguageSwitcher';

/** Slim header for the always-dark showcase pages (/cyber, /parallax). */
export default function MiniHeader() {
  const t = useT();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="glass mx-auto flex h-14 max-w-7xl items-center justify-between rounded-2xl px-4 sm:px-6">
        <Link
          href="/glass"
          className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--g-accent-3)]"
        >
          <FiArrowLeft
            aria-hidden="true"
            className="text-[var(--g-accent-3)] transition-transform group-hover:-translate-x-1"
          />
          <Logo className="text-base sm:text-lg" />
          <span className="sr-only">{t.switcher.glass}</span>
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
