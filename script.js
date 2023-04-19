const container = document.querySelector(".grid-container");
const gridCell = document.createElement("div");
const gridSize = document.getElementById("quantity");

gridSize.addEventListener("input", function () {
  console.log(gridSize.value);
  updateGrid();
});

function gridCells() {
  for (let i = 0; i < 256; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    container.appendChild(gridCell);
  }
}

updateGrid = () => {
  container.innerHTML = "";
  container.style.setProperty(
    "grid-template-columns",
    `repeat(${gridSize.value},2fr)`
  );

  container.style.setProperty(
    "grid-template-rows",
    `repeat(${gridSize.value},2fr)`
  );

  for (let i = 0; i < gridSize.value * gridSize.value; i++) {
    const gridCell = document.createElement("div");
    gridCell.classList.add("grid-cell");
    container.appendChild(gridCell);
  }
};
gridCell();
