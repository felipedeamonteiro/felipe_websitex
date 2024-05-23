import styled, { keyframes, css } from 'styled-components';

interface ContactMeContainerProps {
  darkMode: boolean;
}

const animationBlurReal = keyframes`
from {
    text-shadow: 0 0 10px #49fc8b, 
                 0 0 20px #49fc8b, 
                 0 0 30px #49fc8b, 
                 0 0 40px #49fc8b, 
                 0 0 50px #49fc8b, 
                 0 0 60px #49fc8b, 
                 0 0 70px #49fc8b;
  }
  
  to {
    text-shadow: 0 0 20px #02cf4d, 
                 0 0 30px #02cf4d, 
                 0 0 40px #02cf4d, 
                 0 0 50px #02cf4d, 
                 0 0 60px #02cf4d, 
                 0 0 70px #02cf4d, 
                 0 0 80px #02cf4d;
  }
`;

export const Container = styled.section<ContactMeContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 100px 30px 30px 30px;
  background: ${(props) => props.theme.colors.contactMeBackground};

  .text-center-row {
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .text-uppercase {
      margin-top: 60px;
      font-size: 45px;
      font-family: 'Orbitron', sans-serif;
      ${props => props.darkMode && css`
      color: #fff;
      animation: ${animationBlurReal} 1s ease-in-out infinite alternate;
      `}
    }

    .text-muted {
      margin: 25px 0 50px 0;
      font-style: 'italic';
      font-weight: lighter;
      color: ${(props) => props.theme.colors.contactMeH3};
    }
  }

  .contact-form-div {
    padding-bottom: 40px;
  }
/* 
  @media only screen and (max-width: 414px) {
    width: 401%;
  }

  @media only screen and (min-width: 415px) and (max-width: 975px) {
    width: 122%;
  } */
`;