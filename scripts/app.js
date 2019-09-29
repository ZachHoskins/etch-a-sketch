const gridContainer = document.querySelector('.container');
const newGridButton = document.querySelector('.reset');
let gridSize = 16;

function createGrid() {
    let gridRows = gridSize;

    for (let i = 0; i < gridRows.length; i++) {
        const row = document.createElement('div');
        let gridColumns = gridSize;

        row.classList.add('grid-row');
        console.log("row: " + i);
        gridContainer.appendChild(row);

        for (let j = 0; j < gridColumns.length; j++) {
            const column = document.createElement('div');
            column.classList.add('grid-column');
            console.log("column: " + j);
            row.appendChild(column);
        }
    }
}


function colorGrid(e) {
    if (e.target.classList[0] === 'grid-column') {
        e.target.classList.add('black');
    }
}


function clearGrid() {
    const pixels = document.querySelectorAll('.grid-column');
    pixels.forEach(element => {

    });
    // for (let i = 0; i < pixels.length; i++) {
    //     pixels[i].classList.remove('black');
    // }
}

function newGrid() {
    gridSize = 0;
    clearGrid();

    while ((gridSize < 1) || (gridSize > 100)) {
        gridSize = prompt('Enter a new grid size:');
        gridSize = parseInt(gridSize, 10);
    }

    gridContainer.textContent = '';
    createGrid();
}

createGrid();
gridContainer.addEventListener('mouseover', colorGrid);
newGridButton.addEventListener('click', newGrid);