// Frequent questions accordion
const question = document.querySelectorAll('.question-block');

question.forEach(function(show) {
    show.addEventListener('click', function() {
        this.getElementsByClassName('answer')[0].classList.toggle('show');
        this.getElementsByClassName('cross')[0].classList.toggle('cross-close');
    });
});