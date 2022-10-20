import wallet from '../../assets/icons/sprite.svg';
import { Svg, Link, Title } from './Logo.styled';
const Logo = () => {
  return (
    <Link to="home">
      <Svg>
        <use href={wallet + '#icon-icon-Wallet'}></use>
      </Svg>
      <Title>Wallet</Title>
    </Link>
  );
};

export default Logo;
