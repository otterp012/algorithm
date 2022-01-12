// building with array

// var queue = [];

// // 배열의 끝에 추가하기

// queue.unshift(1);
// queue.unshift(2);
// queue.unshift(3);
// // 선입선출로 제거하려면,

// queue.pop();

// building with SLL
// 당연히 맨앞에 추가하고, 맨 뒤에서 제거하는 방법이 효율적임 (SLL)

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if(!this.size) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            newNode = this.last;
        }
        return ++this.size;
    }

    dequeue() {
        if(!this.first) return null;
        let temp = this.first;
        if(this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}