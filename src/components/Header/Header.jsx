import Logo from 'components/Logo/Logo';
import {
  Container,
  Div,
  Head,
  Svg,
  Link,
  Text,
  TextExit,
  Wrapper,
} from './Header.styled';
import logout from '../../assets/icons/sprite.svg';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width:768px)' });
  return (
    <Container>
      <Head>
        <Logo width="30" height="30" />
        <Wrapper>
          <Text>Name</Text>

          {/* <svg>
                <use href={logout}></use>
            </svg> */}
          {isMobile && (
            <Link to="/login">
              <Svg>
                <use href={logout + '#icon-icon-Exit'}></use>
              </Svg>
            </Link>
          )}
          {isTablet && (
            <Link to="/login">
              <Div>
              <Svg>
                <use href={logout + '#icon-icon-Exit'}></use>
              </Svg>
                <TextExit>Exit</TextExit>
              </Div>
            </Link>
          )}
        </Wrapper>
      </Head>
    </Container>
  );
};

export default Header;
