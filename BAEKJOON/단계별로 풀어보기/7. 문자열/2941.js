const { arch } = require('os');

let input = require('fs').readFileSync('example.txt').toString().trim();
// let input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(input);

// const al = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

// let str = input;
// let count = 0;
// al.forEach((item) => {
//     while( str.indexOf(item) === -1 ) {
//         str.replace(item, '+');
//     }
// })

// console.log(str);
// console.log(count + str.length);


let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const regex = /c=|c-|dz=|lj|nj|s=|z=|d-/g;
const result = input.replace(regex, ' ');
console.log(result.length);