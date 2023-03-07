class QElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.items = [];
  }

  printCollection() {
    return this.items;
  }
  isEmpty() {
    if (this.items.length === 0) return "Queue empty";
    return "Not empty";
  }
  enqueue(element, priority) {
    var qElement = new QElement(element, priority);
    var contain = false;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > qElement.priority) {
        this.items.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(qElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  front() {
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  size() {
    return this.items.length;
  }
}
let priorityQueue = new PriorityQueue();

priorityQueue.printCollection();

priorityQueue.enqueue("wht", 1);

priorityQueue.enqueue("wht", 2);

priorityQueue.enqueue("wht", 3);

priorityQueue.enqueue("yooooooo", 1);

priorityQueue.printCollection();
