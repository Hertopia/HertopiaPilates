const carouselImages = document.querySelector(".carousel-images");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const totalImages = document.querySelectorAll(".carousel img").length;

function updateCarousel() {
  carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});

// 自动轮播功能
setInterval(() => {
  currentIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
  updateCarousel();
}, 8000);
