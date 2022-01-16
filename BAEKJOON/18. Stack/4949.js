// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = require('fs').readFileSync('example.txt').toString().trim().split('.');
console.log(input);



const regexp = /[a-zA-Z]/g; 
let answer =''
input.filter( (item) => item !== '.')
    .forEach((item) => {
    item = item.replace(regexp, '').replaceAll(' ', '');
    answer += check(item) + '\n';
})

console.log(answer);
function check(str) {
    const stack = [];
    if(str[0] === ']' || str[0] === ')') return 'NO';
    for(let x of str) {
        if(x === '[' || x === '(') stack.push(x);
        
        if(x === ']') {
            if(stack[stack.length-1] === '[') stack.pop();
        }
        if(x === ')') {
            if(stack[stack.length-1] === '(') stack.pop();
        }
    }

    if(stack.length) return 'NO';
    return 'YES';
}

// const fs = require('fs');

// let input = (fs.readFileSync('./test') + '').toString().trim().split('\n');
// const open = ['(', '['];
// const close = [')', ']'];
// let bracketStack;
// const ans = [];

// input.pop();
// input.forEach((sentence) => {
//   let isBool = false;
//   bracketStack = [];

//   for (let i = 0; i < sentence.length; i++) {
//     if (open.includes(sentence[i])) bracketStack.push(sentence[i]);
//     else if (close.includes(sentence[i])) {
//       if (bracketStack.pop() !== open[close.indexOf(sentence[i])]) {
//         ans.push('no');
//         isBool = true;
//         break;
//       }
//     }
//   }
//   if (!isBool) {
//     if (bracketStack.length === 0) ans.push('yes');
//     else ans.push('no');
//   }
// });

// console.log(ans.join('\n'));