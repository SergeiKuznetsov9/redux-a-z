import { configureStore } from "@reduxjs/toolkit";
import { reducer as counterReducer } from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
