class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        // SLL에서 n - 1 가 newTail이 된다.
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let counter = 0;

        while(index !== counter) {
            current = current.next;
            counter++;
        }

        return current;
    }

    insert(index, val) {
        if(index < 0 || index >= this.length) return null;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        const newNode = new Node(val);
        let prevNode = this.get(index);
        let nextNode = this.get(index+1);
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
}

const sll = new SinglyLinkedList();

sll.push(1);
sll.push(2);
sll.push(3);
console.log(sll);
console.log(sll.pop());
console.log(sll.get(0));
console.log(sll);
