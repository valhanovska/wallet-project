// import { Navigate } from 'react-router-dom';
// import { useAuth } from 'hooks';

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

// export const PrivateRoute = ({
//   component: Component,
//   redirectTo = '/login',
// }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   const shouldRedirect = !isLoggedIn && !isRefreshing;
//   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
// };

import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectorsAuth';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
