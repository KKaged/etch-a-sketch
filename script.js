const container = document.querySelector(".grid-container");
const gridCell = document.createElement("div");
const gridSize = document.getElementById("quantity");
const box = document.querySelector("div");
const reset = document.querySelector("button");

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
box.addEventListener("mouseover", function (hover) {
  hover.target.classList.replace("grid-cell", "color");
});

reset.addEventListener("click", function () {
  gridSize.value = "";
  container.innerHTML = "";
  container.style.setProperty("grid-template-columns", `repeat(16 ,2fr)`);
  container.style.setProperty("grid-template-rows", `repeat(16 ,2fr)`);
});
gridCells();
