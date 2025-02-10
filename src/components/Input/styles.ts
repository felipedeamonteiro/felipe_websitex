import styled, { css } from 'styled-components';

interface ContainerProps {
  isErrored: boolean;
  isDisabled: boolean;
  darkMode: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column-reverse;

  input {
    width: 370px;
    margin-bottom: 30px;
    box-sizing: border-box;
    border: ${props => props.darkMode ? '4px' : '1px'} solid ${(props) => props.theme.colors.inputBorderColor};
    border-radius: 4px;
    padding: ${props => props.darkMode ? '5px' : '8px'};
    font-size: 16px;
    font-family: 'Roboto Slab', serif;

    ${props =>
      props.isErrored &&
      css`
        border-color: ${(props) => props.theme.colors.inputBorderError};
      `}

    ${props =>
      props.isDisabled &&
      css`
        background: ${(props) => props.theme.colors.inputBorderDisabled};
      `}

    &::placeholder {
      color: ${(props) => props.theme.colors.inputBorderPlaceholder};
    }

    &:focus {
      outline: none;
      border: ${props => props.darkMode ? '4px' : '1px'} solid ${(props) => props.theme.colors.inputBorderFocus};
    }
  }

  label {
    font-weight: 500;
    font-size: 18px;
    color: ${(props) => props.theme.colors.inputBorderLabel};
  }

  input:focus + label {
    color: ${(props) => props.theme.colors.inputBorderLabelFocus};
  }
`;
