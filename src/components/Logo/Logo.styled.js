import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  align-items: center;
`;
export const Title = styled.h1`
  margin: 0;
  padding-left: 15px;
  font-family: ${p => p.theme.fonts.poppins};
  font-weight: ${p => p.theme.fontWeights.bolt};
  font-size: ${p => p.theme.fontSizes.l};
  color: ${p => p.theme.colors.black};
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 20px;
  }
`;
