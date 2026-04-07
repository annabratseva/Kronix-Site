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




