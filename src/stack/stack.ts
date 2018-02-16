class Stack {
    capacity: number;
    private _data: Array<any>;
    private _top: number = -1;
    constructor() {
        this._data = [];
    }
    push(val) {
        this._data[++this._top] = val;
    }
    isEmpty() {
        return this._top < 0;
    }
    get size() {
        return this._top + 1;
    }
    pop() {
        if (!this.isEmpty()) {
            const data = this._data[this._top];
            this._data.pop();
            this._top--;
            return data;

        }
    }
    top() {
        return this._data[this._top];
    }
}
module.exports =  {
    Stack: Stack
};