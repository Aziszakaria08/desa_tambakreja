const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");
const dropdown = document.querySelector(".dropdown");
const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", function (e) {
  e.preventDefault();
  dropdown.classList.toggle("open");
});

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamburger.classList.toggle("is-active");
});

hamburger.addEventListener("click", () => {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line) => line.classList.toggle("change"));
});

new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
