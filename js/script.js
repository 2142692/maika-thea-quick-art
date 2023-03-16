/*var swiper = new Swiper(".swiper-filters", {});*/
/*const mySwiperOne = new Swiper(swiperContainer, parameters);
const swiper = new Swiper(".swiper", {
  direction: "vertical",
  grabCursor: true,
  effect: "flip",
});*/

/*let slideIndex = 1;
showSlides(slideIndex),
  {
    slidePerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 1500,
    },
    breakpoint: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}*/

const swiper = new Swiper(".swiper-screenshots", {
  loop: true, //loop
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 20,
  autoplay: {
    //autoplay
    delay: 2000,
  },
  pagination: {
    //pagination(dots)
    el: ".swiper-pagination",
  },
  navigation: {
    //navigation(arrows)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:
const Swiper = new Swiper(".swiper", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
