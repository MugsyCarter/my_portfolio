'use strict';
//on page load the elements with the 'vis' attribute are made visible
$(document).ready(function(){
  $('div:not(".head")').slideUp();;
  $('.body').delay(400).slideDown('slow');
  $('.about').delay(700).slideDown('slow');
  $('.foot').delay(900).slideDown('slow');
});


  //This function displays the hidden content when clicked
function openBar(){
  $('div[data-vis="vis"]').on('click', function(){
    $(this).slideUp('slow');
    $(this).prev().slideDown('slow');
  });
};

//This function displays the original categry again when clicked
function closeBar(){
  $('div[data-vis="invis"]').on('click', function(){
    $(this).slideUp('slow');
    $(this).next().slideDown('slow');
  });
};

//this function displays the menu when you click on the 'hamburger'

function openMenu(){
  $('.icon-menu').on('click', function(){
    alert('button!');
    $('.body').show();
  });
};

openBar();
closeBar();
openMenu();
