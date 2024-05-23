import React from "react";
import { Container } from "./styles";

interface IntroContainerProps {
  darkMode: boolean;
}

const IntroContainer: React.FC<IntroContainerProps> = ({ darkMode }) => {
  return (
    <Container id="section-home" darkMode={darkMode}>
      {darkMode && (
        <div className="shooting-star-container">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      <h3>Felipe de Alcântara Monteiro</h3>
      <h1>ENGENHEIRO FULL-STACK REACT, NODE &amp; REACT-NATIVE</h1>
    </Container>
  );
};

export default IntroContainer;
