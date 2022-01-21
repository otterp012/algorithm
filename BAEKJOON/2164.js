const { lutimes } = require('fs');
const { listenerCount } = require('process');

let input = require('fs').readFileSync('example.txt').toString().trim();

// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

// let queue = new Array(+input).fill(null).map((item, index) => item = index+1);

// let temp;
// while(queue.length !== 1) {
//     queue.shift();
//     temp = queue.shift();
//     queue.push(temp);
// }

// console.log(queue[0]);


class Node {
    constructor (val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
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

    shift() {
        if(!this.head) return;
        let temp = this.head;
        this.head = temp.next;
        this.length--;

        if(this.length === 0) this.tail = null;
        return temp;
    }
}

const lists = new LinkedList();
for(let i=1; i<=+input; i++) {
    lists.push(i);
}


while(lists.length !== 1) {
    lists.shift();
    lists.push(lists.head.val);
    lists.shift();
}

console.log(lists.head.val);


