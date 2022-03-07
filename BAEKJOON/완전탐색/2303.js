
const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const N = +input.shift();
const TCs = input.map((TC) => TC = TC.split(' ').map(Number));

function getMaxInteager(arr) {
    let tmp = 0;
    let answer = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<arr.length-2; i++) {
        for(let j=i+1; j<arr.length-1; j++) {
            for(let k=j+1; k<arr.length; k++) {
                tmp = arr[i]+arr[k]+arr[j];
                tmp = tmp%10;
                answer = Math.max(tmp, answer);
            }
        }
    }
    return answer;
}

let tmp = Number.MIN_SAFE_INTEGER;
let answer = Number.MIN_SAFE_INTEGER;
TCs.forEach((TC, i) => {
    if(getMaxInteager(TC) > tmp) {
        answer = i;
        tmp = getMaxInteager(TC);
    } else if(getMaxInteager(TC) === tmp) {
        answer = Math.max(i, answer);
    }
})

console.log(answer+1);