import { binarySearch, binarySearchItr } from './binary-search';


export function findInSortedRotatedArray(input: Array<number>, key: number) {
    return binarySearchItr(input, key);
}

