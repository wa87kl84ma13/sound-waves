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