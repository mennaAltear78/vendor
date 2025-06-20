import { createApi } from "@reduxjs/toolkit/query/react"; 
import { axiosBaseQuery } from "./axiosBaseQuery";

export const TourApi = createApi({
  reducerPath: "TourApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://sphinx-go.vercel.app/api/v1" }),
  tagTypes: ["CreateTour"],
  endpoints: (builder) => ({
   createTour: builder.mutation({
        query: ({body}) => ({
           url: "/tours",
           method: "POST",
           data: body
        }),
 onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
  try {
    await queryFulfilled;
    dispatch(TourApi.util.invalidateTags([{ type: "GetTours" }]));
  } catch (err) {
    console.error(err);
  }
}
      }),
        deleteTour: builder.mutation({
        query: ({ id }) => ({
           url: `/tours/${id}`,
           method: "DELETE",
        }),
        onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
          try {
            await queryFulfilled;
            dispatch(TourApi.util.invalidateTags([{ type: "GetTours", id }]));
          } catch (err) {
            console.error(err);
          }
        },
      }),
         ToursCoverImages: builder.mutation({
        query: ({id, body }) => ({
           url: `/tours/${id}/upload-cover-images`,
           method: "POST",
           data: body,
        }),
        onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
          try {
            await queryFulfilled;
            dispatch(TourApi.util.invalidateTags([{ type: "GetTours", id }]));
          } catch (err) {
            console.error(err);
          }
        },
      }),
        ToursPrimaryImages: builder.mutation({
        query: ({ id,body }) => ({
           url: `/tourstours/${id}/upload-primary-image`,
           method: "POST",
           data: body,
        }),
        onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
          try {
            await queryFulfilled;
            dispatch(TourApi.util.invalidateTags([{ type: "GetTours", id }]));
          } catch (err) {
            console.error(err);
          }
        },
      }),
      GetTour: builder.query({
        query:() => ({
           url: "/tours",
           method: "GET",
        }),
         providesTags: ["GetTours"],
      }),
  }),
     
});

export const {
  useCreateTourMutation,
  useDeleteTourMutation,
  useToursCoverImagesMutation,
  useToursPrimaryImagesMutation,
  useGetTourQuery
} = TourApi;