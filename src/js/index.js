// import mobileNav from './modules/mobile-nav.js';
// mobileNav();
import {scrollHandler} from "./handlers/scrollHandler.js";
import {handleClick} from "./handlers/activeHandler.js";
import {closeModal, openModal, clickLinkModal} from "./modules/modal.js";

const navigation = document.getElementById("navigation");
const about = document.getElementById("about");
const offer = document.getElementById("offer");
const studio = document.getElementById("studio");
const price = document.getElementById("price");
const faq = document.getElementById("faq");
const footer = document.getElementById("footer");
const links = navigation.querySelectorAll(".header__link");
const procedures = price.querySelectorAll(".procedures__item");
const faqItem = faq.querySelectorAll('.faq__item');
const modal = document.getElementById("modal");
const modalLinks = modal.querySelectorAll(".header__link");


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

function scroll() {
    scrollHandler(pages, navigation, links);
}

function checkWindowSize() {
    const width = window.innerWidth; 
    if (width > 1250) {
        window.addEventListener('scroll', scroll);
    } else { console.log('1')
        window.removeEventListener('scroll', scroll);
    }
}
window.addEventListener('resize', () => {checkWindowSize()});
window.addEventListener('load', () => {checkWindowSize()});
// scrollHandler(pages, navigation, links);


procedures.forEach(item => {
    let name = item.querySelector(".procedures__name");
    name.addEventListener('click', handleClick);
})

document.querySelectorAll(".header__link").forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
        const topOffset = 75;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

openModal();
closeModal();
modalLinks.forEach(link => {
    link.addEventListener('click', clickLinkModal);
})
