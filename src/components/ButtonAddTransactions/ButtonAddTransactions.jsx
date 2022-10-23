import { Button } from './ButtonAddTransactions.styled';
import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';

const ButtonAddTransactions = ({ handleClick }) => {
  return (
    <>
      <Button type="button" onClick={handleClick}>
        <Plus />
      </Button>
    </>
  );
};

export default ButtonAddTransactions;
