let fs = require('fs');
// let input = fs.readFileSync('example.txt').toString().split('');

let input = fs.readFileSync('/dev/stdin').toString().split('');

let alphabet = 'abcdefghijklmnopqrstuvwxyz';


let answer = '';
alphabet.split('').forEach((item, index) => {
    answer += input.indexOf(item)+' ';
})

console.log(answer);