import React from 'react'
import { useLocation,Navigate,Outlet } from 'react-router-dom'
import useAuth from '../hook/UseAuth'

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();

  const hasRequiredRole = auth?.roles?.some((role) => allowedRoles?.includes((role)));

  return hasRequiredRole ? <Outlet /> : <Navigate to="auth/signin" state={{ from: location }} replace />;
};

export default RequireAuth