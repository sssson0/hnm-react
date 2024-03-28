import React from 'react'
import ProductDDetail from '../ProductDDetail'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({authenticate}) => {
  return (
    authenticate==true?<ProductDDetail/>:<navigate to="/login/"/>
  )
}

export default PrivateRoute;