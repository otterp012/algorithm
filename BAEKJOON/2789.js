let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();

let arr = input.map((items) => items.split(' ').map(item => Number(item)));
let answer = [];


for(let i=0; i<arr.length; i++) {
    // 0번째 인덱스 사람 기준
    let cnt = 1;

    for(let j=0; j<arr.length; j++) {
        if(arr[j][0] > arr[i][0] && arr[j][1] > arr[i][1]) {
            cnt++;
        }
    }
    answer.push(cnt);
}

console.log(answer.join(' '));