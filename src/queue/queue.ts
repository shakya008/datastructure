import { QueueBase } from './queueBase';

export class  Queue<T> extends QueueBase<T> {
	constructor(capacity?: number) {
		super(capacity);
	}
	public enqueue(val: T) {
		if (this._capacity && this._capacity <= this._rear + 1) {
			throw new Error('Limit exceeded, Max limit:' + this._capacity);
		}
		this._data[++this._rear] = val;
	}
	public dequeue(): T {
		this.validateAndThrowError();
		const val = this._data[++this._front];
		this._data[this._front] = undefined;
		return val;
	}
	get size() {
		return this._rear - this._front;
	}

}