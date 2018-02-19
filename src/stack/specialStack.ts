import { Stack } from './stack';
/*
Question: Design a Data Structure SpecialStack that supports all the stack operations
like push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should
return minimum element from the SpecialStack. All these operations of SpecialStack must be O(1).
To implement SpecialStack, you should only use standard Stack data structure and no other data structure
like arrays, list, .. etc.
*/
export class SpecialStack {
	private _stack: Stack<number>;
	private _min: Stack<number>;
	private _capacity: number;
	private _size;
	constructor(capacity: number) {
		this._stack = new Stack<number>(capacity);
		this._min = new Stack<number>(capacity);
		this._capacity = capacity;
		this._size = 0;
	}
	push(val: number) {
		if (this.isFull()) {
			throw new Error('Stack is full')
		}
		this._stack.push(val);
		const min = this._min.top();
		if (min > val) {
			this._min.push(val);
		}
	}
	pop(): number {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}
		const item = this._stack.pop();
		if (item === this._min.top()) {
			this._min.pop();
		}
		return item;
	}
	isEmpty(): boolean {
		return this._size === 0;
	}
	isFull(): boolean {
		return this._size === this._capacity;
	}
	getMin(): number {
		return this._min.top();
	}

}
