new WOW().init();


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var button = document.getElementById("scroll-to-top-btn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

document.getElementById("scroll-to-top-btn").addEventListener("click", function() {
  document.body.scrollTop = 0; /* For Safari */
  document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE and Opera */
});
