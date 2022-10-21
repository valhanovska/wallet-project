import Balance from 'components/Balance/Balance';
import { CurrencyExchange } from 'components/CurrencyExchange';
import Loader from 'components/Loader/Loader';
import Navigations from 'components/Navigation/Navigation';
import { Suspense, useEffect } from 'react';
// import StatisticsPage from 'pages/StatisticsPage/StatisticsPage';
import { useMediaQuery } from 'react-responsive';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { Div, Wrapper, Blur } from './DashboardPage.styled';

const DashboardPage = () => {
  const isTabletOrDesctop = useMediaQuery({ query: '(min-width:768px)' });
  const isMobile = useMediaQuery({ query: '(max-width:768px)' });
  console.log(isTabletOrDesctop);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    isTabletOrDesctop &&
      location.pathname === '/transactions/currency' &&
      navigate('/transactions/home');
  }, [isTabletOrDesctop, location, navigate]);
  return (
    <Div>
      <Blur>
        <Header />
        <Wrapper>
          <div>
            <Navigations />
            {(isMobile && location.pathname === '/transactions/diagram') ||
            (isMobile &&
              location.pathname === '/transactions/currency') ? null : (
              <Balance />
            )}
          </div>
          {isTabletOrDesctop && <CurrencyExchange />}
        </Wrapper>
        <Suspense fallback={<Loader />}>
          <Outlet /> 
        </Suspense>
      </Blur>
    </Div>
  );
};

export default DashboardPage;
