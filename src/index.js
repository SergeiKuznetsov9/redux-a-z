import { createStore } from "./createStore.js";
import { rootReducer } from "./rootReducer.js";
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

store.dispatch({ type: "INIT" });

plusBtn.addEventListener("click", () => {
  store.dispatch({ type: "PLUS" });
});

minusBtn.addEventListener("click", () => {
  store.dispatch({ type: "MINUS" });
});

resetBtn.addEventListener("click", () => {
  store.dispatch({ type: "RESET" });
});
