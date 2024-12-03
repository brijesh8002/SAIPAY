
function pageLoadFunction() {



    (function ($) {
        "use strict";
        // preloader
        // $(window).on('load', function() {  
        //     $('#loading').delay(8000).fadeOut();
        //     $('#loading-center').delay(7000).fadeOut('slow'); 
        // }); 

        $(window).on("load", function () {
            setTimeout(function () {
                $("#loading").fadeOut(500, function () {
                    $("#loading").removeClass("loading");
                });
            }, 7500);
        });




        // data - background
        $("[data-background]").each(function () {
            $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
        })



        const body = document.querySelector("body");
        const navbar = document.querySelector(".navbarmenu");
        const menuBtn = document.querySelector(".menu-btn");
        const cancelBtn = document.querySelector(".cancel-btn");
        menuBtn.onclick = ()=>{
          navbar.classList.add("show");
          menuBtn.classList.add("hide");
          body.classList.add("disabled");
        }
        cancelBtn.onclick = ()=>{
          body.classList.remove("disabled");
          navbar.classList.remove("show");
          menuBtn.classList.remove("hide");
        }

        //mouse click



        // meanmenu
        // $('#mobile-menu').meanmenu({
        //     meanMenuContainer: '.mobile-menu',
        //     meanScreenWidth: "992"
        // });

        // sticky
        // $(window).on('scroll', function () {
        //     var scroll = $(window).scrollTop();
        //     if (scroll < 2) {
        //         $("#header-sticky").removeClass("sticky");
        //     } else {
        //         $("#header-sticky").addClass("sticky");
        //     }
        // });

        // counter
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });


        //pop up img
        $('.test-popup-link').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });



        $('.owl-carousel').owlCarousel({
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            loop: true,
            smartSpeed: 250,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                900: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        })


        // Instantiate Scrolls
        var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');

        if (document.querySelector('[data-easing]')) {
            var linear = new SmoothScroll('[data-easing="linear"]', { easing: 'linear' });
        }



        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: '<i class="icofont-scroll-double-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });
        // WOW active
        new WOW().init();


    })(jQuery);

    var swiper = new Swiper(".mySwiper", {
        speed: 600,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


    console.log("caeeddd");
    setTimeout(() => {
        var swiper = new Swiper('.blog-slider', {
            spaceBetween: 30,
            effect: 'fade',
            loop: true,
            // mousewheel: {
            //     invert: false,
            // },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            // autoHeight: true,
            pagination: {
                el: '.blog-slider__pagination',
                clickable: true,
            }
        });
    
    }, 1000);
    // var swiper = new Swiper('.blog-slider', {
    //     spaceBetween: 30,
    //     effect: 'fade',
    //     loop: true,
    //     // mousewheel: {
    //     //     invert: false,
    //     // },
    //     autoplay: {
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     // autoHeight: true,
    //     pagination: {
    //         el: '.blog-slider__pagination',
    //         clickable: true,
    //     }
    // });

}

pageLoadFunction();


