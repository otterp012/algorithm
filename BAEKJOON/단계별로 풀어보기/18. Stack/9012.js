

let input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

function check(str) {

    const stack = [];
    if(str[0] === ')') return 'NO';
    else {
        for(let x of str) {
            if(x === '(') stack.push(x);
            else {
                if(stack.length) stack.pop();
                else return 'NO';
            }
        }
    }

    if(stack.length) return 'NO';
    return 'YES';
}

input.shift();

input.forEach((item) => {
    console.log(check(item));
})