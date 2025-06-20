import { configureStore } from "@reduxjs/toolkit";
import { hotelApi } from "../services/HotelApi";
import { roomApi } from "../services/RoomApi";
import { commonApi } from "../services/commanApi";
import { TourApi } from "../services/ToursApi";

export const store = configureStore({
  reducer: {
    [hotelApi.reducerPath]: hotelApi.reducer,
    [roomApi.reducerPath]: roomApi.reducer,
    [commonApi.reducerPath]: commonApi.reducer,
    [TourApi.reducerPath]: TourApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      hotelApi.middleware,
      roomApi.middleware,
      commonApi.middleware,
      TourApi.middleware

    ),
});