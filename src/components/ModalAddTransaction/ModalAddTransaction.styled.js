import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Overlay = styled.div`
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1200;
  }
`;

export const Form = styled.form`
  background-color: #fff;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 60px;
  width: 100%;
  max-height: 100vh;
  padding: 20px 0;
  z-index: 15;

  gap: 40px;

  @media screen and (min-width: 768px) {
    max-height: calc(100vh - 24px);
    top: auto;
    max-width: 540px;
    border-radius: 20px;

    animation: scale-up-center 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;

    @keyframes scale-up-center {
      0% {
        transform: scale(0.5);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`;

export const Title = styled.h1`
  font-family: ${props => props.theme.fonts.poppins};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: 24px;
  line-height: ${props => props.theme.lineHeights.body};
  text-align: center;
  margin: 0;

  color: ${props => props.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 45px;
    display: flex;
    align-items: center;
  }
`;

export const TransactionType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  width: 257px;
`;

export const TextType = styled.p`
  margin: 0;
  font-family: ${props => props.theme.fonts.circe};
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 1.47;
  color: #e0e0e0;
  color: ${p => {
    if (p.ownType === 'EXPENSE') {
      return p.type === p.ownType ? p.theme.colors.pink : 'grey';
    }
    if (p.ownType === 'INCOME') {
      return p.type === p.ownType ? p.theme.colors.accent : 'grey';
    }
  }};
`;

export const Toggle = styled.label`
  position: relative;
  display: flex;
  cursor: pointer;
  > input {
    clip: rect(0 0 0 0);
    clip-path: inset(100%);
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    :checked {
      ~ .thumb {
        background-color: rgba(255, 255, 255, 0.1);

        .indicator {
          left: 37px;
          background-color: ${props => props.theme.colors.pink};
          box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
          :hover {
            box-shadow: none;
          }
          .vertical {
            display: none;
          }
        }
      }
    }
  }
  .thumb {
    position: relative;
    width: 80px;
    height: 40px;
    border-radius: 30px;
    background-color: ${props => props.theme.colors.white};
    border: 1px solid #e0e0e0;
    opacity: 1;
    transition: background-color 200ms ease-in-out;
  }
  .indicator {
    position: absolute;
    top: -2px;
    left: -1px;
    width: 44px;
    height: 44px;
    background-color: ${props => props.theme.colors.accent};
    border-radius: 22px;
    transition: left 250ms ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    :hover {
      box-shadow: none;
    }
  }
`;

export const ContainerSumData = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: center;
    gap: 32px;
  }
`;

export const Sum = styled.input`
  padding: 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 280px;
  height: 32px;

  ::placeholder {
    font-family: ${props => props.theme.fonts.circe};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.ml};
    line-height: ${props => props.theme.lineHeights.body};

    color: #bdbdbd;
  }

  @media screen and (min-width: 768px) {
    width: 190px;
  }
`;

export const ContainerDate = styled.div`
  position: relative;
  input {
    padding: 0;
    margin: 0;
    height: 34px;
    width: 280px;
    outline: none;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    outline-offset: 0;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #000;
    font-family: Circe, sans-serif;

    @media screen and (min-width: 768px) {
      width: 181px;
    }
  }
  > svg {
    position: absolute;
    right: 20px;
    bottom: 10px;
    @media screen and (min-width: 768px) {
      margin-left: 20px;
    }
  }
`;

export const Comment = styled.input`
  border: none;
  border-bottom: 1px solid #e0e0e0;
  width: 300px;
  min-height: 84px;

  ::placeholder {
    font-family: ${props => props.theme.fonts.circe};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.ml};
    line-height: ${props => props.theme.lineHeights.body};

    color: #bdbdbd;
  }
  @media screen and (min-width: 768px) {
    width: 394px;
    min-height: 32px;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;

  flex-direction: column;
  gap: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  min-width: 300px;
  height: 50px;
  border-radius: 20px;
  background: ${props => props.theme.colors.accent};
  border: none;
  text-transform: uppercase;
  color: ${props => props.theme.textColor.white};
  font-family: ${props => props.theme.fonts.circe};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.ml};
  line-height: ${props => props.theme.lineHeights.body};
  :focus,
  :hover {
    background-color: ${props => props.theme.textColor.secondary};
  }
`;

export const NavLink = styled(Link)`
  width: 300px;
  border-radius: 20px;
  border: 1px solid #4a56e2;
  text-align: center;
  padding: 12px 0;
  margin: 0;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.textColor.secondary};
  font-family: ${props => props.theme.fonts.circe};
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: ${props => props.theme.fontSizes.ml};
  line-height: ${props => props.theme.lineHeights.body};
  :focus,
  :hover {
    color: ${props => props.theme.colors.accent};
    border-color: ${props => props.theme.colors.accent};
  }
`;

export const CloseBtn = styled.button`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    display: block;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
    z-index: 1;
    top: 16px;
    right: 20px;
    transition: 0.25s linear;

    &:hover,
    &:focus {
      animation: rotate-center 500ms ease-in-out 50ms both;
    }
    @keyframes rotate-center {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export const Svg = styled.svg`
  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 16px;
    height: 16px;
  }
`;
