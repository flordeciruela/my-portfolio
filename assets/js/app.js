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

	$("#flash-bitacora").on('click', function(event) {
		window.open('https://proyecto-pinterest.herokuapp.com/');
	});

	$("#yape").on('click', function(event) {
		window.open('https://yape-wreyes.herokuapp.com/');
	});

	$("#labcar").on('click', function(event) {
		window.open('https://flordeciruela.github.io/Labcar/');
	});

  /*
  var x = $(".anim");
  // Start the animation with JavaScript
  function myFunction() {
      x.style.WebkitAnimation = "diagon 1s 1"; // Code for Chrome, Safari and Opera
      x.style.animation = "diagon 1s 1";       // Standard syntax
  }

  for (i = 0; i < x.length; i++) {
      x[i].addEventListener("webkitAnimationEnd", myEndFunction);
  	x[i].addEventListener("animationend", myEndFunction);
  }

  function myEndFunction() {
      this.className += " ated";
  }
  */
})
