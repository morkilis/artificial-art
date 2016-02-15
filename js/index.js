"use strict";

$(function() {

   //pop and rotate RSVP
  var $elie = $(".rsvp-button"), degree = 0, timer;
    rotate();
    function rotate() {
      
      $elie.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
      $elie.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
      timer = setTimeout(function() {
          ++degree; rotate();
      },15);
    }

    $(".rsvp-button").hover(function() {
      clearTimeout(timer);
    }, function() {
      rotate();
    });

  //unpin the header
  var distance = $('.title-header').offset().top,
      $window = $(window),
      h1_from_top = window.innerHeight / 2 - 180;

  $('.title-header').css('padding-top', h1_from_top);
  console.log(h1_from_top);

  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
      $('header').removeClass('fixed');
      $('circle').css({ WebkitTransform: 'scale(1,1)'});
      $('text').css('font-size','28px');
      $('.rsvp-button').removeClass('invisible');
    } else {
       $('header').addClass('fixed');
       $('circle').css({ WebkitTransform: 'scale(0,0)'});
       $('text').css('font-size','0');
       // $('.rsvp-button').addClass('invisible');
    }
  });

});