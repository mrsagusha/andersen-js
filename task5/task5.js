const isValidNumber = (num) => {
  return typeof num === 'number' && isFinite(num) && !isNaN(num);
};

class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (!isValidNumber(maxSize)) {
      throw new Error('Invalid number');
    }

    this.maxSize = maxSize;
    this.size = 0;
    this.last = null;
  }

  push(data) {
    if (this.size === this.maxSize) {
      throw new Error('Stack is full!');
    }

    this.last = new Node(data, this.last);
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('Stack is empty!');
    }

    let last = this.last.data;
    this.last = this.last.prev;
    this.size--;

    return last;
  }

  peek() {
    return this.size !== 0 ? this.last.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  toArray() {
    const array = [];
    let last = this.last;

    while (last) {
      array.push(last.data);
      last = last.prev;
    }

    return array.reverse();
  }

  static fromIterable(iterable) {
    if (!iterable[Symbol.iterator]) {
      throw new Error(`Isn't iterable`);
    }

    const stack = new Stack(iterable.length);

    for (let key of iterable) {
      stack.push(key);
    }

    return stack;
  }
}

module.exports = { Stack };
