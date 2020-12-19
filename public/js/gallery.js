var resizeGalleryItem = function(){
    var width = $('.gallery-item').width();
    var height = width * 10.0 / 16.0;
  
    $('.gallery-item').height(height);
  }

var resizeAccGalleryItem = function(){
  var width = $('.acc-gallery-item').width();
  var height = width * 1440 / 1920;

  $('.acc-gallery-item').height(height);
}

  var resizeNumber = function(){
    $('.number').each((key, value) => {
      var width = $(value).width();
      var height = $(value).height();
      if(width > height){
        $(value).css('padding-top', 2 + (width - height) / 2)
        $(value).css('padding-bottom', 2 + (width - height) / 2)
      }
      else if (height > width){
          $(value).width(height);
      }
    })
  };
  
  $(function(){
    resizeGalleryItem();
    resizeAccGalleryItem();
    resizeNumber();
    $(window).on('resize', function(){
        resizeGalleryItem();
        resizeAccGalleryItem();
        resizeNumber();
    });
  });