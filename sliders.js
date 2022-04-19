$('body').on('click', '.header3', function(e) {
    $('.thirdC').find('.kolekcija').stop().slideUp();
    $(this).closest('.thirdC').find('.kolekcija').stop().slideToggle();
});
var count = 1;
pokazatelj(count);

function iducislajd(n) {
  pokazatelj(count += n);
}

//** 
//function currentSlide(n) {
  //pokazatelj(slideIndex = n);
//}
function pokazatelj(n) {
  var i;
  var slides = document.getElementsByClassName("broj");
  var dots = document.getElementsByClassName("tackica");
  if (n > slides.length) {count = 1}    
  if (n < 1) {count = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[count-1].style.display = "block";  
  dots[count-1].className += " active";
}
