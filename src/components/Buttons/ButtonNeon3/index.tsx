import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonNeon3({
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        'font-display min-h-12 w-full rounded-md border border-cyan-300 bg-[#06072a] px-5 py-3 text-lg text-white uppercase shadow-[0_0_12px_#00ccff] transition hover:bg-cyan-300 hover:text-[#06072a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
