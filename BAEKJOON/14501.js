const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const N = +input.shift();
const map = [[0,0], ...input.map((row) => row.split(' ').map(Number))];

const dp = []

for(let i=0; i<=N; i++) {
    dp.push(map[i][1])
}

for(let i=0; i<=N; i++) {
    for(let j=1; j<=N; j++) {
        if(i + map[i][0] <= j) {
            // console.log(i, map[i][0], j);
            dp[j] = Math.max(dp[i] + map[j][1], dp[j])
            // console.log(dp);
        }
    }
    if(i + map[i][0] > N+1) dp[i] = -1;
}

console.log(Math.max(...dp));

