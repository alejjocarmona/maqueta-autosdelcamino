//Sticky header when first vh is done
var viewportHeight;

window.addEventListener('DOMContentLoaded', (e) => {
  viewportHeight = window.innerHeight;
});

window.addEventListener("scroll", function() {
  var navBar = document.querySelector(".navigation");
  navBar.classList.toggle("sticky", window.scrollY > viewportHeight);
});

//Slider banner

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("banner_slide");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}


//dropdown cars mobile

var mobileCars = document.querySelector(".mobile_cars");

mobileCars.addEventListener("click", function () {
  mobileCars.classList.toggle("active_cars");
  var menuMobileCars = this.nextElementSibling;
  if (menuMobileCars.style.maxHeight) {
    menuMobileCars.style.maxHeight = null;
  } else {
    menuMobileCars.style.maxHeight = menuMobileCars.scrollHeight + "px";
  }
})

//Mobile navigation through the page

//Open Mobile Menu

document.querySelector(".navigation_mobile_options .icon_plus").addEventListener("click", function() {
  document.querySelector(".navigation_mobile_menu").classList.toggle("active_menu");
})

function closeMobileMenu() {
  document.querySelector(".navigation_mobile_menu").classList.remove("active_menu");
}

//Clicking one of the parts of the page

var mobileLinks = document.getElementsByClassName("mobile_option");

for (i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", closeMobileMenu)
}

//Clicking the X in the menu

document.querySelector(".top_options .icon_close").addEventListener("click", closeMobileMenu)

//Dropdown questions

var acc = document.getElementsByClassName("wrap");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active_terms");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}