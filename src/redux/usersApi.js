import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",

  //   Задаем названия сущностей с которыми работаем. Назвать можем как угодно
  // Потом это название будем использовать в апишке, которая их получает
  tagTypes: ["Users"],

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),

  endpoints: (build) => ({
    getUsers: build.query({
      query: (number = "") => `users/${number}`,

      //   Тут как раз таки и используем заданное название
      // сюда попадет результат вызова апишки и если он будет не пустым, то сформируется вот
      // такой массив
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Users", id })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
    addUser: build.mutation({
      query: (body) => ({
        url: "users",
        method: "POST",
        body,
      }),

      //   здесь же нужно уточнить с какими сущностями мы работали, т.е. какие
      //   сущности создавали
      // Т.е. здесь мы говорим, что после этой операции у нас изменился список юзеров
      // т.е. они больше не валидны, обнови их
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation, useDeleteUserMutation } = usersApi;
