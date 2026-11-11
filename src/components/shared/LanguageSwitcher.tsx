import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useId, useRef, useState } from 'react';
import { FiChevronDown, FiGlobe } from 'react-icons/fi';
import { localeLabels, locales } from '../../i18n/config';
import useT, { useLocale } from '../../i18n/useT';

interface LanguageSwitcherProps {
  className?: string;
  /** Inline row of all languages (used inside the mobile menu). */
  inline?: boolean;
}

export default function LanguageSwitcher({
  className,
  inline = false,
}: LanguageSwitcherProps) {
  const { asPath } = useRouter();
  const t = useT();
  const current = useLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const handlePointer = (event: PointerEvent): void => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', handlePointer);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('pointerdown', handlePointer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  const linkClass = (active: boolean) =>
    clsx(
      'font-mono block rounded-md px-3 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)]',
      active
        ? 'bg-[var(--g-accent-2)]/15 text-[var(--g-accent-2)]'
        : 'text-[var(--g-text)] hover:bg-[var(--g-accent)]/10',
    );

  if (inline) {
    return (
      <ul
        aria-label={t.nav.language}
        className={clsx('flex flex-wrap gap-2', className)}
      >
        {locales.map((locale) => (
          <li key={locale}>
            <Link
              href={asPath}
              locale={locale}
              scroll={false}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === current ? 'true' : undefined}
              className={clsx(linkClass(locale === current), 'glass')}
            >
              {localeLabels[locale].short}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div ref={rootRef} className={clsx('relative', className)}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t.nav.language}: ${localeLabels[current].name}`}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 items-center gap-1.5 rounded-full border border-[var(--g-border)] px-3 font-mono text-xs tracking-wider text-[var(--g-text)] uppercase transition hover:border-[var(--g-accent-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)]"
      >
        <FiGlobe aria-hidden="true" className="text-sm" />
        {localeLabels[current].short}
        <FiChevronDown
          aria-hidden="true"
          className={clsx('transition-transform', open && 'rotate-180')}
        />
      </button>
      <ul
        id={menuId}
        hidden={!open}
        className="glass absolute top-12 right-0 z-50 min-w-36 rounded-xl p-1.5"
      >
        {locales.map((locale) => (
          <li key={locale}>
            <Link
              href={asPath}
              locale={locale}
              scroll={false}
              hrefLang={locale}
              lang={locale}
              aria-current={locale === current ? 'true' : undefined}
              onClick={() => setOpen(false)}
              className={linkClass(locale === current)}
            >
              {localeLabels[locale].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
