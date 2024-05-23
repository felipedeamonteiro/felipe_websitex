import styled, { keyframes, css } from 'styled-components';
import darkThemeImage from '@/public/blue_night_sky.jpg';
import lightThemeImage from '@/public/white_landscape.jpg';
import { mobileScreenMax, tabletScreenMax } from '../../styles/helperScreens';

interface IntroContainerProps {
  darkMode: boolean;
}

const animateBg = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const animateShootingStars = keyframes`
  0% {
    transform: rotate(315deg) translateX(8000%);
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(315deg) translateX(-50000%);
    opacity: 0;
  }
`;

export const Container = styled.section<IntroContainerProps>`
  top: 0;
  margin-top: -85px;
  background-image: url(${(props: IntroContainerProps) => props.darkMode ? darkThemeImage : lightThemeImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 775px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px 30px 30px;
  transition: background-image 0.5s ease-out;
  //animation: ${animateBg} 5s linear infinite;

  ${props => props.darkMode && css`
    .shooting-star-container {
      width: 100%;
      height: inherit;
      position: absolute;
      overflow: hidden;
      
      span {
        position: absolute;
        top: 30%;
        left: 50%;
        width: 4px;
        height: 4px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
                    0 0 0 8px rgba(255, 255, 255, 0.1),
                    0 0 20px rgba(255, 255, 255, 1);
        animation: ${animateShootingStars} 2.5s linear infinite;
      }
  
      span::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 300px;
        height: 1px;
        background: linear-gradient(90deg, #fff, transparent);
      }

      span:nth-child(1) {
        top: 0;
        right: 0;
        left: initial;
        animation-delay: 0;
        animation-duration: 1.5s;
      }

      span:nth-child(2) {
        top: 0;
        right: 80px;
        left: initial;
        animation-delay: 0.2s;
        animation-duration: 3s;
      }

      span:nth-child(3) {
        top: 80px;
        right: 0;
        left: initial;
        animation-delay: 0.4s;
        animation-duration: 2s;
      }

      span:nth-child(4) {
        top: 0;
        right: 180px;
        left: initial;
        animation-delay: 0.6s;
        animation-duration: 1.5s;
      }

      span:nth-child(5) {
        top: 0;
        right: 400px;
        left: initial;
        animation-delay: 0.8s;
        animation-duration: 2.5s;
      }

      span:nth-child(6) {
        top: 0;
        right: 800px;
        left: initial;
        animation-delay: 0.6s;
        animation-duration: 1.5s;
      }

      span:nth-child(7) {
        top: 500px;
        right: 0px;
        left: initial;
        animation-delay: 0.6s;
        animation-duration: 1.5s;
      }

      span:nth-child(8) {
        top: 0;
        right: 1000px;
        left: initial;
        animation-delay: 0.8s;
        animation-duration: 2.5s;
      }

      span:nth-child(9) {
        top: 500px;
        right: 200px;
        left: initial;
        animation-delay: 0.2s;
        animation-duration: 1.5s;
      }

      span:nth-child(10) {
        top: 0px;
        right: 900px;
        left: initial;
        animation-delay: 0.6s;
        animation-duration: 3.5s;
      }
    }
  `}
  

 

  h3 {
    font-family: 'Orbitron', sans-serif;
    color: ${(props) => props.theme.colors.introContainerH3};
    font-weight: 200;
    font-size: 50px;
    text-align: center;
    margin-top: 200px;

    ${props => !props.darkMode && css`
      text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
    `}
  }

  h1 {
    color: ${(props) => props.theme.colors.introContainerH1};
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    font-size: 75px;
    text-align: center;
    margin-bottom: 150px;

    ${props => !props.darkMode && css`
      text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.5);
    `}
  }

  @media only screen and (max-width: ${mobileScreenMax}) {
    h3 {
      font-size: 30px;
      margin-top: 150px;
    }

    h1 {
      font-size: 50px;
      margin-bottom: 130px;
    }
  }

  @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
    
    h3 {
      font-size: 30px;
      margin-top: 230px;
    }

    h1 {
      font-size: 50px;
      margin-bottom: 150px;
    }
  }
`;