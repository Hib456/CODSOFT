const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (button.id === 'equals') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resultShown = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resultShown && !isNaN(value)) {
      currentInput = value;
      resultShown = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});
