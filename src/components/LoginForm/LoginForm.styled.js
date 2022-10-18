import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  gap: 40px;
  background-color: transparent;
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
  height: 50px;
  margin-top: 20px;
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
  width: 280px;
  height: 50px;
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-weight: 800;
    font-size: 24px;
  }.
`;
