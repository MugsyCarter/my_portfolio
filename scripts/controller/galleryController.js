(function(module) {
  var galleryController = {};

  galleryController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.gallery').slideDown();
    $('.gallery-item').delay(300).slideDown('fast');
  };

  module.galleryController = galleryController;
})(window);
