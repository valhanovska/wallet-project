import styled from 'styled-components';

import showPasswordIcon from '../../icons/eye.svg';
import hidePasswordIcon from '../../icons/eye-close.svg';

const Button = styled.button`
  display: flex;
  border: none;
  background-color: inherit;

  cursor: pointer;
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
`;

export const ShowPasswordButton = ({ onClick, showPassword = false }) => {
  return (
    <Button type="button" onClick={onClick}>
      <Icon src={showPassword ? showPasswordIcon : hidePasswordIcon}></Icon>
    </Button>
  );
};
