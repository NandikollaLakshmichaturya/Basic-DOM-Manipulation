// Select DOM elements
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// Initialize counter
let count = 0;

// Update counter display
function updateDisplay() {
  counterDisplay.textContent = count;
}

// Increment
incrementBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

// Decrement (but not below zero)
decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateDisplay();
  }
});

// Reset
resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});
