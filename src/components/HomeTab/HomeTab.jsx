import Media from 'react-media';
import { useSelector } from 'react-redux';
import { MobileTab } from './MobileTab';
import { Table } from './Table';


import Balance from '../Balance/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import ModalAddTransaction from 'components/ModalAddTransaction';
import { useState } from 'react';

const HomeTab = () => {
  const allTransaction = useSelector(
    state => state.transactionsControllers.allTransactions
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Media queries={{ small: { maxWidth: 767 } }}>
        {matches =>
          matches.small ? (
            <>
              <Balance />
              {allTransaction && <MobileTab items={allTransaction} />}
            </>
          ) : (
            allTransaction && <Table items={allTransaction} />
          )
        }
      </Media>
      {isModalOpen && <ModalAddTransaction handleClick={handleClick} />}
      <ButtonAddTransactions handleClick={handleClick} />
    </>
  );
};

export default HomeTab;
