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

// binary seqrch
function binSearch(arr, data) {
    let lower = 0;
    let upper = arr.length - 1;

    while (lower <= upper) {
        let mid = Math.floor((upper + lower) / 2);

        if (arr[mid] < data) {
            lower = mid + 1;
        } else if (arr[mid] > data) {
            upper = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

module.exports = {
    seqSearch,
    findMin,
    findMax,
    binSearch,
};
