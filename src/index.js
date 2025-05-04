import { contact } from "./scripts/contact.js";
import { home } from "./scripts/home.js";
import { menu } from "./scripts/menu.js";
import "./styles/style.css";

home();

const content = document.querySelector("#content");

const homeButton = (function () {
  const homeBtn = document.querySelector("#homeBtn");
  homeBtn.addEventListener("click", () => {
    content.replaceChildren();
    home();
  });
})();

const menuButton = (function () {
  const menuBtn = document.querySelector("#menuBtn");
  menuBtn.addEventListener("click", () => {
    content.replaceChildren();
    menu();
  });
})();

const contactButton = (function () {
  const contactBtn = document.querySelector("#contactBtn");
  contactBtn.addEventListener("click", () => {
    content.replaceChildren();
    contact();
  });
})();
