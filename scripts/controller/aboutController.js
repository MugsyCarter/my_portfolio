(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.about-me').slideDown();
    $('.icon-home3').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
