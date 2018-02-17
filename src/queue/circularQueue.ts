import { QueueBase } from './queueBase';
export class CircularQueue<T> extends QueueBase<T> {
	private _size: number;
	constructor(capacity: number) {
		super(capacity);
		this._size = 0;
	}
	enqueue(val:T): void {
		if (this.isFull()) {
			throw new Error('Queue capacity has been exaust');
		}
		const rear = (this._rear + 1) % this._capacity;
		this._data[rear] = val;
		this._rear = rear;
		this._size++;
	}
	dequeue(): T {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}
		this._front = (this._front + 1) % this._capacity;
		const val = this._data[this._front];
		this._data[this._front] = undefined;
		this._size--;
		return val;
	}
	front(): T {
		const front = (this._front + 1) % this._capacity;
		return this._data[front];
	}
	isFull(): boolean {
		return this._capacity === this._size;
	}

	isEmpty(): boolean {
		return !this._size;
	}

}