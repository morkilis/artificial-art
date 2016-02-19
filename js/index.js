"use strict";

function getRandom(array) {
   var i = parseInt(Math.random()*(array.length));
    return array[i];
}

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


$(function() {

  var title_letters_array = $('.twinkle div');
  var randomletter = getRandom(title_letters_array);

  function twinkle() {
    // $(randomletter).css('opacity','0');
    for (var i = 0; i <= title_letters_array.length; i++) {
      setTimeout(function(){
        $(title_letters_array[i]).addClass('fade-in-out');
      }, 400);
    }
  }

  // twinkle();
  console.log(randomletter);

  shuffle(title_letters_array);
  console.log(title_letters_array);

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

    $('.hover div').hover(function() {

    });

  //unpin the header
  var distance = $('.title-header').offset().top,
      $window = $(window),
      h1_from_top = window.innerHeight / 2 - 180;

  $('.title-header').css('padding-top', h1_from_top);
  // console.log(h1_from_top);

  $window.scroll(function() {
    if ( $window.scrollTop() >= distance ) {
      $('header').removeClass('fixed');
      $('nav').removeClass('invisible nav-on-view');
    } else {
       $('header').addClass('fixed');
       $('circle').css({ WebkitTransform: 'scale(0,0)'});
       $('text').css('font-size','0');
       $('nav').addClass('invisible nav-on-view');
    }

    if ( $window.scrollTop() >= distance+window.innerHeight*0.8 ) {      
      $('circle').css({ WebkitTransform: 'scale(1,1)'});
      $('text').css('font-size','28px');
    }
  });


  // $('.mouse-sand-box').mousemove(function( event ) {
  //   var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  //   var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
    // $( "span:first" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
    // $( "span:last" ).text( "( event.clientX, event.clientY ) : " + clientCoords );    
  // });

var moveForce = 60; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

// $('.mouse-sand-box').mousemove(function(e) {
//     var docX = $(document).width();
//     var docY = $(document).height();

//     var backgroundPos = $('.marble').css('backgroundPosition').split(" ");
//     //now contains an array like ["0%", "50px"]

//     var imgPosX = backgroundPos[0],
//         imgPosY = backgroundPos[1];

//         console.log(imgPosX,imgPosY);
    
//     var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
//     var moveY = (e.pageY - docY/8) / (docY/8) * -moveForce;
    
//     // var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
//     // var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
//     $('.marble')
//         // .css('background-position', (moveX-200)+'px '+ (moveY-200)+'px');
//         .css('background', 'url(css/marble.jpg) no-repeat '+(moveX-200)+'px '+ (moveY-200)+'px fixed');

//         // .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
// });

});


