var $slider = $('.slider-first').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true
  });

  var slick = $slider.slick('getSlick');
  $slider.on('mousedown', '.slick-slide', function () {
        var curSlide = slick.slideCount === slick.currentSlide ? 0 : slick.currentSlide + 1;
        $slider.slick('slickGoTo', curSlide, true);
        console.log(slick);
    });

  var $sliderSecond = $('.slider-second').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    swipeToSlide: true,
    focusOnSelect: true
  });

  var slickSecond = $sliderSecond.slick('getSlick');
  $sliderSecond.on('mousedown', '.slick-slide', function () {
    var curSlide = slickSecond.slideCount === slickSecond.currentSlide ? 0 : slickSecond.currentSlide + 1;
    $sliderSecond.slick('slickGoTo', curSlide, true);
    console.log(slickSecond);
});