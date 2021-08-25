class Arr {
    constructor(num) {
        this.dataStore = [];
        this.pos = 0;
        this.num = num;

        for (let i = 0; i < num; i++) {
            this.dataStore[i] = i;
        }
    }

    setData() {
        for (let i = 0; i < this.num; i++) {
            this.dataStore[i] = Math.floor(Math.random() * (this.num + 1));
        }

        return this.dataStore;
    }

    insert(elm) {
        this.dataStore[this.pos++] = elm;
    }

    toString() {
        return this.dataStore;
    }

    clear() {
        for (let i = 0; i < this.dataStore.length; i++) {
            this.dataStore[i] = 0;
        }
    }

    swap(idx1, idx2) {
        let temp = this.dataStore[idx1];
        this.dataStore[idx1] = this.dataStore[idx2];
        this.dataStore[idx2] = temp;
    }

    // bubble sort
    bubbleSort() {
        let num = this.dataStore.length;

        for (let outer = num; outer >= 2; outer--) {
            for (let inner = 0; inner <= outer - 1; inner++) {
                if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                    this.swap(inner, inner + 1);
                }
            }
        }

        return this.dataStore;
    }

    // selection sort
    selectionSort() {
        let min;

        for (let outer = 0; outer <= this.dataStore.length - 2; outer++) {
            min = outer;

            for (
                let inner = outer + 1;
                inner <= this.dataStore.length - 1;
                inner++
            ) {
                if (this.dataStore[inner] < this.dataStore[min]) {
                    min = inner;
                }

                this.swap(outer, min);
            }
        }

        return this.dataStore;
    }

    // insertion sort
    insertionSort() {
        let inner, temp;

        for (let outer = 0; outer < this.dataStore.length; outer++) {
            temp = this.dataStore[outer];
            inner = outer;

            while (inner > 0 && this.dataStore[inner - 1] >= temp) {
                this.dataStore[inner] = this.dataStore[inner - 1];
                inner--;
            }

            this.dataStore[inner] = temp;
        }

        return this.dataStore;
    }

    // shell sort
    shellSort() {
        // computing a dynamic gap sequence
        let n = this.dataStore.length;
        let h = 1;

        while (h < n / 3) {
            h = 3 * h + 1;
        }

        while (h >= 1) {
            for (let i = h; i < n; i++) {
                for (
                    let j = i;
                    j >= h && this.dataStore[j] < this.dataStore[j - h];
                    j -= h
                ) {
                    this.swap(j, j - h);
                }
            }

            h = (h - 1) / 3;
        }

        return this.dataStore;
    }
}

module.exports = Arr;
