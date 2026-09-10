// Build a node class, It should have an attribute for the data it stores as well as its left and right children.

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(array) {
        // Sort the array and remove duplicates
        const sortedArray = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(sortedArray);
    }
}
// Build a balanced binary tree from a sorted array
// find the middle element of the sorted array to serve as the root node, 
// then recursively do the same for the left and right halves.
function buildTree(array) {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = buildTree(array, start, mid - 1);
    node.right = buildTree(array, mid + 1, end);

    return node;
}
// Visualually representing the binary tree
    const prettyPrint = (node, prefix = "", isLeft = true) => {
      if (node === null || node === undefined) {
        return;
      }

      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    };
// an includes(value) function that accepts a value and returns true if the given value is in the tree. 
// If the value isn’t in the tree, it should return false.