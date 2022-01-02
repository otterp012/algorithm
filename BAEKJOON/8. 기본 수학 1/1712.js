// let input = require('fs').readFileSync('example.txt').toString().split(' ');
let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');


function solution(fixed, changeable, income) {

    for(let i=0; i<Number.MAX_SAFE_INTEGER; i++) {
        if(fixed < i*(income - changeable)) {
            return i;
        }
        if(i > 2100000000) return -1;
    }
}

console.log(solution(2100000000,9,10));