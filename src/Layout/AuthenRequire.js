import React, { useContext, useEffect } from 'react'
import AuthContext1 from './../component/Authentication/Context/Mian-Page-Context'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'

function AuthenRequire() {
    const ctx = useContext(AuthContext1);
    // const location = useLocation();
    const navigate = useNavigate();
  //forbedin user from go back to account after logging out 
    useEffect(() => {
      if (!ctx.token) {
        navigate('/', { replace: true }); // استبدال الصفحة الحالية بحيث لا يمكن الرجوع إليها
      }
    }, [ctx.token, navigate]);
  
    return ctx.token ? <Outlet /> : <Navigate to="/" replace />;
  }

export default AuthenRequire
