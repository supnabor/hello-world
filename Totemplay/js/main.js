$(document).ready(function() {
    $('.accordion-item-trigger').click(function(){
        $(this).next('.accordion-item-content').slideToggle();
    });
});