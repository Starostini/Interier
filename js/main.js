$(function(){
    // $('.slider__inner').slick();
    // $('.slider__inner, .news__slider-inner').slick({
    //     nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    //     nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    //     prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    //     infinite: false
    // });
    $('.slider__inner').slick({
        dots: true,
        nextArrow: false,
        prevArrow: false,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear'
      });

    $('select').styler();

    $('.icon__menu_button').on('click', function() {
        $('.header__menu ul').slideToggle();
    })
});

// function myFunction() {
//     document.getElementById("demo").style.display = "block";
//   };