const DEFAULT_SIZE = 16
const DEFAULT_COLOR = "grey"

let currentSize = DEFAULT_SIZE;
let currentColor = DEFAULT_COLOR;

const clearBtn = document.querySelector("#clear");
const sizeInput = document.querySelector("#number-of-squares");
const randomColorInput = document.querySelector("#random-color");
const container = document.querySelector("#container");


sizeInput.addEventListener("change", () => {
    setupGrid(sizeInput.value);
    currentSize = sizeInput.value;
});

clearBtn.addEventListener("click", () => {
    container.replaceChildren();
    setupGrid(currentSize);
});

randomColorInput.addEventListener("change", (e) => {
    if(e.target.checked){
        container.classList.remove("color");
        container.classList.add("random");
    } else{
        container.classList.remove("random");
        container.classList.add("color");  
    }    
    changeCellColor(e);
    }
);


function changeCellColor(e){
    if(container.classList.contains("color") && !container.classList.contains("shader")){
        e.target.style.backgroundColor = currentColor;
    } else if(container.classList.contains("random") && !container.classList.contains("shader")){
        const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const randomByte = () => randomNumber(0, 255)
        const randomPercent = () => (randomNumber(50, 100) * 0.01).toFixed(2);
        e.target.style.backgroundColor = `rgba(${[randomByte(), randomByte(), randomByte(), randomPercent()].join(',')})`;
    }

}

function setupGrid(gridSize){
    container.replaceChildren();
    for(let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < gridSize; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", (e) => changeCellColor(e));
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

setupGrid(currentSize);