export default () => {
 
    let faq = document.querySelector('.faq__list');
    let faqItem = faq.querySelectorAll('.faq__item');

    function rotateHandler() {
        let plus = this.querySelector(".faq__question").children[0];
        let parentHeight = parseInt(getComputedStyle(this).height, 10);
        let height = parseInt(getComputedStyle(this.querySelector(".faq__question")).height, 10);
        let parentPadding = parseInt(getComputedStyle(this).paddingTop, 10);
        let elSiblingHeight = parseInt(getComputedStyle(this.querySelector(".faq__answer")).height, 10);
        
        if (height + 2*parentPadding === parentHeight) {
            plus.style.transform = "rotate(45deg)";
            this.style.height = parentHeight + elSiblingHeight + "px";
            console.log(parentHeight);
        } else {
            plus.style.transform = "rotate(0deg)";
            this.style.height = parentHeight - elSiblingHeight + "px";
            console.log(parentHeight);
        }
    }

    faqItem.forEach((el) => {
        el.onclick = rotateHandler;
    })
}