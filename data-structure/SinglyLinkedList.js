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
        if(!this.head) return;
        let current = this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            // newTail은 마지막 노드의 직전 노드가 됨
            current = current.next;
            // current는 마지막 노드가 됨
        }

        newTail.next = null;
        this.tail = newTail;
        this.length--;

        if(!this.head) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--;

        if(this.length === 0) this.tail = null;
        return current;
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        let current = this.head;
        let count = 0;
        while(index !== count) {
            current = current.next;
            count++;
        }

        return current;
    }

    set(index, val) {
        let foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index < 0 || index >= this.length) return false;
        if(index === this.length) this.push(val);
        if(index === 0) this.unshift(val);

        const newNode = new Node(val);
        let prevNode = this.get(index-1);
        prevNode.next = newNode;
        newNode.next = this.get(index);
        this.length++;

        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) this.shift();
        if(index === this.length-1) this.pop();

        let prevNode = this.get(index-1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }
}

const sll = new SinglyLinkedList();

