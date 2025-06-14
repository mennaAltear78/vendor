import { createApi } from "@reduxjs/toolkit/query/react"; 
import { axiosBaseQuery } from "./axiosBaseQuery";

export const commonApi = createApi({
  reducerPath: "commonApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://sphinx-go.vercel.app/api/v1" }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => ({
        url: "/vendor/profile",
        method: "GET",
      }),
      providesTags: ["Profile"],
    }),
  }),
});

export const {
  useGetProfileQuery,
} = commonApi;