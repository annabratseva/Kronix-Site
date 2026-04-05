import {openMenu} from "./modules/header.js"
import { scrollTop } from "./modules/scrollTop.js";
import { buttonClick } from "./modules/scrollTop.js";
import { faqCheck } from "./modules/checkInput.js";
import { bookCallFunc } from "./modules/book-call.js";
import { mouseMoveTwo } from "./modules/mousemove.js";

mouseMoveTwo()
bookCallFunc()
faqCheck()

window.openMenu = openMenu;
window.buttonClick = buttonClick;

const elements = document.querySelectorAll('.fade-in');

// для появления эл. и т.д
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});


elements.forEach(el => observer.observe(el));



