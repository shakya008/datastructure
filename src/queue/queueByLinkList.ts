import { LinkedList, ListNode } from '../linklist/linkList';
/**
*Queue implementation using link list concept
* @author Shyam Singh
*/
export class QueueByLinkList<T> {
	private _tail: ListNode<T>
	private _front: ListNode<T>
	private _size: number;
	constructor() {
		this._tail = null;
		this._front = null;
		this._size = 0;
	}
	enqueue(val : T): void {
		const node = new ListNode<T>(val);
		if (this.isEmpty()) {
			this._front = node;
		} else {
			this._tail.next = node;
		}
		this._tail = node;
		this._size++;
	}

	dequeue(): T {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}
		const node = this._front;
		this._front = this._front.next;
		this._size--;
		return node.data;
	}
	front(): T {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}
		return this._front.data;
	}
	tail(): T {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}
		return this._tail.data;
	}
	forEach(callback) {
		let iterator = this._front;
		while(iterator !== null) {
			callback(iterator.data);
			iterator = iterator.next;
		}
	}

	isEmpty() {
		return this._front === null;
	}
	get size() : number {
		return this._size;
	}
}
