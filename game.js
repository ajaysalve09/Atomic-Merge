// ==== MERGE RULES & MOLECULE LESSONS ====
const gridSize = 6;
const greatSound = new Audio("sounds/mgreat.mp3");
const excellentSound = new Audio("sounds/mexcellent.mp3");
const superSound = new Audio("sounds/msuper.mp3");
const mergeSound = new Audio("sounds/mixkit-bell.mp3");

const clickSound = new Audio("sounds/mbubble-pop.mp3");
clickSound.volume = 1;
clickSound.playbackRate = 1;

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;

    event.preventDefault();

    // ✅ Sound
    clickSound.currentTime = 0;
    clickSound.play();

    // ✅ Bounce
    button.classList.remove("bouncing");
    void button.offsetWidth;
    button.classList.add("bouncing");

    setTimeout(() => {
      button.classList.remove("bouncing");

      // ✅ Manually trigger the click after 1 second
      const delayedClick = new MouseEvent("delayed-click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      button.dispatchEvent(delayedClick);
    }, 400);
  });
});

let soundEnabled = true;
let board = [];
let lastMergedPositions = [];
let mergeHistory = new Set();
let mergeDisplayMap = new Map();
let comboStreak = 0;
let mergeCountThisMove = 0;
let mergeComboMessage = '';
let lastMoveWasMerge = false;
let mergeStreak = 0;
let gameState = {
  score: 0,
  movesLeft: 99,
  targetAtom: "KCL", // or any you want
};  


window.addEventListener("DOMContentLoaded", () => {
  setupSoundButton();
});

function setupSoundButton() {
  const btn = document.getElementById("enableSoundBtn");
  if (btn) {
    btn.addEventListener("delayed-click", () => {
      mergeSound.play().then(() => {
        mergeSound.pause();
        mergeSound.currentTime = 0;
        soundEnabled = true;
        btn.style.display = "none";
      }).catch((err) => {
        console.warn("Preload sound failed:", err);
      });
    });
  }
}

// 🔊 Play merge sound with optional confetti
function playMergeSound() {
  if (!soundEnabled) return;

  const sound = mergeSound.cloneNode();
  sound.play().catch(err => {
    console.warn("Merge sound play error:", err);
  });

  // 🎉 Optional confetti effect
  setTimeout(() => {
    if (typeof confetti === "function") {
      confetti({
        particleCount: 500,
        spread: 80,
        origin: { y: 1.2 },
        startVelocity: 60,
      });
    }
  }, 50);
}

// 🔊 Play combo sound based on streak type
function playComboSound(type) {
  if (!soundEnabled) return;

  let sound = null;

  switch (type.toLowerCase()) {
    case "great":
      sound = greatSound.cloneNode();
      break;
    case "excellent":
      sound = excellentSound.cloneNode();
      break;
    case "super":
      sound = superSound.cloneNode();
      break;
    default:
      console.warn("Unknown combo type:", type);
      return;
  }

  sound.play().catch(err => {
    console.warn("Combo sound play error:", err);
  });
}

function updateLessonBox(text) {
  document.getElementById("lessonText").innerHTML = text;
}

function updatePopupList() {
  const list = document.getElementById("popupList");
  list.innerHTML = "";
  let index = 1;

  mergeDisplayMap.forEach((equation, key) => {
    const merged = equation.split(" = ")[1];
    const lesson = moleculeLessons[merged] || 'No explanation available.';

    const div = document.createElement("div");
    div.innerHTML = `<strong>${index++}. ${equation}</strong><br>
    <pre style="white-space: pre-wrap; font-size: 0.95em; color: #333; margin-top: 4px;">${lesson}</pre>`;
    div.style.marginBottom = "12px";
    list.appendChild(div);
  });
}

function showRestartButton() {
  document.getElementById("restartBtn").style.display = "inline-block";
}

function hideRestartButton() {
  document.getElementById("restartBtn").style.display = "none";
}

function createEmptyBoard() {
  board = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));
}

function getRandomEmptyCell() {
  const empty = [];
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      if (!board[r][c]) empty.push({ r, c });
    }
  }
  return empty.length ? empty[Math.floor(Math.random() * empty.length)] : null;
}


function renderBoard() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach((tile, i) => {
    const r = Math.floor(i / gridSize);
    const c = i % gridSize;
    const val = board[r][c];
    tile.textContent = val || '';
    tile.style.backgroundColor = (val && moleculeLessons[val]) ? getAtomColor(val) : '#ffffff';
    tile.style.color = '#000';
  });
}

function createGrid() {
  const container = document.getElementById("gameContainer");
  container.innerHTML = '';
  for (let i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    container.appendChild(tile);
  }
}

function spawnNewAtom() {
  const cell = getRandomEmptyCell();
  if (cell) {
    const atomPool = Object.keys(mergeRules).flatMap(k => k.split('+'));
    const atom = atomPool[Math.floor(Math.random() * atomPool.length)];
    board[cell.r][cell.c] = atom;
  }
}

function tryMerge(a, b) {
  const key1 = `${a}+${b}`;
  const key2 = `${b}+${a}`;
  return mergeRules[key1] || mergeRules[key2] || null;
}

function slideRowLeft(row, rowIndex) {
  let newRow = row.filter(Boolean);
  for (let i = 0; i < newRow.length - 1; i++) {
    const a = newRow[i], b = newRow[i + 1];
    const merged = tryMerge(a, b);

    if (merged) {
      playMergeSound();

      const key = [a, b].sort().join('+');
      const eq = `${a} + ${b} = ${merged}`;
      updateLessonBox(moleculeLessons[merged] || eq);

      if (!mergeHistory.has(key)) {
        mergeHistory.add(key);
        mergeDisplayMap.set(key, eq);
        updatePopupList();
      }

      newRow[i] = merged;
      newRow[i + 1] = null;

      mergeCountThisMove++; // ✅ Count per-move merges
    }
  }

  return [...newRow.filter(Boolean), ...Array(gridSize - newRow.filter(Boolean).length).fill(null)];
}



// MOVE FUNCTION START:
function moveSingleAtom(row, col, direction) {
  if (gameState.movesLeft <= 0) return;

  const delta = {
    up: [-1, 0],
    down: [1, 0],
    left: [0, -1],
    right: [0, 1]
  }[direction];

  const [dr, dc] = delta;
  let r = row, c = col;
  let moved = false;
  let mergedThisMove = false;

  const atom = board[r][c];
  if (!atom) return;

  while (true) {
    const nr = r + dr;
    const nc = c + dc;
    if (nr < 0 || nr >= gridSize || nc < 0 || nc >= gridSize) break;

    const next = board[nr][nc];

    if (!next) {
      board[nr][nc] = atom;
      board[r][c] = null;
      r = nr;
      c = nc;
      moved = true;
    } else {
      const merged = tryMerge(atom, next);
      if (merged) {
        board[nr][nc] = merged;
        board[r][c] = null;
        playMergeSound();
        gameState.score += 10;
        moved = true;
        mergedThisMove = true;

        const key = [atom, next].sort().join('+');
        const equation = `${atom} + ${next} = ${merged}`;
        if (!mergeHistory.has(key)) {
          mergeHistory.add(key);
          mergeDisplayMap.set(key, equation);
          updatePopupList();
        }

        if (merged === gameState.targetAtom) {
          updateLessonBox(`<div class="highlighted-message">🎯 Target ${merged} achieved!</div>`);
          gameState.movesLeft = 0;
          updateScoreUI();
          renderBoard();
          endGame("🎯 Congrats! <br> Target <br> achieved");
          return;
        }

        updateLessonBox(moleculeLessons[merged] || `${atom} + ${next} = ${merged}`);
        break;
      } else {
        break;
      }
    }
  }

  if (moved) {
    gameState.movesLeft = Math.max(0, gameState.movesLeft - 1);
    updateScoreUI();
    spawnNewAtom();
    renderBoard();

    setTimeout(() => {
      const matches = findMatches(board);
      const mergeCountThisMove = mergedThisMove ? 1 : 0;

      // ✅ BONUS COMBO SCORING
      if (mergeCountThisMove > 0) {
        comboStreak++;

        if (comboStreak % 2 === 0) {
          const bonus = Math.pow(2, comboStreak / 2 - 1) * 20;
          gameState.score += bonus;
        
          let msgType = '';
          if (comboStreak === 2) {
            msgType = 'great';
            greatSound.play();
          } else if (comboStreak === 4) {
            msgType = 'excellent';
            excellentSound.play();
          } else if (comboStreak >= 6) {
            msgType = 'super';
            superSound.play();
          }
        
          if (msgType) {
            showComboMessageInLessonBox(`${msgType} <br> +${bonus} <br> Points`);
          }
        
          updateScoreUI();
        }
        
      } else {
        comboStreak = 0;
      }

      if (matches.length > 0) {
        flashAndRemoveMatches(matches, board);

        setTimeout(() => {
          renderBoard();
        }, 450);
      } else {
        renderBoard();

        if (!hasAnyMoves() || gameState.movesLeft === 0) {
          showRestartButton();
          const mergeCount = mergeHistory.size;
          updateLessonBox(`
            <div class="blur-overlay"></div>
            <div class="highlighted-message">
              Game over! <br> (${mergeCount} Merges)
            </div>
          `);
        }
      }
    }, 200);
  } else {
    comboStreak = 0;
    renderBoard();

    if (!hasAnyMoves() || gameState.movesLeft === 0) {
      showRestartButton();
      const mergeCount = mergeHistory.size;
      updateLessonBox(`
        <div class="blur-overlay"></div>
        <div class="highlighted-message">
          Game over! <br> (${mergeCount} Merges)
        </div>
      `);
    }
  }
}

function showComboMessageInLessonBox(msg) {
  const lessonText = document.getElementById('lessonText');
  if (!lessonText) return;

  const oldContent = lessonText.innerHTML;

  // Capitalize first letter
  const displayMsg = msg.charAt(0).toUpperCase() + msg.slice(1) + "!";

  lessonText.innerHTML = `<div class="screen-blur"></div><div class="combo-message"><i class="fas fa-star" style="color: gold;"></i> ${displayMsg}</div>`;

  playComboSound(msg);

  setTimeout(() => {
    lessonText.innerHTML = oldContent;
  }, 1200);
}
  
function hasAnyMoves() {
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const curr = board[r][c];
      
      // ✅ Step 1: Check for empty cell
      if (!curr) return true;

      // ✅ Step 2: Check for merge possibilities
      if (c < gridSize - 1 && tryMerge(curr, board[r][c + 1])) return true;
      if (r < gridSize - 1 && tryMerge(curr, board[r + 1][c])) return true;
    }
  }
  return false;
}
// MOVE FUNCTION END:



document.addEventListener("DOMContentLoaded", () => {
  // ==== ELEMENT REFERENCES ====
  let progressInterval = null; 
  const homeBtn = document.getElementById("homeBtn");
  const introOverlay = document.getElementById("introOverlay");
  const gameWrapper = document.getElementById("gameWrapper");
  const startBtn = document.getElementById("introStartBtn");
  const shareBtn = document.getElementById("introShareBtn");
  const rateBtn = document.getElementById("introRateBtn");
  const progressPopup = document.getElementById("progressPopup");
  const progressBar = document.getElementById("progressBar");
  const progressText = document.getElementById("progressText");
  const restartBtn = document.getElementById("restartBtn");
  const refreshBtn = document.getElementById("refreshBtn");
  const feedbackBtn = document.getElementById("feedbackBtn");
  const cancelFeedback = document.getElementById("cancelFeedback");
  const submitFeedback = document.getElementById("submitFeedback");
  const feedbackInput = document.getElementById("feedbackInput");
  const feedbackError = document.getElementById("feedbackError");
  const feedbackModal = document.getElementById("feedbackModal");
  const thankYouPopup = document.getElementById("thankYouPopup");
  const learnBtn = document.getElementById('learnBtn');
  const learnPage = document.getElementById('learnPage');
  const backToGameBtn = document.getElementById('backToGameBtn');
  const lessonsContainer = document.getElementById('moleculeLessons');
  const blurOverlay = document.getElementById('blurOverlay');



  // ==== INIT GAME ====
  initGame();
  setupSoundButton();
  updateScoreUI();



  // // ==== TOUCH CONTROL ====
  let startRow = 0, startCol = 0;
  let touchStartX = 0, touchStartY = 0;
  let swipeStartedOnAtom = false;

  const container = document.getElementById("gameContainer");

  container.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);

    if (element && element.classList.contains("tile")) {
      const index = [...document.querySelectorAll(".tile")].indexOf(element);
      startRow = Math.floor(index / gridSize);
      startCol = index % gridSize;
      swipeStartedOnAtom = board[startRow][startCol] !== null;
    }
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  });

  container.addEventListener("touchend", (e) => {
    if (!swipeStartedOnAtom) return;

    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;

    if (Math.max(Math.abs(dx), Math.abs(dy)) < 30) return;

    let direction = "";
    if (Math.abs(dx) > Math.abs(dy)) {
      direction = dx > 0 ? "right" : "left";
    } else {
      direction = dy > 0 ? "down" : "up";
    }

    moveSingleAtom(startRow, startCol, direction);
});



//   // ==== START BUTTON ====
  let progress = 0;
  let isProgressRunning = false;

  if (startBtn) {
    startBtn.addEventListener("delayed-click", () => {
      if (isProgressRunning) return; // Prevent double starts
  
      isProgressRunning = true;
      progress = 0;
      progressBar.style.width = "0%";
      progressText.textContent = "0%";
  
      startBtn.style.display = "inline-block";
      progressPopup.style.display = "flex";
  
      const animateProgress = () => {
        if (progress < 40) {
          progress += Math.random() < 0.4 ? 1 : 0;
        } else if (progress < 60) {
          progress += Math.random() < 0.3 ? 1 : 0;
        } else if (progress < 100) {
          progress += Math.random() < 0.2 ? 1 : 0;
        }
  
        if (progress > 100) progress = 100;
  
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;

        if (progress < 100) {
          requestAnimationFrame(animateProgress);
        } else {
          setTimeout(() => {
            progressPopup.style.display = "none";
        
            // ✨ Animate fade-out of intro
            introOverlay.classList.add("fade-out");
        
            setTimeout(() => {
              introOverlay.classList.remove("fade-out");
              introOverlay.classList.remove("active");
              introOverlay.style.display = "none";
              document.body.style.overflow = "auto";
        
              if (typeof initGame === "function") {
                initGame();
                const gameMessage = document.getElementById("gameMessage");
                const gameContainer = document.getElementById("gameContainer");
                const isGameVisible = window.getComputedStyle(gameContainer).display !== "none";
              
                if (isGameVisible) {
                  // Slight delay before showing the message
                  setTimeout(() => {
                    document.body.classList.add("blurred");
              
                    // Reset and trigger animation
                    gameMessage.style.animation = "none";
                    gameMessage.offsetHeight; // reflow
                    gameMessage.style.animation = "fadeInOut 1.5s ease forwards";
              
                    // Remove blur after animation ends
                    setTimeout(() => {
                      document.body.classList.remove("blurred");
                    }, 1200);
              
                  }, 00); // ✅ Delay message by 200ms after game starts
                }
              }
          
              isProgressRunning = false;
            }, 00); // Match CSS animation duration
          }, 00);
        }
        
      };
  
      requestAnimationFrame(animateProgress);
    });
}

if (homeBtn) {
  homeBtn.addEventListener("delayed-click", () => {
    // Push state so back button can close the confirmation modal
    history.pushState({ page: "homeConfirm" }, "");

    showConfirmation("<h2>Go Home?</h2><p><strong>You will lose all progress</strong></p>", () => {
      const homeLoaderWrapper = document.getElementById("homeLoaderWrapper");
      const homeLoader = document.getElementById("homeLoader");

      homeLoaderWrapper.style.display = "block";
      homeLoader.style.animation = "fadeInScale 0.1s ease forwards";

      setTimeout(() => {
        homeLoader.style.animation = "fadeOutScale 0.1s ease forwards";

        setTimeout(() => {
          homeLoaderWrapper.style.display = "none";
          closeLearnPage();

          introOverlay.classList.add("active");
          introOverlay.style.display = "flex";
          gameWrapper.style.display = "none";
          document.body.style.overflow = "hidden";
          progressBar.style.width = "0%";
          progressText.textContent = "0%";
          progressPopup.style.display = "none";
          startBtn.style.display = "inline-block";

          document.querySelectorAll(".dropdown-content").forEach(d => d.classList.remove("active"));
          document.querySelectorAll(".dropdown-item").forEach(i => i.classList.remove("open"));
          document.querySelectorAll(".dropdown-arrow").forEach(a => a.textContent = "▶");

          // Clear history state after action
          history.replaceState(null, "");
        }, 0);
      }, 4000);
    });
  });
}

// In your popstate handler:
window.addEventListener("popstate", (event) => {
  if (event.state?.page === "homeConfirm") {
    showConfirmation("<h2>Go Home?</h2><p><strong>You will lose all progress</strong></p>", () => {
      // Run the same home navigation logic as above
      homeBtn.click(); // or extract it to a function
    });
  }
});



// ==== REFRESH BUTTON ====
refreshBtn.addEventListener("delayed-click", () => {
  // Push a state so back button can close this modal
  history.pushState({ page: "refreshConfirm" }, "");
  showConfirmation(
    "<h2>Refresh?</h2><p><strong>You will lose all merges</strong></p>",
    () => {
      initGame();
      history.replaceState(null, ""); // Clear modal state after refresh
    }
  );
});

// ==== RESTART BUTTON ====
restartBtn.addEventListener("delayed-click", () => {
  history.pushState({ page: "restartConfirm" }, "");
  showConfirmation(
    "<h2>Restart?</h2><p><strong>The game will start again</strong></p>",
    () => {
      initGame();
      history.replaceState(null, ""); // Clear modal state after restart
    }
  );
});

// ==== SHOW CONFIRMATION MODAL ====
function showConfirmation(messageHTML, onConfirm) {
  const confirmModal = document.getElementById("confirmModal");
  const confirmText = document.getElementById("confirmText");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");

  // Insert message
  confirmText.innerHTML = messageHTML;

  // Show modal
  confirmModal.style.display = "flex";

  // Remove old listeners to avoid stacking
  confirmYes.replaceWith(confirmYes.cloneNode(true));
  confirmNo.replaceWith(confirmNo.cloneNode(true));

  // Get fresh references after cloning
  const newConfirmYes = document.getElementById("confirmYes");
  const newConfirmNo = document.getElementById("confirmNo");

  // Yes button click
  newConfirmYes.addEventListener("delayed-click", () => {
    closeConfirmation();
    onConfirm();
  });

  // Cancel (icon) click
  newConfirmNo.addEventListener("delayed-click", () => {
    closeConfirmation();
    history.replaceState(null, ""); // Clear modal state
  });
}

// ==== CLOSE CONFIRMATION MODAL ====
function closeConfirmation() {
  const confirmModal = document.getElementById("confirmModal");
  if (confirmModal) {
    confirmModal.style.display = "none";
  }
}

// ==== BACK/FORWARD NAVIGATION ====
window.addEventListener("popstate", (event) => {
  if (event.state?.page === "feedback") {
    feedbackModal.style.display = "flex";
    feedbackError.style.display = "none";
    learnPage && (learnPage.style.display = "none");
  } 
  else if (event.state?.page === "refreshConfirm") {
    showConfirmation(
      "<h2>Refresh?</h2><p><strong>You will lose all merges</strong></p>",
      () => {
        initGame();
        history.replaceState(null, "");
      }
    );
  } 
  else if (event.state?.page === "restartConfirm") {
    showConfirmation(
      "<h2>Restart?</h2><p><strong>The game will start again</strong></p>",
      () => {
        initGame();
        history.replaceState(null, "");
      }
    );
  }
  else {
    closeFeedback();
    closeConfirmation();
  }
});




// ==== FEEDBACK ====
feedbackBtn.addEventListener("delayed-click", () => {
  learnPage && (learnPage.style.display = "none");
  feedbackModal.style.display = "flex";
  feedbackError.style.display = "none";

  // Push state for back button support
  history.pushState({ page: "feedback" }, "");

  // Reset listeners to avoid stacking
  const cancelBtn = document.getElementById("cancelFeedback");
  const submitBtn = document.getElementById("submitFeedback");

  cancelBtn.replaceWith(cancelBtn.cloneNode(true));
  submitBtn.replaceWith(submitBtn.cloneNode(true));

  const newCancelBtn = document.getElementById("cancelFeedback");
  const newSubmitBtn = document.getElementById("submitFeedback");

  // Cancel click (icon in top-left)
  newCancelBtn.addEventListener("delayed-click", () => {
    closeFeedback();
    history.replaceState(null, ""); // Clear modal state
  });

  // Submit click
  newSubmitBtn.addEventListener("delayed-click", () => {
    const feedback = feedbackInput.value.trim();
    if (feedback) {
      console.log("User Feedback:", feedback);
      thankYouPopup.style.display = "flex";
      setTimeout(() => {
        thankYouPopup.style.display = "none";
        learnPage && (learnPage.style.display = "block");
      }, 2500);
      feedbackInput.value = "";
      feedbackError.style.display = "none";
      closeFeedback();
      history.replaceState(null, "");
    } else {
      feedbackError.style.display = "block";
    }
  });
});

function closeFeedback() {
  feedbackModal.style.display = "none";
  learnPage && (learnPage.style.display = "block");
  feedbackError.style.display = "none";
  feedbackInput.value = "";
}

// ==== BACK/FORWARD NAVIGATION ====
window.addEventListener("popstate", (event) => {
  if (event.state?.page === "feedback") {
    feedbackModal.style.display = "flex";
    feedbackError.style.display = "none";
    learnPage && (learnPage.style.display = "none");
  } else {
    closeFeedback();
  }
});



  // ==== SHARE BUTTON ====
  shareBtn?.addEventListener("delayed-click", async () => {
    const shareData = {
      title: "Molecule Merge Game",
      text: "Check out this fun molecule merge game! 🔬✨",
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        alert("Sharing is not supported. You can copy this URL:\n" + shareData.url);
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  });



  // ==== RATE BUTTON ====
  rateBtn?.addEventListener("delayed-click", () => {
    window.open("https://play.google.com/store/apps/details?id=com.atomicmerge", "_blank");
  });




// ==== LESSON SECTION ====
learnBtn.addEventListener('delayed-click', () => {
  renderLessonList();
  learnPage.classList.add('active');
  blurOverlay.classList.add('active');

  // Push state so back button will know we are in "learn" mode
  history.pushState({ page: "learn" }, "");
});

backToGameBtn.addEventListener('click', () => {
  closeLearnPage();
  history.back(); // this will also work with browser back
});

blurOverlay.addEventListener('click', () => {
  closeLearnPage();
  history.back();
});

function closeLearnPage() {
  learnPage.classList.remove('active');
  blurOverlay.classList.remove('active');
}

// Listen for browser back/forward navigation
window.addEventListener("popstate", (event) => {
  if (!event.state || event.state.page !== "learn") {
    // Back to game
    closeLearnPage();
  } else {
    // If user navigates forward to "learn" again
    learnPage.classList.add('active');
    blurOverlay.classList.add('active');
  }
});


function renderLessonList(filterLetter = 'all') {
  lessonsContainer.innerHTML = '';

  const wikiEntries = Object.entries(wikipediaLessons);
  const generalLessons = wikiEntries.filter(([topic]) => (
    topic !== 'All Elements' && !moleculeNames.hasOwnProperty(topic)
  ));
  const moleculeEntries = Object.entries(moleculeNames)
    .filter(([name]) => filterLetter === 'all' || name[0].toUpperCase() === filterLetter);

  // === 1. Render all general (non-molecule) lessons ===
  for (let [topic, content] of generalLessons) {
    const div = document.createElement('div');
    div.className = 'lesson-item';
    div.innerHTML = `
      <div class="lesson-title"><span class="arrow">&#9654;</span> ${topic}</div>
      <div class="lesson-content" style="display: none;">${content}</div>
    `;
    const titleEl = div.querySelector('.lesson-title');
    const contentEl = div.querySelector('.lesson-content');
    const arrowEl = div.querySelector('.arrow');
    titleEl.addEventListener('click', () => {
      const isVisible = contentEl.style.display === 'block';
      contentEl.style.display = isVisible ? 'none' : 'block';
      arrowEl.innerHTML = isVisible ? '&#9654;' : '&#9660;';
      setupSubDropdowns(contentEl);
    });
    lessonsContainer.appendChild(div);
  }

  // === 2. Molecules Section with sub-dropdowns ===
  const moleculesMain = document.createElement('div');
  moleculesMain.className = 'lesson-item';
  moleculesMain.innerHTML = `
    <div class="lesson-title"><span class="arrow">&#9654;</span> Molecules :</div>
    <div class="lesson-content" style="display: block;"></div>
  `;
  const mainTitleEl = moleculesMain.querySelector('.lesson-title');
  const mainContentEl = moleculesMain.querySelector('.lesson-content');
  const mainArrowEl = moleculesMain.querySelector('.arrow');
  mainArrowEl.innerHTML = '&#9660;';

  mainTitleEl.addEventListener('click', () => {
    const isVisible = mainContentEl.style.display === 'block';
    mainContentEl.style.display = isVisible ? 'none' : 'block';
    mainArrowEl.innerHTML = isVisible ? '&#9654;' : '&#9660;';
  });

  for (let [molecule, fullName] of moleculeEntries) {
    const subTitle = document.createElement('div');
    subTitle.className = 'sub-title';
    subTitle.innerHTML = `<span class="arrow">&#9654;</span> ${molecule} : ${fullName}`;

    const subContent = document.createElement('div');
    subContent.className = 'sub-content';
    subContent.style.display = 'none';
    subContent.innerHTML = moleculeLessons[molecule] || `<p><em>No lesson available yet for ${fullName}.</em></p>`;

    mainContentEl.appendChild(subTitle);
    mainContentEl.appendChild(subContent);
  }

  lessonsContainer.appendChild(moleculesMain);
  setupSubDropdowns(mainContentEl);

  // === 3. Special Dropdown for 'All Elements' ===
  const allElementsEntry = wikiEntries.find(([key]) => key === 'All Elements');
  if (allElementsEntry) {
    const [title, html] = allElementsEntry;
    const container = document.createElement('div');
    container.className = 'lesson-item';
    container.innerHTML = `
      <div class="lesson-title"><span class="arrow">&#9654;</span> ${title} :</div>
      <div class="lesson-content" style="display: block;"></div>
    `;
    const titleEl = container.querySelector('.lesson-title');
    const contentEl = container.querySelector('.lesson-content');
    const arrowEl = container.querySelector('.arrow');
    arrowEl.innerHTML = '&#9660;';

    titleEl.addEventListener('click', () => {
      const isVisible = contentEl.style.display === 'block';
      contentEl.style.display = isVisible ? 'none' : 'block';
      arrowEl.innerHTML = isVisible ? '&#9654;' : '&#9660;';
    });

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;

    const headings = tempDiv.querySelectorAll('h4');
    headings.forEach(h4 => {
      const ul = h4.nextElementSibling;
      if (!ul || ul.tagName !== 'UL') return;

      const subTitle = document.createElement('div');
      subTitle.className = 'sub-title';
      subTitle.innerHTML = `<span class="arrow">&#9654;</span> ${h4.innerHTML}`;

      const subContent = document.createElement('div');
      subContent.className = 'sub-content';
      subContent.innerHTML = ul.outerHTML;

      contentEl.appendChild(subTitle);
      contentEl.appendChild(subContent);
    });

    const finalParagraph = tempDiv.querySelector('p:last-of-type');
    if (finalParagraph) {
      const pWrap = document.createElement('div');
      pWrap.className = 'sub-content show-border';
      pWrap.innerHTML = finalParagraph.outerHTML;
      contentEl.appendChild(pWrap);
    }

    lessonsContainer.appendChild(container);
    setupSubDropdowns(contentEl);
  }
}

if (typeof window.setupHowToPlayModal === 'function') {
  window.setupHowToPlayModal();
}

function setupSubDropdowns(container) {
  const subTitles = container.querySelectorAll('.sub-title');
  subTitles.forEach(sub => {
    const arrow = sub.querySelector('.arrow');
    const subContent = sub.nextElementSibling;
    sub.addEventListener('click', () => {
      const visible = subContent.style.display === 'block';
      subContent.style.display = visible ? 'none' : 'block';
      if (arrow) arrow.innerHTML = visible ? '&#9654;' : '&#9660;';
      subContent.classList.toggle('show-border', !visible);
    });
  });
}

  document.getElementById("popupHeader").addEventListener("click", (event) => {
  if (event.target.closest("#restartBtn")) return;
  const panel = document.getElementById("popupPanel");
  const icon = document.getElementById("popupArrowIcon");
  panel.classList.toggle("expanded");
  icon.classList.toggle("fa-chevron-down");
  icon.classList.toggle("fa-chevron-up");
});
});



// ==== CONFIRMATION MODAL FUNCTION ====
function showConfirmation(message, onConfirm) {
  const modal = document.getElementById("confirmModal");
  const confirmText = document.getElementById("confirmText");
  const yesBtn = document.getElementById("confirmYes");
  const noBtn = document.getElementById("confirmNo");

  confirmText.innerHTML = message;
  modal.style.display = "flex";

  const newYes = yesBtn.cloneNode(true);
  const newNo = noBtn.cloneNode(true);
  yesBtn.parentNode.replaceChild(newYes, yesBtn);
  noBtn.parentNode.replaceChild(newNo, noBtn);

  newYes.addEventListener("delayed-click", () => {
    modal.style.display = "none";
    onConfirm();
  });

  newNo.addEventListener("delayed-click", () => {
    modal.style.display = "none";
  });
}

function findMatches(grid) {
  const matches = new Set();
  const directions = [
    [0, 1],  // horizontal →
    [1, 0],  // vertical ↓
    [1, 1],  // diagonal ↘
    [1, -1]  // diagonal ↙
  ];

  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      const base = grid[r][c];
      if (!base) continue;

      directions.forEach(([dr, dc]) => {
        const group = [[r, c]];
        let nr = r + dr, nc = c + dc;
        while (
          nr >= 0 && nr < gridSize && nc >= 0 && nc < gridSize &&
          grid[nr][nc] === base
        ) {

          group.push([nr, nc]);
          nr += dr;
          nc += dc;
        }
        if (group.length >= 2) {
          group.forEach(([x, y]) => matches.add(`${x},${y}`));
        }
      });
    }
  }

  return [...matches];
}

function flashAndRemoveMatches(matchedCells, grid) {
  matchedCells.forEach(cell => {
    const [r, c] = cell.split(',').map(Number);
    const tileIndex = r * gridSize + c;
    const tile = document.querySelectorAll('.tile')[tileIndex];

    if (tile) {
      tile.classList.add('flash');
      setTimeout(() => {
        tile.textContent = '';
        tile.style.backgroundColor = '#ffffff';
        grid[r][c] = null;
        tile.classList.remove('flash');
      }, 500);
    }
  });
}



// ==== SHARE BUTTON learn page ====
shareBtn?.addEventListener("delayed-click", async () => {
  const shareData = {
    title: "Molecule Merge Game",
    text: "Check out this fun molecule merge game! 🔬✨",
    url: window.location.href
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      alert("Sharing is not supported. You can copy this URL:\n" + shareData.url);
    }
  } catch (err) {
    console.error("Share failed:", err);
  }
});
