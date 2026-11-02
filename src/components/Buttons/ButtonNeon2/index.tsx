import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonNeonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}

export default function ButtonNeon2({
  children = 'Button',
  className = '',
  ...props
}: ButtonNeonProps) {
  return (
    <a
      className={`inline-flex min-h-12 min-w-40 items-center justify-center rounded-md bg-gradient-to-r from-cyan-400 via-[#0e1538] to-fuchsia-600 p-0.5 text-lg text-white uppercase transition hover:shadow-[0_0_16px_#d400d4] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fuchsia-300 ${className}`}
      {...props}
    >
      <span className="flex h-full w-full items-center justify-center rounded-[5px] bg-[#06072a] px-6 py-3">
        {children}
      </span>
    </a>
  );
}
