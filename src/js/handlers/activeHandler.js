// import loadHTML from "../modules/loadHTML.js";
import Skins from "../modules/lashes.js";

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
        console.log(el.target.textContent)
        console.log(Skins())
        switch(service) {
            case "06Ресницы":
                main.innerHTML = Skins();
        }
}

export {handleClick};




