import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        'min-h-11 w-full rounded-md bg-gradient-to-b from-[#6dd4fd] to-[#2800b3] px-5 py-2.5 text-lg font-bold text-white transition hover:brightness-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 disabled:cursor-not-allowed disabled:opacity-60',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
