// context.js
import React, { createContext, useState } from 'react';
import usePersistedState  from '../../../Hooks/usePersistedState';
const AuthContext = createContext({
  isRequest: false,
  HotelInfo: {},
  RoomInfo: {},
  HotelId: {},
  RoomId:{},
  IdSpesificHotel:{},
  IdSpesificRoom:{},
  isHotelImageDone: [],
  setRequest: () => {},
  setHotelImageDone: () => {},
  setHotelinfo: () => {},
  setRoominfo: () => {},
  SetHotelId:()=>{},
  SetRoomId:()=>{},
  setIdSpesificHotel:()=>{},
  setIdSpesificRoom:()=>{}
});


export const AuthProvider = ({ children }) => {
  const [isRequest, setRequest] = usePersistedState('request', false);
  const [isHotelImageDone, setHotelImageDone] = usePersistedState('HotelImageDone', []);
  const [HotelInfo, setHotelinfo] = usePersistedState('HotelInfo', {});
  const [RoomInfo, setRoominfo] = usePersistedState('RoomInfo', {});
  const [HotelId,SetHotelId]=usePersistedState('HotelId',{})
  const [RoomId,SetRoomId]=usePersistedState('RoomId',{})
  const [IdSpesificHotel,setIdSpesificHotel]=usePersistedState('IdSpesificHotel',{})
  const [IdSpesificRoom,setIdSpesificRoom]=usePersistedState('IdSpesificRoom',{})

  return (
    <AuthContext.Provider
      value={{
        IdSpesificRoom,
        setIdSpesificRoom,
        IdSpesificHotel,
        setIdSpesificHotel,
        SetRoomId,
        RoomId,
        HotelId,
        SetHotelId,
        RoomInfo,
        setRoominfo,
        HotelInfo,
        setHotelinfo,
        isRequest,
        setRequest,
        isHotelImageDone,
        setHotelImageDone
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
























// // context.js
// import React, { createContext, useState } from 'react';

// const AuthContext = createContext({
//   isRequest: false,  
//   HotelInfo:{},
//   RoomInfo:{},
//   isHotelImageDone:[],
//   setRequest: () => {},
//   setHotelImageDone: () => {},
//   setHotelinfo:()=>{},
//   setRoominfo:()=>{}
// });

// export const AuthProvider = ({ children }) => {
//   //we should but JSON.parse becouse all the value inside localstorage is string 
//   const initialRequest = JSON.parse(localStorage.getItem('request')) || false;
//   const [isRequest, setRequest] = useState(initialRequest);
//   const initialHotelImageDone = localStorage.getItem('HotelImageDone') || [];
//   const [isHotelImageDone, setHotelImageDone] = useState(initialHotelImageDone);
//   const initialHotelInfo = JSON.parse(localStorage.getItem('HotelInfo')) || {};
//   const [HotelInfo ,setHotelInfo]=useState(initialHotelInfo)
//   const initialRoomInfo = JSON.parse(localStorage.getItem('RoomInfo')) || {};
//   const [RoomInfo ,setRoomInfo]=useState(initialRoomInfo)
//   const setRoominfo = (newRoomInfo) => {
//     setRoomInfo(newRoomInfo);
//     localStorage.setItem('RoomInfo',JSON.stringify(newRoomInfo))
//   }
//   const setHotelinfo = (newHotelInfo) => {
//     setHotelInfo(newHotelInfo);
//     localStorage.setItem('HotelInfo',JSON.stringify(newHotelInfo))
//   };
//   return (
//     <AuthContext.Provider value={{RoomInfo,setRoominfo ,HotelInfo,setHotelinfo,isRequest, setRequest ,isHotelImageDone,setHotelImageDone}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;
