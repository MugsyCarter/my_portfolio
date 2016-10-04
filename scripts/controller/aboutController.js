(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.about-me').slideDown();
  };

  module.aboutController = aboutController;
})(window);
