var $widgetScrollTop = $('.widget-scroll-top');

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


    $widgetScrollTop[0].addEventListener('click', function(event) {
        event.preventDefault();

        $("html, body").animate({ scrollTop: 0}, 300);
    });
});

document.addEventListener('scroll', function() {
    checkProgress();

    if (window.pageYOffset > 1250) {
        $widgetScrollTop.addClass('is-visible');
    } else {
        $widgetScrollTop.removeClass('is-visible');
    }
});