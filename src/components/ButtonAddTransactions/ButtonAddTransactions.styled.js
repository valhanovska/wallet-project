import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  position: absolute;
  margin-top: auto;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: 40px;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #24cca7;
  border-radius: 50%;
  font-size: 44px;
  /* color: #ffff; */
  line-height: 0px;
  border: 0;

  svg {
    margin: 0;
    height: 20px;
    width: 20px;
    use {
      height: 20px;
      width: 20px;
    }
  }
`;
