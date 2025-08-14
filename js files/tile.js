const elements = ["H", "O", "Na", "Cl", "C", "O₂"];
function getRandomElement() {
  return elements[Math.floor(Math.random() * elements.length)];
}