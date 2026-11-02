import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface ButtonNeonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}

export default function ButtonNeon1({
  children = 'Button',
  className = '',
  ...props
}: ButtonNeonProps) {
  return (
    <a
      className={`inline-flex min-h-12 min-w-40 items-center justify-center rounded-md border border-cyan-300 bg-[#06072a] px-6 py-3 text-lg text-white uppercase shadow-[0_0_12px_#00ccff] transition hover:bg-cyan-300 hover:text-[#06072a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
