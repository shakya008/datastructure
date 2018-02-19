import  { Stack } from '../stack/stack';

export class QueueByStack<T> {
	private _stack: Stack<T>;
	private _stackHelper: Stack<T>;
	constructor() {
		this._stack = new Stack<T>();
		this._stackHelper = new Stack<T>();
	}
	push(val: T) {
		this._stack.push(val);
	}
	pop() {
		if (this._stack.isEmpty()) {
			throw new Error('Queue is empty');
		}
		while(!this._stack.isEmpty()) {
			this._stackHelper.push(this._stack.pop());
		}
		const elm = this._stackHelper.pop();
		while(!this._stackHelper.isEmpty()) {
			this._stack.push(this._stackHelper.pop());
		}
		return elm;
	}
	popRecursion() {
		if (this._stack.isEmpty()) {
			throw new Error('Queue is empty');
		}
		return this.popR();
	}
	private popR() {
		if (this._stack.isEmpty()) {
			return true
		}
		const data = this._stack.pop();
		const ret = this.popR();
		if (ret === true) {
			return data;
		} else {
			this._stack.push(data);
			return ret;
		}
	}

}
