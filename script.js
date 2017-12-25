const container = document.querySelector(".containerGrid");
const gsize = document.querySelector('#gsize');
const reset = document.querySelector('#reset');

//Default grid size
newGrid(12);

//Change grid size
function newGrid(s) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    
    container.style.setProperty('--grid', s);
    
    for (var i = 0; i < s; i++) {
        for (var j = 0; j < s; j++) {
            const dv = document.createElement('div');
            dv.setAttribute('class', 'box');
            container.appendChild(dv);
        }
    }
    
    toggleBox();
}

//Change background colour on hover
function toggleBox() {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener('mouseover', (e) => {
            e.target.classList.remove('box');
            e.target.classList.add('newBox');
        });
    });
}

//Reset all boxes to default background colour
reset.addEventListener('click', () => {
    const boxes = document.querySelectorAll(".newBox");
    boxes.forEach(box => {
        box.classList.remove('newBox');
        box.classList.add('box');
    });
});

//Change grid size
gsize.addEventListener('click', () => {
    let size = parseInt(prompt("Enter grid size: "));
    newGrid(size);
});
