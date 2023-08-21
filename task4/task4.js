const concatStrings = (string, separator) => {
  const isValidSeparator = separator && typeof separator === 'string';
  let result = string;

  return (concat = (innerString) => {
    if (typeof innerString === 'string') {
      result += (isValidSeparator ? separator : '') + innerString;

      return concat;
    }

    return result;
  });
};

const isValidNumber = (num) => {
  return typeof num === 'number' && isFinite(num) && !isNaN(num);
};

class Calculator {
  constructor(x, y) {
    if (!isValidNumber(x) || !isValidNumber(y)) {
      throw new Error('Invalid number!');
    }

    this.x = x;
    this.y = y;
    this.logSum = this.logSum.bind(this);
    this.logMul = this.logMul.bind(this);
    this.logSub = this.logSub.bind(this);
    this.logDiv = this.logDiv.bind(this);
  }

  setX(num) {
    if (!num || !isValidNumber(num)) {
      throw new Error('Invalid number!');
    }

    this.x = num;
  }

  setY(num) {
    if (!num || !isValidNumber(num)) {
      throw new Error('Invalid number!');
    }

    this.y = num;
  }

  logSum() {
    console.log(this.x + this.y);
  }

  logMul() {
    console.log(this.x * this.y);
  }

  logSub() {
    console.log(this.x - this.y);
  }

  logDiv() {
    if (this.y === 0) {
      throw new Error('y is 0!');
    }

    console.log(this.x / this.y);
  }
}
