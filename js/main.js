// Make it rain!

/* ----------------------------------------
Main
------------------------------------------- */
 // If you click on the .reservation button
  //Then a pop-up will appear allowing you to make a reservation through OpenTable

  $('.about button').on('click', function (){
    $('.sidebar').toggleClass('active');
  });
  $('.close').on('click', function(){
    $('.sidebar').removeClass('active');
  });
  
/* ----------------------------------------
About Ming
------------------------------------------- */
