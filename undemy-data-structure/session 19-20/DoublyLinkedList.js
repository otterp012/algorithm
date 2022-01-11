
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
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
            // 1 - > 100
            newNode.prev = this.tail;
            // 100 - > 1
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail;
        // return 값을 위해 필요한 부분

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return poppedNode;
    }

    shift() {
        if(!this.lnegth) return undefined;
        let oldHead = this.head;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;
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

const dll = new DoublyLinkedList();
dll.push(1);
dll.push(2);
dll.push(3);
dll.unshift(4);
console.log(dll.get(3));
// console.log(dll);


// push
// Create a new node with the value passed to the function
// If the head property is null set the head and tail to be the newly created node 
// If not, set the next property on the tail to be that node
// Set the previous property on the newly created node to be the tail
// Set the tail to be the newly created node
// Increment the length
// Return the Doubly Linked List

// pop
// If there is no head, return undefined
// Store the current tail in a variable to return later
// If the length is 1, set the head and tail to be null
// Update the tail to be the previous Node.
// Set the newTail's next to null
// Decrement the length
// Return the value removed

// shift
// If length is 0, return undefined
// Store the current head property in a variable (we'll call it old head)
// If the length is one
// set the head to be null
// set the tail to be null
// Update the head to be the next of the old head
// Set the head's prev property to null
// Set the old head's next to null
// Decrement the length
// Return old head

// unshift
// If the length is 0
// Set the head to be the new node
// Set the tail to be the new node
// Otherwise
// Set the prev property on the head of the list to be the new node
// Set the next property on the new node to be the head property 
// Update the head to be the new node
// Increment the length
// Return the list

// set
// Create a variable which is the result of the get method at the index passed to the function
// If the get method returns a valid node, set the value of that node to be the value passed to the function
// Return true
// Otherwise, return false

// insert
// If the index is less than zero or greater than or equal to the length return false
// If the index is 0, unshift
// If the index is the same as the length, push
// Use the get method to access the index -1
// Set the next and prev properties on the correct nodes to link everything together
// Increment the length 
// Return true

// remove
// If the index is less than zero or greater than or equal to the length return undefined
// If the index is 0, shift
// If the index is the same as the length-1, pop
// Use the get method to retrieve the item to be removed
// Update the next and prev properties to remove the found node from the list
// Set next and prev to null on the found node
// Decrement the length
// Return the removed node.