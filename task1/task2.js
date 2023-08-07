(function () {
  const firstNumber = prompt('Enter first number');

  if (isNaN(+firstNumber) || !Boolean(firstNumber)) {
    alert('Invalid input');
    return;
  }

  const secondNumber = prompt('Enter second number');

  if (isNaN(+secondNumber) || !Boolean(secondNumber)) {
    alert('Invalid input');
    return;
  }

  alert(`${+firstNumber + +secondNumber}, ${+firstNumber / +secondNumber}`);
})();
