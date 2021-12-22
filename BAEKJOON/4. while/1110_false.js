let input = require('fs').readFileSync('example.txt').toString();

// let input = require('fs').readFileSync('/dev/stdin').toString();

let num = input;
let sum;
let i = 0;

while (true) {
    i++;

    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10; 

    if (input === num) {
	break;
    } 
}

console.log(i);

// if(+input < 10) {
//     input = '0' + input;
// }

// let leftNum = input[0];
// let rightNum = input[1];
// let sum = (+leftNum + +rightNum )+ '';
// let answer = rightNum + sum[sum.length-1];


// let i = 1;
// while(true) {
//     answer = rightNum + sum[sum.length-1];
//     if(answer === input) {
//         console.log(i+'');
//         break;
//     } 
//     i++;
//     leftNum = rightNum;
//     rightNum = sum[sum.length-1];
//     sum = (+leftNum + +rightNum )+ '';
// }
// 원래 생각했던 코드