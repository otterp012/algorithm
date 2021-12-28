let input = require('fs').readFileSync('example.txt').toString();
let num = Number(input);

function isHansu(num) {
    let arr = [];

    while(num > 0) {
        arr.push(num%10);
        num = Math.floor(num/10);
    }

    if(arr[0] - arr[1] === arr[1] - arr[2]) return true;
    else return false;
}

let answer = 0;

if(num < 100) {
    answer = num;
} else {
    answer = 99;
    for(let i=100; i<=num; i++) {
        if(isHansu(i)) answer++;
    }
}

if(num === 1000) answer -= 1;

console.log(answer);
