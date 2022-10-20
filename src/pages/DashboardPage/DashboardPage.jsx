// import Header from "components/Header/Header";

import { CurrencyExchange } from 'components/CurrencyExchange';
import Navigations from 'components/Navigation/Navigation';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

const DashboardPage = () => {
  const isTabletOrDesctop = useMediaQuery({ query: '(min-width:768px)' });
  return (
    <>
      <Header />
      <Navigations />
      <Outlet />
      {isTabletOrDesctop && <CurrencyExchange />}
    </>
  );
};

export default DashboardPage;
