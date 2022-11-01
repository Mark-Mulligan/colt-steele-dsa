class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let previousNode = this.tail;
      previousNode.next = newNode;
      newNode.prev = previousNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let nextNode = this.head;
      newNode.next = nextNode;
      nextNode.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  shift() {
    if (this.length === 0) return undefined;
    let removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return removedNode;
    }

    this.head = removedNode.next;
    this.length--;
    return removedNode;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let currentNode = this.head;
      while (count !== index) {
        currentNode = currentNode.next;
        count++;
      }
      return currentNode.val;
    } else {
      let count = this.length - 1;
      let currentNode = this.tail;
      while (count !== index) {
        currentNode = currentNode.prev;
        count--;
      }
      return currentNode.val;
    }
  }
}

const list = new DoublyLinkedList();
list.push(5).push(10).push(15).push(20);
console.log(list.get(0));
console.log(list.get(1));
