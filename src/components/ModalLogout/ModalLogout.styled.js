import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 350px;
  gap: 20px;
  padding: 20px 20px 20px 20px;
  border-radius: 20px;
  background-color: #fff;

  @media screen and (min-width: 768px) {
    min-width: 410px;

    padding: 40px 61.5px 40px 61.5px;
  }

  @media screen and (min-width: 1280px) {
    /* padding: 60px 114px 20px 114px; */
  }
`;

export const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
  font-family: ${props => props.theme.fonts.circe};
`;

export const DivButton = styled.button`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 0;
  gap: 20px;
`;
export const ButtonNo = styled.button`
  cursor: pointer;
  min-width: 280px;
  height: 50px;
  border-radius: 20px;
  background: #24cca7;
  border: none;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  color: ${props => props.theme.textColor.white};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
  font-family: ${props => props.theme.fonts.circe};
  :focus,
  :hover {
    background-color: ${props => props.theme.textColor.secondary};
  }
`;

export const ButtonYes = styled(Link)`
  min-width: 280px;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  text-align: center;
  padding: 12px 0;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.textColor.secondary};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
  font-family: ${props => props.theme.fonts.circe};
  :focus,
  :hover {
    color: ${props => props.theme.colors.accent};
    border-color: ${props => props.theme.colors.accent};
  }
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;
