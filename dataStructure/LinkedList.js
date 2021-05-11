class Node {
  constructor(value) {
    this.value = value;
    this.preNode = null;
    this.nextNode = null;
  }

  setPreNode(node) {
    this.preNode = node;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.curNode = null;
    this.lastNode = null;
  }

  createNode(value) {
    if (this.headNode) {
      this.lastNode = new Node(value);
    }
  }
}

export default LinkedList;
