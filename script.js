var $slider = $('.slider-1').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    cssEase: 'linear',
    // autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true
  });

  var slick = $slider.slick('getSlick');
  $slider.on('mousedown', '.slick-slide', function () {
        var curSlide = slick.slideCount === slick.currentSlide ? 0 : slick.currentSlide + 1;
        $slider.slick('slickGoTo', curSlide, true);
        console.log(slick);
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
    console.log(slick2);
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
  console.log(slick3);
});


var logo = document.getElementById('logo');
var logoWrap = document.getElementById('logo-wrap');



