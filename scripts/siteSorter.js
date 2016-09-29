
function getData(){
  //array containing the finalized sites
  var finalSites = [];

  //Site object costructor for the gallery items
  function Site (obj){
    for (var key in obj)
    {
      this[key] = obj[key];
    }
  };

  //handlebar templater for the sites
  Site.prototype.toHtml = function() {
    var source = $('#gallery-template').html();
    var template = Handlebars.compile(source);
    var html = template(this);
    return html;
  };
//ajax request here
  $.ajax('data/portfolioSites.json',{
    method: 'GET',
    success: successHandler,
    error: errorHandler
  });
//on success
  function successHandler(data){
    console.log('SUCCESS', data);
    //save to local storage
    localStorage.setItem('portfolioSites', data);
    //convert each site to a Site object w inherited attributes
    data.forEach(function(ele){
      finalSites.push(new Site(ele));
    });
    //appends the info from sites to the #sites section of index.html
    finalSites.forEach(function(x) {
      $('#sites').append(x.toHtml());
    });
  };
//on fail
  function errorHandler(error, second){
    console.log('ERROR', error);
    console.log('here it is :' + second);
  };
};

getData();
