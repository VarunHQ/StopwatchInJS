// Initialize the counter variable
let count = 0;

// Select DOM elements
const valueDisplay = document.getElementById('counter-value');
const btnDecrement = document.getElementById('btn-decrement');
const btnReset = document.getElementById('btn-reset');
const btnIncrement = document.getElementById('btn-increment');

// Add event listeners for button actions
btnIncrement.addEventListener('click', () => {
    count++;
    updateDisplay();
});

btnDecrement.addEventListener('click', () => {
    count--;
    updateDisplay();
});

btnReset.addEventListener('click', () => {
    count = 0;
    updateDisplay();
});

// Function to update UI text dynamically
function updateDisplay() {
    valueDisplay.textContent = count;
}
