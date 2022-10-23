import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #ffffff;

  @media screen and (min-width: 768px) {
    padding: 40px 0 61px 0;
    max-width: 533px;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    padding: 61px 0 61px 0;
    z-index: 1;
  }
`;

export const Form = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 40px;
  padding: 60px 20px 20px 20px;

  @media screen and (min-width: 768px) {
    max-width: 410px;

    padding: 61.5px 61.5px 20px 60px;
  }

  @media screen and (min-width: 1280px) {
    /* padding: 60px 114px 20px 114px; */
  }
`;
export const Label = styled.label`
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  padding-bottom: 8px;

  svg {
    height: 24px;
    width: 24px;

    use {
    }
  }
`;
export const Input = styled.input`
  color: ${props => props.theme.textColor.secondary};
  width: 280px;
  border: none;
  outline: none;
  margin-left: 22px;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
  font-family: ${props => props.theme.fonts.circe};

  ::placeholder {
    color: ${props => props.theme.textColor.placeholder};
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.body};
    font-family: ${props => props.theme.fonts.circe};
  }
  @media screen and (min-width: 768px) {
    width: 410px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NavLink = styled(Link)`
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
    height: 50px;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Validation = styled.p`
  margin: 5px 0 0 0;
  color: #ff4747;
  margin-left: 15px;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.body};
  font-family: ${props => props.theme.fonts.circe};
`;

export const DivInput = styled.div``;

export const BorderProgress = styled.div``;
