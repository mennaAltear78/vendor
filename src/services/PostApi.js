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
        url: `/hotel/${id}`, // Corrected template literal
        method: "GET",
      }),
    }),
    //
    getHotelRoom: builder.query({
      query: ({ id }) => ({
        url: `/rooms/hotel/${id}`, // Corrected template literal
        method: "GET",
      }),
    }),
    // Mutation to add a post
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        data: newPost,
      }),
    }),

    // Mutation to update a post
    updatePost: builder.mutation({
      query: ({ id, updatedPost }) => ({
        url: `/posts/${id}`,
        method: "PUT",
        data: updatedPost,
      }),
    }),

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
  }),
});

// Export hooks for queries and mutations
export const {
  useGetRoomsQuery,
  useGetHotelsQuery,
  useAddPostMutation,
  useUpdatePostMutation,
  useDeleteHotelMutation,
  useGetProfileQuery,
  useGetSpecificHotelQuery,
  useGetHotelRoomQuery
} = postsApi;
