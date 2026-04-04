import {openMenu} from "./modules/header.js"
import { scrollTop } from "./modules/scrollTop.js";
import { buttonClick } from "./modules/scrollTop.js";
import { faqCheck } from "./modules/checkInput.js";
import { bookCallFunc } from "./modules/book-call.js";

bookCallFunc()
faqCheck()

window.openMenu = openMenu;
window.buttonClick = buttonClick;

const title = document.querySelector(".hero-block__text-cont")

window.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5)
    const y = (e.clientY / window.innerHeight - 0.5)

    const moveX = x * 30
    const moveY = y * 20

    title.style.transform = `translate(${moveX}px, ${moveY}px)`
})


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

