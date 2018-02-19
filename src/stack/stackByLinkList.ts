import { LinkedList, ListNode } from '../linklist/linkList';

/**
* Stack implementation using linklist
*/
export class StackList<T> {
	private _capacity: number;
	private _head: ListNode<T>;
	private _size;
	constructor(capacity: number) {
		this._capacity = capacity || 0;
		this._head = null;
		this._size = 0;
	}
	push(val: T) {
		if (this.isFull()) {
			throw new Error('Stack is full');
		}
		const node = new ListNode<T>(val);
		node.next = this._head;
		this._head = node;
		this._size ++;
	}
	pop(): T {
		if (this.isEmpty()) {
			throw new Error('Stack is empty');
		}
		const node = this._head;
		this._head = node.next;
		this._size--;
		return node.data;
	}
	get size(): number {
		return this._size;
	}
	isEmpty(): boolean {
		return this._head === null;
	}
	isFull(): boolean {
		return this._capacity && this._size === this._capacity;
	}

}