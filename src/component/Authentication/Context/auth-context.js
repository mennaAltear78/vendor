// context.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext({
  isRequest: false,
  setRequest: () => {},
  isHotelImageDone:[],
  setHotelImageDone: () => {},
});

export const AuthProvider = ({ children }) => {
  //we should but JSON.parse becouse all the value inside localstorage is string 
  const initialRequest = JSON.parse(localStorage.getItem('request')) || false;
  const [isRequest, setRequest] = useState(initialRequest);
  const initialHotelImageDone = localStorage.getItem('HotelImageDone') || [];
  const [isHotelImageDone, setHotelImageDone] = useState(initialHotelImageDone);

  return (
    <AuthContext.Provider value={{ isRequest, setRequest ,isHotelImageDone,setHotelImageDone}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
