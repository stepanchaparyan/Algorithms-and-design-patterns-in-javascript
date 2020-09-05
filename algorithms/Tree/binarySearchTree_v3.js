class Node {
  constructor(data) {
      this.data = data; // node value
      this.left = null;   // left node child reference
      this.right = null; // right node child reference
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }
}

insert(data) {
  let newNode = new Node(data);
  if (this.root === null) {
      this.root = newNode;
  } else {
      this.insertNode(this.root, newNode);
  }
}

insertNode(node, newNode) {
  if (newNode.data < node.data) {
      if (node.left === null) {
          node.left = newNode;
      } else {
          this.insertNode(node.left, newNode);
      }
  } else {
      if (node.right === null) {
          node.right = newNode;
      } else {
          this.insertNode(node.right, newNode);
      }
  }
}

search(node, data) {
    if (node === null) {
        return null;
    } else if (data < node.data) {
        return this.search(node.left, data);
    } else if (data > node.data) {
        return this.search(node.right, data);
    } else {
        return node;
    }
}

minNode(node) {
    if (node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}