//Variables Section
const submitBtn = document.querySelector('.submit-btn')
const popUp = document.querySelector('.pop-up')
const card = document.querySelector('.card')
const email = document.querySelector('.email');
const emailError = document.querySelector('.email-error');

email.addEventListener('keyup', checkEmailFunction);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/



function checkEmailFunction () {

    if (!emailPattern.test(email.value)) {
        emailError.style.display = "block";
        email.classList.add('js-class')
        submitBtn.disabled = true

    }

    else {
        emailError.style.display = "none";
        email.classList.remove('js-class')
        submitBtn.disabled = false
    }
}



submitBtn.addEventListener('click', submitFunction)

function submitFunction(e) {
    e.preventDefault(); 
    if (email.value === "") {
        emailError.style.display = "block";
        email.classList.add('js-class')
        submitBtn.disabled = true
    }

    if (!emailPattern.test(email.value)) {
        emailError.style.display = "block";
        email.classList.add('js-class')
        submitBtn.disabled = true

    }

    else {
        emailError.style.display = "none";
        email.classList.remove('js-class')
        submitBtn.disabled = false
        popUp.style.display = "block"
        card.style.display = "none"
    }



    
}







