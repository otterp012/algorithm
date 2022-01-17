let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');


let a = +input[0];
let b = +input[1];

let num = Number.MIN_SAFE_INTEGER;

for(let i=1; i<=Math.min(a,b); i++) {

    if( a%i === 0 && b%i === 0 ) {
        num = Math.max(num, i);
    }

}

let num2 = num * (a/num) * (b/num);

console.log(num +'\n'+ num2);