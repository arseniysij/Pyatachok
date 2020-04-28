document.addEventListener("DOMContentLoaded", function() {

	 $('.banner-sliders').slick({
    // adaptiveHeight: true,
    mobileFirst: true,
    // variableWidth: true,
    appendArrows: $('.banner-controls'),
    prevArrow: '<div class="arrow-left"></div>',
    nextArrow: '<div class="arrow-right"></div>',
    dots: true,
    appendDots: $('.banner-dots'),
  });

// Monal Menu
  let menuBtn = $('.menu-btn');
  let header = $('.header');

  menuBtn.click(function() {
    console.log('Da')
    if (header.hasClass('header--active')) {
      header.removeClass('header--active');
      $('body').css({"overflow": ""});
      menuBtn.removeClass("menu-btn--active");
    }
    else {
      header.addClass('header--active');
      $('body').css({"overflow": "hidden"});
      menuBtn.addClass("menu-btn--active");
    }
  });  

// header colof after scroll
let win = $(window);
win.scroll(function() {

  if(win.scrollTop() > 100) {
  header.addClass('header--scrolled');
} else {
  header.removeClass('header--scrolled');
}

});


});
