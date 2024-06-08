// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
import {scrollHandler} from "./handlers/scrollHandler.js";
import {handleClick} from "./handlers/activeHandler.js";

let navigation = document.getElementById("navigation");
let about = document.getElementById("about");
let offer = document.getElementById("offer");
let studio = document.getElementById("studio");
let price = document.getElementById("price");
let faq = document.getElementById("faq");
let footer = document.getElementById("footer");
let links = navigation.querySelectorAll(".header__link");
let procedures = price.querySelectorAll(".procedures__item");
let faqItem = faq.querySelectorAll('.faq__item');

let pages = [about, offer, studio, price, faq, footer];

faqItem.forEach(item => {
    item.addEventListener('click', () => {
        const question = item.querySelector(".faq__question");
        const answer = question.nextElementSibling;
        const plus = question.children[0];
        answer.classList.toggle('show');
        if (answer.classList.contains('show')) {
            plus.style.transform = "rotate(45deg)";
        } else {
            plus.style.transform = "rotate(0deg)";
        }
    });
});

studio.querySelector(".studio__details").addEventListener('click', () => {
    studio.querySelector(".studio__details").style.display = "none";
    const hidden = studio.querySelector(".studio__hidden");
    hidden.classList.toggle('show');
})

scrollHandler(pages, navigation, links);

procedures.forEach(item => {
    let name = item.querySelector(".procedures__name");
    name.addEventListener('click', handleClick);
})

document.querySelectorAll(".header__link").forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

