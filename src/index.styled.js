import styled, { createGlobalStyle } from 'styled-components';

const AppStyled = styled.div``;

export const GlobalStyle = createGlobalStyle`

div${AppStyled}{
    font-family: ${props => props.theme.fonts.circe};
  font-size: ${props => props.theme.fontWeights.normal};
}

`;
