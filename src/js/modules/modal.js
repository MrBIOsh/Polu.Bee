const btnOpenModal = document.getElementById('burger')
const btnCloseModal = document.getElementById('close')
const modalWin = document.getElementById('modal');
const prevent = ev => ev.preventDefault();

function openModal() {
    btnOpenModal.addEventListener('click', () => {
        modalWin.style.top = "0px";
        modalWin.style.zIndex = "10";
        document.addEventListener('touchmove', prevent, {passive: false});
        document.addEventListener('wheel', prevent, {passive: false});
    })
}

function closeModal() {
    btnCloseModal.addEventListener('click', () => {
        modalWin.style.top = "-1100px";        
        document.removeEventListener('touchmove', prevent);  
        document.removeEventListener('wheel', prevent);    
    })
}

function clickLinkModal() {
    modalWin.style.top = "-1100px";        
    document.removeEventListener('touchmove', prevent);  
    document.removeEventListener('wheel', prevent);  
}

export {openModal, closeModal, clickLinkModal};
      
        // //Close modalWin by click on cross
      
        // btnCloseModal.addEventListener('click', () => {
        //     darkLayer.style.opacity = '0';
        //     darkLayer.style.zIndex = '-10';
        //     modalWin.style.top = "-580px";        
        //     document.removeEventListener('touchmove', prevent);  
        //     document.removeEventListener('wheel', prevent);    
        //   })