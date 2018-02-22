import { Queue } from '../queue/queue';

export class StackBy1Queue {
	private _capacity: number;
	private _queue: Queue<number>;
	constructor(capacity?: number) {
		this._queue = new Queue<number>(capacity);
	}
	push(val) {
		this._queue.enqueue(val);
	}
	pop() {
		if (this._queue.isEmpty()) {
			throw new Error('Stack is underflow');
		}
		return this.popRecursion();
	}
	popRecursion() {
		if (this._queue.isEmpty()) {
			return true;
		}
		const data = this._queue.dequeue();
		const ret = this.popRecursion();
		if (ret === true) {
			return data;
		} else {
			this._queue.enqueue(data);
			return ret;
		}
	}
}