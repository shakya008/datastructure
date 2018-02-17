export class ListNode<T> {
	data: T;
	next: ListNode<T>;
	constructor(data?) {
		this.data = data;
		this.next = null;
	}
}

export class LinkedList<T> {
	head: ListNode<T>;
	tail: ListNode<T>;
	private _size: number;
	constructor() {
		this.head = null;
		this.tail = this.head;
		this._size = 0;
	}
	appendNode(node: ListNode<T>) {
		if (node === undefined) {
			return;
		}
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;

		}
		this._size++;
	}
	prependNode(node: ListNode<T>) {
		if (node === undefined) {
			return;
		}
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this._size++;
	}
	insert(pos: number, node: ListNode<T>) {
		if (pos === 1) {
			this.appendNode(node);
		} else if (pos === this._size + 1) {
			this.prependNode(node);
		} else {
			let temp: ListNode<T> = this.head;
			let counter = 1;
			while(counter !== pos - 1 && temp.next !== null) {
				temp = temp.next;
				counter++;
			}
			if (counter !== pos - 1) {
				console.log('Can not insert at this as this position does not exists');
			} else {
				node.next = temp.next;
				temp.next = node;
				this._size++;
			}
		}
	}
	deleteFirstNode() {
		if (this.head === null) {
			return 0;
		}
		let temp: ListNode<T> = this.head;
		this.head = temp.next;
		temp.next = null;
		this._size--;
	}
	deleteLastNode() {
		if (this.head === null) {
			return 0;
		}
		let temp: ListNode<T> = this.head;
		while(temp.next !== this.tail) {
			temp = temp.next;
		}
		temp.next = null;
		this.tail = temp;
		this._size--;
	}
	deleteNodeByIndex(index: number) {
		if (index < 1 || index > this._size) {
			console.log('Can not delete node at this position as it does not exist');
			return 0;
		}
		if (index == 1) {
			this.deleteFirstNode();
		} else if (index === this._size) {
			this.deleteLastNode();
		} else {
			let temp: ListNode<T> = this.head;
			let counter = 1;
			while(counter !== index - 1) {
				temp = temp.next;
			}
			temp.next = temp.next.next;
			temp.next.next = null;
			this._size--;
		}

	}
	printList() {
		let temp: ListNode<T> = this.head;
		while(temp !== null) {
			console.log(temp.data);
			temp = temp.next;
		}
	}
	getLastNode() {
		return this.tail;
	}
	getFirstNode() {
		return this.head;
	}
	size(): number {
		return this._size;
	}
}
