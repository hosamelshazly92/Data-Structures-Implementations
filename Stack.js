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
        this.dataStore[--this.top];
    }

    // removw all elements from the stack
    clear() {
        this.top = 0;
    }
}
