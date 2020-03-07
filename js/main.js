const modal = document.getElementById('modal');

const trial = document.querySelectorAll('.trial-action').forEach(function(trialBtn) {
    trialBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        modal.classList.add('modal-background');
    });
})

const closeModal = document.getElementById('close').addEventListener('click', function() {
    modal.style.display = 'none';
});

// Hide modal on outside click
window.addEventListener('click', function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    } else {
        return false;
    }
});

/*
function getNewColour() {
    let hex = "0123456789ABCDEF";
    let colour = "#";
    
    for(let i = 0; i < 6; i++) {
        colour = colour + hex[Math.floor(Math.random() * 16)];
    }
    modal.style.background = colour;
}

getNewColour();
*/

// Validate form
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('register-form');
const errorName = document.querySelector('.name-error');
const errorEmail = document.querySelector('.email-error');
const errorPassword = document.querySelector('.password-error');
const errorConfirmPassword = document.querySelector('.confirm-password-error');
const success = document.getElementById('success-message');

function validateForm(e) {
    if(name.value == '') {
        errorName.innerHTML = '<p>Please enter your name.</p>';
        errorName.classList.add('error');
    }
    if(email.value == '') {
        errorEmail.innerHTML = '<p>Please enter your email.</p>';
        errorEmail.classList.add('error');
    }
    if(password.value == '') {
        errorPassword.innerHTML = '<p>Please enter your password.</p>';
        errorPassword.classList.add('error');
    }
    if(confirmPassword.value == '') {
        errorConfirmPassword.innerHTML = '<p>Please confirm your password.</p>';
        errorConfirmPassword.classList.add('error');
    }
    if(confirmPassword.value !== password.value) {
        errorPassword.innerHTML = '<p>Your passwords do not match.</p>';
        errorConfirmPassword.innerHTML = '<p>Your passwords do not match.</p>';
    }
    
    e.preventDefault();
}


form.addEventListener('submit', validateForm);

// Frequent questions accordion
const question = document.querySelectorAll('.question-block');

question.forEach(function(show) {
    show.addEventListener('click', function() {
        this.getElementsByClassName('answer')[0].classList.toggle('show');
        this.getElementsByClassName('cross')[0].classList.toggle('cross-close');
    });
});

const hamburger = document.getElementById('hamburger');
const showNav = document.getElementById('navigation');
const closeNav = document.getElementById('close-nav');

hamburger.addEventListener('click', function() {
    showNav.style.display = 'block';
    showNav.classList.add('show-nav');
});

closeNav.addEventListener('click', function() {
    showNav.style.display = 'none';
});