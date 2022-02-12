
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const [N, M] = input.shift().split(' ');

const nameMap = new Map();
const numMap = new Map();
for(let i=0; i<N; i++) {
    nameMap.set(i+1, input[i]);
    numMap.set(input[i], i+1);
}


let answer = '';
for(let i=N; i<input.length; i++) {
    if(isNaN(input[i])) {
        answer += numMap.get(input[i]) + '\n';
    } else {
        answer += nameMap.get(+input[i]) +'\n';
    }
}
console.log(answer);