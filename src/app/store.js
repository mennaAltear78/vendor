import { configureStore } from "@reduxjs/toolkit";
import { hotelApi } from "../services/HotelApi";
import { roomApi } from "../services/RoomApi";
import { commonApi } from "../services/commanApi";

export const store = configureStore({
  reducer: {
    [hotelApi.reducerPath]: hotelApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [commonApi.reducerPath]: commonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      hotelApi.middleware,
      roomApi.middleware,
      commonApi.middleware
    ),
});