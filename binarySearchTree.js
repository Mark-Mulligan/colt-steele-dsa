class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = newNode;
          return this;
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
          return this;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return undefined;

    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) return true;
      else if (value < currentNode.value) {
        if (currentNode.left === null) return false;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        if (currentNode.right === null) return false;
        currentNode = currentNode.right;
      }
    }
  }
}

let bt = new BinarySearchTree();
bt.insert(10);
bt.insert(15);
bt.insert(12);
bt.insert(8);
console.log(bt.find(16));
