// List ADT
// a list is an ordered sequence of data

// the complete List ADT
// +------------+----------+--------------------------------------------------+
// | name       | type     | description                                      |
// +------------+----------+--------------------------------------------------+
// | listSize   | property | Number of elements in list                       |
// | pos        | property | Current position in list                         |
// | length     | property | Returns the number of elements in list           |
// | clear      | function | Clears all elements from list                    |
// | toString   | function | Returns string representation of list            |
// | getElement | function | Returns element at current position              |
// | insert     | function | Inserts new element after existing element       |
// | append     | function | Adds new element to end of list                  |
// | remove     | function | Removes element from list                        |
// | front      | function | Sets current position to first element of list   |
// | end        | function | Sets current position to last element of list    |
// | prev       | function | Moves current position back one element          |
// | next       | function | Moves current position forward one element       |
// | currPos    | function | Returns the current position in list             |
// | moveTo     | function | Moves the current position to specified position |
// +------------+----------+--------------------------------------------------+

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
}
