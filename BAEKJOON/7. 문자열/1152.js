let fs = require('fs');

let input = fs.readFileSync('example.txt').toString().trim().split(' ');


if(input.length === 1 && input[0] === '') {
    console.log(0)
}
else console.log(input.length);

