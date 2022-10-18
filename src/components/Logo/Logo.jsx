import wallet from '../../assets/icons/icon-Wallet.svg'
import { NavLink } from 'react-router-dom';
import { Link, Title } from './Logo.styled';
const Logo = () => {
  return (
    <Link to="/home">
     <img src={wallet} alt="logo" width='40' height='40' />
     <Title>Wallet</Title>
    </Link>
  );
};

export default Logo;
