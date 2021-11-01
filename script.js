let container = document.querySelector('#container');

function getCount() {
    let gCount = window.prompt('Enter grid count:')
    for (gCount;gCount < 1 || gCount > 64;) {
        gCount = window.prompt('Enter between 1 and 64 grid count:');
    }

    return gCount;
}

function createGrid () {
    let gridCount = getCount();
    for (let r = 0; r < gridCount; r++) {
        let gridColumn = document.createElement('div');
        gridColumn.classList.add('column');
        for (let c = 0; c < gridCount; c++) {
            let gridRow = document.createElement('div');
            gridRow.classList.add('gridBox');
            gridRow.style.opacity = 0.1;
            gridColumn.appendChild(gridRow);
        }
        console.log(gridColumn);
        container.appendChild(gridColumn);
    }
}

function etch() {
    this.classList.add('colorThis');
    let opacity = Number(this.style.opacity);
    if (opacity > 1) return;
    opacity += 0.2;
    this.style.opacity = `${opacity}`;
    console.log(opacity);
}


function clearAll() {
    boxes.forEach(boxes => boxes.classList.remove('colorThis'));
    boxes.forEach(boxes => boxes.style.opacity = '0.2');
}

createGrid();

let boxes = document.querySelectorAll('.gridBox');
boxes.forEach(boxes => boxes.addEventListener("mouseover", etch));

let clear = document.querySelector('#clear');
clear.addEventListener('click', clearAll);
