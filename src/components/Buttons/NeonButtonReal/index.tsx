import type { AnchorHTMLAttributes, CSSProperties, ReactNode } from 'react';

interface NeonButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  buttonColorHex: string;
  href: string;
}

export default function NeonButtonReal({
  children,
  buttonColorHex,
  style,
  ...props
}: NeonButtonProps) {
  const neonStyle = {
    '--neon-color': buttonColorHex,
    ...style,
  } as CSSProperties;

  return (
    <a className="neon-link" style={neonStyle} {...props}>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      {children}
    </a>
  );
}
