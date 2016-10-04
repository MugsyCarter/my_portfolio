(function(module) {
  var jsProgramsController = {};

  jsProgramsController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.programs-page').slideDown();
    $('.jsProgram').show().animate({height: '20vh', width: '90vw'}, 1000);
  };

  module.jsProgramsController = jsProgramsController;
})(window);
