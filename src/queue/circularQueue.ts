import { QueueBase } from './queueBase';
export class CircularQueue<T> extends QueueBase<T> {
	constructor(capacity: number) {
		capacity = capacity || 0;
		super(capacity);
	}

}