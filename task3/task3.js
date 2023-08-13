Array.prototype.myFilter = function (callback, context) {
  if (typeof callback !== 'function') {
    throw new Error(`Callback isn't a function`);
  }

  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback.apply(context, [this[i], i, this])) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const createDebounceFunction = (callback, delay) => {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};
