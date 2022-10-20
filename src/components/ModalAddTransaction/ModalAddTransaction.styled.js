import styled from 'styled-components';
// import { Link } from 'react-router-dom';

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
  }

  @media screen and (min-width: 1280px) {
    padding: 61px 0 61px 0;
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: 24px;
  line-height: 36px;
  text-align: center;

  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
`;
