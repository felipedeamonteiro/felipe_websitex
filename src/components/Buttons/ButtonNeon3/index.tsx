import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonNeon1: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Container type="button" {...props}>
      <span>{children}</span>
    </Container>
  );
};

export default ButtonNeon1;
