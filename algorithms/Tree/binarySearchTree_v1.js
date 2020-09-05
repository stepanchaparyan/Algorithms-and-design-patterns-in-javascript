function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null
}

let myNode = new TreeNode(8);

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
    if (nums.length === 1) return new TreeNode(nums[0]);
    if (nums.length === 0) return null;
    
    let centerIdx = Math.floor(nums.length/2);    
    let root = new TreeNode(nums[centerIdx]);
    
    let leftSubtree = nums.slice(0,centerIdx);
    root.left = sortedArrayToBST(leftSubtree);
    
    let rightSubtree = nums.slice(centerIdx+1,nums.length);
    root.right = sortedArrayToBST(rightSubtree);
      
    return root;
};

sortedArrayToBST([-10,-3,0,5,9]);