export function binarySearch(input: Array<number>, key: number, l: number, r: number) {
    if (l<=r) {
        const mid = Math.floor(l + (r-l)/2);
        if (input[mid] === key) {
            return mid;
        }
        if (key > input[mid]) {
            return binarySearch(input, key, mid + 1, r);
        }
        return binarySearch(input, key, l, mid -1);
    }
    return -1;
}

export function binarySearchItr(input: Array<number>, key) {
    var l = 0;
    var r = input.length - 1;
    while(l<=r) {
        var mid = Math.floor(l + (r-l)/2);
        if (input[mid] === key) {
            return mid;
        }
        if (key < input[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
}