// Initialize variables
const textTag = document.getElementById('text');
const input = document.getElementById('input');
const increment = document.getElementById('increment');

// Event listeners
input.addEventListener('change', () => {
  // Update input value
  const inputValue = parseInt(input.value, 10); // Convert to integer
  console.log('Input value:', inputValue);
});

increment.addEventListener('change', () => {
  // Update increment value
  const incrementValue = parseInt(increment.value, 10); // Convert to integer
  console.log('Increment value:', incrementValue);
});

const onIncrementClick = () => {
  // Add incrementValue to number
  number += parseInt(increment.value, 10);

  // Update displayed number
  numberTag.textContent = number;

  // Check for boom condition (positive or negative)
  if (number > condition || number < -condition) {
    textTag.textContent = text;
  }
};

const onDecrementClick = () => {
  // Subtract incrementValue from number
  number -= parseInt(increment.value, 10);

  // Update displayed number
  numberTag.textContent = number;

  // Check for boom condition (positive or negative)
  if (number > condition || number < -condition) {
    textTag.textContent = text;
  }
};

// Load saved number from session storage (if any)
const savedNumber = sessionStorage.getItem('number');
if (savedNumber) {
  number = parseInt(savedNumber, 10);
  numberTag.textContent = number;
}