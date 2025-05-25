import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the Post interface to type the API response
export interface Post {
  id: number;
  title: string;
}

export const apiSlice = createApi({
  reducerPath: "api", // key in the Redux store
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostsQuery, useAddPostMutation } = apiSlice;
