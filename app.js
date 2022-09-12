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
  }, 2000)

  setTimeout(() =>{
    intro.style.top = "-100vh"
  }, 3000)
})

class TypeWriter {
  constructor(txtElement, words, wait =3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 22);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 75;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}