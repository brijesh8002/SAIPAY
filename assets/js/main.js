// $(document).ready(function(){
function triggerPageLoad() {

  $('#dismiss, .overlay').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });

  $('.team-slider').owlCarousel({
    loop: true,            
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 450,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        },
        1920: {
            items: 3
        }
    }
});

  $(".service-owl").owlCarousel({
    item: 3,
    nav: true,
    margin: 15,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });
  $(".owl-prev").html('<i class="fas fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fas fa-chevron-right"></i>');

  // home-slider//

  $(".home-slider").owlCarousel({
    item: 1,
    nav: true,
    margin: 15,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
    }
  });
  $(".owl-prev").html('<i class="fas fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fas fa-chevron-right"></i>');

  $('.owl-carousel.banner').owlCarousel({
    margin: 30,
    autoplay: true,
    autoplayTimeout: 4500,
    lazyLoad: true,
    nav: true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    responsive: {
      0: { items: 1, },
      576: { items: 2, },
      768: { items: 2, },
      992: { items: 3, }
    }
  });

  $(".partner-slides").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    smartSpeed: 500,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 4
      },
      768: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  });

  $('.services-slider').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 200,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>"
    ],

    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 2
      },
      1024: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });
  // });

}

$('#dismiss, .overlay').on('click', function () {
  $('#sidebar').removeClass('active');
  $('.overlay').removeClass('active');
});

$('#sidebarCollapse').on('click', function () {
  $('#sidebar').addClass('active');
  $('.overlay').addClass('active');
  $('.collapse.in').toggleClass('in');
  $('a[aria-expanded=true]').attr('aria-expanded', 'false');
});

$(document).on("click", "#sidebar ul.components li a:not([data-toggle='collapse'])", function (e) {
  $('#sidebar').removeClass('active');
  $('.overlay').removeClass('active');
});

$(document).ready(function () {
  triggerPageLoad();
 // $(".login-popup").addClass('show');  
});

$(document).on("click", "#popup-close", function (e) {
  $(".login-popup").removeClass('show');  
});

$(document).on("click", function (e) {

  $(".login-popup").hide('closep');  
});






