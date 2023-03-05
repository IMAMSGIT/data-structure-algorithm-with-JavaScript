function Stack() {
  this.count = 0;
  this.storage = [];
  this.push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };
  this.pop = function () {
    if (this.count === 0) {
      return "Stack is Empty";
    }

    delete this.storage[this.count - 1];
    this.count--;
  };

  this.size = function () {
    return this.count;
  };
  this.peek = function () {
    return this.storage[this.count - 1];
  };
}
const myStack = new Stack();
