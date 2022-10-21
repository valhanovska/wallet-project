import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


import { PublicRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isValidTokin } from 'redux/auth/sliceAuth';
import { isToken } from 'redux/auth/selectorsAuth';

const CurrencyExchange = lazy(() =>
import('./CurrencyExchange'))

const HomeTab = lazy(() =>
import('./HomeTab/HomeTab'))

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
  const token = useSelector(isToken);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isValidTokin(token?true:false));
    // eslint-disable-next-line
  }, []);

  return (
    <Suspense fallback={null}>
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
        <Route path="home" element={ <PrivateRoute><HomeTab /></PrivateRoute>} />
        <Route path="diagram" element={<PrivateRoute><StatisticsPage /></PrivateRoute>} />
        <Route path="currency" element={<PrivateRoute><CurrencyExchange /></PrivateRoute>} />
      </Route>
      <Route path="*" element={<Navigate to="/transactions" />} />
    </Routes>
    </Suspense>
  );
};
