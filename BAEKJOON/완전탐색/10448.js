const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = input.shift();
const TCs = input.map(Number);

const arr = [];

for(let i = 0; (i*(i+1))/2 <= 1000; i++) {
    arr.push( (i*(i+1))/2 );
}

function solution(n) {
    for(let i=1; i<arr.length; i++) {
        for(let j=1; j<arr.length; j++) {
            for(let k=1; k<arr.length; k++) {
                if(arr[i] + arr[j] + arr[k] === n) return 1;
            }
        }
    }
    return 0;
}

TCs.forEach((TC) => {
    console.log(solution(TC))
})
