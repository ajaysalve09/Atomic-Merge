function createGrid() {
  const container = document.getElementById("gameContainer");
  container.innerHTML = '';
  for (let i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    container.appendChild(tile);
  }
}
