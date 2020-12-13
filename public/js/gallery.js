var resizeGalleryItem = function(){
    var width = $('.gallery-item').width();
    var height = width * 10.0 / 16.0;
  
    $('.gallery-item').height(height);
  }

  var resizeNumber = function(){
    var width = $('.number').width();
    var height = $('.number').height();

    if(width > height){
        $('.number').height(width);
    }
    else {
        $('.number').width(height);
    }
  }
  
  $(function(){
    resizeGalleryItem();
    resizeNumber();
    $(window).on('resize', function(){
        resizeGalleryItem();
    });
  });