let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input.shift();
console.log(input);
class Deque {
    constructor() {
        this.deque = []
    }

    push_back(val) {
        this.deque.unshift(val);
    }

    push_back(val) {
        this.deque.push(val);
    }

    pop_front() {
        let temp;
        if(this.deque.length) {
            temp = this.deque.shift();
            return temp;
        } else {
            return -1;
        }
    }

    pop_back() {
        let temp;
        if(this.deque.length) {
            temp = this.deque.pop();
            return temp;
        } else {
            return -1;
        }
    }

    size() {
        return this.deque.length;
    }

    empty() {
        if(this.deque.length) return 0;
        else return 1;
    }

    front() {
        return this.deque[0];
    }

    back() {
        return this.deque[this.deque.length-1];
    }
}

const newDeque = new Deque();
let answer = [];



console.log(answer.join('\n'));