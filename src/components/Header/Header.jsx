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
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operationsAuth';
import logout from '../../assets/icons/sprite.svg';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/operationsAuth';
import { getTransactionUser } from 'redux/transactionsController/trControllerOpertaion';
const Header = () => {
  const user = useSelector(state => state.auth.user.username);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTransactionUser());
  }, [dispatch]);
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({ query: '(min-width:768px)' });
  return (
    <Container>
      <Head>
        <Logo width="30" height="30" />
        <Wrapper>
          <Text>{user ? user[0].toUpperCase() + user.slice(1) : 'Name'}</Text>
          {isMobile && (
            <Link>
              <div onClick={() => dispatch(logOutUser())}>
                <Svg>
                  <use href={logout + '#icon-icon-Exit'}></use>
                </Svg>
              </div>
            </Link>
          )}
          {isTablet && (
            <Link>
              <Div onClick={() => dispatch(logOutUser())}>
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
