import { Stack } from './stack';
import { StackList } from './stackByLinkList';

/**
* This function recursivily pops all element from the stack and pushes
* the element at bottom and again pushes all elemented poped from stack into stack.
*/
export function insertAtBottom(stack: Stack<number>, item: number) {
	if (stack.isEmpty()) {
		stack.push(item);
	} else {
		const temp = stack.pop();
		insertAtBottom(stack, item);
		stack.push(temp);
	}
}

/**
* This function recursivily reverse the stack
*/
export function reverseStack(stack: Stack<number>) {
	if (!stack.isEmpty()) {
		const item = stack.pop();
		reverseStack(stack);
		insertAtBottom(stack, item);
	}
}

export function printStackInReverse(stack: Stack<number>) {
	if( !stack.isEmpty()) {
		const top = stack.pop();
		printStackInReverse(stack);
		console.log(top);
	}
}