const container = document.querySelector(".grid-container");
const gridCell = document.createElement("div");
const gridSize = document.getElementById("quantity");

function gridCells() {
  for (let i = 0; i < 256; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    container.appendChild(gridCell);
  }
}
gridCells();
console.log(gridSize.value);
