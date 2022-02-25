class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
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
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let removedTail = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.length--;
        return removedTail;
    }

    shift() {
        if(!this.head) return undefined;
        let removedHead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
                    this.head = removedHead.next;
        this.head.prev = null;
        removedHead.next = null;
        }
        this.length--;

        return removedHead;
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;

        let count;
        let searched;
        if(index <= this.length/2) {
            searched = this.head;
            count = 0;
            while(count !== index) {
                searched = searched.next;
                count++;
            }
        } else {
            searched = this.tail;
            count = this.length - 1;
            while(index !== index) {
                searched = searched.prev;
                count--;
            }
        }
        return searched;
    }

    set(index, value) {
        // this.get(index).val = value;

        let foundNode = this.get(index);
        if(foundNode !== null) {
            foundNode.val = value;
            return true;
        } else return false;
    }

    insert(index, value) {
        if(index < 0 || index >= this.length) return false;
        if(index === 0) return !!this.unshift(value);
        if(index === this.length) return !!this.push(value);

        const newNode = new Node(value);
        const beforedNode = this.get(index-1);
        const afterNode = this.get(index+1);
        beforedNode.next = newNode, newNode.prev = beforedNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;

        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        const foundNode = this.get(index);
        const beforeNode = this.get(index-1);
        const afterNode = this.get(index+1);
        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        foundNode.next = null, foundNode.prev = null;

        this.length--;
        return foundNode;
    }
}



