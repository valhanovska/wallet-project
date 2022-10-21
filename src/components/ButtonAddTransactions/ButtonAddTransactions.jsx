import { Button } from './ButtonAddTransactions.styled';
import { useState } from 'react';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';

const ButtonAddTransactions = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

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
