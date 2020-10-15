

const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");

let gridSize = slider.value;
var gridBoxes;

gridCreate();

// Slider Event Listeners

slider.addEventListener("input", displaySliderValue);
slider.addEventListener("input", gridCreate);

function displaySliderValue() {
    sliderValue.textContent = this.value;
}

function gridCreate(gridSize) {
    container.innerHTML = "";
    gridSize = slider.value;
    var toAdd = document.createDocumentFragment();
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    

    for (let i = 0; i < gridSize * gridSize; i++) {
        let cell = document.createElement("div");
        cell.classList.add("gridBox");
        container.appendChild(cell)
        };
        gridBoxes = document.querySelectorAll(".gridBox");
        gridBoxes.forEach((gridBox) => {
            gridBox.addEventListener("mouseover", (e) => {
                gridBox.classList.add("active");
            });
        })

    };

    //Add Clear Button to remove 'active' cells

    clear.addEventListener("click", (e) => {
        gridBoxes.forEach((gridBox) => {
            gridBox.classList.remove("active");
        });
    })

    gridCreate(gridSize);
    
