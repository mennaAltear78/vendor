// // context.js
// import React, { createContext } from 'react';
// import usePersistedState from '../../../Hooks/usePersistedState';

// export const AuthContext = createContext({
//   isRequest: false,
//   HotelInfo: {},
//   RoomInfo: {},
//   RoomId: {},
//   specificHotelId: {},
//   specificRoomId: {},
//   isHotelImageDone: [],
//   setRequest: () => {},
//   setHotelImageDone: () => {},
//   setHotelinfo: () => {},
//   setRoominfo: () => {},
//   SetRoomId: () => {},
//   setspecificHotelId: () => {},
//   setspecificRoomId: () => {},
// });

// export const AuthProvider = ({ children }) => {
//   const [isRequest, setRequest] = usePersistedState('request', false);
//   const [isHotelImageDone, setHotelImageDone] = usePersistedState('HotelImageDone', []);
//   const [HotelInfo, setHotelinfo] = usePersistedState('HotelInfo', {});
//   const [RoomInfo, setRoominfo] = usePersistedState('RoomInfo', {});
//   const [RoomId, SetRoomId] = usePersistedState('RoomId', {});
//   const [specificHotelId, setspecificHotelId] = usePersistedState('specificHotelId', {});
//   const [specificRoomId, setspecificRoomId] = usePersistedState('specificRoomId', {});

//   return (
//     <AuthContext.Provider
//       value={{
//         specificRoomId,
//         setspecificRoomId,
//         specificHotelId,
//         setspecificHotelId,
//         SetRoomId,
//         RoomId,
//         RoomInfo,
//         setRoominfo,
//         HotelInfo,
//         setHotelinfo,
//         isRequest,
//         setRequest,
//         isHotelImageDone,
//         setHotelImageDone,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

import { createContext } from 'react';
import { authContextSchema } from '../../../schemas/authContextSchema';
import usePersistedState from '../../../Hooks/usePersistedState';

export const AuthContext = createContext(null);  // تعريف الـ Context

export const AuthProvider = ({ children }) => {
  const [isRequest, setRequest] = usePersistedState('request', false);
  const [isHotelImageDone, setHotelImageDone] = usePersistedState('HotelImageDone', []);
  const [HotelInfo, setHotelinfo] = usePersistedState('HotelInfo', {});
  const [RoomInfo, setRoominfo] = usePersistedState('RoomInfo', {});
  const [RoomId, SetRoomId] = usePersistedState('RoomId', '');
  const [specificHotelId, setspecificHotelId] = usePersistedState('specificHotelId', '');
  const [specificRoomId, setspecificRoomId] = usePersistedState('specificRoomId', '');
  const [notificationNumber, setnotificationNumber] = usePersistedState('notificationNumber', 0);
  const [serviceType,SetServiceType]=usePersistedState("seviceType","")

  const contextValue = {
    serviceType,
    SetServiceType,
    specificRoomId,
    setspecificRoomId,
    specificHotelId,
    setspecificHotelId,
    SetRoomId,
    RoomId,
    RoomInfo,
    setRoominfo,
    HotelInfo,
    setHotelinfo,
    isRequest,
    setRequest,
    isHotelImageDone,
    setHotelImageDone,
    notificationNumber,
    setnotificationNumber
  };

  if (process.env.NODE_ENV === 'development') {
    try {
      authContextSchema.parse(contextValue);
    } catch (error) {
      console.error('AuthContext validation error:', error.errors);
    }
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};




