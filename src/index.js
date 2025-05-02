import { home } from "./scripts/home.js";

home();

const content = document.querySelector("#content");

const homeButton = (function () {
  const homeBtn = document.querySelector("#homeBtn");
  homeBtn.addEventListener("click", () => {
    content.replaceChildren();
    home();
  });
})();
