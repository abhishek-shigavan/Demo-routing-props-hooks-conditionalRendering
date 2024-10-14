import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ component }) => {
  const navigate = useNavigate()  
  const status = localStorage.getItem('AuthToken') ? true : false;
    if(!status) {
        navigate('/', {replace: true})
    return null
}

  return <component/>
}

export default AuthGuard;