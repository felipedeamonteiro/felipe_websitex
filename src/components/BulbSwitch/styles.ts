import styled, { keyframes } from 'styled-components';

const spark1 = keyframes`
  0% {
    right: -5px;
    height: 1px;
    width: 1px;
    opacity: 0;
  }
  20% {
    height: 3px;
    width: 3px;
    right: 0px;
    opacity: 1;
  }
  30% {
    height: 3px;
    width: 3px;
    right: -5px;
    opacity: 1;
  }
  70% {
    height: 3px;
    width: 3px;
  }
  100% {
    right: -60px;
    bottom: 40px;
    opacity: 0;
  }
`;

const spark2 = keyframes`
  0% {
    height: 3px;
    width: 3px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    right: -20px;
    bottom: 100px;
    opacity: 0;
  }
`;

const spark3 = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    height: 2px;
    width: 2px;
  }
  100% {
    left: 0px;
    bottom: 100px;
    opacity: 0;
    height: 3px;
    width: 3px;
  }
`;

const spark4 = keyframes`
  0% {
    opacity: 0;
  }
  30% {
    opacity: 1;
    height: 2px;
    width: 2px;
  }
  100% {
    left: -20px;
    bottom: -10px;
    opacity: 0;
    height: 3px;
    width: 3px;
  }
`;


export const Container = styled.div`
  margin-left: 10px;

  .switch {
    position: relative;
    
    input {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      z-index: 100;
      cursor: pointer;
    }

    label {
      height: 25px;
      width: 65px;
      background-color: #7b7394;
      border-radius: 100px;
      display: block;
      transition: background-color 0.4s ease;
      box-shadow: 
        inset 0 0 20px rgba(#000, 0.2),
        inset 0 0 5px -2px rgba(#000, 0.4);
      
      .bulb {
        height: 20px;
        width: 20px;
        background-color: #4a426b;
        border-radius: 50%;
        position: relative;
        top: 3px;
        left: 2px;
        display: block;
        transition: 0.7s;
        box-shadow: 
          inset 0 0 1px 3px #4a426b,
          inset 0 0 6px 8px #423964,
          0 20px 30px -10px rgba(#000, 0.4);
        
        .bulb-center {
          position: absolute;
          display: block;
          height: 18px;
          width: 18px;
          background-color: #5a527b;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transition: 0.7s;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 0 0 4px #635a84;

          &:after {
            content: '';
            display: block;
            height: 7px;
            width: 7px;
            background-color: #7b7394;
            border-radius: 50%;
            position: absolute;
            transition: 0.7s;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0 0 2px 4px #524a73;
          }
        }

        .filament-1, .filament-2 {
          position: absolute;
          display: block;
          height: 17px;
          width: 17.5px;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          overflow: hidden;
          transform: translate(-50%, -50%) rotate(-45deg);

          &:after, &:before {
            content: '';
            display: block;
            height: 17px;
            width: 2.5px;
            border-radius: 50%;
            border: 1px solid #4a426b;
            position: absolute;
            transition: 0.7s;
            top: -4px;
            left: -2px;
            transform: rotate(-10deg)
          }

          &:before {
            left: 15px;
            transform: rotate(10deg);
          }
        }

        .filament-2 {
          transform: translate(-50%, -50%) rotate(45deg) !important;
        }
      }
    }
  }

  /* .reflections {
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    z-index: 90;
    perspective: 70px;

    span {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-image: linear-gradient(-135deg, transparent 10%, rgba(#fff, 0.3));
      position: absolute;
      left: 0px;
      bottom: 0px;

      &:after {
        content: '';
        display: block;
        height: 17.5px;
        width: 10px;
        position: absolute;
        top: 20px;
        right: 18px;
        border-radius: 50%;
        box-shadow: 4px -2px 0 -3px rgba(#fff, 0.4);
        filter: blur(1px);
        transform: rotate(-10deg);
      }
    }

    &:after {
      content: '';
      display: block;
      height: 40px;
      width: 25px;
      background-image: linear-gradient(80deg, rgba(#fff, 0.5) 45%, rgba(#fff, 0.5));
      border-radius: 10% 20% 50% 30% / 30% 60% 30% 40%;
      position: absolute;
      transform-style: preserve-3d;
      transform: rotateX(-25deg) rotate(-35deg) skewX(-15deg) translate(10px, -20px);
      top: -8px;
      left: -5px;
    }

    &:before {
      content: '';
      display: block;
      position: absolute;
      height: 5px;
      width: 15px;
      background-image: linear-gradient(to right, transparent, rgba(#fff, 0.15));
      bottom: 10px;
      right: 0px;
      transform: rotate(45deg);
    }
  } */

  .sparks {
    .spark1 {
      display: block;
      height: 1px;
      width: 1px;
      background-color: #d1b82b;
      position: absolute;
      right: -5px;
      border-radius: 50%;
      bottom: 23px;
      transition: 0.4s;
      opacity: 0;
    }
    .spark2 {
      display: block;
      height: 3px;
      width: 3px;
      background-color: #d1b82b;
      position: absolute;
      right: 30px;
      border-radius: 50%;
      bottom: 0px;
      transition: 0.4s;
      opacity: 0;
    }
    .spark3 {
      display: block;
      height: 3px;
      width: 3px;
      background-color: #d1b82b;
      position: absolute;
      left: 0px;
      border-radius: 50%;
      bottom: 0px;
      transition: 0.4s;
      opacity: 0;
    }
    .spark4 {
      display: block;
      height: 3px;
      width: 3px;
      background-color: #d1b82b;
      position: absolute;
      left: 20px;
      border-radius: 50%;
      bottom: 20px;
      transition: 0.4s;
      opacity: 0;
    }
  }

  input:checked ~ label .bulb {
    left: 42px;
    background-color: #a7694a;
    box-shadow: 
    inset 0 0 1px 3px #a56758,
    inset 0 0 6px 8px #6b454f,
    0 20px 30px -10px rgba(#000, 0.4),
    0 0 30px 50px rgba(#fdb843, 0.1);
  }

  input:checked ~ label .bulb > .bulb-center {
    background-color: #feed6b;
    box-shadow:
      inset 0 0 0 4px #fdec6a,
      0 0 8px 7px #bca83c,
      0 0 12px 9px #a1664a;
    
    &:after {
      background-color: #fef401;
      box-shadow: 0 0 2px 4px #fdb843;
    }
  }

  input:checked ~ label .bulb > .filament-1{
    &:before, &:after {
      border-color: #fef4d5;
    }
  }

  input:checked ~ label {
    background-color: #39315a;
    transition: background-color 0.4s ease;
  }


  input:checked ~ label .bulb > .filament-2{
    &:before, &:after {
      border-color: #fef4d5;
    }
  }

  input:checked ~ label .bulb > .sparks {
    & .spark1 {
      height: 1px;
      width: 1px;
      animation: ${spark1} 2s ease-in-out;
      animation-delay: 0.4s;
    }
    & .spark2 {
      height: 1px;
      width: 1px;
      animation: ${spark2} 2.4s ease-in-out;
      animation-delay: 0.4s;
    }
    & .spark3 {
      height: 1px;
      width: 1px;
      animation: ${spark3} 2.4s ease-in-out;
      animation-delay: 0.9s;
    }
    & .spark4 {
      height: 1px;
      width: 1px;
      animation: ${spark4} 1.7s ease-in-out;
      animation-delay: 0.9s;
    }
  }
`;