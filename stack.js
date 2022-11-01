class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.first = null;
    this.last = null;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return this.length++;
  }

  pop() {
    if (this.length === 0) return null;
    let removedNode = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      let nextNode = this.first.next;
      this.first = nextNode;
    }

    this.length--;
    removedNode.next = null;
    return removedNode.value;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
