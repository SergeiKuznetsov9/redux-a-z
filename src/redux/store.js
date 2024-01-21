import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./usersApi";

export const store = configureStore({
  reducer: {
    // Название редьюсера получим из usersApi, из него же заберем редьюсер
    [usersApi.reducerPath]: usersApi.reducer,
  },
  // Здесь нужно добавить мидлвары, это обязательно
  // В данном случае getDefaultMiddleware() вернет пустой массив, который будет
  // объединен с массивом миддлваров, которые создаются  goodsApi
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware),
});
