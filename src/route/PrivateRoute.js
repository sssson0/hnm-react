import React from 'react'
import ProductDDetail from '../ProductDDetail'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const PrivateRoute = ({ authenticate }) => {
    const location = useLocation();
    
    return authenticate ? (
      <ProductDDetail />
    ) : (
      <Navigate to="/login" replace state={{ to: location }} />
    );
  };

export default PrivateRoute;