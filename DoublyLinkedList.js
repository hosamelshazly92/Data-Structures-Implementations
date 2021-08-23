// Doubly Linked List
function Node(elm) {
    this.element = elm;
    this.next = null;
    this.previous = null;
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node("head");
    }

    // get a node in the doubly linked list
    find(itm) {
        let currNode = this.head;
        while (currNode.element !== itm) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // get last node in the doubly linked list
    findLast(itm) {
        let currNode = this.head;
        while (currNode.next !== null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // get all nodes in the doubly linked list
    display() {
        let currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    // get all nodes in the doubly linked list
    displayReverse() {
        let currNode = this.head;
        currNode = this.findLast();
        while (currNode.previous !== null) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }

    // add new node to the doubly linked list
    insert(itm, node) {
        let currNode = this.find(node);
        let newNode = new Node(itm);
        newNode.next = currNode.next;
        newNode.previous = currNode;
        currNode.next = newNode;
    }

    // removw a node from the doubly linked list
    remove(itm) {
        let currNode = this.find(itm);
        if (currNode.next !== null) {
            currNode.previous.next = currNode.next;
            currNode.previous.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    }
}

module.exports = DoublyLinkedList;
