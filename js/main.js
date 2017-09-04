// Make it rain!

/* ----------------------------------------
Main
------------------------------------------- */

  $('.nav-reservations').on('click', function (){
    event.preventDefault();
    $('.opentable').toggleClass('sidebar');
    $('.close').addClass('sidebar');
  });
  $('.close').on('click', function(){
    $('.opentable').removeClass('sidebar');
  });


  $('.header-reservations').on('click', function (){
    event.preventDefault();
    $('.opentable').toggleClass('sidebar');
    $('.close').addClass('sidebar');
  });
  $('.close').on('click', function(){
    $('.opentable').removeClass('sidebar');
  });


  $('.view-menu').click(function(){
   window.location.href='menu.html';
})

$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=300) {
	 $('.intro h2').fadeIn(750);
 }
 else {
  $('.intro h2').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=300) {
	 $('.intro h4').fadeIn(750);
 }
 else {
  $('.intro h4').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=500) {
	 $('.intro p').fadeIn(750);
 }
 else {
  $('.intro p').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=550) {
	 $('.intro img').fadeIn(750);
 }
 else {
  $('.intro img').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=770) {
	 $('.awards img').fadeIn(750);
 }
 else {
  $('.awards img').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1150) {
	 $('.menu h2').fadeIn(750);
 }
 else {
  $('.menu h2').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1250) {
	 $('.view-menu').fadeIn(750);
 }
 else {
  $('.view-menu').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
// Scroll for the h2
 if (distanceScrolled>=1750) {
	 $('.exclusive h2').fadeIn(750);
 }
 else {
  $('.exclusive h2').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1800) {
	 $('.exclusive h3').fadeIn(750);
 }
 else {
  $('.exclusive h3').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1850) {
	 $('.exclusive h4').fadeIn(750);
 }
 else {
  $('.exclusive h4').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1970) {
	 $('.exclusive p').fadeIn(750);
 }
 else {
  $('.exclusive p').fadeOut(750);
 }
});



/* ----------------------------------------
About Blue Dragon
------------------------------------------- */
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=275) {
	 $('#blue-ginger h2').fadeIn(750);
 }
 else {
  $('#blue-ginger h2').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=400) {
	 $('#blue-ginger p').fadeIn(750);
 }
 else {
  $('#blue-ginger p').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=650) {
	 $('#blue-ginger ul').fadeIn(750);
 }
 else {
  $('#blue-ginger ul').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=400) {
	 $('#blue-ginger-img img').fadeIn(750);
 }
 else {
  $('#blue-ginger-img img').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=850) {
	 $('#gift-card h2').fadeIn(750);
 }
 else {
  $('#gift-card h2').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1100) {
	 $('#gift-card p').fadeIn(750);
 }
 else {
  $('#gift-card p').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1320) {
	 $('#gift-card button').fadeIn(750);
 }
 else {
  $('#gift-card button').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1100) {
	 $('#gift-card-img img').fadeIn(750);
 }
 else {
  $('#gift-card-img img').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1500) {
	 $('#delivery h2').fadeIn(750);
 }
 else {
  $('#delivery h2').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1650) {
	 $('#delivery p').fadeIn(750);
 }
 else {
  $('#delivery p').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1650) {
	 $('.doordash').fadeIn(750);
 }
 else {
  $('.doordash').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1850) {
	 $('#delivery a').fadeIn(750);
 }
 else {
  $('#delivery a').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1850) {
	 $('.caviar').fadeIn(750);
 }
 else {
  $('.caviar').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=1900) {
	 $('.grubhub').fadeIn(750);
 }
 else {
  $('.grubhub').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=2100) {
	 $('#catering h2').fadeIn(750);
 }
 else {
  $('#catering h2').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=2200) {
	 $('#catering h4').fadeIn(750);
 }
 else {
  $('#catering h4').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=2200) {
	 $('#catering p').fadeIn(750);
 }
 else {
  $('#catering p').fadeOut(750);
 }
});

$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=2375) {
	 $('#catering ul').fadeIn(750);
 }
 else {
  $('#catering ul').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=2500) {
	 $('.view-catering-menu').fadeIn(750);
 }
 else {
  $('.view-catering-menu').fadeOut(750);
 }
});
$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=2300) {
	 $('#catering-img p').fadeIn(750);
 }
 else {
  $('#catering-img p').fadeOut(750);
 }
});
  /* ----------------------------------------
  About Ming
  ------------------------------------------- */
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=130) {
  	 $('#aboutming h2').fadeIn(750);
   }
   else {
    $('#aboutming h2').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=275) {
  	 $('#aboutming p').fadeIn(750);
   }
   else {
    $('#aboutming p').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=620) {
  	 $('#aboutming img').fadeIn(750);
   }
   else {
    $('#aboutming img').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=890) {
  	 $('#aboutming-links h3').fadeIn(750);
   }
   else {
    $('#aboutming-links h3').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=1150) {
     $('#aboutming-links p').fadeIn(750);
   }
   else {
    $('#aboutming-links p').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=1650) {
  	 $('#aboutming-exclusive h3').fadeIn(750);
   }
   else {
    $('#aboutming-exclusive h3').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=1780) {
     $('#aboutming-exclusive p').fadeIn(750);
   }
   else {
    $('#aboutming-exclusive p').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=2210) {
     $('#aboutming-exclusive h4').fadeIn(750);
   }
   else {
    $('#aboutming-exclusive h4').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  /*console.log('The distance scrolled is: ' + distanceScrolled);*/
   if (distanceScrolled>=2350) {
     $('#simplyming h2').fadeIn(750);
   }
   else {
    $('#simplyming h2').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  /*console.log('The distance scrolled is: ' + distanceScrolled);*/
   if (distanceScrolled>=2530) {
     $('#simplyming-aside').fadeIn(750);
   }
   else {
    $('#simplyming-aside').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  /*console.log('The distance scrolled is: ' + distanceScrolled);*/
   if (distanceScrolled>=2530) {
     $('#simplyming p').fadeIn(750);
   }
   else {
    $('#simplyming p').fadeOut(750);
   }
  });



/* ----------------------------------------
Menu
------------------------------------------- */


  $('.lunch-tab').on('click', function(){
    $('.selected-tab').removeClass('selected-tab');
    $('.menu-item').removeClass('fade-in-active');
    $('#menu1').toggleClass('fade-in-active').fadeIn(600);
    $('.lunch-tab').addClass('selected-tab');
  });
  $('.dinner-tab').on('click', function(){
      $('.selected-tab').removeClass('selected-tab');
    $('.menu-item').removeClass('fade-in-active');
    $('#menu2').toggleClass('fade-in-active').fadeIn(600);
    $('.dinner-tab').toggleClass('selected-tab');
  });
  $('.tiki-tab').on('click', function(){
      $('.selected-tab').removeClass('selected-tab');
    $('.menu-item').removeClass('fade-in-active');
    $('#menu3').toggleClass('fade-in-active').fadeIn(600);
    $('.tiki-tab').toggleClass('selected-tab');
  });
  $('.afternoon-tab').on('click', function(){
      $('.selected-tab').removeClass('selected-tab');
    $('.menu-item').removeClass('fade-in-active');
    $('#menu4').toggleClass('fade-in-active').fadeIn(600);
    $('.afternoon-tab').toggleClass('selected-tab');
  });
  $('.catering-tab').on('click', function(){
    $('.selected-tab').removeClass('selected-tab');
    $('.menu-item').removeClass('fade-in-active');
    $('#menu5').toggleClass('fade-in-active').fadeIn(600);
    $('.catering-tab').toggleClass('selected-tab');
  });


  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=125) {
  	 $('.nav-menu-tabs li').fadeIn(750);
   }
   else {
    $('.nav-menu-tabs li').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=225) {
  	 $('.tab-content').fadeIn(750);
   }
   else {
    $('.tab-content').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=1000) {
  	 $('.allergy h2').fadeIn(750);
   }
   else {
    $('.allergy h2').fadeOut(750);
   }
  });
  $(window).on('scroll', function () {
  var distanceScrolled = $(window).scrollTop();

  console.log('The distance scrolled is: ' + distanceScrolled);
   if (distanceScrolled>=1100) {
  	 $('.allergy p').fadeIn(750);
   }
   else {
    $('.allergy p').fadeOut(750);
   }
  });


  //If the .lunchtab is selected
    //Then the .lunchtab will be color: #703030;
    //When another tab is selected the .lunchtab will removeclass .selected-tab

/* ----------------------------------------
Responsive Design
------------------------------------------- */

$('.hamburger').on('click', function (){
  $('.side-nav').toggleClass('open');
});
$('.exit   ').on('click', function(){
  $('.side-nav').removeClass('open');
});
