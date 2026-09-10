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
  // Build a balanced binary tree from a sorted array
  // find the middle element of the sorted array to serve as the root node,
  // then recursively do the same for the left and right halves.
  buildTree(array) {
    if (array.length === 0) return null;
    const mid = Math.floor(array.length / 2);
    const node = new Node(array[mid]);
    node.left = this.buildTree(array.slice(0, mid));
    node.right = this.buildTree(array.slice(mid + 1));
    return node;
  }
  // an includes(value) function that accepts a value and returns true if the given value is in the tree.
  // If the value isn’t in the tree, it should return false.
  includes(node, value) {
    if (node === null) {
      return false;
    }
    if (node.data === value) {
      return true;
    }
    return includes(node.left, value) || includes(node.right, value);
  }
  // Write an insert(value) function that accepts a value and
  // inserts a new node with that value into the tree.
  insert(value, node = this.root) {
    // if value < node.data, move left; if value > node.data, move right. Attach the new Node when you reach a null spot.
    if (node === null) return new Node(value);
    if (value < node.data) {
      node.left = this.insert(value, node.left);
    } else if (value > node.data) {
      node.right = this.insert(value, node.right);
    }
    return node;
  }
  // Write a delete(value) function that accepts a value and removes the node with that value from the tree.
  // Check out for how many children the targete node has
  // If the given value doesn’t exist in the tree, the function should do nothing
  deleteNode(value, node = this.root) {
    if (node === null) {
      return null;
    }
    if (value < node.data) {
      node.left = deleteNode(value, node.left);
    } else if (value > node.data) {
      node.right = deleteNode(value, node.right);
    } else {
      // Node with only one child or no child
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }

      // Node with two children: Get the inorder successor (smallest in the right subtree)
      const minValueNode = findMin(node.right);
      node.data = minValueNode.data;

      // Delete the inorder successor
      node.right = deleteNode(minValueNode.data, node.right);
    }
  }
  // Write a levelOrderForEach(callback) function that accepts a callback function as its parameter.
  // The function should traverse the tree in breadth-first level order and call the callback on each value as it traverses,
  //  passing each value (not the nodes) as an argument
  // The function should throw an Error if no callback is given as an argument.
  levelOrderForEach(callback) {
    if (typeof callback !== "function") {
      throw new Error("A callback function is required for levelOrder.");
    }

    if (this.root === null) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();
      callback(currentNode);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
  // Write inOrderForEach(callback), preOrderForEach(callback),
  // and postOrderForEach(callback) functions that also accept a callback as a parameter.
  // Each of these functions should traverse the tree in their
  // respective depth-first order and pass each value to the provided callback
  // The functions should throw an Error if no callback is given as an argument.
  inOrder(callback, node = this.root, result = []) {
    if (node === null) return result;

    this.inOrder(callback, node.left, result);

    if (callback) {
      callback(node);
    } else {
      result.push(node.data);
    }

    this.inOrder(callback, node.right, result);

    return result;
  }

  // Depth-First Traversals: Pre-Order (Root, Left, Right)
  preOrder(callback, node = this.root, result = []) {
    if (node === null) return result;

    if (callback) {
      callback(node);
    } else {
      result.push(node.data);
    }

    this.preOrder(callback, node.left, result);
    this.preOrder(callback, node.right, result);

    return result;
  }

  // Depth-First Traversals: Post-Order (Left, Right, Root)
  postOrder(callback, node = this.root, result = []) {
    if (node === null) return result;

    this.postOrder(callback, node.left, result);
    this.postOrder(callback, node.right, result);

    if (callback) {
      callback(node);
    } else {
      result.push(node.data);
    }

    return result;
  }
  // Write a height(value) function that returns the height of the node containing the given value
  // If the value is not found in the tree, the function should return undefined.
  height(node = this.root) {
    if (node === null) return -1;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return 1 + Math.max(leftHeight, rightHeight);
  }
  // Write a depth(value) function that returns the depth of the node containing the given value
  // If the value is not found in the tree, the function should return undefined.
  depth(value, node = this.root, currentDepth = 0) {
    if (node === null) {
      return undefined; // Value not found
    }
    if (node.data === value) {
      return currentDepth; // Found the node, return its depth
    }
    const leftDepth = depth(value, node.left, currentDepth + 1);
  }
  // Write a isBalanced() function that returns true if the tree is balanced and false otherwise.
  isBalanced(node = this.root) {
    if (node === null) return true;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    const heightDiff = Math.abs(leftHeight - rightHeight) <= 1;

    return (
      heightDiff && this.isBalanced(node.left) && this.isBalanced(node.right)
    );
  }
  // Write a rebalance() function that rebalances the tree.
  rebalance() {
    const currentValues = this.inOrder();
    this.root = this.buildTree(currentValues);
  }
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

    export { Node, BinaryTree, prettyPrint}