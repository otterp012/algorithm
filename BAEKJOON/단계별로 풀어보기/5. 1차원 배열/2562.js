
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');


let max = Number.MIN_SAFE_INTEGER;
let index;


for(let i = 0; i < input.length; i++) {
    if(+input[i] > max) {
        max = +input[i];
        index = i+1;
    }
}
console.log(max+'\n'+index);