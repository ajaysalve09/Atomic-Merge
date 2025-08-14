// Initialize lightGallery on HTML images
lightGallery(document.getElementById('lightGallery'), {
  plugins: [lgZoom, lgThumbnail],
  speed: 400,
  zoom: true,
  download: false,
  thumbnail: true
});

// Open gallery on button click (simulates clicking the first image)
document.getElementById('openGalleryBtn').addEventListener('click', () => {
  document.querySelector('#lightGallery a').click();
});
