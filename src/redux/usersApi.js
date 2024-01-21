import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (build) => ({
    getUsers: build.query({
        // Сюда можно передать какой-нибудь параметр
      query: (number = '') => `users/${number}`,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
