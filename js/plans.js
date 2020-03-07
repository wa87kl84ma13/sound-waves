const plans = document.querySelectorAll('.plan-card');

plans.forEach(function(plan) {
    plan.addEventListener('mouseover', function() {
        this.getElementsByClassName('card-content')[0].classList.add('card-expand');
    });
    plan.addEventListener('mouseout', function() {
        this.getElementsByClassName('card-content')[0].classList.remove('card-expand');
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