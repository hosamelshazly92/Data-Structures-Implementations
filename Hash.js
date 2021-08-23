// Hash

class Hash {
    constructor() {
        this.table = new Array(137);
    }

    // insert data into the table
    put(key, data) {
        let pos = this.hashing(key);
        this.table[pos] = data;
    }

    // hash function definition
    hashing(data) {
        let total = 0;
        let prime = 37;
        for (let i = 0; i < data.length; i++) {
            total += data.charCodeAt(i);
        }
        total *= prime;
        return parseInt(total % this.table.length);
    }

    // get all data in the table
    showDistro() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i] !== undefined) {
                console.log(this.table[i]);
            }
        }
    }

    // get an item in the table
    get(key) {
        return this.table[this.hashing(key)];
    }
}

module.exports = Hash;

let table = new Hash();
