import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
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
  background-color: #fff;
  padding: 0 65px;
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
  }
`;

export const Input = styled.input`
  width: 280px;
  height: 32px;
  border: none;
  border-bottom: 1px solid;

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
  width: 280px;
  height: 49px;
  margin-top: 20px;
  background: #fff;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  text-align: center;

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
  max-width: 280px;
  height: 50px;
  border-radius: 20px;
  background: #24cca7;
  border: none;

  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
  }
`;
