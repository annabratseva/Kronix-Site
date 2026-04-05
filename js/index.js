import {openMenu} from "./modules/header.js"
import { scrollTop } from "./modules/scrollTop.js";
import { buttonClick } from "./modules/scrollTop.js";
import { faqCheck } from "./modules/checkInput.js";
import { bookCallFunc } from "./modules/book-call.js";
import { mouseMoveTwo } from "./modules/mousemove.js";
import { customerFunc } from "./modules/customer.js";

mouseMoveTwo()
bookCallFunc()
faqCheck()
customerFunc()

window.openMenu = openMenu;
window.buttonClick = buttonClick;

const elements = document.querySelectorAll('.fade-in');

// для появления эл. и т.д
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});


elements.forEach(el => observer.observe(el));



