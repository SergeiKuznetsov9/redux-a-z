import {
  COUNTER_PLUS,
  COUNTER_MINUS,
  COUNTER_RESET,
  COUNTER_INIT,
  THEME_CHANGE,
} from "./types.js";

export const plusAction = () => ({ type: COUNTER_PLUS });
export const minusAction = () => ({ type: COUNTER_MINUS });
export const resetAction = () => ({ type: COUNTER_RESET });
export const initAction = () => ({ type: COUNTER_INIT });

export const changeThemeAction = (theme) => ({
  type: THEME_CHANGE,
  payload: theme,
});
