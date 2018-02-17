export class Stack<T> {
    capacity: number;
    private _data: Array<T>;
    private _top: number = -1;
    constructor(data?: Array<any>, capacity?: number) {
        if (capacity) {
            this.capacity = capacity;
        }
        capacity = capacity || 0;
        this._data = new Array<T>(capacity);
        (data || []).forEach(item => {
            this.push(item);
        })
    }
    push(val) {
        if (this.capacity && this.capacity <= this._top + 1) {
            throw new Error('Exceeded the stack capacity');
        }
        this._data[++this._top] = val;
    }
    isEmpty() {
        return this._top < 0;
    }
    get size() {
        return this._top + 1;
    }
    pop(): T {
        if (this.isEmpty()) {
            throw new Error('stack is already empty');
        }
        const data = this._data[this._top];
            this._data[this._top] = undefined;
            this._top--;
            return data;
    }
    top(): T {
        return this._data[this._top];
    }
}
