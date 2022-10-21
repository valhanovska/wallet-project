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
import logout from '../../assets/icons/sprite.svg';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser, refreshUser } from 'redux/auth/operationsAuth';
// import { getTransactionUser } from 'redux/transactionsController/trControllerOpertaion';
import { getTransactionUser } from 'redux/transactionsController/trControllerOpertaion';
import { getAllTransactionsForPeriodUser } from 'redux/transactionSummaryController/trSummaryOperation';
const Header = () => {
  const user = useSelector(state => state.auth.user.username);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTransactionUser());
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getAllTransactionsForPeriodUser({ month: 10, year: 2022 }));
  // }, []);
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
