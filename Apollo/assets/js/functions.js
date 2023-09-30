$(document).ready(function () {

	function smoothScroll(target) {
	  $('html, body').animate({
		scrollTop: $(target).offset().top
	  }, 800); 
	}
  
	$('.nav-link').on('click', function (e) {
	  e.preventDefault(); 
  
	  var target = $(this).attr('href'); 
  
	  smoothScroll(target);
  
	});
  
	function nav() {
	  $('.nav-toggle').click(function () {
		$('.nav').toggleClass('open');
	  });
	}
  
	nav();
  });
  