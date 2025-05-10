import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: axiosBaseQuery({ baseUrl: "https://sphinx-go.vercel.app/api/v1" }),
  endpoints: (builder) => ({
    // Query to get rooms
    getRooms: builder.query({
      query: () => ({
        url: "/rooms",
        method: "GET",
      }),
    }),

    // Query to get hotels with pagination
    getHotels: builder.query({
      query: ({ page, limit, keyword,sort }) => ({
        url: "/hotel",
        method: "GET",
        params: { page, limit, keyword,sort },
      }),
      providesTags: ["Hotel"], // Important for cache invalidation this
    }),
    getProfile: builder.query({
      query: () => ({
        url: "/vendor/profile",
        method: "GET",
       
      }),
 
    }),
    getSpecificHotel: builder.query({
      query: ({ id }) => ({
        url: `/hotel/${id}`,
        method: "GET",
      }),
      providesTags: (result, error, { id }) => [{ type: "SpecificHotel", id }],
    }),
    //
    getHotelRoom: builder.query({
      query: ({ id }) => ({
        url: `/rooms/hotel/${id}`, // Corrected template literal
        method: "GET",
      }),
    }),
    getSpecificRoom: builder.query({
      query: () => ({
        url: `/rooms/67c25d0df35ea580a63f2d4d`,
        method: "GET",
      }),

      
      providesTags: (result, error) => [{ type: "SpecificRoom" }],
    }),
    // Mutation to add a post
    // addPost: builder.mutation({
    //   query: (newPost) => ({
    //     url: "/posts",
    //     method: "POST",
    //     data: newPost,
    //   }),
    // }),

    // // Mutation to update a post
    // updatePost: builder.mutation({
    //   query: ({ id, updatedPost }) => ({
    //     url: `/posts/${id}`,
    //     method: "PUT",
    //     data: updatedPost,
    //   }),
    // }),

    // Mutation to delete a hotel
    deleteHotel: builder.mutation({
      query: (id) => ({
        url: `/hotel/${id}`,
        method: "DELETE",
      }),
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          // Wait for the mutation to complete
          await queryFulfilled;

          // Invalidate the 'getHotels' query to refetch the list of hotels
          dispatch(postsApi.util.invalidateTags([{ type: "Hotel" }])); //this should be like
          console.log("done");
        } catch (error) {
          console.error("Failed to delete hotel:", error);
        }
      },
    }),
    deleteCoverImage: builder.mutation({
      query: ({id,body}) => ({
        url: `/hotel/${id}/delete-cover-image`,
        method: "DELETE",
        data:body
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
          console.log("cover image deleted successfully.");
        } catch (error) {
          console.error( error);
        
        }
      },
    }),

  // Mutation to Add a hotel
  addCoverImages: builder.mutation({
    query: ({ id, body }) => ({
      url: `/hotel/${id}/add-cover-image`,
      method: "PATCH",
      data: body,
    
    } ),
    onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
      try {
        await queryFulfilled;
        dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        console.log("Primary images updated successfully.");
      } catch (error) {
        console.error( error);
      
      }
    },
  }),
  addFacilitie: builder.mutation({
    query: ({ id, body }) => ({
      url: `/hotel/${id}/add-facility`,
      method: "PATCH",
      data: body,
    } ),
    onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
      try {
        await queryFulfilled;
        dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
        console.log("Facility added successfully.");
      } catch (error) {
        console.error( error);
      
      }
    },
  }),


  // Mutation to Update a hotel
    updatePrimaryImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/update-primary-image`,
        method: "PATCH",
        data: body,
      
      } ),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
          console.log("Primary images updated successfully.");
        } catch (error) {
          console.error( error);
        
        }
      },
    }),
    updateCoverImages: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/update-cover-image`,
        method: "PATCH",
        data:body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
          console.log("Primary images updated successfully.");
        } catch (error) {
          console.error( error);
        }
      },
    }),
    updateProperties: builder.mutation({
      query: ({ id, data }) => ({
        url: `/hotel/${id}/update-properties`,
        method: "PATCH",
        data
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
          console.log("Primary images updated successfully.");
        } catch (error) {
          console.error( error);
        }
      },
    }),
    
    updatePolicies: builder.mutation({
      query: ({ id, body }) => ({
        url: `/hotel/${id}/update-policies`,
        method: "PATCH",
        data:body,
      }),
      onQueryStarted: async ({ id }, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(postsApi.util.invalidateTags([{ type: "SpecificHotel", id }]));
          console.log("Primary images updated successfully.");
        } catch (error) {
          console.error( error);
         
          
        }
      },
    }),

  }),
});

// Export hooks for queries and mutations
export const {
  useGetRoomsQuery,
  useGetHotelsQuery,  
  useGetProfileQuery,
  useGetSpecificHotelQuery,
  useGetHotelRoomQuery,
  useGetSpecificRoomQuery,

  useDeleteHotelMutation,
  useDeleteCoverImageMutation,

  useAddCoverImagesMutation,
  useAddFacilitieMutation,
  
  useUpdatePrimaryImagesMutation,
  useUpdateCoverImagesMutation,
  useUpdatePropertiesMutation,
  useUpdatePoliciesMutation
} = postsApi;
