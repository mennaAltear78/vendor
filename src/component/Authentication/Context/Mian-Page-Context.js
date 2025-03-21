import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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
  const navigate = useNavigate();
  const [token, setToken] = useState(intialToken);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({});

  const userIsLoggedIn = !!token;
  useEffect(() => {
    console.log("Token updated:", token);
  }, [token]); // سيتم تشغيل هذا الكود عند تحديث token
  
  const loginHandler = (token, email) => {
    console.log("loginHandler executed", token, email);
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const refreshTokenHandeler = async () => {
    try {
      const response = await axios.get(
        "https://sphinx-go.vercel.app/api/v1/vendor/refresh-token",
        {
          withCredentials: true,
        }
      );
      setToken(response.data.access_token);
      console.log(response.data);
      console.log("Token rfrsesh:", response.data.access_token);
      localStorage.setItem("token", response.data.access_token);
      return response.data.access_token;
    } catch (error) {
      console.error("Error refreshing token:", error);
      logoutHandler();
      return null;
    }
   
  };

  const logoutHandler = async () => {
    try {
      // const response = await axiosInstance(token, refreshTokenHandeler).get(
      //   "/logout"
      // );
      const res = await axios.get("https://sphinx-go.vercel.app/api/v1/vendor/logout", {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // console.log(response.data);
      setToken(null);
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error.message);
      console.log("Token logout:", token);
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
    refreshToken: refreshTokenHandeler,
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
