export function findInSortedRotatedArray(input: Array<number>, key: number) {
    return binarySearch(input, key, 0, input.length - 1);
}

function binarySearch(input: Array<number>, key: number, l, r) {
    if (l<r) {
        const mid = Math.floor(l + (r-l)/2);
        if (input[mid] === key) {
            return mid;
        }
        if (input[mid] > key) {
            return binarySearch(input, key, mid + 1, r);
        }
        return binarySearch(input, key, l, mid -1);
    }
}