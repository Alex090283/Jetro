$(function() {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,

                }
            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 4,

                }
            },
            {
                breakpoint: 631,
                settings: {
                    slidesToShow: 3,

                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,

                }
            },

        ]
    });



    $('.header__menu-btn').on('click', function() {
        $('.header__menu > ul').slideToggle();

    });

});