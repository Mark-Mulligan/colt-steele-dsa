class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.previous;
      this.tail.next = null;
      poppedNode.previous = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.head) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.previous = null;
      removedNode.next = null;
    }

    this.length--;
    return removedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let count = 0;
      let current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      let count = this.length - 1;
      let current = this.tail;
      while (count != index) {
        current = current.previous;
        count--;
      }
      return current;
    }
  }

  set(index, val) {
    let targetNode = get(index);
    if (targetNode !== null) {
      targetNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !this.unshift(val);
    if (index === this.length - 1) return !this.push(val);

    let newNode = new Node(val);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    newNode.next = nextNode;
    newNode.previous = previousNode;
    previousNode.next = newNode;
    nextNode.previous = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let foundNode = this.get(index);
    let previousNode = foundNode.previous;
    let nextNode = foundNode.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    this.length--;

    foundNode.next = null;
    foundNode.previous = null;
    return foundNode;
  }
}

const list = new DoublyLinkedList();
list.push(2);
list.push(4);
list.push(6);

console.log(list.remove(1));
console.log(list);
