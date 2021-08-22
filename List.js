// List ADT (Abstract Data Structure)

class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }

    // determine the number of elements in the list
    get length() {
        return this.listSize;
    }

    // get all elements in the list
    toString() {
        return this.dataStore;
    }

    // find an element in the list
    find(elm) {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == elm) {
                return i;
            }
        }
        return -1;
    }

    // add an element to the list
    append(elm) {
        this.dataStore[this.listSize++] = elm;
    }

    // remove an element from the list
    remove(elm) {
        let foundAt = this.find(elm);

        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    // add an element to the list
    insert(idx, elm) {
        let foundAt = this.find(idx);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt + 1, 0, elm);
            ++this.listSize;
            return true;
        }
        return false;
    }

    // remove all elements from a list
    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }

    // determine if a value is in the list
    contain(elm) {
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == elm) {
                return true;
            }
        }
        return false;
    }

    // traverse the list
    front() {
        return (this.pos = 0);
    }

    end() {
        return (this.pos = this.listSize - 1);
    }

    currPos() {
        return this.pos;
    }

    prev() {
        if (this.pos > 0) {
            return --this.pos;
        }
        return this.pos;
    }

    next() {
        if (this.pos < this.listSize - 1) {
            return ++this.pos;
        }
        return false;
    }

    moveTo(position) {
        if (position <= this.listSize - 1) {
            return (this.pos = position);
        }
        return false;
    }

    getElement() {
        return this.dataStore[this.pos];
    }
}

module.exports = List;
