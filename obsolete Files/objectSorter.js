
var finalSites = [];

function Site (obj){
  for (var key in obj)
  {
    this[key] = obj[key];
  }
};

Site.prototype.toHtml = function() {
  var $newSite = $('article.template').clone();
  $newSite.attr('data-category', this.category);
  $newSite.find('#site-title').html(this.title);
  $newSite.find('address a').attr('href', this.url);
  $newSite.find('#site-image').attr('src', this.imageURL);
  $newSite.find('section.site-caption').html(this.caption);
  // $newSite.find('time[pubdate]').attr('title', this.published);
  $newSite.removeClass('template');
  return $newSite;
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


// var source   = $("#entry-template").html();
// var template = Handlebars.compile(source);
