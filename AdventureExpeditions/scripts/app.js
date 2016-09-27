//Opens Links in a new Window.
var anchors = document.getElementsByClassName("new_window");

for (var i=0; i < anchors.length; i++) {
    anchors[i].onclick = function() { };
	};

for (var i=0; i < anchors.length; i++) {
    anchors[i].onclick = function() {
        window.open(this.href);
        return false;
    };
};

//Displays the Current Date at the bottom of the page.
var today = new Date();
document.write("Today`s date: ");
document.write(today.toDateString());

//Hides the center Pictures
function myFunction() {
    var x = document.getElementById('myDiv');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

//SlideShow
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