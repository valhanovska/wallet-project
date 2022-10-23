import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 50%;
  border: 0;
  background: #24cca7;
  z-index: 10;

  @media screen and (min-width: 768px) {
    position: absolute;
  }
`;
