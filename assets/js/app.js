$(document).ready(function(){

  //Tooltip
  $('[data-toggle="tooltip"]').tooltip();
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
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
		window.open('https://github.com/RuthMeryCardenas/Proyecto-Pinterest');
	});

	$("#yape").on('click', function(event) {
		window.open('https://yape-wreyes.herokuapp.com/');
	});

	$("#gasfinder").on('click', function(event) {
		window.open('https://flordeciruela.github.io/gasfinder/');
	});

})
