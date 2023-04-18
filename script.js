const container = document.querySelector(".grid-container");
const gridCell = document.createElement("div");

function gridCells() {
  for (let i = 0; i < 16; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    container.appendChild(gridCell);
    gridCell.style.display = "flex";
    gridCell.style.flexDirection = "column";
  }
}

gridCells();
gridCells2();
