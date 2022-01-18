let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

input.pop();

function check(str) {

    return str === str.split('').reverse().join('') ? 'yes' : 'no';
}

input.forEach((item) => {
    console.log(check(item))
})