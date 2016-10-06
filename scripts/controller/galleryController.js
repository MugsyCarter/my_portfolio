(function(module) {
  var galleryController = {};

  galleryController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.gallery').slideDown();
    $('.gallery-item').delay(300).slideDown('fast');
    $('.icon-home3').fadeIn();
  };

  module.galleryController = galleryController;
})(window);
