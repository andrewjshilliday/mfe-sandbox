import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useLoggedIn } from 'login/loginUtils';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const loggedIn = useLoggedIn();

  return loggedIn ? children : <Navigate to='/login' state={{ from: location }} />;
};

export default ProtectedRoute;
