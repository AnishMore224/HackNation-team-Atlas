//initialize swiper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  centeredSlides: false,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

let slist = document.querySelectorAll(".carousel-item");
let pic1 = document.querySelector(".pcx1");
let pic2 = document.querySelector(".pcx2");
let pic3 = document.querySelector(".pcx3");

function swipe() {

  setTimeout(() => {
    pic1.classList.remove("avtive")
    pic2.classList.add("active")
  }, 2);
}
// swipe();