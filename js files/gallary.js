const openGalleryBtn = document.getElementById("openGalleryBtn");
let galleryInstance = null;

// Initialize LightGallery
galleryInstance = lightGallery(document.getElementById('lightGallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 400,
  zoom: true,
  download: false,
  thumbnail: true
});

// Open gallery + push history state
openGalleryBtn.addEventListener("click", () => {
  history.pushState({ gallery: true }, ""); // Save state
  document.querySelector('#lightGallery a').click();
});

// Detect back button
window.addEventListener("popstate", (event) => {
  if (event.state?.gallery) {
    // Close LightGallery without reloading game
    if (galleryInstance) {
      galleryInstance.closeGallery();
    }
    // Restore UI (learn page, game page, whatever was open)
    if (typeof learnPage !== "undefined") {
      learnPage.style.display = "block";
    }
  }
});
