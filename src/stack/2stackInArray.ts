/**
* 2 Stack in a array
* @author Shyam Singh
*
*/
export class TwoStackInArray {
	private _top1: number;
	private _top2: number;
	private _data: Array<any>;
	private _capacity: number;
	constructor(capacity: number) {
		this._capacity = capacity;
		this._top1 = -1;
		this._top2 = capacity;
		this._data = new Array(capacity);
	}
	isFull() {
		return this._top2 -this._top1 === 1;
	}
	push1(val) {
		if (this.isFull()) {
			throw new Error('Stack overflow');
		}
		this._data[++this._top1] = val;
	}
	push2(val) {
		if (this.isFull()) {
			throw new Error('Stack overflow');
		}
		this._data[--this._top2] = val;
	}
	pop1() {
		if (this._top1 === -1) {
			throw new Error('Stack is underflow');
		}
		const val = this._data[this._top1];
		this._top1 -= 1;
		return val;
	}
	pop2() {
		if (this._top2 === this._capacity) {
			throw new Error('Stack is underflow');
		}
		const val = this._data[this._top2];
		this._top1 += 1;
		return val;
	}
	isEmpty1() {
		return this._top1 === -1;
	}
	isEmpty2() {
		return this._top1 === -1;
	}
}