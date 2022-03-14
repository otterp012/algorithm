const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +input.shift();
const map = input.map((row) => [0, ...row.split(' ').map(Number), 0]);

const DP = Array.from({length : N}).map((row)=> row = [0]);
DP[0] = map[0];

for(let i=1; i<N; i++) {
    for(let j=1; j<map[i].length-1; j++) {
        DP[i][j] = Math.max(DP[i-1][j-1], DP[i-1][j]) + map[i][j];
    }
    DP[i].push(0);
}

let answer = 0;
DP.forEach((row) => {
    answer = Math.max(...row);
})

console.log(answer);