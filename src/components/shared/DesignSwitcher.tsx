import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useT from '../../i18n/useT';

const designs = [
  { href: '/', key: 'original' },
  { href: '/glass', key: 'glass' },
  { href: '/cyber', key: 'cyber' },
  { href: '/parallax', key: 'parallax' },
] as const;

/** Floating pill to jump between the design versions for comparison. */
export default function DesignSwitcher() {
  const { pathname } = useRouter();
  const t = useT();

  if (pathname.startsWith('/api') || pathname === '/_error') return null;

  return (
    <nav
      aria-label={t.switcher.label}
      className="glass-theme dark pointer-events-none fixed inset-x-0 bottom-4 z-[60] flex justify-center px-4"
    >
      <ul className="glass pointer-events-auto flex items-center gap-1 rounded-full bg-[rgb(14_11_42/0.88)]! p-1 text-xs shadow-[0_10px_40px_-10px_rgb(0_0_0/0.7)] sm:text-sm">
        {designs.map((design) => {
          const active = pathname === design.href;
          return (
            <li key={design.key}>
              <Link
                href={design.href}
                aria-current={active ? 'page' : undefined}
                className={clsx(
                  'block rounded-full px-3 py-1.5 font-mono tracking-wider uppercase transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--g-accent-3)] sm:px-4',
                  active
                    ? 'bg-gradient-to-r from-[var(--g-accent-2)] to-[var(--g-accent)] text-white shadow-[0_0_18px_-2px_var(--g-accent-2)]'
                    : 'text-[var(--g-muted)] hover:bg-white/10 hover:text-white',
                )}
              >
                {t.switcher[design.key]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
