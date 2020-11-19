function initAccordion() {
    $('.accordion-item-trigger').click(function(){
        $(this).parent().toggleClass('is-active');
    });
}

$(document).ready(function() {
    initAccordion();
});