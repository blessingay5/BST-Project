import { BinaryTree, prettyPrint } from "./index.js";

// Create a binary search tree from an array of
// random numbers with each element having a value less than 100.
const randomNumbers = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 100),
);
const bst = new BinaryTree(randomNumbers);

console.log("--- Initial Tree ---");
prettyPrint(bst.root);
console.log(`Is balanced? ${bst.isBalanced()}`);

console.log("\n--- PRINTING TRAVERSALS ---");
const levelOrderValues = [];
bst.levelOrderForEach((node) => levelOrderValues.push(node.data));
console.log(`Level-Order: [ ${levelOrderValues.join(", ")} ]`);
console.log(`Pre-Order:   [ ${bst.preOrder().join(", ")} ]`);
console.log(`Post-Order:  [ ${bst.postOrder().join(", ")} ]`);
console.log(`In-Order:    [ ${bst.inOrder().join(", ")} ]`);

// Run initial traversals
console.log("In-Order:", bst.inOrder());

// Unbalance
console.log("\n--- Unbalancing the Tree ---");
bst.insert(101);
bst.insert(110);
bst.insert(105);
bst.insert(120);
bst.insert(135);
console.log(`Is balanced after inserts? ${bst.isBalanced()}`);

// Rebalance
bst.rebalance();
console.log("--- Rebalanced Tree ---");
prettyPrint(bst.root);
console.log(`Is balanced after rebalance? ${bst.isBalanced()}`);

//Print out all elements in level, pre, post, and in order.
console.log("\n--- FINAL TRAVERSALS AFTER REBALANCE ---");
const newLevelOrder = [];
bst.levelOrderForEach((node) => newLevelOrder.push(node.data));
console.log(`Level-Order: [ ${newLevelOrder.join(", ")} ]`);
console.log(`Pre-Order:   [ ${bst.preOrder().join(", ")} ]`);
console.log(`Post-Order:  [ ${bst.postOrder().join(", ")} ]`);
console.log(`In-Order:    [ ${bst.inOrder().join(", ")} ]`);