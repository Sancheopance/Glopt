$(document).ready(function(){

    function toggleSlide(item) { 
        $(item).each(function(i) {  
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.delivery-card__content').eq(i).toggleClass('delivery-card__content_active');
            $('.delivery-card__list').eq(i).toggleClass('delivery-card__list_active')
            })
        });
    };
    toggleSlide('.delivery-card__link');
    toggleSlide('.delivery-card__back');










});