// Linked List
function Node(elm) {
    this.element = elm;
    this.next = null;
}

class LinkedList {
    constructor() {
        this.head = new Node("head");
        this.currNode = this.head;
    }

    // get a node in the linked list
    find(itm) {
        let currNode = this.head;
        while (currNode.element !== itm) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // get a node in the linked list
    findPrevious(itm) {
        let currNode = this.head;
        while (currNode.next !== null && currNode.next.element !== itm) {
            currNode = currNode.next;
        }
        return currNode;
    }

    // get all nodes in the linked list
    display() {
        let currNode = this.head;
        while (currNode.next !== null) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    // add new node to the linked list
    insert(itm, node) {
        let currNode = this.find(node);
        let newNode = new Node(itm);
        newNode.next = currNode.next;
        currNode.next = newNode;
    }

    // removw a node from the linked list
    remove(itm) {
        let prevNode = this.findPrevious(itm);
        let nextNode = this.find(itm).next;
        if (prevNode.next !== null) {
            prevNode.next = nextNode;
        }
    }

    // show the current node in the linked list
    show() {
        console.log(this.currNode.element);
    }

    // move to the next node in the linked list
    advance() {
        console.log(this.currNode.next.element);
        this.currNode = this.currNode.next;
    }

    // movr to the previous node in the linked list
    back() {
        this.currNode = this.findPrevious(this.currNode.element);
        console.log(this.currNode.element);
    }
}

module.exports = LinkedList;
