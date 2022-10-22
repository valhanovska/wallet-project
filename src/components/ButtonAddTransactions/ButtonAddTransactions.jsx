import { Button } from './ButtonAddTransactions.styled';
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';

const ButtonAddTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  isModalOpen ? (document.body.style.overflow = 'hidden') : document.body.style.overflow = 'visible';
  console.log(isModalOpen);

  return (
    <>
      <Button type="button" onClick={handleClick}>
        <Plus />
      </Button>
      {isModalOpen && <ModalAddTransaction handleClick={handleClick} />}
    </>
  );
};

export default ButtonAddTransactions;
