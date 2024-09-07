class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  findPrime() {
    const results = [];

    const isPrime = (num) => {
      if (num < 1) return false;
      if (num === 2) return true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    };

    const inOrder = (node) => {
      if (node === null) return;

      inOrder(node.left);

      if (isPrime(node.value)) {
        results.push(node.value);
      }

      inOrder(node.right);
    };

    inOrder(this.root);
    return results;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(12);
bst.insert(9);
bst.insert(7);
bst.insert(8);
bst.insert(3);
bst.insert(2);
bst.insert(11);
bst.insert(14);

console.log(bst.findPrime());