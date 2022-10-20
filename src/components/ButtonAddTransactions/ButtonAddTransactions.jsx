import { Link } from './ButtonAddTransactions.styled';
import icon from '../../assets/icons/sprite.svg';

const ButtonAddTransactions = () => {
  return (
    <>
      <Link to="">
        <svg>
          <use href={icon + '#icon-icon-IncomeBtn'}></use>
        </svg>
      </Link>
    </>
  );
};

export default ButtonAddTransactions;
