//import { useAuth } from 'hooks';
// import { Navigate } from 'react-router-dom';
// import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';
/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

// export const RestrictedRoute = ({
//   component: Component,
//   redirectTo = '/transactions',
// }) => {
//   const isLoggedIn = selectIsLoggedIn();
//   return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
// };

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/transactions/home" />;
};
