import { createApi } from "@reduxjs/toolkit/query/react"; 
import { axiosBaseQuery } from "./axiosBaseQuery";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://sphinx-go.vercel.app/api/v1" }),
  tagTypes: ["Hotel", "SpecificHotel"], // تأكد من تعريف الـ tag هنا
  endpoints: (builder) => ({
//Get

    getProfile: builder.query({
      query: () => ({
        url: "/vendor/profile",
        method: "GET",
      }),
    }), 
    //hotel
    getHotels: builder.query({
      query: ({ page, limit, keyword, sort,typeEn  }) => ({
        url: "/hotel",
        method: "GET",
        params: { page, limit, keyword, sort,'type[en]': typeEn },
      }),
      providesTags: ["Hotel"],
    }),
    getSpecificHotel: builder.query({
      query: ({ id }) => ({
        url: `/hotel/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "SpecificHotel", id }],
    }),
    //room
    getHotelRoom: builder.query({
      query: ({ id, page, limit, keyword, sort, typeEn }) => ({
        url: `/rooms/hotel/${id}`,
        method: "GET",
        params: { page, limit, keyword, sort,'type[en]': typeEn },
      }),
    }),
    getRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
    }),
    getSpecificRoom: builder.query({
      query: ({id}) => ({
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

//Delete
    //hotel
    deleteHotel: builder.mutation({
      query: (id) => ({
        url: `/hotel/${id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "Hotel" }]));
        } catch (error) {
          console.error("Failed to delete hotel:", error);
        }
      },
    }),
    deleteCoverImage: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/delete-cover-image`,
        method: "DELETE",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    deleteFacility: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/remove-facility`,
        method: "DELETE",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
   //Room
    deleteRoomImage: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/remove-images`,
        method: "DELETE",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
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
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
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
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
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
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    deleteRoom: builder.mutation({
      query: ({ id}) => ({
        url: `/rooms/${id}/remove-room`,
        method: "DELETE",
       
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
//Add
    //hotel
    addCoverImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/add-cover-image`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    addFacilitie: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/add-facility`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
   //Room
   addRoomImages: builder.mutation({
    query: ({ id, body }) => ({
      url: `/rooms/${id}/upload-images`,
      method: "POST",
      data: body,
    }),
    onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
      try {
        await queryFulfilled;
        dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
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
        dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
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
        dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
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
        dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
      } catch (error) {
        console.error(error);
      }
    },
  }),
//Update
    //hotel
    updatePrimaryImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/update-primary-image`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    updateCoverImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/update-cover-image`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    updateProperties: builder.mutation({
      query: ({ id, data }) => ({
        url: `/hotel/${id}/update-properties`,
        method: "PATCH",
        data,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    updatePolicies: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/update-policies`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        } catch (error) {
          console.error(error);
        }
      },
    }),
    //Room

    updateRoomProperties: builder.mutation({
      query: ({ id, body }) => ({
        url: `/rooms/${id}/update-properties`,
        method: "PATCH",
        data: body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
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
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificRoom", id }]));
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const {
  useGetRoomsQuery,
  useGetHotelsQuery,
  useGetProfileQuery,
  useGetSpecificHotelQuery,
  useGetHotelRoomQuery,
  useGetSpecificRoomQuery,
  useGetReviewRoomQuery,

  useDeleteHotelMutation,
  useDeleteCoverImageMutation,
  useDeleteRoomImageMutation,
  useDeleteFacilityMutation,
  useDeleteViewFacilitiesMutation,
  useDeleteBathRoomFacilitiesMutation,
  useDeleteRoomFacilitiesMutation,
  useDeleteRoomMutation,

  useAddCoverImagesMutation,
  useAddFacilitieMutation,
  useAddRoomImagesMutation,
  useAddRoomViewFacilitiesMutation,
  useAddRoomFacilitiesMutation,
  useAddBathRoomFacilitiesMutation,

  useUpdatePrimaryImagesMutation,
  useUpdateCoverImagesMutation,
  useUpdatePropertiesMutation,
  useUpdatePoliciesMutation,
  useUpdateRoomPropertiesMutation,
  useUpdateRoomImagesMutation
} = postsApi;
