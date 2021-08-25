// Queue

class Queue {
    constructor() {
        this.dataStore = [];
    }

    // get the length of the queue
    get length() {
        return this.dataStore.length;
    }

    // check whether the queue has no elements
    empty() {
        if (this.dataStore.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    // get all elements in the queue
    toString() {
        return this.dataStore;
    }

    // add new element to the queue
    enqueue(elm) {
        this.dataStore.push(elm);
    }

    // removw an element from the queue
    dequeue() {
        return this.dataStore.shift();
    }

    // get the first element in the queue
    front() {
        return this.dataStore[0];
    }

    // get the last element in the queue
    back() {
        return this.dataStore[this.dataStore.length - 1];
    }

    // removw all elements from the queue
    clear() {
        this.dataStore = [];
    }
}

module.exports = Queue;
