import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AppContext from '../store/app-context';

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
