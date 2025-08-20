const images = document.querySelectorAll("img");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carrousel");

console.log(images);

let index = 0;

next.addEventListener("click", () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  carousel.style.transform = `translateX(${-index * 600}px)`;
});

previous.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  carousel.style.transform = `translateX(${-index * 600}px)`;
});
