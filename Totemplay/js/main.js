var widgetScrollTop = document.querySelector('.widget-scroll-top');


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });




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