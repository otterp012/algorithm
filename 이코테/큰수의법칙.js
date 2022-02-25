
let m = 8;
let k = 3;

let arr = [2, 4, 5, 4, 6].sort((a,b) => a-b);

// 특정 인덱스의 num은 연속해서 3번까지만 더해질 수 있다.


let max = arr[arr.length-1]
let maxbehind = arr[arr.length-2];


 // max는 연속해서 3번까지 더해질 수 있다.

let sum = 0;
for(let i = 1; i <= 8; i++) {
    if(i % (k+1) === 0) sum += maxbehind;
    else sum += max;
}

console.log(sum);

function solution(m, k, arr) {
    arr.sort((a,b) => a-b);
    let max = arr[arr.length-1]
    let maxbehind = arr[arr.length-2];

    let sum = 0;
    for(let i = 1; i <= m; i++) {
        if(i % (k+1) === 0) sum += maxbehind;
        else sum += max;
    }
    
    return sum;
}