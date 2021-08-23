// Dictionary

class Dictionary {
    constructor() {
        this.dataStore = new Array();
    }

    // insert new item into the dictionary
    add(key, val) {
        this.dataStore[key] = val;
    }

    // get an item in the dictionary
    find(key) {
        return this.dataStore[key];
    }

    // remove an item from the dictionary
    remove(key) {
        delete this.dataStore[key];
    }

    // view all items in the dictionary
    show() {
        let obj = {};
        for (let key of Object.keys(this.dataStore)) {
            obj[key] = this.dataStore[key];
        }
        return obj;
    }

    //
    sort() {
        let obj = {};
        for (let key of Object.keys(this.dataStore).sort()) {
            obj[key] = this.dataStore[key];
        }
        return obj;
    }

    // get the count of all items in the dictionary
    count() {
        let num = 0;
        for (let key of Object.keys(this.dataStore)) {
            num++;
        }
        return num;
    }

    // remove all items from the dictionary
    clear() {
        for (let key of Object.keys(this.dataStore)) {
            delete this.dataStore[key];
        }
    }
}
