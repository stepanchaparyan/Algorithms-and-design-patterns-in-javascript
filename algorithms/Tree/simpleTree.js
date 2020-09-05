class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendents = [];
  }
}

// create nodes with values
const stepan = new TreeNode('Stepan');
const armine = new TreeNode('Armine');
const aram = new TreeNode('Aram');
const areg = new TreeNode('Areg');
const arpi = new TreeNode('Arpi');

// associate root with is descendents
stepan.descendents.push(armine);
armine.descendents.push(aram, areg, arpi);
