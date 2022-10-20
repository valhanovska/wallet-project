import { Backdrop } from '@mui/material';
import Logo from 'components/Logo/Logo';
import { useState } from 'react';

const {
  Div,
  Title,
  ButtonNo,
  ButtonYes,
  DivButton,
} = require('./ModalLogout.styled');

const ModalLogout = () => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  //Внимательно!!!!! Уже готова функция открытия
  //   <Button onClick={handleToggle}>Show backdrop</Button>
  //   const handleToggle = () => {
  //       setOpen(!open);
  //   };

  return (
    <Backdrop
      sx={{ bgcolor: 'rgba(0, 0, 0, 0.25)', zIndex: 1 }}
      open={open}
      onClick={handleClose}
    >
      <Div>
        <Logo />
        <Title>Do you really want to leave your personal account?</Title>
        <DivButton>
           <ButtonYes>Yes</ButtonYes> {/* Link from 'react-router-dom'; /// */}
          <ButtonNo>No</ButtonNo>
        </DivButton>
      </Div>
    </Backdrop>
  );
};

export default ModalLogout;
