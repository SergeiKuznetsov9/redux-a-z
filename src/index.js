// На этом шаге вместо самописной функции createStore мы импортировали ее из библиотеки Redux
// Все продолжает работать как и раньше, т.е. это все практически работает так, как в самописной функции

import { createStore } from "redux";
import { rootReducer } from "./rootReducer.js";
import { plusAction, minusAction, resetAction, initAction } from "./actions.js";
import "./style.css";
// npx webpack serve --config webpack.dev.config.js

const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

const store = createStore(rootReducer, { count: 0 });

store.subscribe(
  () => (counter.textContent = store.getState().count.toString())
);

// { type: "INIT" } - это Action
// по хорошему типы лучше передавать константами
// а экшены - экшнКриэйтерами
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
