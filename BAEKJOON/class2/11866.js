let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');
console.log(input);

let n = +input[0];
let k = +input[1];

const answer = [];
const queue = Array.from({ length: n }, (v, i) => i+1)


while(queue.length > 0) {
    for(let i=0; i<k-1; i++) {
        let temp = queue.shift();
        queue.push(temp);
    }

    let num = queue.shift();
    answer.push(num);
}

console.log('<'+ answer.join(', ') +'>');