import { createStore } from "redux";
import { rootReducer } from "./redux/reducers/rootReducer.js";
import {
  plusAction,
  minusAction,
  resetAction,
  initAction,
  changeThemeAction,
} from "./redux/actions.js";
import "./style.css";
// npx webpack serve --config webpack.dev.config.js

const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");
const darkThemeBtn = document.getElementById("darkTheme");
const lightThemeBtn = document.getElementById("lightTheme");

const store = createStore(rootReducer);

store.subscribe(() => {
  const state = store.getState();
  const oldTheme = state.theme.theme === "dark" ? "light" : "dark";
  const newTheme = state.theme.theme;
  counter.textContent = state.counter.count.toString();
  document.body.classList.add(newTheme);
  document.body.classList.remove(oldTheme);
});

store.dispatch(initAction());

plusBtn.addEventListener("click", () => {
  store.dispatch(plusAction());
});

minusBtn.addEventListener("click", () => {
  store.dispatch(minusAction());
});

resetBtn.addEventListener("click", () => {
  store.dispatch(resetAction());
});

darkThemeBtn.addEventListener("click", () => {
  store.dispatch(changeThemeAction("dark"));
});

lightThemeBtn.addEventListener("click", () => {
  store.dispatch(changeThemeAction("light"));
});
