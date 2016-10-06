(function(module) {
  var contactController = {};

  contactController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.contact').slideDown();
    $('.icon-home3').fadeIn();
  };

  module.contactController = contactController;
})(window);
