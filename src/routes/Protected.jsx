import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import SignIn from '../pages/SignIn';

function Protected() {
    const token = localStorage.getItem("token");

    return  token ? <Outlet/> : <Navigate to="/signin" />;
  
}

export default Protected