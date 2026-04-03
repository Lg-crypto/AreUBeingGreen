const checkagua = document.getElementById('agua');
const checkexer = document.getElementById('exercicio');
const checksono = document.getElementById('sono');

const greenBar = document.getElementById('fill');

let howMuchGreen = 0;



checkagua.addEventListener('click',()=>{
    console.log(checkagua.checked)
    if (checkagua.checked) {
        howMuchGreen += 33.333;
    } else {
        howMuchGreen -= 33.333
    }
    console.log(howMuchGreen)
    greenBar.style.width = howMuchGreen + '%';
})

checkexer.addEventListener('click',()=>{
    console.log(checkexer.checked)
    if (checkexer.checked) {
        howMuchGreen += 33.333;
    } else {
        howMuchGreen -= 33.333
    }
    console.log(howMuchGreen)
    greenBar.style.width = howMuchGreen + '%';
})

checksono.addEventListener('click',()=>{
    console.log(checksono.checked)
    if (checksono.checked) {
        howMuchGreen += 33.333;
    } else {
        howMuchGreen -= 33.333
    }
    console.log(howMuchGreen)
    greenBar.style.width = howMuchGreen + '%';
})