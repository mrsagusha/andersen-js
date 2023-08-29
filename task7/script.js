let firstNum = '';
let secondNum = '';
let sign = '';
let firstIteration = true;
const MAX_CONTENT_LENGTH = 16;
const CURRENT_CONTENT_FONT = 2.5;
const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['×', '÷', '-', '+'];
const buttons = document.querySelector('.buttons');
const output = document.querySelector('.screen__main p');
const additionalOutput = document.querySelector('.screen__bottom p');

const changeFontSize = () => {
  if (
    output.innerHTML.length >= 10 &&
    output.innerHTML.length <= MAX_CONTENT_LENGTH
  ) {
    output.style.fontSize = `${
      CURRENT_CONTENT_FONT - output.innerHTML.length / MAX_CONTENT_LENGTH
    }rem`;
  }
};

const roundNumber = () => {
  if (firstNum.toString().includes('.')) {
    if (firstNum.toString().split('.')[1].length >= 8) {
      firstNum = firstNum.toFixed(8).toString().replace(/0*$/, '');
    }
  }
};

const clearAll = () => {
  firstNum = '';
  secondNum = '';
  sign = '';
  output.innerHTML = '0';
  firstIteration = true;
};

const calculate = () => {
  switch (sign) {
    case '+':
      firstNum = +firstNum + +secondNum;
      roundNumber();
      firstIteration = false;
      secondNum = '';
      break;
    case '-':
      firstNum = firstNum - secondNum;
      roundNumber();
      firstIteration = false;
      secondNum = '';
      break;
    case '×':
      firstNum = firstNum * secondNum;
      roundNumber();
      firstIteration = false;
      secondNum = '';
      break;
    case '÷':
      if (secondNum === '0') {
        alert('Нельзя делить на 0');
        firstNum = '';
        secondNum = '';
        sign = '';
        break;
      }
      firstNum = firstNum / secondNum;
      roundNumber();
      firstIteration = false;
      secondNum = '';
      break;
  }
};

const print = () => {
  if (firstNum) {
    output.innerHTML = firstNum;
  }

  if (!firstNum) {
    output.innerHTML = 0;
  }

  if (sign) {
    output.innerHTML += sign;
  }

  if (secondNum) {
    output.innerHTML += secondNum;
  }
};

buttons.addEventListener('click', (e) => {
  const buttonContent = e.target.innerHTML;

  if (e.target.classList.contains('button')) {
    if (keys.includes(buttonContent)) {
      if (!sign) {
        firstNum += buttonContent;
      } else {
        secondNum += buttonContent;
      }
    }

    if (signs.includes(buttonContent)) {
      if (firstNum === '') {
        firstNum = '0';
      }

      if (sign) {
        calculate();
      }

      sign = buttonContent;
    }

    if (buttonContent === '+/-') {
      if (secondNum) {
        secondNum = -1 * secondNum;
      } else {
        firstNum = -1 * firstNum;
      }

      print();
      return;
    }

    if (buttonContent === 'С') {
      clearAll();
      return;
    }

    if (buttonContent === '=') {
      calculate();
      sign = '';
      print();
      return;
    }

    if (buttonContent === '→') {
      if (secondNum) {
        secondNum = secondNum.toString().slice(0, secondNum.length - 1);
        print();
        return;
      }

      if (sign && !secondNum) {
        sign = '';
        print();
        return;
      }

      if (firstNum && !sign && !secondNum) {
        firstNum = firstNum.toString().slice(0, firstNum.length - 1);
        print();
        return;
      }
    }

    print();
    changeFontSize();
  }
});
