var $slider = $('.slider-1').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    cssEase: 'linear',
    // autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true,
    // variableWidth: true
  });

  var slick = $slider.slick('getSlick');
  $slider.on('mousedown', '.slick-slide', function () {
        var curSlide = slick.slideCount === slick.currentSlide ? 0 : slick.currentSlide + 1;
        $slider.slick('slickGoTo', curSlide, true);
    });

  var $slider2 = $('.slider-2').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    cssEase: 'linear',
    // autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true
  });

  var slick2 = $slider2.slick('getSlick');
  $slider2.on('mousedown', '.slick-slide', function () {
    var curSlide = slick2.slideCount === slick2.currentSlide ? 0 : slick2.currentSlide + 1;
    $slider2.slick('slickGoTo', curSlide, true);
});


var $slider3 = $('.slider-3').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  cssEase: 'linear',
  // autoplay: true,
  swipeToSlide: true,
  focusOnSelect: true
});

var slick3 = $slider3.slick('getSlick');
$slider3.on('mousedown', '.slick-slide', function () {
  var curSlide = slick3.slideCount === slick3.currentSlide ? 0 : slick3.currentSlide + 1;
  $slider3.slick('slickGoTo', curSlide, true);
});

var $slider4 = $('.slider-4').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  cssEase: 'linear',
  // autoplay: true,
  swipeToSlide: true,
  focusOnSelect: true
});

var slick4 = $slider4.slick('getSlick');
$slider4.on('mousedown', '.slick-slide', function () {
  var curSlide = slick4.slideCount === slick4.currentSlide ? 0 : slick4.currentSlide + 1;
  $slider4.slick('slickGoTo', curSlide, true);
});

var $slider5 = $('.slider-5').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 500,
  cssEase: 'linear',
  // autoplay: true,
  swipeToSlide: true,
  focusOnSelect: true
});

var slick5 = $slider5.slick('getSlick');
$slider5.on('mousedown', '.slick-slide', function () {
  var curSlide = slick5.slideCount === slick5.currentSlide ? 0 : slick5.currentSlide + 1;
  $slider5.slick('slickGoTo', curSlide, true);
});


// var logo = document.getElementById('logo');
// var logoWrap = document.getElementById('logo-wrap');


$(function() {
  $.scrollify({
    section : ".section",
    // sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
});


