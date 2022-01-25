let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
input.shift();

class Queue {
    constructor() {
        this.queue = [];
    }

    push(val) {
        this.queue.push(val);
    }

    pop() {
        if(!this.queue.length) return -1;

        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }

    empty() {
        if(!this.queue.length) return 1;
        else return 0;
    }

    front() {
        if(!this.queue.length) return -1;
        return this.queue[0]
    }

    back() {
        if(!this.queue.length) return -1;
        return this.queue[this.queue.length-1];
    }
}

const q = new Queue();
const answer = [];

input.forEach((item) => {
    const command = item;
    switch(command){
        case 'front':
          answer.push(q.front())
          break;
        case 'back':
          answer.push(q.back())
          break;
        case 'size':
          answer.push(q.size())
          break;
        case 'empty':
          answer.push(q.empty())
          break;
        case 'pop':
          answer.push(q.pop())
          break;
        default:
          const [_,value] = command.split(' ');
          q.push(+value);
          break;
      }
})

console.log(answer.join('\n'));