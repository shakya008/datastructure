import { QueueBase } from './queueBase';

export class  Queue<T> extends QueueBase<T> {
	constructor(capacity?: number) {
		super(capacity);
	}
	public enqueue(val: T) {
		this._data[++this._rear] = val;
	}
	public dequeue(): T {
		this.validateAndThrowError();
		const val = this._data[++this._rear];
		this._data[this._rear] = undefined;
		return val;
	}

}