import { createApi } from "@reduxjs/toolkit/query/react"; 
import { axiosBaseQuery } from "./axiosBaseQuery";

export const roomApi = createApi({
  reducerPath: "roomApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://sphinx-go.vercel.app/api/v1" }),
  tagTypes: ["Room", "SpecificRoom"],
  endpoints: (builder) => ({
    // Get endpoints
    getHotelRoom: builder.query({
      query: ({ id, page, limit, keyword, sort, typeEn }) => ({
        url: `/rooms/hotel/${id}`,
        method: "GET",
        params: { page, limit, keyword, sort, 'type[en]': typeEn },
      }),
      providesTags: ["Room"],
    }),
    getRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
      providesTags: ["Room"],
    }),
    getSpecificRoom: builder.query({
      query: ({ id }) => ({
        url: `/rooms/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "SpecificRoom", id }],
    }),
    getReviewRoom: builder.query({
      query: ({ id }) => ({
        url: `/users/hotels/reviews/${id}`,
        method: "GET",
      }),
    }),

    // Delete endpoints
    deleteRoomImage: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/remove-images`,
        method: "DELETE",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    deleteViewFacilities: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/remove-views`,
        method: "DELETE",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    deleteRoomFacilities: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/remove-facilities`,
        method: "DELETE",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    deleteBathRoomFacilities: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/remove-bathroomFacilities`,
        method: "DELETE",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    deleteRoom: builder.mutation({
      query: ({ id }) => ({
        url: `/rooms/${id}/remove-room`,
        method: "DELETE",
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    // Add endpoints
    addRoomImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/upload-images`,
        method: "POST",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    addRoomViewFacilities: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/add-views`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    addRoomFacilities: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/add-facilities`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    addBathRoomFacilities: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/add-bathroomFacilities`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    // Update endpoints
    updateRoomProperties: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/update-properties`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    updateRoomImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/update-images`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(roomApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetHotelRoomQuery,
  useGetSpecificRoomQuery,
  useGetReviewRoomQuery,
  useDeleteRoomImageMutation,
  useDeleteViewFacilitiesMutation,
  useDeleteBathRoomFacilitiesMutation,
  useDeleteRoomFacilitiesMutation,
  useDeleteRoomMutation,
  useAddRoomImagesMutation,
  useAddRoomViewFacilitiesMutation,
  useAddRoomFacilitiesMutation,
  useAddBathRoomFacilitiesMutation,
  useUpdateRoomPropertiesMutation,
  useUpdateRoomImagesMutation,
} = roomApi;