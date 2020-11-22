var widgetScrollTop = document.querySelector('.widget-scroll-top');

//accordion
function initAccordion() {
    $('.accordion-item-trigger').click(function(){
        $(this).parent().toggleClass('is-active');
    });
}

//progress bar
function checkProgress() {
    var progressBar = document.querySelector('.progress-bar');
    var position = document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var progress = (position / height) * 100;
    progressBar.style.width = progress + "%";
}

//burger menu
function initHamburger() {
    const activeClass = 'active';
    const $button = $('.burger-button');
    const $navItems = $('.header-nav');
    $button.click(() => {
        [$button, $navItems].forEach((item) => item.toggleClass(activeClass));
    })
}

$(document).ready(function() {
    initAccordion();
    initHamburger();
    checkProgress();
});

//scroll-top button
document.addEventListener('scroll', function() {
    checkProgress();

    if (window.pageYOffset > 1250) {
        $(widgetScrollTop).addClass('is-visible');
    } else {
        $(widgetScrollTop).removeClass('is-visible');
    }
});

widgetScrollTop.addEventListener('click', function(event) {
    event.preventDefault();

    $("html, body").animate({ scrollTop: 0}, 300);
});