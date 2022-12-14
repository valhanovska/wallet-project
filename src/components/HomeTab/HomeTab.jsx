import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { MobileTab } from './MobileTab';
import { Table } from './Table';
import Balance from '../Balance/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { useState } from 'react';
import { getAllTransactions } from 'redux/transactionsController/trControllerSelector';
import { clearEditeNewContact } from 'redux/transactionsController/trControllerSlice';


const HomeTab = () => {
  const allTransaction = useSelector(getAllTransactions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearEditeNewContact());
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Media queries={{ small: { maxWidth: 769 } }}>
        {matches =>
          matches.small ? (
            <>
              <Balance />
              {allTransaction && <MobileTab items={allTransaction} handleClick={handleClick}/>}
            </>
          ) : (
            allTransaction && <Table handleClick={handleClick} />
          )
        }
      </Media>
      {isModalOpen && <ModalAddTransaction handleClick={handleClick} />}
      <ButtonAddTransactions handleClick={handleClick} />
    </>
  );
};

export default HomeTab;
