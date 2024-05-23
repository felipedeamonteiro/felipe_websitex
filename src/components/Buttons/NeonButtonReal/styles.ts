import styled, { keyframes } from "styled-components";

const animate1 = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

const animate2 = keyframes`
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
`;

const animate3 = keyframes`
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
`;

const animate4 = keyframes`
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
`;

interface ContainerProps {
  buttonColorHex: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    position: relative;
    display: inline-block;
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 10px 30px;
    margin: 40px 0;
    color: ${props => props.buttonColorHex};
    font-size: 18px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    /* -webkit-box-reflect: below 1px linear-gradient(transparent, #0005); */

    /* :nth-child(1) {
      filter: hue-rotate(${props => props.buttonColorHex}deg);
    } */

    :hover {
      background: ${props => props.buttonColorHex};
      color: #050801;
      box-shadow: 0 0 5px ${props => props.buttonColorHex},
                  0 0 25px ${props => props.buttonColorHex},
                  0 0 50px ${props => props.buttonColorHex},
                  0 0 200px ${props => props.buttonColorHex};
    }

    span {
      position: absolute;
      display: block;

      :nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, ${props => props.buttonColorHex});
        animation: ${animate1} 1s linear 0s 3;
        /* animation-iteration-count: 3; */
      }

      :nth-child(2) {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, ${props => props.buttonColorHex});
        animation: ${animate2} 1s linear 0.25s 3;
        /* animation-delay: 0.25s;
        animation-iteration-count: 3; */
      }

      :nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, ${props => props.buttonColorHex});
        animation: ${animate3} 1s linear 0.56s 3;
        /* animation-iteration-count: 3; */
      }

      :nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(360deg, transparent, ${props => props.buttonColorHex});
        animation: ${animate4} 1s linear 0.75s 3;
        /* animation-iteration-count: 3; */
      }
    }
  }
  
`;