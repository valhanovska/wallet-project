import Logo from 'components/Logo/Logo';
import {
  Container,
  Div,
  Head,
  Img,
  Link,
  Text,
  TextExit,
  Wrapper,
} from './Header.styled';
import logout from '../../assets/icons/icon-Exit.svg';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import { logOutUser } from 'redux/auth/operationsAuth';

const Header = () => {
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width:768px)' });
  const isDesctop = useMediaQuery({ query: '(min-width:1280px)' });
  return (
    <Container>
      <Head>
        <Logo />
        <Wrapper>
          <Text>Name</Text>

          {/* <svg>
                <use href={logout}></use>
            </svg> */}
          {isMobile && (
            <Link to="/login">
              <Img src={logout} alt="logout" width={21} height={21} />
            </Link>
          )}
          {isTablet && (
            <Link to="/login">
              <Div onClick={() => dispatch(logOutUser())}>
                <Img src={logout} alt="logout" width={21} height={21} />
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
