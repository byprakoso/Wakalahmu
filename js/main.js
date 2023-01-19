$(document).ready(function () {
    $(".js-scroll").mCustomScrollbar();
    // scroll
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop();
        var hblock = $('header').outerHeight();

        // scroll header
        if (scrollpos > hblock) {
            $('.header').addClass('sticky');

        } else {
            $('.header').removeClass('sticky');
        }
    });
    
    //cover
    $('#js-cover').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><div class="slick-icon icon-left"><span class="icon-chevron-thin-left"></span></div></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Previous" tabindex="0" role="button"><div class="slick-icon icon-right"><span class="icon-chevron-thin-right"></span></div></button>'
    });
    //testimonial
    $('#js-testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><div class="slick-icon icon-left"><span class="icon-chevron-thin-left"></span></div></button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Previous" tabindex="0" role="button"><div class="slick-icon icon-right"><span class="icon-chevron-thin-right"></span></div></button>'
    });
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // mobile
    } else {
        var wa = $(".js-share__item--wa").hide();
    }
    //toggle credit
    $('#js-credits').click(function () {
        $('#js-credits-content').slideToggle("slow");
    });


});