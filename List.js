/*
List ADT
a list is an ordered sequence of data

the complete List ADT
+------------+----------+--------------------------------------------------+
| name       | type     | description                                      |
+------------+----------+--------------------------------------------------+
| listSize   | property | Number of elements in list                       |
| pos        | property | Current position in list                         |
| length     | property | Returns the number of elements in list           |
| clear      | function | Clears all elements from list                    |
| toString   | function | Returns string representation of list            |
| getElement | function | Returns element at current position              |
| insert     | function | Inserts new element after existing element       |
| append     | function | Adds new element to end of list                  |
| remove     | function | Removes element from list                        |
| front      | function | Sets current position to first element of list   |
| end        | function | Sets current position to last element of list    |
| prev       | function | Moves current position back one element          |
| next       | function | Moves current position forward one element       |
| currPos    | function | Returns the current position in list             |
| moveTo     | function | Moves the current position to specified position |
+------------+----------+--------------------------------------------------+
*/

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

    // retrieving all elements in the list
    toString() {
        return this.dataStore;
    }

    // find an element in the list
    find(elm) {
        for(let i = 0; i < this.dataStore.length; i++) {
            if(this.dataStore[i] == elm) {
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

        if(foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    // insert an element to the list
    insert(idx, elm) {
        let foundAt = this.find(idx);
        if(foundAt > -1) {
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
        for(let i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] == elm) {
                return true;
            }
        }
        return false;
    }

    // traverse the list
    front() {
        return this.pos = 0;
    }

    end() {
        return this.pos = this.listSize - 1;
    }

    currPos() {
        return this.pos;
    }

    prev() {
        if(this.pos > 0) {
            return --this.pos;
        }
        return this.pos;
    }

    next() {
        if(this.pos < this.listSize - 1) {
            return ++this.pos;
        }
        return false;
    }

    moveTo(position) {
        if(position <= this.listSize - 1) {
            return this.pos = position;
        }
        return false;
    }

    getElement() {
        return this.dataStore[this.pos];
    }
}
