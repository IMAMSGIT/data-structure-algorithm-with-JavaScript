class mySet {
  constructor() {
    this.collection = [];
  }
  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }
  has(element) {
    if (this.collection.indexOf(element) !== -1) return true;
    return false;
  }

  values() {
    return this.collection;
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return "The item is no in the array, why want to delete?";
  }
  size() {
    return this.collection.length;
  }
}

let testSet = new mySet();
