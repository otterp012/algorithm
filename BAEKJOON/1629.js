const input = require('fs').readFileSync('example.txt').toString().trim();

const [A, B, C] = input.split(' ').map(Number);

function solution(A, B, C) {
    if(B === 1) return A % C;

    if(B % 2) return (solution(A, Math.floor(B/2), C) * solution(A, Math.floor(B/2), C)) % C;
    else return (solution(A, B/2, C) * solution(A, B/2, C) * solution(A, 1, C)) % C;
}

console.log(solution(A, B, C)            ) 