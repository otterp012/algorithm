let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let arr = input[1].split(' ');

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
arr.forEach((item) => {
    max = Math.max(+item, max);
    min = Math.min(+item, min);
})

console.log(min+' '+max);