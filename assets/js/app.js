$(document).ready(function(){

  $('[data-toggle="tooltip"]').tooltip();
  $(".navbar a, #home a, footer a[href='#myPage']").on('click', function(event) {
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

	$("#pinterest").on('click', function(event) {
		window.open('https://proyecto-pinterest.herokuapp.com/');
	});

	$("#yape").on('click', function(event) {
		window.open('https://yape-wreyes.herokuapp.com/');
	});

	$("#gasfinder").on('click', function(event) {
		window.open('https://flordeciruela.github.io/gasfinder/');
	});

})
