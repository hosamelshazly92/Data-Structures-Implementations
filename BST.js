// binary search trea

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function () {
        return this.data;
    };
}

class BST {
    constructor() {
        this.root = null;
    }

    // add new node to the BST
    insert(data) {
        let node = new Node(data, null, null);
        if (this.root == null) {
            this.root = node;
        } else {
            let currNode = this.root;
            let parentNode;
            while (true) {
                parentNode = currNode;
                if (data < currNode.data) {
                    currNode = currNode.left;
                    if (currNode == null) {
                        parentNode.left = node;
                        break;
                    }
                } else {
                    currNode = currNode.right;
                    if (currNode == null) {
                        parentNode.right = node;
                        break;
                    }
                }
            }
        }
    }

    // get the minimum value in the BST
    getMin() {
        let currNode = this.root;
        while (currNode.left !== null) {
            currNode = currNode.left;
        }
        return currNode.data;
    }

    // get the maximum value in the BST
    getMax() {
        let currNode = this.root;
        while (currNode.right !== null) {
            currNode = currNode.right;
        }
        return currNode.data;
    }

    // get a specific value in the BST
    find(data) {
        let currNode = this.root;
        while (currNode !== data) {
            if (data < currNode.data) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
            if (currNode == null) {
                return null;
            }
        }
        return currNode;
    }

    // remove a node from the BST
    remove(data) {
        root = removeNode(this.root, data);
    }

    removeNode(node, data) {
        if (node == null) {
            return null;
        }
        if (data == node.data) {
            // node has no children
            if (node.left == null && node.right == null) {
                return null;
            }
            // node has no left child
            if (node.left == null) {
                return node.right;
            }
            // node has no right child
            if (node.right == null) {
                return node.left;
            }
            // node has two children
            let tempNode = getMin(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.left, data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
}

function inOrder(node) {
    if (node !== null) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node !== null) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show() + " ");
    }
}

module.exports = BST;
