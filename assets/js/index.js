const elements = [
  document.querySelector("#TechCrunch"),
  document.querySelector("#Blinks"),
  document.querySelector("#Launches"),
  document.querySelector("#BREAKPOINT"),
  document.querySelector("#PayPal"),
];
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const sliderBoxes = document.querySelectorAll(".slider-box");
const dots = document.querySelectorAll(".dot");
const xpImgs = document.querySelectorAll(".xp-img");
const shadows = document.querySelectorAll(".shadow");
const xpImgBoxes = document.querySelectorAll("#img-box");
const shadowBoxes = document.querySelectorAll("#shadow-box");

let currentSlide = 0;

function swapContant() {
  sliderBoxes.forEach((slide) => {
    slide.classList.remove("active");
  });
  sliderBoxes[currentSlide].classList.add("active");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
  });
  dots[currentSlide].classList.add("active");
  currentSlide = (currentSlide + 1) % sliderBoxes.length;
}
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    swapContant();
  });
});
setInterval(swapContant, 1000);
function goToSlide(index) {
  sliderBoxes.forEach((sliderBox, i) => {
    if (i === index) {
      sliderBox.classList.add("active");
    } else {
      sliderBox.classList.remove("active");
    }
  });
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
  currentSlide = index;
}
arrowLeft.addEventListener("click", () => {
  if (currentSlide > 0) {
    goToSlide(currentSlide - 1);
  } else {
    goToSlide(sliderBoxes.length - 1);
  }
});
arrowRight.addEventListener("click", () => {
  if (currentSlide < sliderBoxes.length - 1) {
    goToSlide(currentSlide + 1);
  } else {
    goToSlide(0);
  }
});
goToSlide(0);
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
});
let counter = 0;
const numElement = document.getElementById("num-counter");
function updateCounter() {
  const formatedCounter = String(counter)
    .padStart(12, "0")
    .replace(/(\d{3})(?=\d)/g, "$1,");
  numElement.textContent = formatedCounter;
  counter++;
}
setInterval(updateCounter, 1);

const dropdownMenu = document.querySelector(".dropdown-menu");
const languageBtn = document.querySelector(".language");
const menuIicon = document.querySelector(".menu-icon");
const navbarItems = document.querySelector("#navbar-items");
const closeIcon = document.querySelector(".close-icon");

languageBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("visible");
});

menuIicon.addEventListener("click", () => {
  navbarItems.style.visibility = "visible";
  menuIicon.style.visibility = "hidden";
  closeIcon.style.visibility = "visible";
});

closeIcon.addEventListener("click", () => {
  navbarItems.style.visibility = "hidden";
  menuIicon.style.visibility = "visible";
  closeIcon.style.visibility = "hidden";
});
