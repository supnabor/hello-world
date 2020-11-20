function initAccordion() {
    $('.accordion-item-trigger').click(function(){
        $(this).parent().toggleClass('is-active');
    });
}

function checkProgress() {
    var progressBar = document.querySelector('.progress-bar');
    var position = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progress = (position / height) * 100;
    progressBar.style.width = progress + "%";
}

$(document).ready(function() {
    initAccordion();
    checkProgress();
});

document.addEventListener('scroll', function() {
    checkProgress();
});