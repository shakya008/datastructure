export function pivotRotatedArray(input: Array<number>, l: number, r: number) {
	if (l<r) {
		const mid = Math.floor(l + (r-l)/2);
		if (input[mid] < input[mid+1] && input[mid] < input[mid-1] ) {
			return mid;
		}
		if (input[l] < input[mid]) {
			return pivotRotatedArray(input, mid , r);
		} else {
			return pivotRotatedArray(input, l, mid);
		}
	}
}