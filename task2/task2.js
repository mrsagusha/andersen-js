const makeObjectDeepCopy = (obj) => {
  const cloneObject = {};

  for (let key in obj) {
    cloneObject[key] =
      obj[key] instanceof Object ? makeObjectDeepCopy(obj[key]) : obj[key];
  }

  return cloneObject;
};

const selectFromInterval = (array, start, end) => {
  const checkIsArrayValid = (array) => {
    return array.some((el) => typeof el !== 'number') ? true : false;
  };

  const checkIsParamValid = (param) => {
    return !isNaN(param) && typeof param === 'number' ? true : false;
  };

  if (!Array.isArray(array) || checkIsArrayValid(array)) {
    throw new Error('Invalid array!');
  }

  if (!checkIsParamValid(start) || !checkIsParamValid(end)) {
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
  const checkIsParamValid = (param) => {
    return !isNaN(param) && typeof param === 'number' ? true : false;
  };

  if (!this.from || !this.to) {
    throw new Error(`The interval isn't set!`);
  }

  if (!checkIsParamValid(this.from) || !checkIsParamValid(this.to)) {
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
