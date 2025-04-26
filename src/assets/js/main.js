import { menu } from './menu.js';
import { port } from './port.js';
import { link } from './link.js';
import { smooth } from './smooth.js';

window.addEventListener('load', function () {
    smooth();
    link();
    menu();
    port();
});

const headerToggle = document.getElementById("headerToggle");
const headerNav = document.querySelector(".header__nav");

if (headerToggle) {
    headerToggle.addEventListener("click", () => {
    headerNav.classList.toggle("show");
    headerToggle.getAttribute("aria-expanded") === "true"
        ? headerToggle.setAttribute("aria-expanded", "false")
        : headerToggle.setAttribute("aria-expanded", "true");
    });
}