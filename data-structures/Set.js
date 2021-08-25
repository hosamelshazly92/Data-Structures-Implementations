// Set

class Set {
    constructor() {
        this.dataStore = [];
    }

    // add new member to the set
    add(data) {
        // check if data was already in the array
        if (this.dataStore.indexOf(data) < 0) {
            this.dataStore.push(data);
            return true;
        } else {
            return false;
        }
    }

    // remove a member from the set
    remove(data) {
        let pos = this.dataStore.indexOf(data);
        if (pos > -1) {
            this.dataStore.splice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    // get all members in the set
    show() {
        return this.dataStore;
    }

    // get the size of the set
    size() {
        return this.dataStore.length;
    }

    // check whether a member is in the set
    contain(data) {
        if (this.dataStore.indexOf(data) > -1) {
            return true;
        } else {
            return false;
        }
    }

    // get the union of two sets
    union(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            tempSet.add(this.dataStore[i]);
        }
        for (let i = 0; i < set.dataStore.length; i++) {
            if (!tempSet.contain(set.dataStore[i])) {
                tempSet.dataStore.push(set.dataStore[i]);
            }
        }
        return tempSet.show();
    }

    // get the intersection of two sets
    intersect(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            if (set.contain(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet.show();
    }

    // check whether the subset length is less than the larger set
    subset(set) {
        if (this.size() > set.size()) {
            return false;
        } else {
            for (let member of this.dataStore) {
                if (!set.contain(member)) {
                    return false;
                }
            }
        }
        return true;
    }

    // get a set containing members in the first set but not in the second
    difference(set) {
        let tempSet = new Set();
        for (let i = 0; i < this.dataStore.length; i++) {
            if (!set.contain(this.dataStore[i])) {
                tempSet.add(this.dataStore[i]);
            }
        }
        return tempSet.show();
    }
}

module.exports = Set;
