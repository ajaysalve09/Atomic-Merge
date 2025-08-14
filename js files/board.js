// BOARD FUNCTION START:
function fillBoardWithMergeableAtoms() {
  const totalCells = gridSize * gridSize;
  const totalAtoms = Math.floor(totalCells * 0.30); // 30%
  const minMergeables = Math.floor(totalAtoms * 0.3); // 30% of those

  const mergeablePool = [...new Set(Object.keys(mergeRules).flatMap(k => k.split('+')))];
  const fallbackAtoms = ["H", "O", "C", "N", "Cl", "Na", "K", "Fe", "Pb"];

  let placed = 0;

  // 1. Place mergeable atoms
  while (placed < minMergeables) {
    const cell = getRandomEmptyCell();
    if (!cell) break;
    const atom = mergeablePool[Math.floor(Math.random() * mergeablePool.length)];
    board[cell.r][cell.c] = atom;
    placed++;
  }

  // 2. Fill remaining atoms randomly
  while (placed < totalAtoms) {
    const cell = getRandomEmptyCell();
    if (!cell) break;
    const allAtoms = mergeablePool.concat(fallbackAtoms);
    const atom = allAtoms[Math.floor(Math.random() * allAtoms.length)];
    board[cell.r][cell.c] = atom;
    placed++;
  }
}

function initGame() {
  mergeHistory.clear();
  mergeDisplayMap.clear();
  updatePopupList();
  createEmptyBoard();
  createGrid();
  hideRestartButton();

  gameState = {
    score: 0,
    movesLeft: 99,
    targetAtom: "KCL"
  };
  updateScoreUI();

  fillBoardWithMergeableAtoms(); // ✅ replace old random atom placement

  renderBoard();
  updateLessonBox(`
    <div class="highlighted-message1">
    <i class="far fa-play-circle play-icon"></i> Game Start
    </div>
  `);
}
// BOARD FUNCTION END: