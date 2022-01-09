// class Node{
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// var first = new Node('hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');


// first : hi
// first.next : there
// first.next.next : how
// first.next.next.next : are

// pseudocode
// This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
// Increment the length by one
// Return the linked list.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    
    // traverse() {
    //     var current = this.head;
    //     while(current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    //     return current;
    // }

    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next) {
            // current.next에 값이 있을 경우에만 loop
            newTail = current;
            current = current.next;
        }
        // console.log(current.val, newTail.val);
        // ? // GOODBYE
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

// If there are no nodes in the list, return undefined
// Loop through the list until you reach the tail
// Set the next property of the 2nd to last node to be null
// Set the tail to be the 2nd to last node
// Decrement the length of the list by 1
// Return the value of the node removed
    // shift() {
    //     if(!this.head) return undefined;
    //     var current = this.head;
    //     this.head = this.current.next;
    //     this.length--;
    //     return current.val;
    // } 내가 작성한 shift

    shift() {
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        
        if(this.length === 0) this.tail = null;
        return currentHead;
    }

//     This function should accept a value
// Create a new node using the value passed to the function
// If there is no head property on the list, set the head and tail to be the newly created node
// Otherwise set the newly created node's next property to be the current head property on the list
// Set the head property on the list to be that newly created node
// Increment the length of the list by 1
// Return the linked list
    // unshift(val) {
    //     var newNode = new Node(val);
    //     if(!this.head) {
    //         this.head = newNode.val;
    //         this.tail = newNode.val;
    //     } else {
    //         newNode.next = this.head;
    //         this.head = newNode;
    //     }
    //     this.length++;

    //     return newNode;
    // }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    // get(num) {
    //     if(num < 0) return null;
    //     var current = this.head;
    //     var counter = 0;
    //     while(current.next) {
    //         current.counter = counter++;
    //         // counter = counter++;
    //         current = current.next;

    //         if(counter === num) break;
    //     }

    //     return current;
    // }

//     This function should accept an index
// If the index is less than zero or greater than or equal to the length of the list, return null
// Loop through the list until you reach the index and return the node at that specific index
    get(index) {
        if(index <= 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }

        return current;
    }

//     This function should accept a value and an index
// Use your get function to find the specific node.
// If the node is not found, return false
// If the node is found, set the value of that node to be the value passed to the function and return true
    // set(index, value) {
    //     if(this.get(index)) {
    //         this.get(index).val = value; 
    //     } else return false;
    // }

    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    // insert(index, val) {
    //     if(index < 0 || index > this.length) return false;
    //     else if(index === 0) return boolean(this.unshift(val));
    //     else if(index === this.length) return boolean(this.push(val));

    //     let newNode = new Node(val);
    //     let pre = get(index-1);
    //     pre.next = newNode;
    //     newNode.next = get(index);
    // }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        // push와 unshift는 각자 전체 리스트를 리턴하는데, insert는 t/f를 리턴해야함.

        var newNode = new Node(val);
        var prev = this.get(index-1);
        prev.next = newNode;
        var temp = prev.next;
        newNode.next = temp;
        this.length++;
        // length 까먹었었네
        return true;
    }

    // remove(index) {
    //     if(index < 0 || index >= this.length) return undefined;
    //     if(index === 0) return this.shift();
    //     if(index === this.length-1) return this.pop();

    //     var prep = this.get(index-1);
    //     var next = this.get(index+1);
    //     prep.next = next;
    //     this.length--;

    //     return this.get(index);
    // }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) this.shift();
        if(index === this.length-1) this.pop();

        var previousNode = this.get(index-1);
        var removed = previousNode.next;
        previousNode.next = removed.next;

        return removed;
    }
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
          next = node.next;
          node.next = prev;
          prev = node;
          node = next;
        }
        return this;
      }
      print(){
          var arr = [];
          var current = this.head
          while(current){
              arr.push(current.val)
              current = current.next
          }
          console.log(arr);
      }
}

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("G!")
// HELLO -> GOODBYE -> !
list.set(2, '27');
console.log(list);
console.log(list.reverse());