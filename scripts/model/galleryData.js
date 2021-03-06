//IIFE here
(function(module) {
  var sites = {};

//array of all site objects that
  sites.allsites = [];

//ajax call here
  sites.request = function(callback) {
    $.ajax({
      method: 'GET',
      url: 'https://api.github.com/users/MugsyCarter/repos' + '?per_page=50&sort=updated',
      success: function(data, status, xhr){
        console.log('ajax call was a rousing success:', data);
        sites.allsites = data;
        callback();
      },
      error: function(xhr, settings, error){
        console.log('Ajax call failed:', error);
      }
    });
  };

  sites.withTheAttribute = function(myAttr) {
    return sites.allsites.filter(function(aSite) {
      return aSite[myAttr];
    });
  };

  module.sites = sites;
})(window);
