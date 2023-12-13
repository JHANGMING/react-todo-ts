import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://todolist-api.hexschool.io`,
  }),
  tagTypes: ['Todos'],
  
  endpoints: (builder) => ({
    apiSignUp: builder.mutation({
      query: (data) => ({
        url: '/users/sign_up',
        method: 'POST',
        body: data
      }),
    }),
    apiSignIn: builder.mutation({
      query: (data) => ({
        url: '/users/sign_in',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Todos'],
    }),
    apiSignOut: builder.mutation({
      query: (token) => ({
        url: '/users/sign_out',
        method: 'POST',
        headers: {
        Authorization: token, 
      },
      }),
      invalidatesTags: ['Todos'],
    }),
    apiCheckout: builder.query({
      query: (token) => ({
        url: '/users/checkout',
        headers: {
        Authorization: token 
      },
      }),
    }),
  }),
});

export const { 
  useApiSignUpMutation,
  useApiSignInMutation,
  useApiCheckoutQuery,
  useApiSignOutMutation
} = authApi;