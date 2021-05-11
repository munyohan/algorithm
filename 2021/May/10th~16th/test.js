'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = root => {
  const answer = [];

  inorder(root);

  return answer;

  function visit(node) {
    answer.push(node.val);
  }
  function inorder(node) {
    if (node) {
      node.left && inorder(node.left);
      visit(node);
      node.right && inorder(node.right);
    }
  }
};

function TreeNode(val, left, right) {
  this.val = val || 0;
  this.left = left || null;
  this.right = right || null;
}

const rootNode = new TreeNode(1, null, null);

console.log(inorderTraversal(rootNode));
