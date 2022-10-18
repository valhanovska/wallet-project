import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const DashboardPage = lazy(() =>
  import('../pages/DashboardPage/DashboardPage')
);
const RegisterPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/transactions" element={<DashboardPage />} />
    </Routes>
  );
};
