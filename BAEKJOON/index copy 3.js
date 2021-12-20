let input = require('fs').readFileSync('example.txt').toString().split('\n');

// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');



let total = +input[0] * +input[1] * +input[2];
console.log(total);

let arr = new Array(10).fill(0);
console.log(arr);

for(let i = 0; i < String(total).length; i++) {
    for(let j = 0; j <= 9; j++) {
        if(j === +String(total)[i]) {
            console.log(j, total[i]);
        }
    }
}
console.log(arr);