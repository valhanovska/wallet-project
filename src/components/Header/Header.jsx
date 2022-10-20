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
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operationsAuth';
import logout from '../../assets/icons/icon-Exit.svg';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/operationsAuth';

const Header = () => {
  const user = useSelector(state => state.auth.user.username);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

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
          <Text>{user ? user[0].toUpperCase() + user.slice(1) : 'Name'}</Text>
          {/* <svg>
                <use href={logout}></use>
            </svg> */}
          {isMobile && (
            <Link>
              <div onClick={() => dispatch(logOutUser())}>
                <Img src={logout} alt="logout" width={21} height={21} />
              </div>
            </Link>
          )}
          {isTablet && (
            <Link>
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
