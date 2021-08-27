// sequential search
function seqSearch(arr, data) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == data) {
            return arr.indexOf(data);
        }
    }

    // not found
    return -1;
}

// find minimum value
function findMin(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

// find maximum value
function findMax(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

module.exports = {
    seqSearch,
    findMin,
    findMax,
};
