import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

interface NeonButtonProps extends ButtonProps {
  children: string;
  buttonColorHex: string;
  href: string;
}

const NeonButtonReal: React.FC<NeonButtonProps> = ({
  children,
  buttonColorHex,
  href,
}) => {
  return (
    <Container buttonColorHex={buttonColorHex}>
      <a href={href}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </a>
    </Container>
  );
};

export default NeonButtonReal;
