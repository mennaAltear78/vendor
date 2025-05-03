
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/axiosInstance"
import CookiesServices from "../../../services/CookiesServices";

const AuthContext1 = React.createContext({
  token: "",
  email: "",
  isloaggedIn: false,
  formData: {},
  login: (token) => {},
  logout: () => {},
  refreshToken: () => {},
  sinUpFormData: () => {},
  setToken:(token)=>{}
});

export const AuthContext1Provider = (props) => {
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = useState(intialToken);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({});

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    // console.log("loginHandler executed", token, email);
    setToken(token);
    setEmail(email);
    console.log(token);
    // console.log("jwt",CookiesServices.get("jwt"));
    // console.log("refresh_token",CookiesServices.get("refresh_token"));
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logoutHandler = async () => {
    try {
      const res=await api.get("vendor/logout",{
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      console.log(res);
      
      localStorage.removeItem("token");
      // navigate("/")
      window.location.href = "/"; // إعادة التوجيه بعد تسجيل الخروج
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  
  const sinUpFormDataHandeler = (newData) => {
    setFormData((prev) => {
      if (
        !newData ||
        typeof newData !== "object" ||
        Object.keys(newData).length === 0
      ) {
        return prev; 
      }
      const updatedData = { ...prev, ...newData };
      return updatedData;
    });
  };
const setHandelerToken=(newtoken)=>{
  setToken(newtoken)
  localStorage.setItem("token",newtoken)
}
  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: userIsLoggedIn,
    formData: formData,
    login: loginHandler,
    logout: logoutHandler,
    sinUpFormData: sinUpFormDataHandeler,
    setToken:setHandelerToken
  };

  return (
    <AuthContext1.Provider value={contextValue}>
      {props.children}
    </AuthContext1.Provider>
  );
};
export default AuthContext1;
