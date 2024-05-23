import styled, { keyframes, css } from 'styled-components';
import { desktopScreenMin, mobileScreenMax, tabletScreenMax } from '../../styles/helperScreens';
import { shade } from 'polished';

interface IntroContainerProps {
  darkMode: boolean;
}

const animationBlurReal = keyframes`
from {
    text-shadow: 0 0 10px #03E9F4, 
                 0 0 20px #03E9F4, 
                 0 0 30px #03E9F4, 
                 0 0 40px #03E9F4, 
                 0 0 50px #03E9F4, 
                 0 0 60px #03E9F4, 
                 0 0 70px #03E9F4;
  }
  
  to {
    text-shadow: 0 0 20px #5ff3fa, 
                 0 0 30px #5ff3fa, 
                 0 0 40px #5ff3fa, 
                 0 0 50px #5ff3fa, 
                 0 0 60px #5ff3fa, 
                 0 0 70px #5ff3fa, 
                 0 0 80px #5ff3fa;
  }
`;

const animationBlurBox = keyframes`
from {
    box-shadow: 0 0 10px #03E9F4, 
                 0 0 20px #03E9F4, 
                 0 0 30px #03E9F4, 
                 0 0 40px #03E9F4, 
                 0 0 50px #03E9F4, 
                 0 0 60px #03E9F4, 
                 0 0 70px #03E9F4;
  }
  
  to {
    box-shadow: 0 0 20px #5ff3fa, 
                 0 0 30px #5ff3fa, 
                 0 0 40px #5ff3fa, 
                 0 0 50px #5ff3fa, 
                 0 0 60px #5ff3fa, 
                 0 0 70px #5ff3fa, 
                 0 0 80px #5ff3fa;
  }
`;

export const Container = styled.section<IntroContainerProps>`
  background: ${(props) => props.theme.colors.experienceContainerBackground};
  width: 100%;
  padding: 100px 30px 30px 30px;

  .animation-div {
    margin-top: 30px;
    width: 100%;
    height: 6px;
    ${props => props.darkMode && css`
      background: white;
      left: 0;
      animation: ${animationBlurBox} 2s ease-in-out infinite alternate;
    `}
  }

  @media only screen and (max-width: ${mobileScreenMax}) {
    width: 100%;
    padding: 80px 20px 20px 20px;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
    width: 100%;
    padding: 80px 20px 20px 20px;
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .text-center-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .text-uppercase {
      margin-top: 60px;
      font-size: 45px;
      font-family: 'Orbitron', sans-serif;
      color: ${(props) => props.theme.colors.experienceContainerTextUppercase};
      ${props => props.darkMode && css`
      animation: ${animationBlurReal} 1s ease-in-out infinite alternate;
      `}

      @media only screen and (max-width: ${mobileScreenMax}) {
        margin-top: 40px;
        text-align: center;
      }

      @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
        margin-top: 40px;
        text-align: center;
      }
    }

    .text-muted {
      margin: 25px 0 50px 0;
      font-style: italic;
      font-weight: lighter;
      color: ${(props) => props.theme.colors.experienceContainerTextMuted};
    }
  }

  .timeline {
  position: relative;
  padding: 0;
  list-style: none;
  &:before {
    position: absolute;
    top: 5px;
    bottom: 85px;
    left: 50%;
    width: 3px;
    margin-left: -1.5px;
    content: '';
    background-color: ${(props) => props.theme.colors.experienceContainerTimelineBefore};

    @media only screen and (max-width: ${mobileScreenMax}) {
      left: 20%;
      bottom: 400px;
    }

    @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
      left: 21%;
      bottom: 215px;
    }
  }
  > li {
    position: relative;
    min-height: 170px;
    margin: 100px 0;
    
    &:after,
    &:before {
      display: table;
      content: ' ';
    }
    &:after {
      clear: both;
    }
    .timeline-panel {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 43%;
      padding: 10px 20px 20px 14px;
      text-align: right;

      @media only screen and (max-width: ${mobileScreenMax}) {
        text-align: left;
        float: none;
        left: 37%;
        width: 65%;
      }

      @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
        text-align: left;
        float: none;
        left: 33%;
        width: 70%;
      }

      &:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
      }
      &:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
      }
    }
    .timeline-image {
      position: absolute;
      z-index: 100;
      left: 50%;
      width: 170px;
      height: 170px;
      margin-left: -85px;
      text-align: center;
      color: white;
      border: 9px solid ${(props) => props.darkMode ? 
      shade(0.8, props.theme.colors.experienceContainerTimelineBodyUlP) : 
      props.theme.colors.experienceContainerTimelineBodyUlP};
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.experienceContainerTimelineImageBack};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border .5s;

      ${props => props.darkMode && css`
        filter: grayscale(0.5) blur(3px);
        transition: filter .5s;
      `}

      @media only screen and (max-width: ${mobileScreenMax}) {
        width: 130px;
        height: 130px;
        left: 25%;
      }

      @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
        width: 150px;
        height: 150px;
        left: 22%;
      }

      &.circleActive {
        border: 9px solid ${(props) => props.theme.colors.experienceContainerTimelineCircleActive};
        transition: border-color .5s;
        ${props => props.darkMode && css`
          filter: grayscale(0) blur(0);
          transition: filter .5s;
        `}
      }
      
      img {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: -1;
      }

      h4 {
        margin-top: 40px;
      }

      &:last-child {
        background-color: ${(props) => props.theme.colors.experienceContainerTimelineLastChild};
      }
    }

    &.timeline-inverted > .timeline-panel {
      display: flex;
      justify-content: flex-end;
      padding: 0 30px 20px 20px;
      text-align: left;
      float: right;

      @media only screen and (max-width: ${mobileScreenMax}) {
        text-align: left;
        float: none;
        left: 37%;
        width: 65%;
        font-size: 18px;
      }

      @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
        float: none;
        left: 33%;
        width: 70%;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-heading {
    color: ${props => props.darkMode ? shade(0.2, '#000') : '#000'};
    transition: color .5s;

    &.activeText {
      color: ${(props) => props.theme.colors.experienceContainerTimelineBodyUlH4ActiveText};
      transition: color .5s;
    }

    h4 {
      font-size: 25px;
      margin-top: 0;

      @media only screen and (max-width: ${mobileScreenMax}) {
        font-size: 20px;
      }

      &.subheading {
        text-transform: none;
      }
    }
  }
  .timeline-body {
     > ul,
    > p {
      margin-bottom: 0;
      font-size: 20px;
      color: ${(props) => props.darkMode ? 
      shade(0.8, props.theme.colors.experienceContainerTimelineBodyUlP) : 
      props.theme.colors.experienceContainerTimelineBodyUlP};
      transition: color .5s;

      @media only screen and (max-width: ${mobileScreenMax}) {
        font-size: 18px;
      }

      &.activeText {
        color: ${(props) => props.theme.colors.experienceContainerTimelineBodyUlPActiveText};
        transition: color .5s;
      }
    }
  }
}
`;