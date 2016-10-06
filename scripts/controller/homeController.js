(function(module) {
  var homeController = {};

  homeController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.icon-home3').fadeOut();
    $('.body').delay(300).slideDown('slow');
    $('.about').delay(500).slideDown('slow');
    $('.foot').delay(600).slideDown('slow');
    $('.programs').delay(650).slideDown('slow');
  };

  module.homeController = homeController;
})(window);
