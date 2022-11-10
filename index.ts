// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let currentNode1 = l1;
  let currentNode2 = l2;
  let carryOver = 0;
  let nodeVal = 0;
  let newNode: ListNode | null = null;
  let previousNode: ListNode | null = null;
  let head: ListNode | null = null;

  while (currentNode1 !== null || currentNode2 !== null) {
    nodeVal = 0;
    if (currentNode1 && currentNode2) nodeVal = currentNode1.val + currentNode2.val + carryOver;
    else if (!currentNode1 && currentNode2) nodeVal = currentNode2?.val + carryOver;
    else if (!currentNode2 && currentNode1) nodeVal = currentNode1.val + carryOver;

    carryOver = 0;
    if (nodeVal >= 10) {
      carryOver = 1;
      nodeVal = nodeVal % 10;
    }

    newNode = new ListNode(nodeVal, null);
    if (previousNode) previousNode.next = newNode;
    else head = newNode;

    if (currentNode1) currentNode1 = currentNode1.next;
    if (currentNode2) currentNode2 = currentNode2.next;
    previousNode = newNode;
  }

  if (carryOver !== 0 && previousNode) previousNode.next = new ListNode(carryOver, null);
  return head;
}

let node1 = new ListNode(2, null);
//let node1 = new ListNode(2, new ListNode(4, new ListNode(8, null)));
let node2 = new ListNode(5, new ListNode(6, new ListNode(4, null)));

let result = addTwoNumbers(node1, node2);
console.log(result);
