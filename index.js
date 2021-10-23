span = document.querySelector(".img-p-arrow-container");
button = document.querySelector(".button-to-top");

const myScrollFunc1 = function() {
  var y = window.scrollY;
  if (y >= 100) {
    span.style.opacity = "0%"
  } else {
    span.style.opacity = "100%"
  }
};

const myScrollFunc2 = function() {
  var y = window.scrollY;
  if (y >= 800) {
    button.style.opacity = "100%"
    button.style.cursor = "pointer"
  } else {
    button.style.opacity = "0%"
    button.style.cursor = "default"
  }
};

window.addEventListener("scroll", myScrollFunc1);
window.addEventListener("scroll", myScrollFunc2);

function toTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}