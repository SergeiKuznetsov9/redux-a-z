import "./style.css";
// npx webpack serve --config webpack.dev.config.js

const counter = document.getElementById("counter");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const resetBtn = document.getElementById("reset");

let state = 0;
render();

function render() {
  counter.textContent = state.toString();
}

plusBtn.addEventListener("click", () => {
  state++;
  render();
});

minusBtn.addEventListener("click", () => {
  state--;
  render();
});

resetBtn.addEventListener("click", () => {
  state = 0;
  render();
});
