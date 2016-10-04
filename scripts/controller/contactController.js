(function(module) {
  var contactController = {};

  contactController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.contact').slideDown();
  };

  module.contactController = contactController;
})(window);
