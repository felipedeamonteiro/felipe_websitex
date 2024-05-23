import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  width: 370px;
  height: 40px;
  padding: 10px;
  border: none;
  font-weight: bold;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.buttonText};
  font-size: 18px;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
  background: linear-gradient(to bottom, ${(props) => props.theme.colors.buttonBackground1}, ${(props) => props.theme.colors.buttonBackground2});

  &:hover {
    background: ${(props) => shade(0.2, props.theme.colors.buttonHover)};
  }
`;

