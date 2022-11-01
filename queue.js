class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    let foundItem = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      let newFirst = this.first.next;
      this.first = newFirst;
      foundItem.next = null;
    }

    this.size--;
    return foundItem.value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
