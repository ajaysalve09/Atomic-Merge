// HELPING FUNCTION START:
function updateScoreUI() {
  const scoreDisplay = document.getElementById("score");
  const highScoreGame = document.getElementById("highScoreGame");
  const highScoreIntro = document.getElementById("highScoreIntro");
  const movesDisplay = document.getElementById("movesDisplay");

  // Update current score
  if (scoreDisplay) scoreDisplay.textContent = `Score: ${gameState.score}`;

  // Get high score
  let highScore = parseInt(localStorage.getItem("highScore")) || 0;

  // Update high score if needed
  if (gameState.score > highScore) {
    highScore = gameState.score;
    localStorage.setItem("highScore", highScore);
  }

  // Update both intro and game high score displays
  if (highScoreGame) highScoreGame.textContent = highScore;
  if (highScoreIntro) highScoreIntro.textContent = highScore;

  // Update moves left
  if (movesDisplay) movesDisplay.textContent = `Moves Left: ${gameState.movesLeft}`;
}

function showHighScoreInIntro() {
  const highScore = localStorage.getItem("highScore") || 0;
  const highScoreDisplay = document.getElementById("highScore");
  if (highScoreDisplay) highScoreDisplay.textContent = highScore;
}
// HELPING FUNCTION END: