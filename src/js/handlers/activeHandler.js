// import loadHTML from "../modules/loadHTML.js";
import Lashes from "../modules/lashes.js";
import Laser from "../modules/laser.js";
import Brows from "../modules/brows.js";
import Skins from "../modules/skins.js";
import LaserMan from "../modules/laser-man.js";
import Wax from "../modules/wax.js";


let procedures = price.querySelectorAll(".procedures__item");  
let priceContent = document.getElementById("price-content"); 

function handleClick(event) { 
    procedures.forEach(item => {
        let name = item.querySelector(".procedures__name");
        name.classList.remove("active");
    })
    event.target.classList.add('active');
    handleActive(priceContent, event);
}

function handleActive(main, el) {
        let service = el.target.textContent;
        switch(service) {
            case "01Лазер":
                main.innerHTML = Laser();
                break;
            case "02Лазер мужской":
                main.innerHTML = LaserMan();
                break;
            case "03Воск и паста":
                main.innerHTML = Wax();
                break;
            case "04Скинс":
                main.innerHTML = Skins();
                break;
            case "05Брови":
                main.innerHTML = Brows();
                break;
            case "06Ресницы":
                main.innerHTML = Lashes();
                break;
        }
}

export {handleClick};




