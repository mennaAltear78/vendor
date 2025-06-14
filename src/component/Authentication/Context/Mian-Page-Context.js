// import React, { useEffect, useState } from "react";
// import api from "../../../services/axiosInstance"
// import usePersistedState from "../../../Hooks/usePersistedState";

// const AuthContext1 = React.createContext({
//   token: "",
//   email: "",
//   isloaggedIn: false,
//   formData: {},
//   login: (token) => {},
//   logout: () => {},
//   refreshToken: () => {},
//   sinUpFormData: () => {},
//   setToken:(token)=>{}
// });

// export const AuthContext1Provider = (props) => {
//   const intialToken = localStorage.getItem("token");
//   const [token, setToken] = useState(intialToken);
//   const [email, setEmail] = useState("");
//   const [formData,setFormData]=usePersistedState('SinInForm',{})
  
  

//   const userIsLoggedIn = !!token;

//   const loginHandler = (token, email) => {
//     setToken(token);
//     setEmail(email);
//     localStorage.setItem("token", token);
//     localStorage.setItem("email", email);
//   };

//   const logoutHandler = async () => {
//     try {
//       const res=await api.get("vendor/logout",{
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//       });
//       console.log(res);
//       localStorage.removeItem("token");
//       window.location.href = "/"; // إعادة التوجيه بعد تسجيل الخروج
//     } catch (error) {
//       console.error("Error logging out:", error);
//     }
//   };
  
//   const sinUpFormDataHandeler = (newData) => {
//     setFormData((prev) => {
//       if (
//         !newData ||
//         typeof newData !== "object" ||
//         Object.keys(newData).length === 0
//       ) {
//         return prev; 
//       }
//       const updatedData = { ...prev, ...newData };
//       return updatedData;
//     });

//   };
// const setHandelerToken=(newtoken)=>{
//   setToken(newtoken)
//   localStorage.setItem("token",newtoken)
// }
//   const contextValue = {
//     token: token,
//     email: email,
//     isLoggedIn: userIsLoggedIn,
//     formData: formData,
//     login: loginHandler,
//     logout: logoutHandler,
//     sinUpFormData: sinUpFormDataHandeler,
//     setToken:setHandelerToken
//   };

//   return (
//     <AuthContext1.Provider value={contextValue}>
//       {props.children}
//     </AuthContext1.Provider>
//   );
// };
// export default AuthContext1;

import React, {  useState } from "react";
import api from "../../../services/axiosInstance";
import usePersistedState from "../../../Hooks/usePersistedState";
import { authContext1Schema } from "../../../schemas/authContext1Schema";

const AuthContext1 = React.createContext(null);

export const AuthContext1Provider = (props) => {
  const intialToken = localStorage.getItem("token");
  const [token, setToken] = useState(intialToken);
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [formData, setFormData] = usePersistedState("SinInForm", {});

  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logoutHandler = async () => {
    try {
      const res = await api.get("vendor/logout", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      console.log(res);

      localStorage.removeItem("token");
      localStorage.removeItem("email");

      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const sinUpFormDataHandler = (newData) => {
    setFormData((prev) => {
      if (!newData || typeof newData !== "object" || Object.keys(newData).length === 0) {
        return prev;
      }
      return { ...prev, ...newData };
    });
  };

  const setHandlerToken = (newtoken) => {
    setToken(newtoken);
    localStorage.setItem("token", newtoken);
  };

  const contextValue = {
    token,
    email,
    isLoggedIn: userIsLoggedIn,
    formData,
    login: loginHandler,
    logout: logoutHandler,
    sinUpFormData: sinUpFormDataHandler,
    setToken: setHandlerToken
    
  };

  if (process.env.NODE_ENV === "development") {
    try {
      authContext1Schema.parse(contextValue);
    } catch (error) {
      console.error("AuthContext1 validation error:", error.errors);
    }
  }

  return (
    <AuthContext1.Provider value={contextValue}>
      {props.children}
    </AuthContext1.Provider>
  );
};

export default AuthContext1;
