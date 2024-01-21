import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),

  endpoints: (build) => ({
    getUsers: build.query({
      query: (number = '') => `users/${number}`,
    }),
    addUser: build.mutation({
        query: (body) => ({
            url: 'users',
            method: 'POST',
            body,
        })
    })
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = usersApi;
