let input = require('fs').readFileSync('example.txt').toString();

// let input = require('fs').readFileSync('/dev/stdin').toString();




let num = +input;

// console.log(Math.floor(num/5));

let five = Math.floor(num/5);

let count = 0;
while(num > 0) {
    if(num % 5 !== 0 && num % 3===0) {
        // console.log(num/3);
    } else if(num % 5 === 0 && num % 3 !== 0) {
        // console.log(num/5);
    }
    num -= 5;


    count++;
}

console.log(count);