import { ListNode } from './linkList';

export function reverseLinkList(head: ListNode<number>) {
	if (head === null) {
		return head;
	}
	let temp: ListNode<number>, curr:ListNode<number>, top: ListNode<number>;
	curr = head.next;
	top = head;
	top.next = null;
	while(curr !== null) {
		temp = curr;
		curr = curr.next;
		temp.next = top;
		top = temp;
	}
	return top;
}