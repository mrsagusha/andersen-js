const firstNumber = prompt('Enter first number');
const secondNumber = prompt('Enter second number');
const isValid =
  Boolean(firstNumber) &&
  Boolean(secondNumber) &&
  !isNaN(+firstNumber) &&
  !isNaN(+secondNumber) &&
  +secondNumber >= 2 &&
  +secondNumber <= 36;

isValid
  ? alert((+firstNumber).toString(+secondNumber))
  : alert('Incorrect input');
