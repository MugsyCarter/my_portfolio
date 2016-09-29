'use strict';
//on page load the elements with the 'vis' attribute are made visible
$(document).ready(function(){
  $('[data-more="less"]').hide();
  //the above line is currently not doing anything
  $('div:not(".head")').slideUp();
  //the above line is the one that is hiding my gallery items
  $('.body').delay(300).slideDown('slow');
  $('.about').delay(500).slideDown('slow');
  $('.foot').delay(600).slideDown('slow');
});

//Something in this JS file is hiding my gallery items so I can't get them background-color




  //This function displays the hidden content when clicked
function openBar(){
  $('div[data-vis="vis"]').on('click', function(){
    $(this).slideUp('fast');
    $(this).prev().slideDown('fast');

  });
};

//This function displays the original categry again when clicked
function closeBar(){
  $('div[data-vis="invis"]').not('.gallery').on('click', function(){
    $(this).slideUp('fast');
    $(this).next().slideDown('fast');
  });
};

function openGallery(){
  $('.body').on('click', function(){
    $('.body').slideUp('fast');
    $('.gallery').css('min-height', '80vh');
    $('div').not('.gallery, .site-holder, .gallery-item').css('min-height', '5vh');
    $('.gallery').slideDown('fast');
    $('.gallery-item').delay(300).slideDown('fast');
  });
};

function closeGallery(){
  $('.close-gallery').on('click', function(){
    $('.gallery').slideUp('fast');
    $('.body').slideDown('fast');
    $('div').css('height', '23vh');

  });
};


function showMore(){
  $('.more-button').on('click', function(){
    $('[data-more="less"]').show();
  });
};


openGallery();
closeGallery();
openBar();
closeBar();
showMore();
