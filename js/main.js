$(document).ready(function() {

    $("#slider-logo").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        autoplaySpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },

            375: {
                items: 1
            },

            768: {
                items: 3
            },


            1220: {
                items: 5,
                margin: 0

            },





        },
    });


    $("#slider-mobile").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: false,
        navText: [
            '<img src="./image/left-arrow.png" alt="Prev">',
            '<img src="./image/right-arrow.png" alt="Next">'
        ],
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        autoplaySpeed: 1000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            375: {
                items: 1,

            },




            1220: {
                items: 5,
                margin: 0

            },





        },
    });



});