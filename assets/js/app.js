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
  /*
	$(window).scroll(function() {
	  $(".slideanim").each(function(){
	    var pos = $(this).offset().top;
	    var winTop = $(window).scrollTop();
	    if (pos < winTop + 600) {
	      $(this).addClass("slide");
	    }
	  });
	});
  */
	$("#flash").on('click', function(event) {
		window.open('https://www.figma.com/proto/uGMrvmRpfDImGrmumc7QjM/Prototipo-de-alta-fidelidad?type=design&node-id=4-5&t=KYqpLMZ8t4zhvRYJ-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A5&mode=design');
	});

	$("#yape").on('click', function(event) {
		window.open('https://docs.google.com/presentation/d/1IdjhiAYwyGbcwfNctMI5wC35aweOwzPd1KHDzsZZhLg/edit#slide=id.g371386a272_0_2');
	});

	$("#labcar").on('click', function(event) {
		window.open('https://www.figma.com/proto/9CPPfIEW5d8km9o7dLLlUq/Fit-30?node-id=50-149&node-type=canvas&t=IA3wg2pb7blNKDZi-1&scaling=scale-down&content-scaling=fixed&page-id=50%3A0%22');
	});

})
