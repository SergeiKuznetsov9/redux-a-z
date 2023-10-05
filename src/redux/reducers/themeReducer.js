import { THEME_CHANGE } from "../types.js";

const initialState = { theme: "dark" };

export function themeReducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case THEME_CHANGE:
      newState.theme = action.payload;
      return newState;

    default:
      return state;
  }
}
