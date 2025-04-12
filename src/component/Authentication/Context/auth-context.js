// context.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  isRequest: false,  
  HotelInfo:{},
  isHotelImageDone:[],
  setRequest: () => {},
  setHotelImageDone: () => {},
  setHotelinfo:()=>{}

});

export const AuthProvider = ({ children }) => {
  //we should but JSON.parse becouse all the value inside localstorage is string 
  const initialRequest = JSON.parse(localStorage.getItem('request')) || false;
  const [isRequest, setRequest] = useState(initialRequest);
  const initialHotelImageDone = localStorage.getItem('HotelImageDone') || [];
  const [isHotelImageDone, setHotelImageDone] = useState(initialHotelImageDone);
  const initialHotelInfo = JSON.parse(localStorage.getItem('HotelInfo')) || {};
  const [HotelInfo ,setHotelInfo]=useState(initialHotelInfo)
  const setHotelinfo = (newHotelInfo) => {
    setHotelInfo(newHotelInfo);
    localStorage.setItem('HotelInfo',JSON.stringify(newHotelInfo))
  };
  return (
    <AuthContext.Provider value={{ HotelInfo,setHotelinfo,isRequest, setRequest ,isHotelImageDone,setHotelImageDone}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
