import styled from 'styled-components';
import { mobileScreenMax, tabletScreenMax } from '../../styles/helperScreens';

interface FooterContainerProps {
  darkMode: boolean;
}

export const Container = styled.footer<FooterContainerProps>`
  height: 60px;
  background: ${(props) => props.theme.colors.footerBackground};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  color: ${(props) => props.theme.colors.footerText};

  /* @media only screen and (max-width: ${mobileScreenMax}) {
    width: 401%;
  }

  @media only screen and (min-width: ${mobileScreenMax}) and (max-width: ${tabletScreenMax}) {
    width: 122%;
  } */
`;