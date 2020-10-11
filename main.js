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

  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll('.nav li');
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
    navLinks.forEach((link, i) => {
      if(link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navFade 0.8s ease forwards ${i / 7 + 0.5}s`;
      }
    })
    burger.classList.toggle('toggle');
  })

$("#nav li").mouseenter(function(){
  $(this).children("a").css({"font-size": "1.1em", "color": "black"})
  $(this).children("i").css({"transform": "scale(1.1)", "color": "black"})
})

$("#nav li").mouseleave(function(){
  $(this).children("a").css({"font-size": "1em", "color": "white"})
  $(this).children("i").css({"transform": "", "color": "white"})
})

$(document).on("scroll", function(){
  if($(document).scrollTop() > 100){
    $(".header").addClass("shrink");
    $(".bar").addClass("bar-shrink");
  }else{
    $(".header").removeClass("shrink");
    $(".bar").removeClass("bar-shrink");
  }
});

$(document).ready(function (){
  $('.submit').click(function(event){
    // event.preventDefault()
    var email = $('#email').val();
    var name = $('#name').val();
    var message = $('#message').val();
    //validation
  })
})


$(window).scroll(function(){
  if ($(window).width() < 960) {
    $('.ls').each(function(){
      var height = $(window).height();
  
      var docViewTop = $(window).scrollTop();
      var docViewBottom = $(window).scrollTop() + (height);
      
      var elemTop = $(this).offset().top;
      var elemBottom = (elemTop + $(this).height())*(7/8);
  
      if(elemTop < docViewBottom){
        $(this).addClass('inView');
      } else if((elemTop > docViewBottom)) {
        $(this).removeClass('inView');
      }
    })
  
    $('.rs').each(function(){
      var height = $(window).height();
  
      var docViewTop = $(window).scrollTop();
      var docViewBottom = $(window).scrollTop() + (height);
      
      var elemTop = $(this).offset().top;
      var elemBottom = (elemTop + $(this).height())*(7/8);
  
      if(elemTop < docViewBottom){
        $(this).addClass('inView');
      } else if((elemTop > docViewBottom)) {
        $(this).removeClass('inView');
      }
    })

  } else {
    $('.ls').each(function(){
      var height = $(window).height();
  
      var docViewTop = $(window).scrollTop();
      var docViewBottom = $(window).scrollTop() + (height);
      
      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).height();

      if(((elemTop > docViewTop) && (elemBottom < docViewBottom))){
        $(this).addClass('inView');
      } else if((elemTop > docViewBottom)) {
        $(this).removeClass('inView');
      }
    })
  
    $('.rs').each(function(){
      var height = $(window).height();
  
      var docViewTop = $(window).scrollTop();
      var docViewBottom = $(window).scrollTop() + (height);
      
      var elemTop = $(this).offset().top;
      var elemBottom = elemTop + $(this).height();
  
      if(((elemTop > docViewTop) && (elemBottom < docViewBottom))){
        $(this).addClass('inView');
      } else if((elemTop > docViewBottom)) {
        $(this).removeClass('inView');
      }
    })
  }
})

$('.read-more').click(function(){
  $(this).siblings('.name').css('display', 'none');
  $(this).css('display', 'none');
  $(this).siblings('.box-description').addClass('visible');
  $(this).siblings('img').removeClass('hoverable');
  $(this).siblings('img').addClass('not-hoverable');
})

$('.box-description').click(function(){
  $(this).siblings('.name').css('display', 'block');
  $(this).removeClass('visible');
  $(this).siblings('.read-more').css('display', 'block');
  $(this).siblings('img').addClass('hoverable');
  $(this).siblings('img').removeClass('not-hoverable');
})


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
  this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
  this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="typewrite-blinker">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function() {
  that.tick();
  }, delta);

};

window.onload = function() {
  setTimeout(() => {
    var elements = document.getElementsByClassName('typewrite');
    console.log('the elementssss: ', elements)
    // for (var i=0; i<elements.length; i++) {
        let i = 0;
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        console.log('the toRotate:  ', toRotate)
        new TxtType(elements[i], JSON.parse(toRotate), period);
        
        
        // console.log('the i:   ', i)
    // }
  }, 2000)
};

const t1 = gsap.timeline({defaults: {ease: 'power1.out'}});
t1.fromTo(".typewrite-blinker", {opacity: 1}, {opacity: 1, duration: 1}, '-=5')
t1.fromTo(".typewrite", {opacity: 0}, {opacity: 1, duration: 5})