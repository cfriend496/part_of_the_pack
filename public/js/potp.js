$(document).ready(function(){
    var whiteLogo = "img/logo/logo-white.svg";
    var blueLogo = "img/logo/potp-logo.svg";
    //owl carousel setting options for pack gallery images
    var carouselAttr = {
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        smartSpeed: 1200,
        dots: false,
        loop: true,
        responsive: {
            0: {items: 2},
            760: {items: 3},
            1020: {items: 5}
            },
        responsiveRefreshRate: 500
    };
        
    function toggleSlide(){
        var btn = $(".nav-header button");
        var nav = $("#potp-nav");
        var list = $(".nav-list");
        
        nav.toggleClass("slide");
        
        if(nav.hasClass("slide")){
            btn.css("animation-name", "roll-in");
            list.animate({right: '-20px'}, 800);
        } else {
            btn.css("animation-name", "roll-out");
            list.animate({right: '-300px'}, 800);
            
            if($("nav").hasClass("solid")){
                $(this).css("border", "2px solid #2A57CC");
            } else {
                $(this).css("border", "2px solid #FFF");
            }
        }
    }
    
    //smooth scroll and add active class to clicked navbar link
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

            
        $('html, body').stop().animate({'scrollTop': $target.offset().top}, 900, 'swing', function () {
            window.location.hash = target;
            
            if($("#potp-nav").hasClass("slide")){
                toggleSlide();
            }
        });
    });

    
    //nav button and nav list animation
    $(".nav-header button").on("click", function(e){
        e.preventDefault();
        toggleSlide();
    });
    
    //monitor scroll position and change navbar to solid background before leaving banner
    $(document).scroll(function(){
        var pos = $(document).scrollTop();
        var $navbar = $("#potp-main-nav");
        var $logo = $("#nav-logo");

        if (pos > 200) {
            $logo.attr('src', blueLogo);
            $navbar.addClass("solid");
        } else {
            $logo.attr('src', whiteLogo);
            $navbar.removeClass("solid");
        }
        
        if($("#potp-nav").hasClass("slide")){
            toggleSlide();
        }
    });
    
    //init carousels
    $("#carousel-top").owlCarousel(carouselAttr);
    $("#carousel-bottom").owlCarousel(carouselAttr);
});


