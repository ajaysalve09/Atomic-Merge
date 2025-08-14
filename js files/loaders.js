window.addEventListener("load", () => {
  const splashScreen = document.getElementById("splashScreen");
  const loadingPage = document.getElementById("loadingPage");
  const loader = document.getElementById("loader");
  const mainGame = document.getElementById("mainGame");

  // After 2.5s: fade out splash + immediately fade in loader
  setTimeout(() => {
    splashScreen.style.animation = "fadeOutScale 0.2s ease forwards";

    // Start showing loader at same moment splash is fading out
    loadingPage.style.display = "block";
    loader.style.animation = "fadeInScale 0.1s ease forwards";

    // After fade out, hide splash
    setTimeout(() => {
      splashScreen.style.display = "none";
    }, 400);
  }, 4000);

  // After 8s total: fade out loader and show game
  setTimeout(() => {
    loader.style.animation = "fadeOutScale 0.2s ease forwards";

    setTimeout(() => {
      loader.style.display = "none";
      mainGame.style.display = "block";
      mainGame.style.animation = "fadeInScale 0.2s ease forwards";
    }, 200);
  }, 10000);
});
