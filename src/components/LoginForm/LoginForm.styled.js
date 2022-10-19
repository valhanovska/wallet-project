import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background: #ffffff; */

  @media screen and (min-width: 768px) {
    width: 533px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
    padding: 60px 114px 20px 114px;
  }
`;
export const H2 = styled.h2`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 40px;
  padding: 60px 20px 20px 20px;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
    padding: 60px 114px 20px 114px;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 12px;

  ::placeholder {
    color: ${props => props.theme.textColor.placeholder};
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.body};
    font-family: ${props => props.theme.fonts.circe};
  }
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
  }
`;

export const NavLink = styled(Link)`
  min-width: 280px;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  text-align: center;
  padding: 13px 0;
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
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
  }
`;

export const Button = styled.button`
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

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
  }
`;
