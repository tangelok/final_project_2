// Make it rain!

/* ----------------------------------------
Main
------------------------------------------- */
 // If you click on the reservation button (.header-reservations) (.nav-reservations)
  //Then a pop-up will appear allowing you to make a reservation through OpenTable
//

  $('.about button').on('click', function (){
    $('.sidebar').toggleClass('active');
  });
  $('.close').on('click', function(){
    $('.sidebar').removeClass('active');
  });

  //If you have scrolled x pixels
    // Then image ____ will fade In
  //Else

  //If you click on the (.view-menu) button
    //Then it will take you to menu.html

/* ----------------------------------------
About Blue Dragon
------------------------------------------- */
//If you click on the PayPal option
  //Then you will be able to pay through PayPal

//If you click on the (.view-catering-menu) button
  //Then it will take you to the menu.html
