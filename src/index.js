// вне ноды require работать не будет, поэтому используем импорты
import { searchArt } from "./art_helper.js";
import './style.css';

window.onload = (ev) => {
  init();
};

const init = () => {
  console.log("hello I am a sample index.js vn");
  document
    .getElementById("title-search-button")
    .addEventListener("click", handleSearchClick);
};

const handleSearchClick = (ev) => {
  const title = document.getElementById("title-search-input").value;
  searchArt({ title }).then(renderResults);
};

const renderResults = ({ artPieces }) => {
  document.getElementById("search-results").innerHTML = artPieces.join("");
};
