const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

input.shift();
const map = input.shift().split(' ').map(Number);
const TCs = input.map((item) => item.split(' ').map(Number));

const sumArr = Array.from({length : map.length+1}).fill(0);
map.forEach((v, i) => {
    sumArr[i+1] = sumArr[i] + v;
})

let answer = '';
TCs.forEach((TC) => {
    answer += (sumArr[TC[1]] - sumArr[TC[0]-1]) + '\n';
})
console.log(answer);
