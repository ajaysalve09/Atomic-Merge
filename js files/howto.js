const modal = document.getElementById("howToPlayModal");
const btn = document.getElementById("howToPlayBtn");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideTrack = document.getElementById("slideTrack");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

btn.addEventListener("delayed-click", () => {
  modal.style.display = "block";
  currentSlide = 0;
  updateSlider();
});

closeBtn.addEventListener("delayed-click", () => {
  modal.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  slideTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  // Show/hide buttons
  prevBtn.style.display = currentSlide === 0 ? "none" : "block";
  nextBtn.style.display = currentSlide === slides.length - 1 ? "none" : "block";
}

// Resize support to fix slider on window resize
window.addEventListener("resize", () => {
  updateSlider();
});
