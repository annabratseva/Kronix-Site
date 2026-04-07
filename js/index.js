import {openMenu} from "./modules/header.js"
import { scrollTop } from "./modules/scrollTop.js";
import { buttonClick } from "./modules/scrollTop.js";
import { faqCheck } from "./modules/checkInput.js";
import { bookCallFunc } from "./modules/book-call.js";
import { mouseMoveTwo } from "./modules/mousemove.js";
import { customerFunc } from "./modules/customer.js";
import { LoadMore_HelpWith } from "./modules/loadMore.js";
import { LoadMore_Posters } from "./modules/loadMore.js";
import { scrollFade } from "./modules/scrollTop.js";


scrollFade()
LoadMore_HelpWith()
LoadMore_Posters()
mouseMoveTwo()
bookCallFunc()
faqCheck()
customerFunc()

window.openMenu = openMenu;
window.buttonClick = buttonClick;

const loadMoreBtn = document.querySelector(".news__button-link")
const cards = document.querySelectorAll(".news__single-card")

const dataSets = [
  [
    { title: "New branding trends 2026", subtitle: "Fresh ideas for modern brands...", category: "Branding" },
    { title: "TikTok growth hacks", subtitle: "How to go viral in 2026...", category: "TikTok" },
    { title: "Logo design secrets", subtitle: "What makes a logo memorable...", category: "Design" },
    { title: "Facebook strategy", subtitle: "Still relevant? Yes, here's how...", category: "FB" },
    { title: "AI in marketing", subtitle: "Automation is the future...", category: "AI" },
    { title: "NFT comeback?", subtitle: "Is NFT still alive in 2026...", category: "NFT" }
  ],
  [
    { title: "Minimalism in branding", subtitle: "Less is more in design...", category: "Branding" },
    { title: "TikTok ads guide", subtitle: "Best ad strategies explained...", category: "TikTok" },
    { title: "Typography basics", subtitle: "Fonts that convert...", category: "Design" },
    { title: "Facebook ads", subtitle: "How to scale campaigns...", category: "FB" },
    { title: "AI tools list", subtitle: "Top tools you must use...", category: "AI" },
    { title: "NFT marketing", subtitle: "How brands use NFT today...", category: "NFT" }
  ]
]

let currentSet = 0

loadMoreBtn.addEventListener("click", (e) => {
  e.preventDefault()

  currentSet = (currentSet + 1) % dataSets.length
  const newData = dataSets[currentSet]

  cards.forEach((card, index) => {
    const title = card.querySelector(".news__card-title")
    const subtitle = card.querySelector(".news__card-subtitle")
    const category = card.querySelector(".news__green-title")

    title.innerText = newData[index].title
    subtitle.innerText = newData[index].subtitle
    category.innerText = newData[index].category
  })
})




