import React from "react";

import { Container } from "./styles";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <Container darkMode={darkMode}>
      Copyright &copy; Felipe de Alcântara Monteiro - 2022
    </Container>
  );
};

export default Footer;
