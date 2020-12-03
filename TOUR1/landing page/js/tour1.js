var i = 0;
            var txt = 'Welcome to Tour-1';
            var speed = 600;

            function typeWriter() {
                  if (i < txt.length) {
                        document.getElementById("banner_text").innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(typeWriter, speed);
                  }
            }
window.onload=timeout;
function timeout()
{
      window.setTimeout("redirect()",10000);
}
function redirect()
{
      window.location="../html/Tourpage.html";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}