const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const pictures = document.querySelector(".pictures");
const circles = document.querySelectorAll(".circle");
let interval;
const startInterval = function () {
  interval = setInterval(() => {
    rightArrow.click();
  }, 5000);
};
let position = 0;

rightArrow.addEventListener("click", () => {
  if (position === -200) position = 0;
  else position = position - 100;
  pictures.style.left = `${position}%`;
  resetCircles();
  activateCircle();
  clearInterval(interval);
  startInterval();
});

leftArrow.addEventListener("click", () => {
  if (position === 0) position = -200;
  else position = position + 100;
  pictures.style.left = `${position}%`;
  resetCircles();
  activateCircle();
  clearInterval(interval);
  startInterval();
});

circles[0].addEventListener("click", () => {
  resetCircles();
  position = 0;
  pictures.style.left = `${position}%`;
  activateCircle();
  clearInterval(interval);
  startInterval();
});

circles[1].addEventListener("click", () => {
  resetCircles();
  position = -100;
  pictures.style.left = `${position}%`;
  activateCircle();
  clearInterval(interval);
  startInterval();
});

circles[2].addEventListener("click", () => {
  resetCircles();
  position = -200;
  pictures.style.left = `${position}%`;
  activateCircle();
  clearInterval(interval);
  startInterval();
});

function resetCircles() {
  circles.forEach((circle) => {
    circle.style.transform = "scale(1)";
  });
}

function activateCircle() {
  if (position === 0) circles[0].style.transform = "scale(1.6)";
  if (position === -100) circles[1].style.transform = "scale(1.6)";
  if (position === -200) circles[2].style.transform = "scale(1.6)";
}

activateCircle();
startInterval();
