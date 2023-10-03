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

//slider
 

const slider = document.querySelector("#full-slide");
const slides = slider.querySelectorAll(".banner li");
const prevButton = slider.querySelector(".prev");
const nextButton = slider.querySelector(".next");
let currentSlide = 0;

function showSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  
  slides[slideIndex].classList.add("active");
  currentSlide = slideIndex;
}


prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});


showSlide(currentSlide);

var mymap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);