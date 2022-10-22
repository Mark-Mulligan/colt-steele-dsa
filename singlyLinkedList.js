class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    let previousNode = currentNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = previousNode;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unShift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    const targetNode = this.get(index);

    if (targetNode) {
      targetNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unShift(val);

    let previousNode = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = previousNode.next;
    previousNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prevNode = null;
    let nextNode;
    for (var i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }

    return this;
  }

  // reverse() {
  //   let previousNode = this.head;
  //   let nextNode = this.head.next;

  //   this.tail = this.head;
  //   this.tail.next = null;

  //   while (true) {
  //     let temp = nextNode.next;
  //     nextNode.next = previousNode;
  //     previousNode = nextNode;
  //     nextNode = temp;

  //     if (nextNode.next === null) {
  //       this.head = nextNode;
  //       this.head.next = previousNode;
  //       break;
  //     }
  //   }

  //   return this;
  // }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

const list = new SinglyLinkedList();

list.push(13);
list.push(27);
list.push(32);
list.push(71);

list.reverse();
list.print();
