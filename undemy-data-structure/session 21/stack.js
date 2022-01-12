// Stack is just CONCEPT!
// 다양한 방법으로 Stack을 구현할 수 있음.

// USE Array

// var stack = [];

// stack.push("goggle");
// stack.push("instagram");
// stack.push("youtube");


// stack.pop();
// 가장 최근 요소를 앞에 입력함 === push();
// 가장 최근의 요소를 먼저 삭제함 === pop();
// 결과적으로 배열에 push, pop만 쓰면 우리는 Stack을 쓰는 것.

// 또는 unshift / shift 사용하기
// push,pop은 맨 뒤에 , unshift, shift는 맨 앞에
// push, pop이 더 효율적이므로 push, pop 사용하기.


// -----------------------------------------
// 생각해보면, Stack은 후입선출 그니까 맨 마지막에 입력한 요소만을 필요로한다.
// index로 무언가를 참조하거나 할 필요도 없다. 우리는 그냥 삽입했을 때의 순서에 기반해서 정보를 다루기만 
// 하면 된다.
// -> Linked List로 stack 사용하기.


// SLL일 이용해 Stack 생성하기.

// 연결리스트의 unshift와 shift를 이용하는 이유는
// SLL의 pop()이 length-2번째 index를 찾는 Search할때 O(N)의 시간복잡도를 가지기 때문에
// 단일 연결리스트이 경우 push, pop 보다 shift, unshift가 더 효율적임.

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if(!stack.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let current = this.first;
            this.first = newNode;
            this.first.next = current;
        }
        return ++this.size;
    }

    pop() {
        if(!stack.size) return null;
        let popped = this.first;
    
        if(stack.first === this.last) {
            this.last = null;    
        } 

        this.first = this.first.next;
        this.size--;
        return popped;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);

// Stack {
//     first: Node { value: 3, next: Node { value: 2, next: [Node] } },
//     last: Node { value: 1, next: null },
//     size: 3
//   }

// push
// The function should accept a value
// Create a new node with that value
// If there are no nodes in the stack, set the first and last property to be the newly created node 
// If there is at least one node, create a variable that stores the current first property on the stack
// Reset the first property to be the newly created node
// Set the next property on the node to be the previously created variable
// Increment the size of the stack by 1

// pop
// If there are no nodes in the stack, return null
// Create a temporary variable to store the first property on the stack
// If there is only 1 node, set the first and last property to be null
// If there is more than one node, set the first property to be the next property on the current first
// Decrement the size by 1
// Return the value of the node removed