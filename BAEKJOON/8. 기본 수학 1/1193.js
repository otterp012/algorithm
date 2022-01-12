let input = require('fs').readFileSync('example.txt').toString().trim();

let input = require('fs').readFileSync('/dev/stdin').toString().trim();


let num = +input;
let count = 0;
while(num > 0) {
    num -= count;
    count++;
}
count -= 1;
num += count;


let arr = [];
for(let i=1; i<=count; i++) {
    if(count % 2 === 0) {
        arr.push(`${i}/${count-i+1}`)
    } else {
        arr.push(`${count-i+1}/${i}`)
    }
}

console.log(arr[num-1]);