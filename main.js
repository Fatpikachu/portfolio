// $(document).ready(function (){
//   $('.menu-toggler').on('click', function(){
//     $(this).toggleClass('open');
//     $('.top-nav').toggleClass('open');
//   })
// })

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

$(document).on("scroll", function(){
  if
    ($(document).scrollTop() > 100){
    $(".header").addClass("shrink");
  }
  else
  {
    $(".header").removeClass("shrink");
  }

  AOS.init({
    easing: 'ease',
    duration: 2000
  })
});

$(document).ready(function (){
  $('.submit').click(function(event){
    // event.preventDefault()
    console.log('this was clicked')

    var email = $('#email').val();
    var name = $('#name').val();
    var message = $('#message').val();

    //validation


  })
})