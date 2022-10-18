import styled from 'styled-components';
import { App } from 'components/App';


export const AppStyled = styled.div`
background: #000;
color: tomato;
font-family:  ${props => props.theme.fonts.circe};
font-size: ${props => props.theme.fontWeights.normal};

`