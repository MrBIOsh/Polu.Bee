// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
import {scrollHandler} from "./handlers/scrollHandler.js";
import {handleClick} from "./handlers/activeHandler.js";

import rotateHandler from "./handlers/rotateHandler.js";

let navigation = document.getElementById("navigation");
let about = document.getElementById("about");
let offer = document.getElementById("offer");
let studio = document.getElementById("studio");
let price = document.getElementById("price");
let faq = document.getElementById("faq");
let footer = document.getElementById("footer");
let links = navigation.querySelectorAll(".header__link");
let procedures = price.querySelectorAll(".procedures__item");

let pages = [about, offer, studio, price, faq, footer];

rotateHandler();
scrollHandler(pages, navigation, links);

procedures.forEach(item => {
    let name = item.querySelector(".procedures__name");
    name.addEventListener('click', handleClick);
})

