(function(module) {
  var jsProgramsController = {};

  jsProgramsController.reveal = function() {
    $('div').not('.head').slideUp();
    $('.programs-page').slideDown();
    $('.jsProgram').show().animate({height: '20vh', width: '90vw'}, 1000);
    $('.icon-home3').fadeIn();
  };

  module.jsProgramsController = jsProgramsController;
})(window);
