/* CREATE GRID */

const gridContainer = document.querySelector('.grid-container');
const newGridButton = document.querySelector('.new-grid');
let gridSize = 16;

function createGrid() {
    let gridRows = gridSize;
    let gridColumns = gridSize;

    for (let i = 0; i < gridRows; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');
        gridContainer.appendChild(row);


        for (let j = 0; j < gridColumns; j++) {
            const column = document.createElement('div');
            column.classList.add('grid-column');
            row.appendChild(column);
        }
    }
}

/* COLOR GRID FUNCTIONALITY */

function colorGrid(e) {
    if (e.target.classList[0] === 'grid-column') {
        e.target.classList.add('black');
    }
}

/* CLEAR GRID FUNCTIONALITY */

function clearGrid() {
    const pixels = document.querySelectorAll('.grid-column');

    for (let i = 0; i < pixels.length; i++) {
        pixels[i].classList.remove('black');
    }
}

function newGrid() {
    gridSize = 0;
    clearGrid();

    while ((gridSize < 1) || (gridSize > 64)) {
        gridSize = prompt('Enter a new grid size from 1-64');
        gridSize = parseInt(gridSize, 10);
    }

    gridContainer.textContent = '';
    createGrid();
}


createGrid();
gridContainer.addEventListener('mouseover', colorGrid);
newGridButton.addEventListener('click', newGrid);
