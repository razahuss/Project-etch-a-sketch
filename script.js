
//function creates a grid of square divs
//depending on the row and column parameters

function gridOfDiv(row, col) {
    
    const container = document.querySelector('.container');
    
    for(i = 0; i < row; i++){
        const divRow = document.createElement('div');
        divRow.classList.add('row');
        for(j = 0; j < col; j++){
            const divcol = document.createElement('div');
            divcol.classList.add('column');
            divRow.appendChild(divcol);
        }
        container.appendChild(divRow);
    }
}

function clearBoard(){
    const divcol = document.querySelectorAll('.column');
    
    divcol.forEach(col => { col.style.backgroundColor = 'white'; });
}

function colorin(){
    let mdown = false;
    const divcol = document.querySelectorAll('.column');
    
    divcol.forEach(col => col.addEventListener('mousedown',b => {
        col.style.backgroundColor = 'black';
        mdown = true;
    }));
    divcol.forEach(col => col.addEventListener('mouseover',b => {
        if(mdown === true){
            col.style.backgroundColor = 'black';
        }
    }));
    divcol.forEach(col => col.addEventListener('mouseup',b => {
        mdown = false;
    }));
}

const btncolor = document.querySelector('.btncolor');
btncolor.addEventListener('click',colorin);

const btnclear = document.querySelector('.btnclear');
btnclear.addEventListener('click', clearBoard);

const sliderval = document.querySelector('.sliderval');
const rangeValue = document.querySelector('.rangeValue');

gridOfDiv(50,50);

sliderval.oninput = function(){
    const container = document.querySelector('.container');
    container.innerHTML = '';
    rangeValue.innerText = this.value;
    gridOfDiv(this.value, this.value);
}