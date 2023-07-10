import React, { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isLoggedIn =  JSON.parse(localStorage.getItem('userLoggedIn'))
    const location = useLocation()
    
    return isLoggedIn ? (children)
        : (
            <Navigate to='/login' state={{ from: location }} />
        )
};

export default PrivateRoute;