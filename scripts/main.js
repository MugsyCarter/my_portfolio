'use strict';
//on page load the elements with the 'vis' attribute are made visible
$(document).ready(function(){
  // $('[data-more="less"]').hide();
  //the above line is currently not doing anything, I may un-comment it if I want to addd "show more" functionality
  $('div:not(".head")').hide();
  $('.body').delay(300).slideDown('slow');
  $('.about').delay(500).slideDown('slow');
  $('.foot').delay(600).slideDown('slow');
  $('.programs').delay(650).slideDown('slow');
});



  //This function displays the hidden content in the about and contact bars when clicked
function openBar(){
  $('div[data-vis="vis"]').on('click', function(){
    $(this).slideUp('fast');
    $(this).prev().slideDown('fast');
  });
};

//This function displays the original category again when clicked
function closeBar(){
  $('div[data-vis="invis"]').not('.gallery, .programs-page').on('click', function(){
    $(this).slideUp('fast');
    $(this).next().slideDown('fast');
  });
};

//this funciton opens and shows the Web Apps gallery
function openGallery(){
  $('.body').on('click', function(){
    $('.body').slideUp('fast');
    $('.gallery').css('min-height', '80vh');
    $('div').not('.gallery, .site-holder, .gallery-item').css('min-height', '5vh');
    $('.gallery').slideDown('fast');
    $('.gallery-item').delay(300).slideDown('fast');
  });
};

//this function closes the Web Apps gallery
function closeGallery(){
  $('.close-gallery').on('click', function(){
    $('.gallery-item').slideUp('fast');
    $('.gallery').slideUp('fast');
    $('.body').slideDown('fast');
    $('div').css('height', '23vh');
  });
};

//this funciton opens the Programs Page to fill the screen
function openProgramPage(){
  $('.programs').on('click', function(){
    $('div').slideUp('fast');
    $('.programs-page').slideDown().animate({height: '100vh', width: '100vw'}, 1000);
    $('.jsProgram').show().animate({height: '20vh', width: '90vw'}, 1000);
  });
};
//close the programs page and return to the home menu
function closeProgramPage(){
  $('.icon-home3').on('click', function(){
    $('div:not(".programs")').hide();
    $('.head').delay(100).slideDown('slow');
    $('.body').delay(300).slideDown('slow');
    $('.about').delay(500).slideDown('slow');
    $('.foot').delay(600).slideDown('slow');
    $('.programs').delay(650).slideDown('slow');
  });
};




//this button would add show more/show less functionality
// function showMore(){
//   $('.more-button').on('click', function(){
//     $('[data-more="less"]').show();
//   });
// };

openProgramPage();
closeProgramPage();
openGallery();
closeGallery();
openBar();
closeBar();
// showMore();
