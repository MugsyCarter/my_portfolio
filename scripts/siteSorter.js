
var finalSites = [];

function Site (obj){
  for (var key in obj)
  {
    this[key] = obj[key];
  }
};

Site.prototype.toHtml = function() {
  var source = $('#gallery-template').html();
  var template = Handlebars.compile(source);
  var html = template(this);
  return html;
};

sites.sort(function(a, b) {
  return (new Date(b.published)) - (new Date(a.published));
  console.log(sites);
//delete this later
});

sites.forEach(function(ele) {
  finalSites.push(new Site(ele));
  console.log(finalSites);
  //delete this later;
});

finalSites.forEach(function(x) {
  $('#sites').append(x.toHtml());
  console.log(x);
});
