let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let m = +input[0].split(' ')[1];
let arr = input[1].split(' ').map(el => Number(el));

let x;
let max = Number.MIN_SAFE_INTEGER;
let answer;

for(let i=0; i<arr.length-2; i++) {
    for(let j=i+1; j<arr.length-1; j++) {
        for(let k=j+1; k<arr.length; k++) {
            let x=arr[i] + arr[j] + arr[k];
            if(x > max && x <= m) {
                max = x;
            }
        }
    }
}
console.log(max);


// for(let i=0; i<set.size; i++) {

//     if(min > Math.abs([...set][i] - m)) {
//         min = Math.abs([...set][i] - m)
//         answer = [...set][i];
//     }

// }

// 이렇게 하니까 메모리 초과가 나왔다...
