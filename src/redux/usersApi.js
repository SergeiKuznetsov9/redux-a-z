import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Создаем апишку:
export const usersApi = createApi({
  // то, как это будет отображаться в общем сторе
  reducerPath: "usersApi",

  // Базовый запрос. Здесь указываем базовыцй УРЛ, который в дальнейшем
  // будем расширять до всех необходимых эндпоинтов
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  // Ну а здесь описываем ендпоинты. Технология сама построит запросы
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => "users",
    }),
  }),
});

// Теперь мы можем получить хуки, используя которые, мы будем получать данные с сервера:

export const { useGetUsersQuery } = usersApi;

// Этого достаточно, чтобы начать работать с RTK Query
