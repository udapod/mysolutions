const popUp = document.querySelector('.pop-up')
const share = document.querySelector('.share')
share.addEventListener('click', shareFunction)

function shareFunction() {
    
    
    if (popUp.style.display === "flex") {
        popUp.style.display = "none"
    } else {
        popUp.style.display = "flex"
    }
    
}


const shareMobile = document.querySelector('.share-mobile')

shareMobile.addEventListener('click', shareMobileFunction)

function shareMobileFunction() {
    
    
    if (popUp.style.display === "flex") {
        popUp.style.display = "none"
    } else {
        popUp.style.display = "flex"
    }
    
}