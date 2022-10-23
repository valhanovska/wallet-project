import Balance from 'components/Balance/Balance';
import CurrencyExchange from 'components/CurrencyExchange';
import Navigations from 'components/Navigation/Navigation';
import { useIsMobile } from 'hooks/useIsMobile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { getCategories } from 'redux/transactionCategories/operationsTransactions';
import { getTransactionUser } from 'redux/transactionsController/trControllerOpertaion';
import Header from '../../components/Header/Header';
import {
  Div,
  Wrapper,
  Blur,
  Box,
  BoxAsaid,
  WrapperOutlet,
} from './DashboardPage.styled';

const DashboardPage = () => {
  const isTabletOrDesctop = useMediaQuery({ query: '(min-width:768px)' });
  // const isMobile = useMediaQuery({ query: '(max-width:767px)' });
  const isMobile = useIsMobile();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionUser());
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    isTabletOrDesctop &&
      location.pathname === '/transactions/currency' &&
      navigate('/transactions/home');
  }, [isTabletOrDesctop, location, navigate]);

  return (
    <>
      <Header />
      <Div>
        <Blur>
          <Box>
            <Wrapper>
              <BoxAsaid>
                <Navigations />
                {/* {(isMobile && location.pathname === '/transactions/diagram') ||
                (isMobile && location.pathname === '/transactions/currency') ||
                (isMobile &&
                  location.pathname === '/transactions/home') ? null : (
                  <Balance />
                )} */}
                {!isMobile && <Balance />}
              </BoxAsaid>
              {!isMobile && <CurrencyExchange />}
            </Wrapper>
            <WrapperOutlet>
              <Outlet />
            </WrapperOutlet>
          </Box>
        </Blur>
      </Div>
    </>
  );
};

export default DashboardPage;
