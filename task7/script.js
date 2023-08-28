let firstNum = '';
let secondNum = '';
let sign = '';
const keys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const signs = ['×', '÷', '-', '+'];
const buttons = document.querySelector('.buttons');
const output = document.querySelector('.screen__main p');
const additionalOutput = document.querySelector('.screen__bottom p');

const print = (text) => {
  output.innerHTML += text;
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
      if (sign) {
        switch (sign) {
          case '+':
            firstNum = +firstNum + +secondNum;
            secondNum = '';
            break;
          case '-':
            firstNum = firstNum - secondNum;
            secondNum = '';
            break;
          case '×':
            firstNum = firstNum * secondNum;
            secondNum = '';
            break;
          case '÷':
            firstNum = firstNum / secondNum;
            secondNum = '';
            break;
        }
      }
      sign = buttonContent;
    }

    console.log(firstNum);
    print(buttonContent);
  }
});
