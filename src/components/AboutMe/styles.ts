import styled, { keyframes, css } from 'styled-components';
import { desktopScreenMin, mobileScreenMax, tabletScreenMax } from '../../styles/helperScreens';

interface ContainerProps {
  sobreMimInViewport: boolean;
  darkMode: boolean;
}

const endOfSectionAnimation = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const animationBlurReal = keyframes`
from {
    text-shadow: 0 0 10px #fc1249, 
                 0 0 20px #fc1249, 
                 0 0 30px #fc1249, 
                 0 0 40px #fc1249, 
                 0 0 50px #fc1249, 
                 0 0 60px #fc1249, 
                 0 0 70px #fc1249;
  }
  
  to {
    text-shadow: 0 0 20px #f73e69, 
                 0 0 30px #f73e69, 
                 0 0 40px #f73e69, 
                 0 0 50px #f73e69, 
                 0 0 60px #f73e69, 
                 0 0 70px #f73e69, 
                 0 0 80px #f73e69;
  }
`;
const animationBlurBox = keyframes`
from {
    box-shadow: 0 0 10px #fc1249, 
                 0 0 20px #fc1249, 
                 0 0 30px #fc1249, 
                 0 0 40px #fc1249, 
                 0 0 50px #fc1249, 
                 0 0 60px #fc1249, 
                 0 0 70px #fc1249;
  }
  
  to {
    box-shadow: 0 0 20px #f73e69, 
                 0 0 30px #f73e69, 
                 0 0 40px #f73e69, 
                 0 0 50px #f73e69, 
                 0 0 60px #f73e69, 
                 0 0 70px #f73e69, 
                 0 0 80px #f73e69;
  }
`;

const fillCssAndHtml = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.95);
  }
`;

const fillJavascriptAndReact = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.85);
  }
`;

const fillReactNative = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.75);
  }
`;

const fillNodejs = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.7);
  }
`;

const fillPython = keyframes`
  from {
    width: 7%;
  }
  to {
    width: calc(75% * 0.6);
  }
`;

export const Container = styled.section<ContainerProps>`
  padding: 100px 30px 30px 30px;
  background: ${props => props.theme.colors.aboutMeBackground};
  overflow: hidden;

  .animation-div {
      width: 100%;
      height: 6px;
      ${props => props.darkMode && css`
        background: white;
        left: 0;
        animation: ${animationBlurBox} 2s ease-in-out infinite alternate;
      `}
    }
  

  h1 {
    font-family: 'Orbitron', sans-serif;
    font-size: 45px;
    display: flex;
    justify-content: center;
    padding-bottom: 50px;
    ${props => props.darkMode && css`
      color: #fff;
      animation: ${animationBlurReal} 1s ease-in-out infinite alternate;
    `}
  }

  .skills-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: ${mobileScreenMax}) {
      display: flex;
      align-items: center;
      flex-direction: column;
      .description {
        margin-bottom: 30px;
      }

      .bar-tag {
        font-size: 12px;
      }
    }

    @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
      display: flex;
      align-items: center;
      flex-direction: column;
      .description {
        margin-bottom: 30px;
      }
    }

    .about-me{
      width: 100%;
      max-width: 700px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        border: 6px solid ${props => props.theme.colors.aboutMeRoundedBorders};
        object-fit: cover;
      }
      
      .description {
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        line-height: 30px;
        color: ${props => props.theme.colors.aboutMeText};

        p {
          color: ${props => props.theme.colors.aboutMeDescriptionP};
        }

        .page-link-highlight {
          color: ${props => props.theme.colors.aboutMePageLinkHighlight};
        }
      }

      .label_bold {
        margin: 10px 0;
        font-size: 30px;
        color: ${props => props.theme.colors.aboutMeLabelBold};
        font-family: 'Orbitron', sans-serif;
      }
    }

    .skills-bars {
      width: 100%;

      .bar-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background: ${props => props.theme.colors.aboutMeSkillsBarsBackground};
        margin-bottom: 25px;
        height: 30px;

        .bar-content {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: inherit;

          .bar-tag {
            width: 20%;
            background: ${props => props.theme.colors.aboutMeSkillsBarsTags};
            color: ${props => props.theme.colors.aboutMeSkillsBarsText}; 
            font-weight: bold;
            padding: 0 6px 0 6px;
            height: inherit;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          
          ${props => props.sobreMimInViewport &&
            css`
              .bar-fill-css {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, ${(props) => props.theme.colors.aboutMeSkillsBarsFill1}, ${(props) => props.theme.colors.aboutMeSkillsBarsFill2});
                animation: ${fillCssAndHtml} 4s forwards;
              }
            `}   

          ${props => props.sobreMimInViewport &&
            css`
              .bar-fill-html {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, ${(props) => props.theme.colors.aboutMeSkillsBarsFill1}, ${(props) => props.theme.colors.aboutMeSkillsBarsFill2});
                animation: ${fillCssAndHtml} 4s forwards;
              }
            `}
          
          ${props => props.sobreMimInViewport &&
            css`
              .bar-fill-javascript {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, ${(props) => props.theme.colors.aboutMeSkillsBarsFill1}, ${(props) => props.theme.colors.aboutMeSkillsBarsFill2});
                animation: ${fillJavascriptAndReact} 4s forwards;
              }
            `}

          
          ${props => props.sobreMimInViewport &&
            css`
              .bar-fill-react {
              height: inherit;
              display: flex;
              align-items: center;
              justify-content: flex-end;
              background: linear-gradient(to bottom, ${(props) => props.theme.colors.aboutMeSkillsBarsFill1}, ${(props) => props.theme.colors.aboutMeSkillsBarsFill2});
              animation: ${fillJavascriptAndReact} 4s forwards;
              }
            `}

          
          ${props => props.sobreMimInViewport &&
            css`
              .bar-fill-react-native {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, ${(props) => props.theme.colors.aboutMeSkillsBarsFill1}, ${(props) => props.theme.colors.aboutMeSkillsBarsFill2});
                animation: ${fillReactNative} 4s forwards;
              }
            `}

          ${props => props.sobreMimInViewport &&
            css`
              .bar-fill-nodejs {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, ${(props) => props.theme.colors.aboutMeSkillsBarsFill1}, ${(props) => props.theme.colors.aboutMeSkillsBarsFill2});
                animation: ${fillNodejs} 4s forwards;
              }
            `}

          
          ${props => props.sobreMimInViewport &&
            css`
              .bar-fill-python {
                height: inherit;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                background: linear-gradient(to bottom, ${(props) => props.theme.colors.aboutMeSkillsBarsFill1}, ${(props) => props.theme.colors.aboutMeSkillsBarsFill2});
                animation: ${fillPython} 4s forwards;
              }
            `}

          span {
            margin-right: 5px;
            color: ${(props) => props.theme.colors.aboutMeSkillsBarsFillSpan};
            font-weight: bold;
          }
        }
      }
    }
  }

  .degree-div {
    margin: 100px 0;

    .text-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 70px;

      h2 {
        font-size: 28px;
        color: ${props => props.theme.colors.aboutMeDegreeH2};
      }

      h3 {
        color: ${props => props.theme.colors.aboutMeDegreeH3};
        margin-top: 10px;
        font-size: 18px;
        font-weight: 300;
        font-style: italic;
        font-family: 'Audiowide', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }
    }

    .box1, .box2, .box3 {
      margin-top: 40px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      ${props => props.darkMode && css`
        background: white;
        border-radius: 56px;
        box-shadow: 0 0 20px #f73e69;
        padding: 5px 0;
      `}

      img {
        max-width: 8%;
      }

      .service {
        font-size: 25px;
        margin-left: 10px;
        text-align: center;
        color: ${props => props.theme.colors.aboutMeDegreeService};
      }
    }
  }
`;