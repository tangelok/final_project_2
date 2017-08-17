// Make it rain!

/* ----------------------------------------
Main
------------------------------------------- */

  $('.header-reservations').on('click', function (){
    $('.sidebar').toggleClass('active');
  });
  $('.close').on('click', function(){
    $('.sidebar').removeClass('active');
  });

  $('.nav-reservations').on('click', function (){
    $('.sidebar').toggleClass('active');
  });
  $('.close').on('click', function(){
    $('.sidebar').removeClass('active');
  });

  // If you click on the reservation button (.header-reservations) (.nav-reservations)
   //Then a pop-up will appear allowing you to make a reservation through OpenTable



  //If you have scrolled x pixels
    // Then image ____ will fade In
  //Else

//If you click on one of the nav links
  //Then that will be a different color in the nav Bar (.selected-page)
  $('a.nav-menu').on('click', function(){
    event.preventDefault();
    $('.nav-menu').addClass('selected-page')
  });

/* ----------------------------------------
About Blue Dragon
------------------------------------------- */
//If you click on the PayPal option
  //Then you will be able to pay through PayPal

//If you have scrolled x pixels
  // Then image ____ will fade In
//Else

$(window).on('scroll', function () {
var distanceScrolled = $(window).scrollTop();

console.log('The distance scrolled is: ' + distanceScrolled);
 if (distanceScrolled>=500) {
	 $(.about).fadeIn(350);
 } else {
	 $(.about).fadeOut(350);
 }

});


  /* ----------------------------------------
  About Ming
  ------------------------------------------- */
  // If you hover over any of the recipes
    //Then it will flip over to the recipe and directions on how to make it

    //If you have scrolled x pixels
      // Then image ____ will fade In
    //Else
