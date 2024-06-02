// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
import {scrollHandler, pageYTop, PageYBottom} from "./handlers/scrollHandler.js";

import rotateHandler from "./handlers/rotateHandler.js";

let navigation = document.getElementById("navigation");
let about = document.getElementById("about");
let offer = document.getElementById("offer");
let studio = document.getElementById("studio");
let price = document.getElementById("price");
let faq = document.getElementById("faq");
let footer = document.getElementById("footer");
let links = navigation.querySelectorAll(".header__link");

console.log(links)

let pages = [about, offer, studio, price, faq, footer];

rotateHandler();
scrollHandler(pages, navigation, links);