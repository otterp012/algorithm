let input = require('fs').readFileSync('example.txt').toString().trim().split('\n').map((el) => Number(el));

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map((el) => Number(el));
input.shift()

// 버블 정렬 큰 수를 맨 뒤에 먼저 정렬


let arr = input.sort((a,b) => (a-b));

for(let x of arr){
    console.log(x);
}

