let input = require('fs').readFileSync('example.txt').toString().trim().split(' ');

// let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let m = +input[0]; // 4
let n = +input[1]; // 2

const map = new Map();
for(let i = 1; i<= m; i++) {
    for(let j =1; j<=n; j++){
        map.set(
            [i,j]
        );
    }
}
console.log(map);

// backtracking 알고리즘에 대해...