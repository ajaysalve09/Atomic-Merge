const modal = document.getElementById("howToPlayModal");
const btn = document.getElementById("howToPlayBtn");
const closeBtn = document.querySelector(".close-btn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideTrack = document.getElementById("slideTrack");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

// Open modal
btn.addEventListener("delayed-click", () => {
  modal.style.display = "block";
  currentSlide = 0;
  updateSlider();
  history.pushState({ modal: true }, ""); // for back button support
});

// Close modal
closeBtn.addEventListener("delayed-click", () => {
  modal.style.display = "none";
  history.back();
});

// Next slide
nextBtn.addEventListener("click", () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0; // wrap to first
  }
  updateSlider();
});

// Previous slide
prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 1; // wrap to last
  }
  updateSlider();
});

// Update slide position
function updateSlider() {
  const slideWidth = slides[0].offsetWidth;
  slideTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  // Show/hide buttons (optional, if you want them always visible just remove these two lines)
  prevBtn.style.display = slides.length > 1 ? "block" : "none";
  nextBtn.style.display = slides.length > 1 ? "block" : "none";
}

// Fix slider position on resize
window.addEventListener("resize", updateSlider);

// Handle browser back button
window.addEventListener("popstate", (event) => {
  if (!event.state || !event.state.modal) {
    modal.style.display = "none";
  }
});
