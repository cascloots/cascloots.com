var message = "Come back we miss you 👈";
var original = document.title;

window.onblur = function () { document.title = message; }
window.onfocus = function () { document.title = original; }

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 120px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}