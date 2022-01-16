
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let n = +input;


    for(let i = 1; i <= 9; i++) {
        console.log(`${n} * ${i} = ${n*i}`);
    }