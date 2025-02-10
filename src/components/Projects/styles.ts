import styled, { keyframes, css } from 'styled-components';

interface ProjectsContainerProps {
  darkMode: boolean;
}

const animationBlurReal = keyframes`
from {
    text-shadow: 0 0 10px #8140f7, 
                 0 0 20px #8140f7, 
                 0 0 30px #8140f7, 
                 0 0 40px #8140f7, 
                 0 0 50px #8140f7, 
                 0 0 60px #8140f7, 
                 0 0 70px #8140f7;
  }
  
  to {
    text-shadow: 0 0 20px #9c6af7, 
                 0 0 30px #9c6af7, 
                 0 0 40px #9c6af7, 
                 0 0 50px #9c6af7, 
                 0 0 60px #9c6af7, 
                 0 0 70px #9c6af7, 
                 0 0 80px #9c6af7;
  }
`;

const animationBlurBox = keyframes`
from {
    box-shadow: 0 0 10px #8140f7, 
                 0 0 20px #8140f7, 
                 0 0 30px #8140f7, 
                 0 0 40px #8140f7, 
                 0 0 50px #8140f7, 
                 0 0 60px #8140f7, 
                 0 0 70px #8140f7;
  }
  
  to {
    box-shadow: 0 0 20px #9c6af7, 
                 0 0 30px #9c6af7, 
                 0 0 40px #9c6af7, 
                 0 0 50px #9c6af7, 
                 0 0 60px #9c6af7, 
                 0 0 70px #9c6af7, 
                 0 0 80px #9c6af7;
  }
`;

export const Container = styled.section<ProjectsContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 30px 30px 30px;
  background: ${(props) => props.theme.colors.projectsBackground};

  .animation-div {
    margin-top: 40px;
    width: 100%;
    height: 6px;
    ${props => props.darkMode && css`
      background: white;
      left: 0;
      animation: ${animationBlurBox} 2s ease-in-out infinite alternate;
    `}
  }

  .text-center-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin-top: 60px;
      font-size: 45px;
      font-family: 'Orbitron', sans-serif;
      ${props => props.darkMode && css`
      color: #fff;
      animation: ${animationBlurReal} 1s ease-in-out infinite alternate;
      `}
    }

    h3 {
      margin: 25px 0 50px 0;
      font-style: 'italic';
      font-weight: lighter;
      color: ${(props) => props.theme.colors.projectsContainerH3};
      text-align: center;
    }
  }

  .cards-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    transform-style: preserve-3d;
    width: 100%;
    cursor: pointer;
  }
  
  /* @media only screen and (max-width: 414px) {
    width: 401%;
  }

  @media only screen and (min-width: 415px) and (max-width: 975px) {
    width: 122%;
  } */

  
  
`;