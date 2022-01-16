// let input = require('fs').readFileSync('example.txt').toString().split('\n');

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');



let total = String(+input[0] * +input[1] * +input[2]);
let arr = new Array(10).fill(0);


for(let i=0; i<=9; i++) {
    for(let j=0; j<total.length; j++){
  
        if(+total[j] === i) {

            arr[total[j]]++;
        }
    }
}


console.log(arr.join('\n'));