$(function() {

  "use strict";

  /*===============================================
    Scroll Spy
  ===============================================*/
  $('body').scrollspy({ 
    target: '.nav',
    offset: 60
  });

  /*===============================================
    Smooth Scrolling
  ===============================================*/
  var htmlBody = $("html,body");
  var smoothLinks = $(".nav-link");

  smoothLinks.on("click", function(e) {
      htmlBody.animate({scrollTop: $(this.hash).offset().top - 60}, 700, "easeInOutQuart");  
    e.preventDefault();
  });

});