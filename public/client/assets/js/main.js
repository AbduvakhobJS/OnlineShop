(function ($) {
    "use strict";
    // Main menu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });

    // slider - active

    $('.menu-bar').on('click', function () {
        $('.side-menu').addClass('menu-open')

    })
    $('.close-icon').on('click', function () {
        $('.side-menu').removeClass('menu-open')
    })

    
    $(document).ready(function () {
        $(".home-show").click(function () {

            $(".home-sub-menu").toggle();
        });
    });
    $(document).ready(function () {
        $(".page-show").click(function () {

            $(".page-sub-menu").toggle();
        });
    });
    $(document).ready(function () {
        $(".shop-page").click(function () {

            $(".sub-shop-page").toggle();
        });
    });
    $(document).ready(function () {
        $(".shop-grid-menu").click(function () {

            $(".sub-sgm").toggle();
        });
    });
    $(document).ready(function () {
        $(".shop-list-menu").click(function () {

            $(".sub-slm").toggle();
        });
    });
    $(document).ready(function () {
        $(".shop-detalis-menu").click(function () {

            $(".sub-sdm").toggle();
        });
    });
    $(document).ready(function () {
        $(".blog-menu").click(function () {

            $(".sub-bm").toggle();
        });
    });



    // HOME PAGE SLIDER
    $(".slider-area").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,
        // autoplay:true,
        autoplayTimeout: 10000,

        responsive: {
            0: {
                mouseDrag: true,
                touchDrag: true,
                dots: false,

            },
            576: {
                dots: true,

            },
            992: {
                mouseDrag: false,
                touchDrag: false,
            }
        }
    });

    $(".slider-area").on("translate.owl.carousel", function () {
        $(".single-slide h1, .single-slide p ").removeClass("animated fadeInUp").css("opacity", "0");
        $(".single-slide h2, .single-slide a").removeClass("animated fadeInDown").css("opacity", "0");
        $(".single-slide h2, .single-slide  img").removeClass("animated fadeInLeft").css("opacity", "0");

    });

    $(".slider-area").on("translated.owl.carousel", function () {
        $(".single-slide h1, .single-slide p").addClass("animated fadeInUp").css("opacity", "1");
        $(".single-slide h2, .single-slide a ").addClass("animated fadeInDown").css("opacity", "0");
        $(".single-slide h2, .single-slide  img").addClass("animated fadeInLeft").css("opacity", "0");


    });

    // Product - active
    $('.product-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },

            {
                breakpoint: 530,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },
        ]
    });
    $('.product-active-6').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1701,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1430,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 1130,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },

            {
                breakpoint: 515,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },
        ]
    });


    // Product - active
    $('.product-list-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        draggable: false,
        asNavFor: '.slider-nav-thumbnails',

    });
    $('.slider-nav-thumbnails').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-list-slider',
        dots: false,
        prevArrow: '<button class="product-slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="product-slick-next"><i class="fa fa-angle-right"></i"</button>',
        //	centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },

        ]
    });
    //for menu active class
    $('.slider-nav-thumbnails a').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    $('.page-product-active').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },

        ]
    });
    // Brand - active
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.brand-active-1').slick({
        dots: false,
        arrows: false,
        infinite: true,
        // autoplay: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    //for menu active class
    $('.product-menu button').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    //for menu active class
    $('.pagination li').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    // Product - active
    $('.hot-sale-product-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,


                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },

        ]
    });
    // Product - active
    $('.hot-sale-product-active-2').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,


                }
            },
            {
                breakpoint: 531,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            }

        ]
    });
    $('.hot-sale-product-active-3').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }

        ]
    });
    // Blog- active
    $('.man-collection-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },

        ]
    });
    // blog - active
    $('.blog-active').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },

        ]
    });
    // blog-4 active
    $('.blog-active-4').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: '<a class="product-slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="product-slick-next"><i class="fa fa-angle-right"></i"</a>',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,


                }
            },

        ]
    });

    // autopopup
    $(document).ready(function(){
        setTimeout(function(){
            $('#autopopup-option').css('display','block');
        },5000);
        $('#close-button').click(function(){
            $('#autopopup-option').css('display','none');
        })

    });

    $('.mfp-iframe').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
        // magnificPopup
        $('.popup-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

    $(".mini-cart-product-page ").css("display", "none");
    $(document).ready(function () {
        $(".site-info .cart > a").click(function () {

            $(".mini-cart-product-page").toggle();
        });
    });


    $(".sub-sort-option").css("display", "none");

    $(".sub-show-option").css("display", "none");


    $(document).ready(function () {
        $("#sort-option").click(function () {

            $("#sub-sort-option").toggle();
        });
    });
    $(document).ready(function () {
        $("#show-option-numbe").click(function () {

            $("#sub-show-option").toggle();
        });
    });
    $(document).ready(function () {
        $("#sort-option-2").click(function () {

            $("#sub-sort-optio-2").toggle();
        });
    });
    $(document).ready(function () {
        $("#show-option-numbe-2").click(function () {

            $("#sub-show-option-2").toggle();
        });
    });

    // Autopopup

    $(function () {
        $('.qty').niceNumber();
    });

    // Product sample

    var grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid-item'
        }
    })
    // Input-range

    $('.product-menu').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({
            filter: filterValue
        });
    });

    //Loader

    jQuery(window).load(function () {
        $(".loader").fadeOut(2100);
    });

    //Wow
    new WOW().init();

})(jQuery);