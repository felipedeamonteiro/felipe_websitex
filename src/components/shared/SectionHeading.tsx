import clsx from 'clsx';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  id?: string;
  className?: string;
}

/** `ABOUT ME_` style heading: mono label with neon squares + display title. */
export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  id,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={clsx(
        align === 'center' && 'mx-auto text-center',
        'max-w-3xl',
        className,
      )}
    >
      <p
        className={clsx(
          'flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.25em] text-[var(--g-accent-3)] uppercase sm:text-sm',
          align === 'center' && 'justify-center',
        )}
      >
        <span aria-hidden="true" className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--g-accent-2)] shadow-[0_0_8px_var(--g-accent-2)]" />
          <span className="h-1.5 w-1.5 rounded-[1px] bg-[var(--g-accent-3)] shadow-[0_0_8px_var(--g-accent-3)]" />
        </span>
        <span className="blink-caret">{label}</span>
      </p>
      <h2
        id={id}
        className="font-display mt-4 text-3xl leading-[1.1] font-black tracking-tight text-balance uppercase sm:text-4xl lg:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body mt-4 text-base text-pretty text-[var(--g-muted)] sm:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}
