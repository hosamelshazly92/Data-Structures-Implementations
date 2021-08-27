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

let arr = [32, 1, 51, 18, 101, 94];
console.log(seqSearch(arr, 11));
console.log(seqSearch(arr, 18));
