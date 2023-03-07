class Queue {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  enqueue(element) {
    return this.collection.push(element);
  }
  dequeue() {
    return this.collection.shift();
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    if (this.collection.length === 0) return "Queue empty";
    return "Not empty";
  }
}
let myQueue = new Queue();
