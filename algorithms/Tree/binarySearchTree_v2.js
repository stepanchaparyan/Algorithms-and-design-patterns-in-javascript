function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.makeNode = function(value) {
  var node = {};
  node.value = value;
  node.left = null;
  node.right = null;
  return node;
};

BinarySearchTree.prototype.add = function(value) {
  var currentNode = this.makeNode(value);
  if (!this.root) {
      this.root = currentNode;
  } else {
      this.insert(currentNode);
  }
  return this;
};

BinarySearchTree.prototype.insert = function(currentNode) {
  var value = currentNode.value;
  var traverse = function(node) {
      if (value > node.value) {
          if (!node.right) {
              node.right = currentNode;
              return;
          } else traverse(node.right);
      } else if (value < node.value) {
          if (!node.left) {
              node.left = currentNode;
              return;
          } else traverse(node.left);
      }
  };
  traverse(this.root);
};

BinarySearchTree.prototype.contains = function(value) {
  var node = this.root;
  var traverse = function(node) {
      if (!node) return false;
      if (value === node.value) {
          return true;
      } else if (value > node.value) {
          return traverse(node.right);
      } else if (value < node.value) {
          return traverse(node.left);
      }
  };
  return traverse(node);
};


//find the left most node to find the min value of a binary tree;
BinarySearchTree.prototype.findMin = function() {
  var node = this.root;
  var traverse = function(node) {
      return !node.left ? node.value : traverse(node.left);
  };
  return traverse(node);
};

//find the right most node to find the max value of a binary tree;
BinarySearchTree.prototype.findMax = function() {
  var node = this.root;
  var traverse = function(node) {
      return !node.right ? node.value : traverse(node.right);
  };
  return traverse(node);
};


BinarySearchTree.prototype.getDepth = function() {
  var node = this.root;
  var maxDepth = 0;
  var traverse = function(node, depth) {
      if (!node) return null;
      if (node) {
          maxDepth = depth > maxDepth ? depth : maxDepth;
          traverse(node.left, depth + 1);
          traverse(node.right, depth + 1);
      }
  };
  traverse(node, 0);
  return maxDepth;
};

BinarySearchTree.prototype.countLeaves = function() {
  var count = 0;
  var node = this.root;
  var traverse = function(node) {
      if (!node) return null;
      if (!node.left && !node.right) count++;
      else traverse(node.left) + traverse(node.right);
  };
  traverse(node);
  return count;
}
