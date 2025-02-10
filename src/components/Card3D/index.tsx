import React from "react";

import { Container } from "./styles";

interface Card3DProps {
  imgSrc: string;
  imgAlt: string;
  projectHref?: string;
  aTagStyle?: boolean;
  backCardTitle: string;
  backCardDescritption: string;
}

const Card3D: React.FC<Card3DProps> = ({
  imgSrc,
  imgAlt,
  projectHref,
  aTagStyle,
  backCardTitle,
  backCardDescritption,
}) => {
  return (
    <Container aTagStyle={aTagStyle}>
      <div className="card-container">
        <div className="box">
          <div className="imgBox-front">
            <img src={imgSrc} alt={imgAlt} />
          </div>
          <div className="contentBx-back">
            <a target="_blank" rel="noopener noreferrer" href={projectHref}>
              <div>
                <h2>{backCardTitle}</h2>
                <p>{backCardDescritption}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card3D;
