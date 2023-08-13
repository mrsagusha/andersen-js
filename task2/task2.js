const isParamValid = (param) => {
  return !isNaN(param) && typeof param === 'number';
};

const makeObjectDeepCopy = (obj) => {
  const isObject = obj && typeof obj === 'object' && !Array.isArray(obj);

  if (!isObject) {
    throw new Error('Not object!');
  }

  const cloneObject = {};

  for (let key in obj) {
    cloneObject[key] =
      obj[key] instanceof Object ? makeObjectDeepCopy(obj[key]) : obj[key];
  }

  return cloneObject;
};

const selectFromInterval = (array, start, end) => {
  const isArrayValid = (array) => {
    return array.some((el) => typeof el !== 'number');
  };

  if (!Array.isArray(array) || isArrayValid(array)) {
    throw new Error('Invalid array!');
  }

  if (!isParamValid(start) || !isParamValid(end)) {
    throw new Error('Invalid params!');
  }

  const resultArray = array.slice(
    start < end ? start - 1 : end - 1,
    start < end ? end : start
  );

  return resultArray;
};

const myIterable = { from: 1, to: 5 };

myIterable[Symbol.iterator] = function () {
  if (!this.from || !this.to) {
    throw new Error(`The interval isn't set!`);
  }

  if (!isParamValid(this.from) || !isParamValid(this.to)) {
    throw new Error('Params are not valid!');
  }

  if (this.from > this.to) {
    throw new Error(`'to' param cannot be less than the 'from' one!`);
  }

  return {
    current: this.from,
    last: this.to,
    next() {
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return {
          done: true,
          value: this.current,
        };
      }
    },
  };
};
