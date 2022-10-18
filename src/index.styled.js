import  { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  font-family: ${props => props.theme.fonts.circe};
  font-size: ${props => props.theme.fontWeights.normal};

`