//IIFE here
(function(module) {
  var galleryView = {};

  var source = $('#gallery-template').html();
  var template = Handlebars.compile(source);

  galleryView.renderGallery = function() {
    console.log('renderGallery is running');
    $('#sites').append(sites.withTheAttribute('description').map(template)
    );
  };


  module.galleryView = galleryView;
  sites.request(galleryView.renderGallery);
})(window);
