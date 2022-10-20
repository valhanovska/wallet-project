import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getCategories } from '../redux/transactions/operationsTransactions';
import { SelectCategory } from './SelectCategory/SelectCategory';


const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const RegisterPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCategories());
  // }, [dispatch]);

  return (
    
    <Routes>
      <Route path="/" element={<SelectCategory />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/transactions" element={<DashboardPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
    
  );
};
