$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip();
  $(".navbar a, #home a, #contact a[href='#myPage']").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        window.location.hash = hash;
      });
    }
  });

  $(".navbar a").on('click', function(event) {
    $(".navbar-collapse").removeClass('in');
  });

  var position = 0;
  var interval = setInterval(function() {
  position -= 1;
  $("#home .row").css({ "background-position":+ position +"px 0px" })
  }, 35);var position = 0;
  var interval = setInterval(function() {
  position -= 1;
  $("body").css({ "background-position":+ position +"px 0px" })
  }, 35);

	$(window).scroll(function() {
	  $(".slideanim").each(function(){
	    var pos = $(this).offset().top;
	    var winTop = $(window).scrollTop();
	    if (pos < winTop + 600) {
	      $(this).addClass("slide");
	    }
	  });
	});

	$("#flash").on('click', function(event) {
		window.open('https://flordeciruela.github.io/Flash-bitacora/');
	});

	$("#yape").on('click', function(event) {
		window.open('https://yape-wreyes.herokuapp.com/');
	});

	$("#labcar").on('click', function(event) {
		window.open('https://flordeciruela.github.io/Labcar/');
	});

})
