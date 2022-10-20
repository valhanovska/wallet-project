import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  align-items: center;
`;
export const Title = styled.h1`
  margin: ${p=>p.theme.space[0]}px;
  padding-left: ${p=>p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.poppins};
  font-weight: ${p => p.theme.fontWeights.bolt};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    padding-left: ${p=>p.theme.space[9]}px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: ${p=>p.theme.space[9]}px;
  }
`;
export const Svg = styled.svg`
width: ${p=>p.theme.space[10]}px;
height: ${p=>p.theme.space[10]}px;
@media screen and (min-width: 768px) {
    width: ${p=>p.theme.space[12]}px;
    height: ${p=>p.theme.space[12]}px;
  }
  @media screen and (min-width: 1280px) {
    width: ${p=>p.theme.space[12]}px;
    height: ${p=>p.theme.space[12]}px;
  }
`
