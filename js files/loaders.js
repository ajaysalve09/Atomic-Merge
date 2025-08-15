window.addEventListener("load", () => {
  const splashScreen = document.getElementById("splashScreen");
  const loadingPage = document.getElementById("loadingPage");
  const loader = document.getElementById("loader");

  // Show splash immediately
  splashScreen.style.display = "flex";

  // After 4s: fade out splash + fade in loader
  setTimeout(() => {
    splashScreen.style.animation = "fadeOutScale 0.2s ease forwards";
    loadingPage.style.display = "block";
    loader.style.display = "block";
    loader.style.animation = "fadeInScale 0.1s ease forwards";

    // Hide splash after animation
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 200); // match fadeOutScale duration
  }, 4000);

  // After 10s total: fade out loader, show main game
  setTimeout(() => {
    loader.style.animation = "fadeOutScale 0.2s ease forwards";

    setTimeout(() => {
      loader.style.display = "none";
    }, 200);
  }, 10000);
});
