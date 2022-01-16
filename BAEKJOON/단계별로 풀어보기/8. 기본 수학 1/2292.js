let input = require('fs').readFileSync('example.txt').toString();

// let input = require('fs').readFileSync('/dev/stdin').toString();

let num = +input;


function solution(num) {
    let sum = 1;
    for(let i=0; i<Number.MAX_SAFE_INTEGER; i++) {
        sum += 6*i

        if(sum >= num) {
            return i+1;
        }
    }
    if(num === 1) return 1;
}
console.log(solution(61));


// function solution(num) {
//     let initial = 1;
//     let d = 6;

//     return num*((2*initial) + (num-1)*d)/2
// }

// console.log(solution(58));