import { configureStore } from "@reduxjs/toolkit";
import { reducer as usersReducer } from "../features/usersList/slice/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
