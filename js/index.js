"use strict";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function twinkle(array, index, className) {
   setTimeout(function () {
      $(array[index]).addClass(className);
      index++;
      if (index < array.length+1) {
         twinkle(array, index, className);
      }
   }, 300)
}

var counter = 0,
    delay = 0;

function animateTwinkle(array, counter, delay) {
  setTimeout(function () {
    twinkle(array[counter].name, array[counter].i, 'animate-fade-in');
    counter++;
    delay =+ 100;
    console.log(counter);
    if (counter < 4) {
      animateTwinkle(array, counter,delay);
    }   
  }, delay );
}

//scrolls to #{blah}link
function goToByScroll(id) {
    // Remove "link" from the ID
    id = id.replace("link", "");
    // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        { duration: 'slow', easing: 'swing'});
}

var linkID = "";

function highlightLink(id) {
    // Add "link" from the ID
    linkID = id + "link";
    // Highlight relevant link
    $("#"+linkID).css({"border-bottom":"2px solid white"}).parent().siblings().children().css({"border-bottom":"none"});
}

$(function() {
  var letters1 = $('.twinkle div');
  $(letters1).addClass('invisible');
  $('#down-arrow').addClass('invisible');
  shuffle(letters1);
  var letters2 = letters1.splice(0, Math.floor(letters1.length / 4)),
      letters3 = letters1.splice(0, Math.floor(letters1.length / 3)),
      letters4 = letters1.splice(0, Math.floor(letters1.length / 2));
  
  var letters = [ { name:letters1, i:0 },
                  { name:letters2, i:0 },
                  { name:letters3, i:0 },
                  { name:letters4, i:0 }
                ];

  animateTwinkle(letters, counter, delay);
  setTimeout(function(){
    $('.twinkle div').removeClass('invisible animate-fade-in');
    $('#down-arrow').addClass('animate-fade-in animate-arrow');
  },4000);

  $("nav > ul > li > a").click(function(e) { 
    // Prevent a page reload when a link is pressed
    e.preventDefault(); 
    
    // Call the scroll function
    goToByScroll($(this).attr("id"));
    
    // Highlight / unhighlight link on click
    $(this).parent().siblings().children().css({"border-bottom":"none"});
    $(this).css({"border-bottom":"2px solid white"});
    $('#toplink').css({"border-bottom":"none"});
  });

  // Highlight / unhighlight link on hover
  $("li > a").hover(function(){
    $(this).addClass("highlight");
      }, function(){
    $(this).removeClass("highlight");
      });
        
  $("section").hover(function(){
    // Highlight link when scrolling
    highlightLink($(this).attr("id"));
    $('#toplink').css({"border-bottom":"none"}); 
  });


  //pop and rotate RSVP
  var $rsvp = $(".rsvp-button"), degree = 0, timer;
  rotate();
  function rotate() {
      
    $rsvp.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});  
    $rsvp.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
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
      $window = $(window);


  if ( $window.scrollTop() >= distance ) {
      $('header').removeClass('fixed');
      $('nav').removeClass('invisible nav-on-view');
    } else {
       $('header').addClass('fixed');
       $('circle').attr("class", "");
       $('text').attr('class','');
       $('nav').addClass('invisible nav-on-view');
       var marginTop = $('.fixed').css('margin-top');
           marginTop = parseInt(marginTop, 10);
       var h1_from_top = window.innerHeight / 2 + marginTop;
    }
    if ( $window.scrollTop() >= distance+window.innerHeight*0.8 ) {      
      $('circle').attr("class", "pop-in");
      $('text').attr('class','rsvp-font-size');
    }

  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
      $('header').removeClass('fixed');
      $('nav').removeClass('invisible nav-on-view');
    } else {
       $('header').addClass('fixed');
       $('circle').attr("class", "");
       $('text').attr('class','');
       $('nav').addClass('invisible nav-on-view');
       marginTop = $('.fixed').css('margin-top');
       marginTop = parseInt(marginTop, 10);
       h1_from_top = window.innerHeight / 2 + marginTop;
        $('.title-header').css('padding-top', h1_from_top);
    }
    if ( $window.scrollTop() >= distance+window.innerHeight*0.8 ) {      
      $('circle').attr("class", "pop-in");
      $('text').attr('class','rsvp-font-size');
    }
  });

});

$( window ).resize(function() {
  marginTop = $('.fixed').css('margin-top');
  marginTop = parseInt(marginTop, 10);
  h1_from_top = window.innerHeight / 2 + marginTop;

  $('.title-header').css('padding-top', h1_from_top);
});