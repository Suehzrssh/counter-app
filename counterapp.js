const display = document.querySelector('.counter-preview');
const allBtns = document.querySelector('#allBtns');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const increment = document.getElementById('increment');

decrement.addEventListener('click', decrementValue);
increment.addEventListener('click', incrementValue);
reset.addEventListener('click', resetValue);

let value = 0;
function decrementValue(e) {
    if (decrement === decrement) {
        value -=1;
    
    }

    display.textContent = value;
}
function incrementValue(e) {
    if (increment === increment) {
        value +=1;
    
    }

    display.textContent = value;
}

function resetValue(e) {
    if (reset === reset) {
        value = 0;
    
    }

    display.textContent = value;
}