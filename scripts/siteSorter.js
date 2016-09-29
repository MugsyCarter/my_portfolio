
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

//site sorter.  TODO: check and fix if not working.
sites.sort(function(a, b) {
  return (new Date(b.published)) - (new Date(a.published));
  console.log(sites);
//delete this later
});

//makes new sites and pushes them into the finalSites array
sites.forEach(function(ele) {
  finalSites.push(new Site(ele));
  console.log(finalSites);
  //delete this later;
});

//appends the info from sites to the #sites section of index.html
finalSites.forEach(function(x) {
  $('#sites').append(x.toHtml());
  console.log(x);
});
