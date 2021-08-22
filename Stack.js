// Stack

class Stack {
    constructor() {
        this.top = 0;
        this.dataStore = [];
    }

    // get the length of the stack
    get length() {
        return this.top;
    }

    // check whether the stack has no elements
    empty() {
        if (this.top === 0) {
            return true;
        } else {
            return false;
        }
    }

    // get all elements in the stack
    toString() {
        return this.dataStore;
    }

    // get the top element of the stack
    peek() {
        return this.dataStore[this.top - 1];
    }

    // add new element to the stack
    push(elm) {
        this.dataStore[this.top++] = elm;
    }

    // removw an element from the stack
    pop() {
        return this.dataStore[--this.top];
    }

    // removw all elements from the stack
    clear() {
        this.top = 0;
    }
}
