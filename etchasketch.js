
// Setup of initial constants and variables. These will pick up the first reference in the page to classes and id's etc

const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");
let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue");
let gridSize = slider.value;
var gridBoxes;

gridCreate();

// Slider Event Listeners, each time the slider is operateds the gridCreate function runs which resets the whole grid.

slider.addEventListener("input", displaySliderValue);
slider.addEventListener("input", gridCreate);

function displaySliderValue() {
    sliderValue.textContent = this.value;
}

// Create Grid, Grid generated using the 'slider value' input

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

    // Add EVent Listener for Default state where mouseover event in any given cell will turn cell black

        gridBoxes = document.querySelectorAll(".gridBox");
        gridBoxes.forEach((gridBox) => {
            gridBox.addEventListener("mouseover", (e) => {
                gridBox.classList.add("active");
            });
        })
    };

    //Add Clear Button to remove 'active' cells, for the coloured cells the background colour is removed.

    clear.addEventListener("click", (e) => {
        gridBoxes.forEach((gridBox) => {
            gridBox.classList.remove("active");
            gridBox.style.removeProperty("background-color");            
        });
    })

    // Random Colour Generation
    // This step generates a random colour

    function getRandomColour() {
        let hexValues = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i < 6; i++){
            color += hexValues[Math.floor(Math.random() * 16)];
        }
        return color
    }

    // Assignment of function to Background colour property

    function setRandomColour(e) {
        e.target.style.backgroundColor = getRandomColour();
    }

    // Remove Event Listener for 'Active' (black) status
    // Add Event Listener which sets random colour when 'mouseover' is occuring in that cell.
 
    goCrazy.addEventListener('click', (e) => {
        gridBoxes.forEach((gridBox) => {
            gridBox.addEventListener("mouseover", (e) => {
                gridBox.classList.remove("active");
            });
            gridBox.addEventListener("mouseover", setRandomColour);
            })
    });

    // Change colour back to Black
    // Code removes Event Listener for setting the random colour
    // When the user passes there mouse over a cell that is already coloured, the background colour is removed
    // The CSS class is changed to active to pickup the black background property.

    black.addEventListener("click", (e) => {
        gridBoxes.forEach((gridBox) => {
            gridBox.removeEventListener("mouseover", setRandomColour);
        });
        gridBoxes.forEach((gridBox) => {
            gridBox.addEventListener("mouseover", (e) => {
                gridBox.style.removeProperty("background-color");
                gridBox.classList.add("active");
    });
});
});

    gridCreate(gridSize);
    
