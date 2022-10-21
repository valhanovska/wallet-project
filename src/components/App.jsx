import { lazy } from 'react';
//import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CurrencyExchange } from './CurrencyExchange';
import HomeTab from './HomeTab/HomeTab';
//import { getCategories } from '../redux/transactionCategories/operationsTransactions.js';
//import ModalAddTransaction from './ModalAddTransaction';
//import { getTransactionUser } from 'redux/transactionsController/trControllerOpertaion';
//import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';
import { PublicRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const RegisterPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const StatisticsPage = lazy(() =>
  import('pages/StatisticsPage/StatisticsPage')
);

export const App = () => {
  //const isLoggedIn = useSelector(selectIsLoggedIn);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCategories());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getTransactionUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />

      <Route
        path="/transactions"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      >
        <Route path="home" element={<HomeTab />} />
        {/* <Route path='diagram' element={<DiagramTab/>}/> */}
        <Route path="diagram" element={<StatisticsPage />} />
        <Route path="currency" element={<CurrencyExchange />} />
      </Route>
      <Route path="*" element={<DashboardPage />} />
    </Routes>
  );
};
