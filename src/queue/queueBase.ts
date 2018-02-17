export class QueueBase<T>{
	protected _data: Array<T>;
	protected _front: number;
	protected _capacity: number;
	protected _rear: number;
	constructor(capacity?: number) {
		this._front = -1;
		this._rear = -1;
		this._capacity = capacity || 0;
		this._data = new Array<T>(this._capacity);
	}
	public isEmpty() {
		return this._rear === this._front;
	}
	public validateAndThrowError() {
		if (this.isEmpty()) {
			throw new Error('Queue is empty');
		}
		return true;
	}
	public front(): T {
		this.validateAndThrowError();
		return this._data[this._front];
	}

	public rear(): T {
		this.validateAndThrowError();
		return this._data[this._rear];
	}
}