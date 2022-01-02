let input = require('fs').readFileSync('example.txt').toString()

// let input = require('fs').readFileSync('/dev/sextdin').toString().split(' ');

// console.log(a,b,v);
// function solution(a, b, v) {

//     let tmp = 0;;
//     for(let i=1; i<Number.MAX_SAFE_INTEGER; i++) {
//         if(tmp + (a*i) >= v) return i
//         else tmp -= b;
//     }

// }
// 매번 이렇게 구하는건, 1억번 실행될 수도 있음(시간초과)

let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let a = +input[0];
let b = +input[1];
let goal = +input[2];

function solution(a, b, v) {
    return Math.ceil((v-a) / (a-b))+1;
}

console.log(solution(100, 99, 100000000));

