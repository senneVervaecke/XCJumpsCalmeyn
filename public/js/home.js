var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  loop: true,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

var resizeSwiper = function(){
  var width = $('.swiper').width();
  var height = width / 3;
  console.log(width);

  $('.gallery-top').height(height);
  $('.gallery-thumbs').height(height / 5);
}

var resizeText = function(){
  var width = $('.swiper-container').width();
  $('.text-container').width(width);
}

$(function(){
  resizeSwiper();
  resizeText();
  $(window).on('resize', function(){
      resizeSwiper();
      resizeText();
  });
});

