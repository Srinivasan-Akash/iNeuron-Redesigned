const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const body = document.getElementsByTagName("body");

var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
  loader.style.display = "none"
})

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});



$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items:1,
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:500,
    smartSpeed:1000,
    autoplayHoverPause:true
  });
});

$('.number').each(function () {
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 10000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});


var swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },keyboard: {
    enabled: true,
  },keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".product-swiper", {
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
  },autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },keyboard: {
    enabled: true,
  }
});


var swiper = new Swiper(".Avengers-swiper", {
  effect: "cards",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },keyboard: {
    enabled: true,
  },loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true
});

var swiper = new Swiper(".myCube", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 1,
  },
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

var swiper = new Swiper(".swiper-container-course", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },keyboard: {
    enabled: true,
  }
});

let intro = document.querySelector("#splash")
let logo = document.querySelector(".splash-data")

window.addEventListener("DOMContentLoaded", () =>{

  setTimeout(() => {
    logo.classList.add("fade")
  }, 1000)

  setTimeout(() =>{
    intro.style.top = "-100vh"
  }, 1500)
})