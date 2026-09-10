# Binary Search Tree (BST) Project

This project is a simple implementation of a Binary Search Tree (BST) inspired by The Odin Project curriculum. It focuses on understanding tree structure, recursion, and common BST operations.

## Overview

A Binary Search Tree is a type of binary tree where each node has at most two children, and the left subtree contains smaller values while the right subtree contains larger values. This project demonstrates how to build, traverse, and manipulate a BST.

## Features

- Insert nodes into the tree
- Search for a value
- Delete a node
- Traverse the tree using:
  - In-order
  - Pre-order
  - Post-order
  - Level-order
- Calculate the height of a node or tree
- Check whether the tree is balanced
- Rebalance the tree when needed

## Getting Started

1. Clone the repository
2. Open the project folder in your terminal
3. Run the JavaScript file with Node.js

```bash
node index.js
```

## Example Usage

```javascript
const bst = new Tree();

[5, 3, 7, 2, 4, 6, 8].forEach((value) => bst.insert(value));

console.log(bst.inorder());
console.log(bst.isBalanced());
```

## Learning Goals

- Understand how binary search trees work
- Practice recursion and tree traversal
- Learn how balancing affects performance
- Build a solid foundation for more advanced data structures

## Note

This is a beginner-friendly project meant to practice core BST concepts and improve problem-solving skills.
