// const carouselSlide = document.querySelector(".carousel-slide");
// const carouselImages = document.querySelectorAll(".carousel-slide img");

// // buttons

// const prevBtn = document.querySelector("#prevBtn");
// const nextBtn = document.querySelector("#nextBtn");

// // counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;
// carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

// // button listener

// nextBtn.addEventListener("click", () => {
//   if (counter >= carouselImages.length - 1) return;
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter++;
//   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
// });

// prevBtn.addEventListener("click", () => {
//   if (counter <= 0) return;
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter--;
//   carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
// });

// carouselSlide.addEventListener("transitionend", () => {
//   if (carouselImages[counter].id === "lastClone") {
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - 2;
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//   }
//   if (carouselImages[counter].id === "firstClone") {
//     carouselSlide.style.transition = "none";
//     counter = carouselImages.length - counter;
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//   }
// });

// const slides = document.querySelectorAll(".slide");
// const next = document.querySelector("#next");
// const prev = document.querySelector("#prev");
// const auto = true;
// const intervalTime = 2000;
// let slideInterval;

// const nextSlide = () => {
//   // get current class
//   const current = document.querySelector(".current");
//   // remove current class
//   current.classList.remove("current");
//   // check for next slide
//   if (current.nextElementSibling) {
//     // add current to next sibling
//     current.nextElementSibling.classList.add("current");
//   } else {
//     // add current to start
//     slides[0].classList.add("current");
//   }
//   setTimeout(() => current.classList.remove("current"));
// };

// const prevSlide = () => {
//   // get current class
//   const current = document.querySelector(".current");
//   // remove current class
//   current.classList.remove("current");
//   // check for prev slide
//   if (current.previousElementSibling) {
//     // add current to prev sibling
//     current.previousElementSibling.classList.add("current");
//   } else {
//     // add current to last
//     slides[slides.length - 1].classList.add("current");
//   }
//   setTimeout(() => current.classList.remove("current"));
// };

// // button events
// next.addEventListener("click", () => {
//   nextSlide();
// });

// prev.addEventListener("click", () => {
//   prevSlide();
// });

// // auto slide
// if (auto) {
//   // run next slide at interval time
//   slideInterval = setInterval(nextSlide, intervalTime);
// }

const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true; // Auto scroll
const intervalTime = 2500;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}
