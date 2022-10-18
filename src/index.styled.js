import styled, { createGlobalStyle } from 'styled-components';

export const AppStyled = styled.div`
  background: #000;
  color: tomato;
  font-family: ${props => props.theme.fonts.circe};
  font-size: ${props => props.theme.fontWeights.normal};
`;

export const GlobalStyle = createGlobalStyle`

div${AppStyled}{
    font-family: ${props => props.theme.fonts.circe};
  font-size: ${props => props.theme.fontWeights.normal};
}

`;
